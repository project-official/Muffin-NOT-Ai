import type { Client, Message } from 'discord.js'
import database, { ResponseData } from './database'

export default class ChatBot {
  public async getResponse(msg: Message): Promise<string> {
    const conn = await database.getConnection()
    const request = msg.content.replace('머핀아 ', '')
    console.log(`req: ${request}`)
    const [rows] = await conn.query<ResponseData[]>('SELECT * FROM statement;')
    let response = rows[Math.floor(Math.random() * rows.length)].text
    if (!response) response = '살ㄹ려주세요'
    console.log(`res: ${response}`)
    conn.release()
    return response
  }

  public train(client: Client): ChatBot {
    client.on('messageCreate', async msg => {
      if (msg.author.bot) return
      const conn = await database.getConnection()
      if (msg.author.id === '1026185545837191238') {
        const response = await this.getResponse(msg)
        const [rows] = await conn.query<ResponseData[]>(
          'SELECT * FROM statement;'
        )
        try {
          await conn.beginTransaction()
          await conn.execute(
            'INSERT INTO statement (id, text, persona, in_response_to) VALUES (?, ?, ?, ?);',
            [++rows[rows.length - 1].id, msg.content, 'muffin', response]
          )
          await conn.commit()
        } catch (err) {
          console.log(err)
          await conn.rollback()
        } finally {
          conn.release()
        }
      }
    })
    return this
  }
}
