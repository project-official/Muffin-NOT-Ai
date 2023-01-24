import sqlite3 from 'sqlite3'
import { ResponseData } from './types'
import { Message } from 'discord.js'

export default class ChatBot {
  private db: sqlite3.Database
  public constructor(dbPath: string) {
    this.db = new sqlite3.Database(dbPath)
  }

  public getResponse(msg: Message) {
    this.db.all('select * from statement', [], (err, rows: ResponseData[]) => {
      if (err) throw err
      const a = msg.content.replace('머핀아', '')
      const data: ResponseData[] = [...rows]
      data.sort(() => Math.random() - 0.5)
      let r = data[0].text
      if (!r) r = '살ㄹ려주세요'
      console.log(`⌨️ㅣ${a}`)
      console.log(`🍰ㅣ${r}`)
      msg.channel.sendTyping()
      setTimeout(() => msg.channel.send(r), 1000)
    })
    return this
  }
}
