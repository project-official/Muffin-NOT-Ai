import { ActivityType, Client, GatewayIntentBits, Message } from 'discord.js'
import ChatBot from './ChatBot.js'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import Dokdo from 'dokdo'
import 'dotenv/config'

function noPerm(msg: Message) {
  msg.reply({
    content: '당신은 내 남자친구가 아니야!',
    allowedMentions: {
      repliedUser: false,
      parse: [],
      users: [],
      roles: [],
    },
  })
}

export default class MuffinAI extends Client {
  private chatBot = new ChatBot(
    join(dirname(fileURLToPath(import.meta.url)), '..', 'db', 'db.sqlite3')
  )
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
    this.chatBot.train(this, true)
    this.once('ready', client => {
      client.user!.setActivity({
        type: ActivityType.Playing,
        name: 'ㅅ살려주세요..!',
      })
      console.log(`먹힐 준비 완료`)
    }).on('messageCreate', msg => {
      if (msg.author.bot) return
      new Dokdo(this, {
        prefix: '멒힌아 ',
        noPerm,
        aliases: ['테스트'],
        owners: ['415135882006495242'],
      }).run(msg)
      if (msg.content.startsWith('머핀아 ')) this.chatBot.getResponse(msg, true)
      else if (msg.content.startsWith('멒힌아 봇꺼')) {
        if (msg.author.id !== '415135882006495242') {
          noPerm(msg)
          return
        }
        this.destroy()
      } else return
    })
    return super.login()
  }

  public override destroy() {
    this.chatBot.destroy()
    super.destroy()
  }
}
