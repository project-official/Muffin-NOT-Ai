import Command from '../Command'
import { type Message } from 'discord.js'

export default class extends Command {
  public constructor() {
    super('모드변경', true)
  }
  public async execute(msg: Message, args: string[]) {
    switch (msg.client.chatBot.trainType) {
      case 'muffinOnly':
        msg.client.chatBot.trainType = 'All'
        msg.channel.send('다음 모드로 변경: 전체 학습')
        break
      case 'All':
        msg.client.chatBot.trainType = 'muffinOnly'
        msg.channel.send('다음 모드로 변경: 머핀만 학습')
        break
    }
  }
}
