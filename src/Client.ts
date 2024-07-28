import { SapphireClient, container, LogLevel } from '@sapphire/framework'
import { GatewayIntentBits, Partials, type Snowflake } from 'discord.js'
import { ChatBot, NODE_ENV, MaaDatabase } from './modules'
import { version } from '../package.json'
import config from '../config.json'

container.config = config
container.prefix = config.bot.prefix
container.version = version
container.database = new MaaDatabase()
container.chatBot = new ChatBot(container.database)
container.dokdoAliases = ['dokdo', 'dok', 'Dokdo', 'Dok', '테스트']

export default class MuffinBot extends SapphireClient {
  public constructor() {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
      loadMessageCommandListeners: true,
      defaultPrefix: container.prefix,
      logger: {
        level: NODE_ENV === 'development' ? LogLevel.Debug : LogLevel.Info,
      },
      allowedMentions: {
        roles: [],
        repliedUser: true,
      },
      partials: [Partials.Message, Partials.ThreadMember],
    })
  }

  public override async login(): Promise<string> {
    await container.chatBot.train(this)
    return super.login(config.bot.token)
  }
}

declare module '@sapphire/framework' {
  interface Container {
    database: MaaDatabase
    chatBot: ChatBot
    prefix: string
    version: string
    dokdoAliases: string[]
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
      api: {
        opendict: string
      }
    }
  }
}

declare module '@sapphire/framework' {
  interface DetailedDescriptionCommandObject {
    usage: string
    examples?: string[]
  }
}
