import type { Client, Message, TextChannel } from 'discord.js'
import type { PrismaClient } from '../../prisma'
import { container } from '@sapphire/framework'

export default class ChatBot {
  public constructor(public db: PrismaClient) {}

  public async getResponse(msg: Message): Promise<string> {
    const prefix = container.prefix
    const data = await this.db.statement.findMany()
    const args = msg.content.slice(prefix.length).trim().split(/ +/g).join(' ')
    const learn = await this.db.learn.findMany({
      where: {
        command: args,
      },
    })
    const learnData = learn[Math.floor(Math.random() * learn.length)]
    const randomNumber = Math.round(Math.random() * (2 - 1) + 1)

    container.logger.debug(`[ChatBot] command: ${args}`)

    if (randomNumber === 1 && learnData && args.startsWith(learnData.command)) {
      container.logger.debug(
        `[ChatBot] response: (learnData) ${learnData.result}`,
      )
      return `${learnData.result}\n\`${
        (await msg.client.users.fetch(learnData.user_id)).username
      }님이 알려주셨어요.\``
    }

    let response: string
    if ((msg.channel as TextChannel).nsfw) {
      const NSFWData = await this.db.nsfw_content.findMany()
      const dataList = [...data, ...NSFWData]
      response = dataList[Math.floor(Math.random() * dataList.length)].text
    } else {
      response = data[Math.floor(Math.random() * data.length)].text
    }

    if (!response) response = '살ㄹ려주세요'

    container.logger.debug(`[ChatBot] response: ${response}`)

    return response
  }

  public async train(client: Client): Promise<ChatBot> {
    const prefix = container.prefix
    client.on('messageCreate', async msg => {
      if (msg.author.bot) return
      if (msg.author.id === container.config.train.user_ID) {
        const response = await this.getResponse(msg)
        await this.db.statement.create({
          data: {
            text: msg.content,
            persona: 'muffin',
            in_response_to: response,
          },
        })
      } else {
        if (!(msg.channel as TextChannel).nsfw) return
        if (!msg.content.startsWith(prefix)) return
        const persona = `user:${msg.author.username.slice(0, 50).toLowerCase()}`
        const text = msg.content.replace(prefix, '')
        await this.db.nsfw_content.create({
          data: {
            text,
            persona,
          },
        })
      }
    })
    return this
  }
}
