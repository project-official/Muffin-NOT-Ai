import type { Client, Message } from 'discord.js'
import { MaaDatabase } from './database'
import { TextChannel } from 'discord.js'
import config from '../../config.json'
import { NODE_ENV } from '.'

export default class ChatBot {
  get db() {
    return new MaaDatabase()
  }
  public async getResponse(msg: Message): Promise<string> {
    const data = await this.db.statement.all()
    const args = msg.content
      .slice('머핀아 '.length)
      .trim()
      .split(/ +/g)
      .join(' ')
    const learnData = await this.db.learn.findOne(args)
    const randomNumber = Math.round(Math.random() * (2 - 1) + 1)

    if (NODE_ENV === 'development') {
      console.log(randomNumber)
      console.log(args)
    }

    if (randomNumber === 1) {
      if (learnData[0]) {
        if (args.startsWith(learnData[0].command)) {
          return `${learnData[0].result}\n\`${
            (await msg.client.users.fetch(learnData[0].user_id)).username
          }님이 알려주셨어요.\``
        }
      }
    }

    let response: string
    if ((msg.channel as TextChannel).nsfw) {
      const NSFWData = await this.db.nsfwContent.all()
      const dataList = [...data, ...NSFWData]
      response = dataList[Math.floor(Math.random() * dataList.length)].text
    } else {
      response = data[Math.floor(Math.random() * data.length)].text
    }
    if (!response) response = '살ㄹ려주세요'
    return response
  }

  public async train(client: Client): Promise<ChatBot> {
    client.on('messageCreate', async msg => {
      if (msg.author.bot) return
      if (msg.author.id === config.train.user_ID) {
        const response = await this.getResponse(msg)
        const data = await this.db.statement.all()
        await this.db.statement.insert({
          id: ++data[data.length - 1].id,
          text: msg.content,
          persona: 'muffin',
          in_response_to: response,
        })
      } else {
        if (!(msg.channel as TextChannel).nsfw) return
        if (!msg.content.startsWith('머핀아 ')) return
        const user = `user:${msg.author.username.slice(0, 50).toLowerCase()}`
        const text = msg.content.replace('머핀아 ', '')
        const data = await this.db.nsfwContent.all()
        await this.db.nsfwContent.insert({
          id: ++data[data.length - 1].id,
          text,
          persona: user,
        })
      }
    })

    setInterval(async () => {
      await this.db.ping()
    }, 60000)
    return this
  }
}
