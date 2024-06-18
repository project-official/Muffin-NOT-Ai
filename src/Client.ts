import {
  ActivityType,
  Client,
  Collection,
  GatewayIntentBits,
  TextChannel,
} from 'discord.js'
import { type Command, noPerm, ChatBot, NODE_ENV } from './modules'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import config from '../config.json'
import Dokdo from 'dokdo'

const prefix = '머핀아 '

export default class MuffinBot extends Client {
  public chatBot = new ChatBot()
  public dokdo = new Dokdo(this, {
    aliases: ['dokdo', 'dok'],
    owners: [config.bot.owner_ID],
    noPerm,
    prefix,
  })
  public modules: Collection<string, Command> = new Collection()
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

    readdirSync(join(__dirname, 'Commands')).forEach(file => {
      const a = require(join(__dirname, 'Commands', file))
      const b: Command = new a.default()
      this.modules.set(b.name, b)
      if (NODE_ENV === 'development') console.log(`${b.name}가 로ㄷ드됨`)
    })

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
      const args: string[] = msg.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g)

      if (NODE_ENV === 'development') console.log(args)
      if (msg.author.bot) return
      if (msg.content.startsWith(prefix)) {
        if (args[0].startsWith('dokdo') || args[0].startsWith('dok')) {
          await this.dokdo.run(msg)
        } else {
          if (msg.channel instanceof TextChannel) {
            await msg.channel.sendTyping()
            const command = this.modules.get(args.shift()!.toLowerCase())

            if (command) {
              if (command.noPerm && msg.author.id !== config.bot.owner_ID)
                return await noPerm(msg)

              await command.execute(msg, args)
            } else {
              const response = await this.chatBot.getResponse(msg)
              await msg.reply(response)
            }
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
    modules: Collection<string, Command>
  }
}
