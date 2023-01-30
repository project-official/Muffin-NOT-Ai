import { ActivityType, Client, Collection, GatewayIntentBits } from 'discord.js'
import ChatBot from './ChatBot'
import Dokdo from 'dokdo'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import Command from './Command'
import noPerm from './noPerm'
import 'dotenv/config'

const prefix = '멒힌아 '

export default class MuffinAI extends Client {
  public chatBot = new ChatBot()
  private modules: Collection<string, Command> = new Collection()
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
    this.chatBot.train(this)

    readdirSync(join(__dirname, 'Commands')).forEach(file => {
      const a = require(join(__dirname, 'Commands', file))
      const b: Command = new a.default()
      this.modules.set(b.name, b)
    })

    this.once('ready', client => {
      client.user!.setActivity({
        type: ActivityType.Playing,
        name: 'ㅅ살려주세요..!',
      })
      console.log(`먹힐 준비 완료`)
    }).on('messageCreate', async msg => {
      if (msg.author.bot) return
      await new Dokdo(this, {
        prefix,
        noPerm,
        aliases: ['테스트'],
        owners: ['415135882006495242'],
      }).run(msg)
      if (msg.content.startsWith('머핀아 ')) this.chatBot.getResponse(msg, true)
      else if (msg.content.startsWith(prefix)) {
        const args: string[] = msg.content
          .slice(prefix.length)
          .trim()
          .split('/ +/g')

        const command = this.modules.get(args.join(' '))
        if (!command) return
        if (command.noPerm && msg.author.id !== '415135882006495242')
          return await noPerm(msg)
        command.execute(msg, args)
      }
    })
    return super.login()
  }

  public override destroy() {
    this.chatBot.destroy()
    super.destroy()
  }
}

declare module 'discord.js' {
  interface Client {
    chatBot: ChatBot
  }
}
