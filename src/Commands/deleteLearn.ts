import { Message } from 'discord.js'
import { Command } from '../modules'

export default class extends Command {
  public constructor() {
    super('삭제')
  }
  public async execute(msg: Message, args: string[]) {
    if (!args[0]) {
      return await msg.channel.send('```멒힌아 삭제 (지울 단어)```')
    }
    const command = args[0]
    const db = msg.client.chatBot.db
    const data = await db.learn.findOne(command)

    if (!data[0]) {
      return await msg.channel.send('해당하는 걸 찾ㅈ을 수 없어요.')
    }

    if (data[0].user_id !== msg.author.id) {
      return await msg.channel.send(
        '당신ㄴ은 해당 지식을 안가르ㄹ쳐 주셨ㅅ는데요?',
      )
    }

    await db.learn.delete(command)
    await msg.channel.send('해당 단어를 삭ㄱ제했어요.')
  }
}
