import { ActivityType, Client, GatewayIntentBits, Message } from 'discord.js'
import ChatBot from './ChatBot.js'
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

function isNotOwner(msg: Message): boolean {
  if (msg.author.id !== '415135882006495242') {
    noPerm(msg)
    return false
  } else return true
}

export default class MuffinAI extends Client {
  private chatBot = new ChatBot()
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
        if (!isNotOwner(msg)) return
        this.destroy()
      } else if (msg.content.startsWith('멒힌아 모드변경')) {
        if (!isNotOwner(msg)) return
        const a = this.chatBot.changeTrainType()
        switch (a) {
          case 'muffinOnly':
            msg.channel.send('현재 모드: 머핀만 학습')
            break
          case 'All':
            msg.channel.send('현재 모드: 전체 학습')
            break
        }
      } else return
    })
    return super.login()
  }

  public override destroy() {
    this.chatBot.destroy()
    super.destroy()
  }
}
