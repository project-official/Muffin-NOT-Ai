import Command from '../Command'
import { type Message } from 'discord.js'

export default class extends Command {
  public constructor() {
    super('봇꺼', true)
  }
  public execute(msg: Message, args: string[]) {
    msg.channel.send('ㅇㅇ').finally(() => {
      msg.client.destroy()
    })
  }
}
