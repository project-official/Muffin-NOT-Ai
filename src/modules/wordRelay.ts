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
  private _isStarted = false
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

  // TODO: 타임아웃 추가
  public async startGame(msg: Message<true>) {
    const USER_WIN = 'userWin'
    const BOT_WIN = 'botWin'
    const userID = msg.author.id
    const filter = (message: Message) => message.author.id === userID

    try {
      const thread = await msg.startThread({
        name: `${container.client.user?.username}-끝말잇기`,
      })

      void thread.send(
        `<@${userID}>님, 여기 들어와서 시작단어를 60초안에 입력해주세요!`,
      )

      const collector = thread.createMessageCollector({
        filter,
      })

      collector.on('collect', async message => {
        const content = message.content
        if (content.length < 2)
          return await message.reply(
            '해당 단어는 너무 짧아요. 다시 한번 입력해주세요.',
          )

        if (this._usedWords.includes(content))
          return await message.reply('이미 한번쓴 단어는 못써요!')

        const isValid = await this.validWord(content)

        if (!isValid)
          return await message.reply(
            '해당 단어는 일치하지 않아요. 다시 한번 입력해주세요.',
          )

        const lastChar = content.charAt(content.length - 1)
        const nextWordInfo = await this.getWord(lastChar)

        if (!this._isStarted) {
          if (!nextWordInfo)
            return await message.reply(
              '시작단어가 한방단어면 안돼요. 다시 한번 입력해주세요.',
            )

          this._isStarted = true
        } else {
          const lastWord = this._usedWords[this._usedWords.length - 1]
          const lastChar = lastWord.charAt(lastWord.length - 1)
          if (!content.startsWith(lastChar))
            return await message.reply(
              '시작단어가 마지막으로 쓴 단어의 마지막 글자여야 해요.',
            )
        }

        if (!nextWordInfo) return collector.stop(USER_WIN)

        const nextWord = nextWordInfo.word.replaceAll('-', '')

        this._usedWords.push(content) // 유저가 친 단어
        this._usedWords.push(nextWord) // 봇이 친 단어
        await message.reply(`${nextWord}\n다음 단어를 입력해주세요!`)
      })

      collector.on('end', (_, reason) => {
        if (reason === USER_WIN)
          void thread.send('더이상 다음단어가 생각이 안나요. 당신이 이겼어요!')
        else if (reason === BOT_WIN)
          // TODO: 시간에 관한 메세지 추가
          void thread.send('제가 이겼어요!')
      })
    } catch (err) {
      console.error(err)
    }
  }

  private _getRandomWord(res: AxiosResponse<APIResponse>): Item | null {
    container.logger.debug(`opendict statusCode: ${res.status}`)

    if (!res.data) return null
    if (!res.data.channel.total) return null

    const items = res.data.channel.item
    const wordInfo = items[Math.floor(Math.random() * items.length)]

    if (this._usedWords.includes(wordInfo.word) || wordInfo.word.length < 2)
      return this._getRandomWord(res)

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

    return this._getRandomWord(res)
  }
}
