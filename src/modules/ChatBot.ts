import type { Client, Message } from 'discord.js'
import database, { ResponseData } from './Database'

export default class ChatBot {
  public async getResponse(msg: Message): Promise<string> {
    const conn = await database.getConnection()
    const request = msg.content.replace('머핀아 ', '')
    const result = await conn.query('SELECT * FROM statement;')
    const rows = result[0] as ResponseData[]
    let response = rows[Math.floor(Math.random() * rows.length)].text
    if (!response) response = '살ㄹ려주세요'
    console.log(`⌨️ㅣ${request}`)
    console.log(`🍰ㅣ${response}`)
    conn.release()
    return response
  }

  public async train(client: Client): Promise<ChatBot> {
    const conn = await database.getConnection()
    client.on('messageCreate', msg => {
      if (msg.author.bot) return
      if (msg.author.id !== '1026185545837191238') return
      this.getResponse(msg) //
        .then(async response => {
          const result = await conn.query('SELECT * FROM statement;')
          const rows = result[0] as ResponseData[]
          try {
            await conn.beginTransaction()
            await conn.execute(
              `INSERT INTO statement(id, text, persona, in_response_to) VALUES(?, ?, ?, ?);`,
              [++rows[rows.length - 1].id, msg.content, 'muffin', response]
            )
            await conn.commit()
          } catch (err) {
            console.log(err)
            await conn.rollback()
          } finally {
            conn.release()
          }
        })
    })
    return this
  }
}
