import { Command, type ResponseData, type NSFWData } from '../modules'
import { type Message } from 'discord.js'

export default class extends Command {
  public constructor() {
    super('학습데이터량')
  }
  public async execute(msg: Message, args: string[]) {
    const db = await msg.client.chatBot.db.getConnection()
    const [rows] = await db.execute<ResponseData[]>('SELECT * FROM statement;')
    const [nsfw] = await db.execute<NSFWData[]>('SELECT * FROM nsfw_content;')
    const muffin: ResponseData[] = []
    rows.forEach(row => {
      if (row.persona === 'muffin') muffin.push(row)
      else return
    })
    msg.channel.send(
      `머핀 데이터: ${muffin.length}개\nnsfw 데이터: ${nsfw.length}`
    )
    db.release()
  }
}
