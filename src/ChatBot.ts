import type { Client, Message } from 'discord.js'
// import { join } from 'node:path'
import Database from './Database'

type TrainType = 'muffinOnly' | 'All'

export default class ChatBot {
  get trainType(): TrainType {
    return this._trainType
  }

  set trainType(value: TrainType) {
    this._trainType = value
  }
  public db = new Database(process.env.DB_PATH!)
  private _trainType: TrainType = 'All'

  public getResponse(msg: Message, sendMsg?: boolean): ChatBot {
    this.db
      .all()
      .then(rows => {
        const a = msg.content.replace('머핀아 ', '')
        let r = rows[Math.floor(Math.random() * rows.length)].text
        if (!r) r = '살ㄹ려주세요'
        console.log(`⌨️ㅣ${a}`)
        console.log(`🍰ㅣ${r}`)
        if (sendMsg) {
          msg.channel.sendTyping()
          setTimeout(() => msg.channel.send(r), 1000)
        }
      })
      .catch(console.error)
    return this
  }

  public train(client: Client): ChatBot {
    const sql = `INSERT INTO statement(text, persona) VALUES(?, ?);`
    client.on('messageCreate', msg => {
      if (msg.author.bot) return
      if (msg.author.id === '1026185545837191238') {
        this.db.run(sql, [msg.content, 'muffin'], err => {
          if (err) throw err
          this.getResponse(msg)
        })
      } else {
        if (this.trainType !== 'All') return
        if (!msg.content.startsWith('머핀아 ')) return
        const user = `user:${msg.author.username
          .replaceAll("'", '')
          .slice(0, 50)
          .toLowerCase()}`
        const text = msg.content.replace('머핀아 ', '')
        this.db.run(sql, [text, user], err => {
          if (err) throw err
        })
      }
    })
    return this
  }

  public destroy(): void {
    this.db.close()
  }
}
