import { container } from '@sapphire/framework'
import { type Message } from 'discord.js'
import { request } from 'undici'

export class WordRelay {
  private _url = 'https://opendict.korean.go.kr/api/search'
  private _usedWords: string[] = []

  public async validWord(word: string): Promise<boolean> {
    const res: any = await request(`${this._url}`, {
      query: {
        key: container.config.api.opendict,
        req_type: 'json',
        advanced: 'y',
        type1: 'all',
        type3: 'general',
        q: word,
      },
    }).then(res => res.body.json())

    if (res.channel.total === 0) return true
    else return false
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
              if (await this.validWord(message.content)) {
                collector.stop(MAAWR_COLLECTED)
              } else {
                await message.reply(
                  '해당 단어는 일치하지 않아요. 다시 한ㅂ번 입력해주세요.',
                )
              }
            })
            .on('end', (collected, reason) => {
              if (reason === 'time') {
                thread.send(
                  `<@${userID}>님, 60초동안 시작단어를 입력하지 않아 자동ㅇ으로 게임이 종료되었어요.`,
                )
              } else if (reason === MAAWR_COLLECTED) {
              }
            })
        })
    } catch (err) {
      console.log(err)
    }
  }

  public getWord() {}
}
