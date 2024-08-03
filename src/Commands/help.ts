import { Args, Command, container } from '@sapphire/framework'
import { codeBlock, type Message } from 'discord.js'
import { ApplyOptions } from '@sapphire/decorators'

@ApplyOptions<Command.Options>({
  name: '도움말',
  aliases: ['명령어', '도움', 'help'],
  description: '기본적인 사용ㅂ법이에요.',
  detailedDescription: {
    usage: '머핀아 도움말 [명령어]',
    examples: ['머핀아 도움말', '머핀아 도움말 배워'],
  },
})
class HelpCommand extends Command {
  public async messageRun(msg: Message, args: Args) {
    const commandName = await args.pick('string').catch(() => null)
    if (
      !commandName ||
      !this.container.stores.get('commands').get(commandName)
    ) {
      const commandList: string[] = []

      this.container.stores.get('commands').forEach(module => {
        commandList.push(`${module.name} - ${module.description}`)
      })

      await msg.reply({
        embeds: [
          {
            title: `${this.container.client.user?.username}의 도움말`,
            description: codeBlock(
              'md',
              commandList.map(item => `-  ${item}`).join('\n'),
            ),
            footer: {
              text: `머핀봇 버전: ${this.container.version}`,
            },
            timestamp: new Date().toISOString(),
          },
        ],
      })
    } else {
      const { name, aliases, description, detailedDescription } =
        this.container.stores.get('commands').get(commandName)!
      if (typeof detailedDescription === 'string') return

      await msg.reply({
        embeds: [
          {
            title: `${this.container.client.user?.username}의 도움말`,
            description: `명령어: ${name}`,
            fields: [
              {
                name: '설명',
                value: description,
                inline: true,
              },
              {
                name: '별칭',
                value: aliases.map(item => `\`${item}\``).join(', '),
                inline: true,
              },
              {
                name: '사용법',
                value: `\`${detailedDescription.usage}\``,
                inline: true,
              },
              detailedDescription.examples
                ? {
                    name: '예시',
                    value: `\`\`\`${detailedDescription.examples.map(item => item).join('\n')}\`\`\``,
                    inline: false,
                  }
                : {
                    name: '예시',
                    value: '없음',
                    inline: false,
                  },
            ],
            footer: {
              text: `머핀봇 버전: ${this.container.version}`,
            },
            timestamp: new Date().toISOString(),
          },
        ],
      })
    }
  }
}

void container.stores.loadPiece({
  piece: HelpCommand,
  name: 'help',
  store: 'commands',
})
