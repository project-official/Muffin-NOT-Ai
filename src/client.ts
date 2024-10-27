import { SapphireClient, container, LogLevel } from '@sapphire/framework'
import { GatewayIntentBits, Partials } from 'discord.js'
import { ChatBot, Config, NODE_ENV } from './modules'
import { PrismaClient } from '@prisma/client'
import { version } from '../package.json'
import semver from 'semver'

const config = new Config()

const release = version
  .slice((semver.coerce(version)?.toString() + '-').length)
  .split('.')[1]

function getLastUpdated() {
  const updated = release.match(/[0-9]/g)!.join('')
  const year = updated.slice(0, 2)
  const month = updated.slice(2, 4)
  const day = updated.slice(4, 6)
  return `20${year}-${month}-${day}`
}

container.config = config
container.prefix = config.bot.prefix
container.version = version
container.database = new PrismaClient()
container.dokdoAliases = ['dokdo', 'dok', 'Dokdo', 'Dok', '테스트']
container.chatBot = new ChatBot(container.database)
container.lastUpdated = new Date(getLastUpdated())
container.embedColors = {
  default: 0xaddb87,
  fail: 0xff0000,
  success: 0x00ff00,
}

if (release.startsWith('e')) {
  container.channel = 'EXPERIMENTAL'
} else if (release.startsWith('d')) {
  container.channel = 'DEV'
} else if (release.startsWith('p')) {
  container.channel = 'PREVIEW'
} else {
  container.channel = 'RELEASE'
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
    })
  }

  public override async login(): Promise<string> {
    if (container.channel === 'RELEASE') {
      if (!config.train.user_ID)
        container.logger.info(
          '[MuffinBot] .env파일에 TRAIN_USER_ID값이 없어서 학습 기능이 꺼졌어요.',
        )
      else await container.chatBot.train(this)
    } else {
      container.logger.info(
        '[MuffinBot] 해당 채널은 RELEASE 채널이 아니라서 학습 기능이 꺼졌습니다.',
      )
      container.logger.info(`[MuffinBot] 현재 채널: ${container.channel}`)
    }
    return super.login(config.bot.token)
  }
}

declare module '@sapphire/framework' {
  interface Container {
    database: PrismaClient
    chatBot: ChatBot
    prefix: string
    version: string
    dokdoAliases: string[]
    config: Config
    channel: 'EXPERIMENTAL' | 'DEV' | 'PREVIEW' | 'RELEASE'
    lastUpdated: Date
    embedColors: {
      default: number
      fail: number
      success: number
    }
  }
}

declare module '@sapphire/framework' {
  interface DetailedDescriptionCommandObject {
    usage: string
    examples?: string[]
  }
}
