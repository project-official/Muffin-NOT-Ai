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
  public async parse(interaction: StringSelectMenuInteraction) {
    if (interaction.customId !== 'maa$deleteLearn') return this.none()
    return this.some()
  }

  public async run(interaction: StringSelectMenuInteraction) {
    await interaction.deferUpdate()

    const id = Number(interaction.values[0].slice('maa$deleteLearn-'.length))
    const db = this.container.database

    await db.learn.delete({
      where: {
        id,
      },
    })

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
