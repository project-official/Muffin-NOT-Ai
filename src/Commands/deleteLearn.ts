import { Message } from 'discord.js'
import { Command } from '../modules'

export default class extends Command {
  public constructor() {
    super('삭제')
  }
  public async execute(msg: Message, args: string[]) {
    if (!args[0]) {
      return await msg.channel.send('```머핀아 삭제 (지울 단어)```')
    }
    const command = args[0]
    const db = msg.client.chatBot.db
    const data = await db.learn.findOne(command)

    if (!data[0]) {
      return await msg.channel.send('해당하는 걸 찾ㅈ을 수 없어요.')
    }

    if (data[0].user_id !== msg.author.id) {
      return await msg.channel.send(
        '어라 당ㅅ신은 언제 가르쳐 주셨죠?',
      )
    }

    await db.learn.delete(command)
    await msg.reply('어라 이제 그ㄱ게 기억이 안나요.')
  }
}
