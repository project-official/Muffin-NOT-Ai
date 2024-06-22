import { ApplyOptions } from '@sapphire/decorators'
import { Message, codeBlock } from 'discord.js'
import { Command } from '@sapphire/framework'

@ApplyOptions<Command.Options>({
  name: '리스트',
  aliases: ['list', '목록'],
  description: '당신이 가ㄹ르쳐준 단어를 나열해요.',
})
export default class extends Command {
  public async messageRun(msg: Message<boolean>) {
    const db = this.container.database
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
          description: `총합: ${data.length}개\n${codeBlock(
            'md',
            list.map(item => `-  ${item}`).join('\n'),
          )}`,
          color: 0x0000ff,
          timestamp: new Date().toISOString(),
        },
      ],
    })
  }
}
