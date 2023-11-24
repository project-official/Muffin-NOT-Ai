import { Message } from 'discord.js'
import { Command, LearnData } from '../modules'

export default class extends Command {
  public constructor() {
    super('삭제')
  }
  public async execute(msg: Message, args: string[]) {
    const db = await msg.client.chatBot.db.getConnection()
    const command = args[0]
    const [rows] = await db.execute<LearnData[]>('SELECT * FROM learn WHERE command = ?;', [command])
    
    if (!rows[0]) {
      await msg.channel.send('해당하는 걸 찾ㅈ을 수 없어요.')
    }

    if (rows[0].user_id !== msg.author.id) {
      await msg.channel.send('당신ㄴ은 해당 지식을 안가르ㄹ쳐 주셨ㅅ는데요?')
    }

    try {
      await db.beginTransaction()
      await db.execute('DELETE FROM learn WHERE command = ?;', [command])
      await msg.channel.send('해당 단어를 삭ㄱ제했어요.')
      await db.commit()
    } catch (err) {
      console.error(err)
    } finally {
      db.release()
    }
  }
}
