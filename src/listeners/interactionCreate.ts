import { ChatInputCommandInteraction } from 'discord.js'
import { Listener } from '@sapphire/framework'
import { previewWarning } from '../modules'

export default class InteractionCreateListener extends Listener {
  public async run(interaction: ChatInputCommandInteraction<'cached'>) {
    if (interaction.isChatInputCommand()) {
      if (this.container.channel !== 'RELEASE')
        await previewWarning(interaction)
    }
  }
}
