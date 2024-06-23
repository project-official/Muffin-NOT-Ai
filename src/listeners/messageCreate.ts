import { Listener } from '@sapphire/framework'
import { type Message } from 'discord.js'
import { noPerm } from '../modules'
import Dokdo from 'dokdo'

export default class extends Listener {
  public async run(msg: Message) {
    const dokdo = new Dokdo(this.container.client, {
      aliases: ['dokdo', 'dok'],
      owners: [this.container.config.bot.owner_ID],
      noPerm,
      prefix: this.container.prefix,
    })
    if (msg.author.bot) return
    if (msg.content.startsWith(this.container.prefix)) {
      const args = msg.content
        .slice(this.container.prefix.length)
        .trim()
        .split(/ +/g)

      this.container.logger.debug(`[ChatBot] command: ${args.join(' ')}`)
      if (args[0].startsWith('dokdo') || args[0].startsWith('dok')) {
        await dokdo.run(msg)
      } else {
        if (!this.container.stores.get('commands').get(args[0])) {
          await msg.channel.sendTyping()
          const response = await this.container.chatBot.getResponse(msg)
          await msg.reply(response)
        }
      }
    }
  }
}
