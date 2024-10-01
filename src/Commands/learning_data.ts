import { ChatInputCommandInteraction, Message } from 'discord.js'
import { Command, container } from '@sapphire/framework'
import { ApplyOptions } from '@sapphire/decorators'

@ApplyOptions<Command.Options>({
  name: '데이터학습량',
  aliases: ['학습데이터량', '데이터량'],
  description: '봇이 학습한 데ㅇ이터량을 보여줘요.',
  detailedDescription: {
    usage: '머핀아 학습데이터량',
  },
})
class LearnDataCommand extends Command {
  public registerApplicationCommands(registry: Command.Registry) {
    registry.registerChatInputCommand(builder =>
      builder.setName(this.name).setDescription(this.description),
    )
  }

  private async _run(ctx: Message | ChatInputCommandInteraction) {
    const user = ctx instanceof Message ? ctx.author : ctx.user
    const db = this.container.database
    const data = await db.statement.findMany()
    const nsfwData = await db.nsfw_content.findMany()
    const learnData = await db.learn.findMany()
    const userData = await db.learn.findMany({
      where: {
        user_id: user.id,
      },
    })
    const muffin: any[] = []
    data.forEach(row => {
      if (row.persona === 'muffin') muffin.push(row)
      else return
    })

    await ctx.reply(`머핀 데이터: ${muffin.length}개
nsfw 데이터: ${nsfwData.length}개
지금까지 배운 단어: ${learnData.length}개
${user.username}님이 가르쳐준 단어: ${userData.length}개`)
  }

  public async messageRun(msg: Message) {
    await this._run(msg)
  }

  public async chatInputRun(interaction: ChatInputCommandInteraction) {
    await this._run(interaction)
  }
}

void container.stores.loadPiece({
  piece: LearnDataCommand,
  name: 'learn_data',
  store: 'commands',
})
