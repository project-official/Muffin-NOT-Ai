import { noPerm, ChatBot, NODE_ENV, MaaDatabase } from './modules'
import { SapphireClient, container } from '@sapphire/framework'
import { ActivityType, GatewayIntentBits, Snowflake } from 'discord.js'
import config from '../config.json'
import Dokdo from 'dokdo'

container.prefix = '머핀아 '
container.database = new MaaDatabase()
container.chatBot = new ChatBot(container.database)
container.config = config

export default class MuffinBot extends SapphireClient {
  public database = container.database
  public chatBot = container.chatBot
  public prefix = container.prefix
  public dokdo: Dokdo = new Dokdo(this, {
    aliases: ['dokdo', 'dok'],
    owners: [config.bot.owner_ID],
    noPerm,
    prefix: container.prefix,
  })

  public constructor() {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
      loadMessageCommandListeners: true,
      defaultPrefix: container.prefix,
    })
  }

  public override async login(): Promise<string> {
    if (NODE_ENV === 'development') this.on('debug', console.info)
    await this.chatBot.train(this)

    this.once('ready', client => {
      function setStatus() {
        client.user.setActivity({
          type: ActivityType.Custom,
          name: 'ㅅ살려주세요..!',
        })
      }

      setStatus()
      setInterval(() => setStatus(), 600000)

      console.log(`먹힐 준ㅂ비 완료`)
    }).on('messageCreate', async msg => {
      if (msg.author.bot) return
      if (msg.content.startsWith(this.prefix)) {
        const args = msg.content.slice(this.prefix.length).trim().split(/ +/g)

        if (args[0].startsWith('dokdo') || args[0].startsWith('dok')) {
          await this.dokdo.run(msg)
        } else {
          if (!this.stores.get('commands').get(args[0])) {
            await msg.channel.sendTyping()
            const response = await this.chatBot.getResponse(msg)
            await msg.reply(response)
          }
        }
      }
    })
    return super.login(config.bot.token)
  }
}

declare module 'discord.js' {
  interface Client {
    chatBot: ChatBot
    prefix: string
    dokdo: Dokdo
  }
}

declare module '@sapphire/pieces' {
  interface Container {
    database: MaaDatabase
    chatBot: ChatBot
    prefix: string
    config: {
      bot: {
        owner_ID: Snowflake
        token: string
      }
      train: {
        user_ID: Snowflake
      }
      mysql: {
        user: string
        host: string
        password: string
        database: string
        port: number
      }
    }
  }
}
