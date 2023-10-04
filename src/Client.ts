import {
  ActivityType,
  Client,
  Collection,
  GatewayIntentBits,
  TextChannel,
} from 'discord.js'
import { Command, noPerm, ChatBot, NODE_ENV } from './modules'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { execSync } from 'node:child_process'
import config from '../config.json'

const prefix = '멒힌아 '

export default class MuffinAI extends Client {
  get chatBot() {
    return this.#chatBot
  }
  #chatBot = new ChatBot()
  #modules: Collection<string, Command> = new Collection()
  public constructor() {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    })
  }

  public override login(): Promise<string> {
    if (NODE_ENV === 'development') this.on('debug', console.info)
    this.chatBot.train(this)

    setInterval(async () => {
      const db = await this.chatBot.db.getConnection()

      await db.beginTransaction()
      await db.ping()
      await db.commit()

      db.release()
    }, 600000)

    readdirSync(join(__dirname, 'Commands')).forEach(file => {
      const a = require(join(__dirname, 'Commands', file))
      const b: Command = new a.default()
      this.#modules.set(b.name, b)
      if (NODE_ENV === 'development') console.log(b.name)
    })

    this.once('ready', () => {
      console.log(
        `Build Number: ${execSync('git rev-parse --short HEAD').toString()}`,
      )
      this.user!.setActivity({
        type: ActivityType.Playing,
        name: 'ㅅ살려주세요..!',
      })
      console.log(`먹힐 준비 완료`)
    }).on('messageCreate', async msg => {
      if (msg.author.bot) return
      if (msg.content.startsWith('머핀아 ')) {
        if (msg.channel instanceof TextChannel) {
          await msg.channel.sendTyping()
          this.chatBot //
            .getResponse(msg)
            .then(response => {
              msg.channel.send(response)
            })
        }
      } else if (msg.content.startsWith(prefix)) {
        if (msg.channel instanceof TextChannel) if (msg.channel.nsfw) return

        const args: string[] = msg.content
          .slice(prefix.length)
          .trim()
          .split(/ +/g)
        if (NODE_ENV === 'development') console.log(args)
        const command = this.#modules.get(args.shift()!.toLowerCase())
        if (!command) return
        if (command.noPerm && msg.author.id !== config.bot.owner_ID)
          return await noPerm(msg)

        command.execute(msg, args)
      }
    })
    return super.login(config.bot.token)
  }
}

declare module 'discord.js' {
  interface Client {
    get chatBot(): ChatBot
  }
}
