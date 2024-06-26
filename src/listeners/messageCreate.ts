import { Listener } from '@sapphire/framework'
import { type Message } from 'discord.js'
import { noPerm } from '../modules'
import Dokdo from 'dokdo'

export default class extends Listener {
  public async run(msg: Message) {
    const prefix = this.container.prefix
    const dokdo = new Dokdo(this.container.client, {
      aliases: ['dokdo', 'dok'],
      owners: [this.container.config.bot.owner_ID],
      prefix: prefix,
      noPerm,
    })
    if (msg.author.bot) return
    if (msg.content.startsWith(prefix)) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g)

      this.container.logger.debug(`[ChatBot] command: ${args.join(' ')}`)

      if (dokdo.options.aliases?.includes(args[0])) {
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
