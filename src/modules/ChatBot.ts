import type { Client, Message } from 'discord.js'
import { MaaDatabase } from './database'
import { TextChannel } from 'discord.js'
import config from '../../config.json'
import { NODE_ENV } from '.'
import learn from '../Commands/learn'
import learning_data from '../Commands/learning_data'

export default class ChatBot {
  get db() {
    return new MaaDatabase()
  }
  public async getResponse(msg: Message): Promise<string> {
    const prefix = msg.client.prefix
    const data = await this.db.statement.all()
    const args = msg.content.slice(prefix.length).trim().split(/ +/g).join(' ')
    const learn = await this.db.learn.findOne(args)
    const learnData = learn[Math.floor(Math.random() * learn.length)]
    const randomNumber = Math.round(Math.random() * (2 - 1) + 1)

    if (NODE_ENV === 'development') {
      console.log(randomNumber)
      console.log(learnData)
      console.log(args)
    }

    if (randomNumber === 1 && learnData && args.startsWith(learnData.command)) {
      return `${learnData.result}\n\`${
        (await msg.client.users.fetch(learnData.user_id)).username
      }님이 알려주셨어요.\``
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
    const prefix = client.prefix
    client.on('messageCreate', async msg => {
      if (msg.author.bot) return
      if (msg.author.id === config.train.user_ID) {
        const response = await this.getResponse(msg)
        await this.db.statement.insert({
          text: msg.content,
          persona: 'muffin',
          in_response_to: response,
        })
      } else {
        if (!(msg.channel as TextChannel).nsfw) return
        if (!msg.content.startsWith(prefix)) return
        const persona = `user:${msg.author.username.slice(0, 50).toLowerCase()}`
        const text = msg.content.replace('머핀아 ', '')
        await this.db.nsfwContent.insert({
          text,
          persona,
        })
      }
    })

    setInterval(async () => {
      await this.db.ping()
    }, 60000)
    return this
  }
}
