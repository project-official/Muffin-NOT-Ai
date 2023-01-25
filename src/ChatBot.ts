import sqlite3 from 'sqlite3'
import type { Client, Message } from 'discord.js'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

type TrainType = 'muffinOnly' | 'All'

export default class ChatBot {
  private db = new sqlite3.Database(
    join(dirname(fileURLToPath(import.meta.url)), '..', 'db', 'db.sqlite3')
  )
  private trainType: TrainType = 'All'
  public constructor() {}

  public getResponse(msg: Message, sendMsg?: boolean): ChatBot {
    this.db.all(
      'SELECT text FROM statement;',
      (err, rows: Array<{ text: string }>) => {
        if (err) throw err
        const a = msg.content.replace('머핀아', '')
        let r = rows[Math.floor(Math.random() * rows.length)].text
        if (!r) r = '살ㄹ려주세요'
        console.log(`⌨️ ㅣ${a}`)
        console.log(`🍰ㅣ${r}`)
        if (sendMsg) {
          msg.channel.sendTyping()
          setTimeout(() => msg.channel.send(r), 1000)
        }
      }
    )
    return this
  }

  public train(client: Client): ChatBot {
    client.on('messageCreate', msg => {
      if (msg.author.bot) return
      if (msg.author.id === '1026185545837191238') {
        this.db.run(
          `INSERT INTO statement(text, persona) VALUES('${msg.content}', 'muffin');`,
          err => {
            if (err) throw err
            this.getResponse(msg)
          }
        )
      } else {
        if (this.trainType !== 'All') return
        if (!msg.content.startsWith('머핀아 ')) return
        const user = `user:${msg.author.username
          .replaceAll("'", '')
          .slice(0, 50)
          .toLowerCase()}`
        const text = msg.content.replace('머핀아 ', '').replaceAll("'", '')
        const sql = `INSERT INTO statement(text, persona) VALUES('${text}', '${user}');`
        this.db.run(sql, err => {
          if (err) throw err
        })
      }
    })
    return this
  }

  public changeTrainType(): TrainType {
    switch (this.trainType) {
      case 'muffinOnly':
        this.trainType = 'All'
        break
      case 'All':
        this.trainType = 'muffinOnly'
        break
    }
    return this.trainType
  }

  public destroy(): void {
    this.db.close()
  }
}
