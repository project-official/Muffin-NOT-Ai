import { type Args, Command, container } from '@sapphire/framework'
import { codeBlock, type Message } from 'discord.js'
import { ApplyOptions } from '@sapphire/decorators'

@ApplyOptions<Command.Options>({
  name: '배워',
  aliases: ['공부'],
  description: '단어를 가르치는 명령ㅇ어에요.',
  detailedDescription: {
    usage: '머핀아 배워 (등록할 단어) (대답)',
    examples: [
      '머핀아 배워 안녕 안녕!',
      '머핀아 배워 "야 죽을래?" "아니요 ㅠㅠㅠ"',
      '머핀아 배워 미간은_누구야? 이봇의_개발자요',
    ],
  },
})
class LearnCommand extends Command {
  public async messageRun(msg: Message, args: Args) {
    if (typeof this.detailedDescription === 'string') return
    const config = this.container.config
    const command = (await args.pick('string').catch(() => null))?.replaceAll(
      '_',
      ' ',
    )
    const result = (await args.pick('string').catch(() => null))?.replaceAll(
      '_',
      ' ',
    )
    if (!command || !result) {
      return await msg.reply(
        codeBlock(
          'md',
          `사용법: ${this.detailedDescription.usage}\n` +
            `예시: ${this.detailedDescription.examples?.map(example => example).join('\n')}`,
        ),
      )
    }
    const commands: string[] = []
    const aliases: string[] = []
    this.container.stores.get('commands').forEach(module => {
      commands.push(module.name)
      module.aliases.forEach(alias => aliases.push(alias))
    })
    const ignore = [
      ...commands,
      ...aliases,
      ...this.container.dokdoAliases,
      '미간',
      'Migan',
      'migan',
      '간미',
    ]
    const disallowed = ['@everyone', '@here', `<@${config.bot.owner_ID}>`]
    const db = this.container.database

    for (const ig of ignore) {
      if (command.includes(ig)) {
        return msg.reply('해ㄷ당 단어는 배울ㄹ 수 없어요.')
      }
    }

    for (const di of disallowed) {
      if (result.includes(di)) {
        return msg.reply('해당 단ㅇ어는 개발자님이 특별히 금지하였ㅇ어요.')
      }
    }

    await db.learn.insert({
      user_id: msg.author.id,
      command,
      result,
    })
    await msg.reply(`${command}을/를 배웠ㅇ어요.`)
  }
}

void container.stores.loadPiece({
  piece: LearnCommand,
  name: 'learn',
  store: 'commands',
})
