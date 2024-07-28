import { type Message, PermissionFlagsBits } from 'discord.js'
import { ApplyOptions } from '@sapphire/decorators'
import { Command } from '@sapphire/framework'
import { WordRelay } from '../modules'

@ApplyOptions<Command.Options>({
  name: '끝말잇기',
  aliases: ['끄투', '끄투리오'],
  description: '머핀봇이랑 끝말잇기를 해보ㅅ세요.',
  detailedDescription: {
    usage: '머핀아 끝말잇기',
  },
})
export default class extends Command {
  public async messageRun(msg: Message<true>) {
    if (
      !msg.guild.members.me?.permissions.has(
        PermissionFlagsBits.CreatePublicThreads,
      )
    )
      return msg.reply('제게 공개 스레드 만들기 권한ㅇ이 없어요.')

    new WordRelay().startGame(msg)
  }
}
