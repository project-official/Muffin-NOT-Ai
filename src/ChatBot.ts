import sqlite3 from 'sqlite3'
import { ResponseData } from './types'
import type { Client, Message } from 'discord.js'

function arrayShuffle<T>(array: T[]): T[] {
  array = [...array]

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  return array
}

export default class ChatBot {
  private db: sqlite3.Database
  public constructor(dbPath: string) {
    this.db = new sqlite3.Database(dbPath)
  }

  public getResponse(msg: Message, sendMsg?: boolean): ChatBot {
    this.db.all('SELECT * FROM statement;', [], (err, rows: ResponseData[]) => {
      if (err) throw err
      const a = msg.content.replace('머핀아', '')
      const data = arrayShuffle([...rows])
      let r = data[0].text
      if (!r) r = '살ㄹ려주세요'
      console.log(`⌨️ㅣ${a}`)
      console.log(`🍰ㅣ${r}`)
      if (sendMsg) {
        msg.channel.sendTyping()
        setTimeout(() => msg.channel.send(r), 1000)
      }
    })
    return this
  }

  public train(client: Client): ChatBot {
    client.on('messageCreate', msg => {
      if (msg.author.id === '1026185545837191238') {
        this.db.run(
          `INSERT INTO statement(text) VALUES('${msg.content}');`,
          err => {
            if (err) throw err
            this.getResponse(msg)
          }
        )
      }
    })

    return this
  }
}
