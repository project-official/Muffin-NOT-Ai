import { Command } from '../modules'
import { Message } from 'discord.js'
import { inspect } from 'node:util'

export default class extends Command {
  public constructor() {
    super('테스트', true)
  }
  public async execute(msg: Message, args: string[]) {
    if (!args) return msg.channel.send('전달받은 인자가 없습니다.')
    try {
      const a = eval(args.join(' '))
      if (inspect(a) === `'${msg.client.token}'`)
        return msg.channel.send('[discord_token]')
      await msg.channel.send(`\`\`\`js\n${inspect(a)}\n\`\`\``)
    } catch (err) {
      await msg.channel.send(`\`\`\`js\n${err}\n\`\`\``)
    }
  }
}
