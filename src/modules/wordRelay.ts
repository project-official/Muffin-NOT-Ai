import { container } from '@sapphire/framework'
import axios, { AxiosResponse } from 'axios'
import { type Message } from 'discord.js'

// TODO: 타입 부문 코드 분리
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

// TODO: 우리말샘 API부분 코드 분리
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

  public async startGame(msg: Message<true>) {
    const TIMEOUT_PRE_START = 'timeout: pre start'
    const userID = msg.author.id
    const USER_WIN = 'userWin'
    const BOT_WIN = 'botWin'
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

      // 60초동안 사용자 입력이 없을 시 자동으로 게임종료
      setTimeout(() => {
        if (!this._isStarted) return collector.stop(TIMEOUT_PRE_START)
        else return
      }, 60_000)

      collector.on('collect', async message => {
        const content = message.content
        if (content.length < 2)
          return await message.reply(
            '해당 단어는 너무 짧아요. 다시 한번 입력해주세요.',
          )

        if (this._usedWords.includes(content))
          return await message.reply('이미 한번쓴 단어는 못써요!')

        const isValid = await this.validWord(content)

        if (!this._isStarted && !isValid)
          return await message.reply(
            '해당 단어는 일치하지 않아요. 다시 한번 입력해주세요.',
          )
        else if (this._isStarted && !isValid) return collector.stop(BOT_WIN)

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
          void thread.send('단어가 일치하지 않아 제가 이겼어요!')
        else if (reason === TIMEOUT_PRE_START)
          void thread.send(
            `<@${userID}>님, 60초동안 시작단어를 입력하지 않아 자동으로 게임이 종료되었어요.`,
          )
      })
    } catch (err) {
      console.error(err)
    }
  }

  private _getRandomWord(res: AxiosResponse<APIResponse>): Item | null {
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

    container.logger.debug(`opendict statusCode: ${res.status}`)
    return this._getRandomWord(res)
  }
}
