import { Message } from 'discord.js'

export default abstract class Command {
  protected constructor(public name: string, public noPerm: boolean = false) {}
  public abstract execute(msg: Message, args: string[]): any
}
