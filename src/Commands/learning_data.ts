import { ApplyOptions } from '@sapphire/decorators'
import { type ResponseData } from '../modules'
import { Command } from '@sapphire/framework'
import { type Message } from 'discord.js'

@ApplyOptions<Command.Options>({
  name: '데이터학습량',
  aliases: ['학습데이터량', '데이터량'],
  description: '봇이 학습한 데ㅇ이터량을 보여줘요.',
})
export default class extends Command {
  public async messageRun(msg: Message<true>) {
    const db = this.container.database
    const data = await db.statement.all()
    const nsfwData = await db.nsfwContent.all()
    const learnData = await db.learn.all()
    const userData = await db.learn.findOneAnotherKey('user_id', msg.author.id)
    const muffin: ResponseData[] = []
    data.forEach(row => {
      if (row.persona === 'muffin') muffin.push(row)
      else return
    })

    await msg.reply(`머핀 데이터: ${muffin.length}개
nsfw 데이터: ${nsfwData.length}개
지금까지 배운 단어: ${learnData.length}개
${msg.author.username}님이 가르쳐준 단어: ${userData.length}개`)
  }
}
