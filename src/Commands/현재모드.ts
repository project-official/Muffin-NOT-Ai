import { type Message } from 'discord.js'
import Command from '../Command'

export default class extends Command {
  public constructor() {
    super('현재모드')
  }
  public execute(msg: Message, args: string[]) {
    switch (msg.client.chatBot.trainType) {
      case 'muffinOnly':
        msg.channel.send('현재 모드: 머핀만 학습')
        break
      case 'All':
        msg.channel.send('현재 모드: 전체 학습')
        break
    }
  }
}
