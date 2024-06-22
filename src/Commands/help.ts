import { codeBlock, type Message } from 'discord.js'
import { ApplyOptions } from '@sapphire/decorators'
import { Command } from '@sapphire/framework'
import { version } from '../../package.json'

@ApplyOptions<Command.Options>({
  name: '도움말',
  aliases: ['명령어', '도움', 'help'],
  description: '기본적인 사용ㅂ법이에요.',
})
export default class extends Command {
  public async messageRun(msg: Message) {
    const commandList: string[] = []

    this.container.stores.get('commands').forEach(module => {
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
