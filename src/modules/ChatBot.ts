import type { Client, Message } from 'discord.js'
import database, { LearnData, ResponseData } from './database'
import { TextChannel } from 'discord.js'
import config from '../../config.json'
import { NODE_ENV } from '.'

export default class ChatBot {
  get db() {
    return this.#db
  }
  #db = database
  public async getResponse(msg: Message): Promise<string> {
    const db = await this.db.getConnection()
    const [rows] = await db.execute<ResponseData[]>('SELECT * FROM statement;')
    const args = msg.content
      .slice('머핀아 '.length)
      .trim()
      .split(/ +/g)
      .join(' ')
    const [learn] = await db.execute<LearnData[]>(
      'SELECT * from learn WHERE command = ?;',
      [args],
    )
    const a = Math.round(Math.random() * (2 - 1) + 1)

    if (NODE_ENV === 'development') {
      console.log(a)
      console.log(args)
    }

    if (a === 1) {
      if (learn[0]) {
        if (args.startsWith(learn[0].command)) {
          db.release()
          return `${learn[0].result}\n\`${
            (await msg.client.users.fetch(learn[0].user_id)).username
          }님이 알려주셨어요.\``
        }
      }
    }

    let response: string
    if ((msg.channel as TextChannel).nsfw) {
      const [rows1] = await db.execute<ResponseData[]>(
        'SELECT * FROM nsfw_content;',
      )
      const rows2 = [...rows, ...rows1]
      response = rows2[Math.floor(Math.random() * rows2.length)].text
    } else {
      response = rows[Math.floor(Math.random() * rows.length)].text
    }
    if (!response) response = '살ㄹ려주세요'
    db.release()
    return response
  }

  public async train(client: Client): Promise<ChatBot> {
    const db = await this.db.getConnection()
    client.on('messageCreate', async msg => {
      if (msg.author.bot) return
      if (msg.author.id === config.train.user_ID) {
        const response = await this.getResponse(msg)
        const [rows] = await db.execute<ResponseData[]>(
          'SELECT * FROM statement;',
        )
        try {
          await db.beginTransaction()
          await db.execute(
            'INSERT INTO statement (id, text, persona, in_response_to) VALUES (?, ?, ?, ?);',
            [++rows[rows.length - 1].id, msg.content, 'muffin', response],
          )
          await db.commit()
        } catch (err) {
          console.log(err)
          await db.rollback()
        }
      } else {
        if (!(msg.channel as TextChannel).nsfw) return
        if (!msg.content.startsWith('머핀아 ')) return
        const user = `user:${msg.author.username.slice(0, 50).toLowerCase()}`
        const text = msg.content.replace('머핀아 ', '')
        const [rows] = await db.execute<ResponseData[]>(
          'SELECT * FROM nsfw_content;',
        )
        try {
          await db.beginTransaction()
          await db.execute(
            `INSERT INTO nsfw_content (id, text, persona) VALUES (?, ?, ?);`,
            [++rows[rows.length - 1].id, text, user],
          )
          await db.commit()
        } catch (err) {
          console.log(err)
          await db.rollback()
        }
      }
    })
    db.release()

    setInterval(async () => {
      const db = await database.getConnection()
      await db.ping()
      db.release()
    }, 60000)
    return this
  }
}
