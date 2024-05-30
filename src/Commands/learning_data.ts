import { Command, type ResponseData } from '../modules'
import { type Message } from 'discord.js'

export default class extends Command {
  public constructor() {
    super('학습데이터량')
  }
  public async execute(msg: Message<true>, args: string[]) {
    const db = msg.client.chatBot.db
    const data = await db.statement.all()
    const nsfwData = await db.nsfwContent.all()
    const learnData = await db.learn.all()
    const muffin: ResponseData[] = []
    data.forEach(row => {
      if (row.persona === 'muffin') muffin.push(row)
      else return
    })
    await msg.reply(
      `머핀 데이터: ${muffin.length}개\nnsfw 데이터: ${nsfwData.length}개\n지금까지 배운 단어: ${learnData.length}개`,
    )
  }
}
