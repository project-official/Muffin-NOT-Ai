import { Listener, container } from '@sapphire/framework'
import { type Message } from 'discord.js'
import { noPerm } from '../modules'
import Dokdo from 'dokdo'

class MessageCreateListener extends Listener {
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
      if (this.container.release === 'PRE-RELEASE') {
        await msg.reply({
          embeds: [
            {
              title: '정식 출시 이전 버전 사용안내',
              description:
                `현재 이 버전의 ${this.container.client.user?.username}은 정식출시 되기 이전이라 많이 불안정할 수 있어요.\n` +
                `또한 이 버전의 ${this.container.client.user?.username}의 데이터는 정식버전과 연동이 안돼요.\n` +
                `만약 오류가 발견되면 ${(await this.container.client.users.fetch(this.container.config.bot.owner_ID)).username}님에게 알려주세요.\n`,
              color: 0xff0000,
              footer: {
                text: `현재 브랜치: ${this.container.release.toLowerCase()} 버전: ${this.container.version}`,
              },
            },
          ],
        })
      }
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

void container.stores.loadPiece({
  piece: MessageCreateListener,
  name: 'messageCreate',
  store: 'listeners',
})
