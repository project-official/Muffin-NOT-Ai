import { Message, codeBlock } from 'discord.js'
import { Command } from '../modules'

export default class extends Command {
  public constructor() {
    super('리스트')
  }

  public async execute(msg: Message<boolean>, args: string[]) {
    const db = msg.client.chatBot.db
    const data = await db.learn.findOneAnotherKey('user_id', msg.author.id)
    const list: string[] = []

    if (!data[0]) {
      return await msg.channel.send(
        '당신ㄴ은 단어를 가르쳐준 기억이 없ㅅ는데요.',
      )
    }

    for (const listData of data) {
      list.push(listData.command)
    }

    await msg.reply({
      embeds: [
        {
          title: '지식',
          description: codeBlock(
            'md',
            list.map(item => `-  ${item}`).join('\n'),
          ),
          color: 0x0000ff,
          timestamp: new Date().toISOString(),
        },
      ],
    })
  }
}
