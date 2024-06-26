import { type Message, PermissionFlagsBits } from 'discord.js'

export class WordRelay {
  public async startGame(msg: Message<true>) {
    if (
      msg.guild.members.me?.permissions.has(
        PermissionFlagsBits.CreatePublicThreads,
      )
    )
      return msg.reply('제게 공개 스레드 만들기 권한ㅇ이 없어요.')
  }
}
