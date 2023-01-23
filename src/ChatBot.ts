import sqlite3 from 'sqlite3'
import { ResponseData } from './types'
import { Message } from 'discord.js'

export default class ChatBot {
  private db: sqlite3.Database
  public constructor(dbPath: string) {
    const a = sqlite3.verbose()
    this.db = new a.Database(dbPath)
  }

  public async getResponse(msg: Message) {
    this.db.all('select * from statement', [], (err, rows) => {
      const a = msg.content.replace('머핀아', '')
      if (err) throw err
      const data: ResponseData[] = [...rows]
      data.sort(() => Math.random() - 0.5)
      const r = data[0].text
      console.log(`⌨️ㅣ${a}`)
      console.log(`🍰ㅣ${r}`)
      msg.channel.sendTyping()
      setTimeout(() => msg.channel.send(r), 1000)
    })
    return this
  }
}
