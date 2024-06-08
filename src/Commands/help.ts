import { Command } from '../modules'
import { codeBlock, type Message } from 'discord.js'
import { version } from '../../package.json'

export default class extends Command {
  public constructor() {
    super('도움말')
  }

  public async execute(msg: Message, args: string[]) {
    const commandList: string[] = []

    msg.client.modules.forEach(module => {
      commandList.push(module.name)
    })

    await msg.reply({
      embeds: [
        {
          title: '머핀봇의 도움말',
          description: codeBlock(
            'md',
            commandList.map(item => `-  ${item}`).join('\n'),
          ),
          footer: {
            text: `머핀봇 버전: ${version}`,
          },
        },
      ],
    })
  }
}
