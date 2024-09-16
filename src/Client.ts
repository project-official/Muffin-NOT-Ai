import { SapphireClient, container, LogLevel } from '@sapphire/framework'
import { GatewayIntentBits, Partials, type Snowflake } from 'discord.js'
import { ChatBot, NODE_ENV, MaaDatabase } from './modules'
import { version } from '../package.json'
import config from '../config.json'
import semver from 'semver'

import './interaction-handlers/_load'
import './listeners/_load'
import './Commands/_load'

container.config = config
container.prefix = config.bot.prefix
container.version = version
container.database = new MaaDatabase()
container.dokdoAliases = ['dokdo', 'dok', 'Dokdo', 'Dok', '테스트']
container.chatBot = new ChatBot(container.database)

const release = version
  .slice((semver.coerce(version)?.toString() + '-').length)
  .split('.')[1]

if (release.startsWith('e')) {
  container.release = 'EXPERIMENTAL'
} else if (release.startsWith('d')) {
  container.release = 'DEV'
} else if (release.startsWith('p')) {
  container.release = 'PREVIEW'
} else {
  container.release = 'RELEASE'
}

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
        users: [],
        roles: [],
        repliedUser: true,
      },
      partials: [Partials.Message, Partials.ThreadMember],
      baseUserDirectory: null,
    })
  }

  public override async login(): Promise<string> {
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
    release: 'EXPERIMENTAL' | 'DEV' | 'PREVIEW' | 'RELEASE'
  }
}

declare module '@sapphire/framework' {
  interface DetailedDescriptionCommandObject {
    usage: string
    examples?: string[]
  }
}
