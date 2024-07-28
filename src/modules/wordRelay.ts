import { container } from '@sapphire/framework'
import { type Message } from 'discord.js'
import { request } from 'undici'

interface APIResponse {
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
    const res: any = await request(`${this._url}`, {
      query: {
        key: this._key,
        req_type: this._reqType,
        advanced: 'y',
        type1: 'word',
        type3: 'general',
        q: word,
      },
    }).then(res => res.body.json())

    if (res.channel.total === 0) return false
    else return true
  }

  public startGame(msg: Message<true>) {
    /**
     * @description MAAWRCollected: Muffin Ai Arujak(MAA) Collected
     */
    const MAAWR_COLLECTED = 'MAAWRCollected'
    const userID = msg.author.id

    try {
      msg
        .startThread({
          name: `${container.client.user?.username}-끝말잇기`,
        })
        .then(thread => {
          thread.send(
            `<@${userID}>님, 여기 들어와서 시작단어를ㄹ 60초안에 입력해주세요!`,
          )

          const collector = thread.createMessageCollector({
            filter: message => message.author.id === userID,
            time: 60_000,
          })

          collector
            .on('collect', async message => {
              if (message.content.length < 2) {
                await message.reply(
                  '해당 단어는 너무 짧ㅇ아요. 다시 한번 입력해주세요.',
                )
              } else if (!(await this.validWord(message.content))) {
                await message.reply(
                  '해당 단어는 일치하지 않아요. 다시 한ㅂ번 입력해주세요.',
                )
              } else if (
                !(await this.getWord(
                  message.content.slice(message.content.length - 1),
                ))
              ) {
                await message.reply(
                  '시작단어가 한방단어면 안돼요. 다시 한번 입력ㅎ해주세요.',
                )
              } else {
                collector.stop(`${MAAWR_COLLECTED}: ${message.content}`)
              }
            })
            .on('end', (_, reason) => {
              if (reason === 'time') {
                thread.send(
                  `<@${userID}>님, 60초동안 시작단어를 입력하지 않아 자동ㅇ으로 게임이 종료되었어요.`,
                )
              } else if (reason.startsWith(MAAWR_COLLECTED)) {
                this._usedWords.push(
                  reason.slice(`${MAAWR_COLLECTED}: `.length),
                )
              }
            })
        })
    } catch (err) {
      console.error(err)
    }
  }

  private _getrandomWord(wordList: APIResponse[] | null): APIResponse | null {
    if (!wordList) return null

    const wordInfo = wordList[Math.floor(Math.random() * wordList.length)]

    if (this._usedWords.includes(wordInfo.word))
      return this._getrandomWord(wordList)
    else return wordInfo
  }

  public async getWord(lastWord: string): Promise<APIResponse | null> {
    const res: any = await request(this._url, {
      query: {
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
    }).then(res => res.body.json())

    return this._getrandomWord(res.channel.item)
  }
}
