import type { Client, Message } from 'discord.js'
import database, { ResponseData } from './Database'

export default class ChatBot {
  public async getResponse(msg: Message): Promise<string> {
    const conn = await database.getConnection()
    const request = msg.content.replace('머핀아 ', '')
    console.log(`⌨️ㅣ${request}`)
    const [rows] = await conn.query('SELECT * FROM statement;')
    let response = (rows as ResponseData[])[
      Math.floor(Math.random() * (rows as ResponseData[]).length)
    ].text
    if (!response) response = '살ㄹ려주세요'

    console.log(`🍰ㅣ${response}`)
    conn.release()
    return response
  }

  public async train(client: Client): Promise<ChatBot> {
    client.on('messageCreate', async msg => {
      const conn = await database.getConnection()
      if (msg.author.bot) return
      if (msg.author.id !== '1026185545837191238') return
      const response = this.getResponse(msg)
      const result = await conn.query('SELECT * FROM statement;')
      const rows = result[0] as ResponseData[]
      await conn.beginTransaction()
      try {
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
    return this
  }
}
