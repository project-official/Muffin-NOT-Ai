import { container } from '@sapphire/framework'
import axios, { AxiosResponse } from 'axios'
import { type Message } from 'discord.js'

interface APIResponse {
  channel: {
    title: string
    link: string
    description: string
    total: number
    start: number
    num: number
    item: Item[]
  }
}

interface Item {
  word: string
  sense: {
    target_code: number
    sense_no: number
    definition: string
    pos: string
    link: string
    type: string
  }
}

export class WordRelay {
  private _url = 'https://opendict.korean.go.kr/api/search'
  private _key = container.config.api.opendict
  private _usedWords: string[] = []
  private _reqType = 'json'

  public async validWord(word: string): Promise<boolean> {
    const res = await axios.get<string, AxiosResponse<APIResponse>>(
      `${this._url}`,
      {
        params: {
          key: this._key,
          req_type: this._reqType,
          advanced: 'y',
          type1: 'word',
          type3: 'general',
          q: word,
        },
      },
    )

    return res.data.channel.total !== 0
  }

  public async startGame(msg: Message<true>) {
    /**
     * @description BBWRCollected: BlueBerry WordRelay(WR) Collected
     */
    const BBWR_COLLECTED = 'BBWRCollected'
    const userID = msg.author.id

    try {
      const thread = await msg.startThread({
        name: `${container.client.user?.username}-끝말잇기`,
      })

      void thread.send(
        `<@${userID}>님, 여기 들어와서 시작단어를 60초안에 입력해주세요!`,
      )

      const collector = thread.createMessageCollector({
        filter: message => message.author.id === userID,
        time: 60_000,
      })

      collector.on('collect', async message => {
        const content = message.content
        if (content.length < 2)
          return await message.reply(
            '해당 단어는 너무 짧아요. 다시 한번 입력해주세요.',
          )

        const isValid = await this.validWord(message.content)
        const nextWord = await this.getWord(content.slice(content.length - 1))

        if (!isValid)
          return await message.reply(
            '해당 단어는 일치하지 않아요. 다시 한번 입력해주세요.',
          )

        if (!nextWord)
          return await message.reply(
            '시작단어가 한방단어면 안돼요. 다시 한번 입력해주세요.',
          )

        collector.stop(`${BBWR_COLLECTED}: ${message.content}`)
      })

      collector.on('end', (_, reason) => {
        if (reason === 'time') {
          void thread.send(
            `<@${userID}>님, 60초동안 시작단어를 입력하지 않아 자동으로 게임이 종료되었어요.`,
          )
        } else if (reason.startsWith(BBWR_COLLECTED)) {
          this._usedWords.push(reason.slice(`${BBWR_COLLECTED}: `.length))
        }
      })
    } catch (err) {
      console.error(err)
    }
  }

  private _getRandomWord(wordList: APIResponse): Item | null {
    if (!wordList.channel.total) return null

    const items = wordList.channel.item
    const wordInfo = items[Math.floor(Math.random() * items.length)]

    if (this._usedWords.includes(wordInfo.word))
      return this._getRandomWord(wordList)

    return wordInfo
  }

  public async getWord(lastWord: string) {
    const res = await axios.get<string, AxiosResponse<APIResponse>>(this._url, {
      params: {
        key: this._key,
        req_type: this._reqType,
        advanced: 'y',
        type1: 'word',
        type3: 'general',
        method: 'start',
        q: lastWord,
        letter_s: 2,
        num: 100,
        pos: 1,
      },
    })

    return this._getRandomWord(res.data)
  }
}
