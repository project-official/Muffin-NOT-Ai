import sqlite3 from 'sqlite3'
import type { Client, Message } from 'discord.js'

export default class ChatBot {
  private db: sqlite3.Database
  public constructor(dbPath: string) {
    this.db = new sqlite3.Database(dbPath)
  }

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

  public train(client: Client, user?: boolean): ChatBot {
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
        if (!user) return
        if (!msg.content.startsWith('머핀아 ')) return
        const sql = `INSERT INTO statement(text, persona) VALUES('${msg.content
          .replace('머핀아 ', '')
          .replaceAll("'", '')}', 'user');`
        this.db.run(sql, err => {
          if (err) throw err
        })
      }
    })
    return this
  }

  public destroy() {
    this.db.close()
  }
}
