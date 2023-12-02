import { Message } from 'discord.js'
import { Command } from '../modules'

export default class extends Command {
  public constructor() {
    super('삭제')
  }
  public async execute(msg: Message, args: string[]) {
    msg.channel.send(
      '현재는 사용할 수 없는 기능이예요. 만약 삭제를 원할 경우 개발자에게 문의해주세요.',
    )
  }
}
