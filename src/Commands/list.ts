import { Message, codeBlock } from 'discord.js'
import { Command, LearnData } from '../modules'
export default class extends Command {
  public constructor() {
    super('리스트')
  }
  public async execute(msg: Message<boolean>, args: string[]) {
    const db = await msg.client.chatBot.db.getConnection()
    const [rows] = await db.execute<LearnData[]>(
      'SELECT * FROM learn WHERE user_id = ?;',
      [msg.author.id],
    )
    const list: string[] = []
    if (!rows) {
      return await msg.channel.send(
        '당신ㄴ은 단어를 가르쳐준 기억이 없ㅅ는데요.',
      )
    }
    for (const data of rows) {
      list.push(data.command)
    }
    await msg.channel.send({
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
