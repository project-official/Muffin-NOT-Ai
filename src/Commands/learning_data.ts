import { ApplyOptions } from '@sapphire/decorators'
import { Command } from '@sapphire/framework'
import { type Message } from 'discord.js'

@ApplyOptions<Command.Options>({
  name: '데이터학습량',
  aliases: ['학습데이터량', '데이터량'],
  description: '봇이 학습한 데이터량을 보여줘요.',
  detailedDescription: {
    usage: '베리야 학습데이터량',
  },
})
export default class extends Command {
  public async messageRun(msg: Message<true>) {
    const db = this.container.database
    const learnData = await db.learn.all()
    const userData = await db.learn.findOneAnotherKey('user_id', msg.author.id)

    await msg.reply(`지금까지 배운 단어: ${learnData.length}개
${msg.author.username}님이 가르쳐준 단어: ${userData.length}개`)
  }
}
