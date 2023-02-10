import type { Client, Message } from 'discord.js'
import database, { ResponseData } from './database'

export default class ChatBot {
  public db = database
  public async getResponse(msg: Message): Promise<string> {
    const db = await this.db
    const request = msg.content.replace('머핀아 ', '')
    console.log(`req: ${request}`)
    const [rows] = await db.execute<ResponseData[]>('SELECT * FROM statement;')
    let response = rows[Math.floor(Math.random() * rows.length)].text
    if (!response) response = '살ㄹ려주세요'
    console.log(`res: ${response}`)
    return response
  }

  public train(client: Client): ChatBot {
    client.on('messageCreate', async msg => {
      if (msg.author.bot) return
      const db = await this.db
      if (msg.author.id === '1026185545837191238') {
        const response = await this.getResponse(msg)
        const [rows] = await db.execute<ResponseData[]>(
          'SELECT * FROM statement;'
        )
        try {
          await db.beginTransaction()
          await db.execute(
            'INSERT INTO statement (id, text, persona, in_response_to) VALUES (?, ?, ?, ?);',
            [++rows[rows.length - 1].id, msg.content, 'muffin', response]
          )
          await db.commit()
        } catch (err) {
          console.log(err)
          await db.rollback()
        }
      }
    })
    return this
  }

  public async destroy() {
    this.db.then(db => db.destroy())
  }
}
