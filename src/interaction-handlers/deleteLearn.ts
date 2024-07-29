import {
  InteractionHandler,
  InteractionHandlerTypes,
} from '@sapphire/framework'
import { type StringSelectMenuInteraction } from 'discord.js'
import { ApplyOptions } from '@sapphire/decorators'

@ApplyOptions<InteractionHandler.Options>({
  interactionHandlerType: InteractionHandlerTypes.SelectMenu,
})
export default class extends InteractionHandler {
  public async parse(interaction: StringSelectMenuInteraction) {
    if (interaction.customId !== 'blueberry$deleteLearn') return this.none()
    return this.some()
  }

  public async run(interaction: StringSelectMenuInteraction) {
    await interaction.deferUpdate()

    const id = interaction.values[0].slice('blueberry$deleteLearn-'.length)
    const db = this.container.database

    await db.learn.delete(id)

    await interaction.editReply({
      embeds: [
        {
          title: '삭제',
          description: `${id}번을 정상적으로 삭제하였어요.`,
          timestamp: new Date().toISOString(),
        },
      ],
      components: [],
    })
  }
}
