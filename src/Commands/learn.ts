import { Command } from '../modules'
import { Message } from 'discord.js'

export default class extends Command {
  public constructor() {
    super('배워')
  }

  public async execute(msg: Message, args: string[]) {
    const command = args[0]
    const result = args[1].replaceAll('_', ' ')
    const ignore = [
      '학습데이터량',
      '봇꺼',
      '테스트',
      '미간',
      'Migan',
      'migan',
      '간미',
    ]
    const disallowed = ['@everyone', '@here']
    const db = await msg.client.chatBot.db.getConnection()

    ignore.forEach(ig => {
      if (result.includes(ig)) {
        return msg.channel.send('해ㄷ당 단어는 배울ㄹ 수 없어요.')
      }
    })

    disallowed.forEach(di => {
      if (result.includes(di)) {
        return msg.channel.send('해당 단ㅇ어는 금지되어 있ㅅ어요.')
      }
    })

    try {
      await db.beginTransaction()
      db.execute(
        'INSERT INTO learn (command, result, user_id) VALUES (?, ?, ?);',
        [command, result, msg.author.id],
      )
      await msg.channel.send(`${command}을/를 배웠ㅇ어요.`)
      await db.commit()
    } catch (err) {
      console.error(err)
      await db.rollback()
      await msg.channel.send('배우는데 오류ㄹ가 생겨서 배우지 못했어ㅇ요.')
    } finally {
      db.release()
    }
  }
}
