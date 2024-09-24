import {
  container,
  InteractionHandler,
  InteractionHandlerTypes,
} from '@sapphire/framework'
import { type StringSelectMenuInteraction } from 'discord.js'
import { ApplyOptions } from '@sapphire/decorators'

@ApplyOptions<InteractionHandler.Options>({
  interactionHandlerType: InteractionHandlerTypes.SelectMenu,
})
class DeleteLearnHandler extends InteractionHandler {
  private readonly _CUSTOM_ID = 'maa$deleteLearn'

  public async parse(interaction: StringSelectMenuInteraction) {
    if (!interaction.customId.startsWith(this._CUSTOM_ID)) return this.none()
    const userId = interaction.customId.slice(`${this._CUSTOM_ID}@`.length)
    if (interaction.user.id !== userId) {
      await interaction.reply({
        ephemeral: true,
        content: '당신은 이 지ㅅ식을 안 가르쳐 주셨어요.',
      })
      return this.none()
    }
    return this.some()
  }

  public async run(interaction: StringSelectMenuInteraction) {
    await interaction.deferUpdate()

    const id = interaction.values[0].slice(`${this._CUSTOM_ID}-`.length)
    const db = this.container.database

    await db.learn.delete(id)

    await interaction.editReply({
      embeds: [
        {
          title: '삭제',
          description: `${id}번을 정상적으로 삭제하ㅇ였어요.`,
          timestamp: new Date().toISOString(),
        },
      ],
      components: [],
    })
  }
}

void container.stores.loadPiece({
  piece: DeleteLearnHandler,
  name: 'deleteLearn',
  store: 'interaction-handlers',
})
