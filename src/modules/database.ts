import {
  type RowDataPacket,
  createPool,
  Pool,
  PoolConnection,
} from 'mysql2/promise'
import config from '../../config.json'
import { type Snowflake } from 'discord.js'

export interface BaseData extends RowDataPacket {
  id: number
  text: string
  created_at: string
  persona: string
}

export interface ResponseData extends BaseData {
  search_text: string
  conversation: string
  in_response_to: string | null
  search_in_response_to: string
}

export interface LearnData extends RowDataPacket {
  command: string
  result: string
  user_id: Snowflake
  created_at: string
}

export { BaseData as NSFWData }

interface BassTable<T, V> {
  name: string
  all(): Promise<T[]>
  findOne(key: V): Promise<T[]>
  insert(data: T): Promise<void>
  update(data: T): Promise<void>
  delete(key: V): Promise<void>
}

async function run(db: PoolConnection, fn: () => Promise<void>) {
  try {
    await db.beginTransaction()
    await fn()
    await db.commit()
  } catch (err) {
    console.error(err)
    await db.rollback()
  } finally {
    db.release()
  }
}

class StatementTable implements BassTable<ResponseData, number> {
  public name = 'statement'
  public constructor(private _database: Pool) {}

  public async all(): Promise<ResponseData[]> {
    const [rows] = await this._database.execute<ResponseData[]>(
      'SELECT * FROM statement;',
    )
    return rows
  }

  public async findOne(key: number): Promise<ResponseData[]> {
    const [rows] = await this._database.execute<ResponseData[]>(
      'SELECT * FROM statement WHERE id = ?;',
      [key],
    )
    return rows
  }

  public async insert(data: ResponseData): Promise<void> {
    const db = await this._database.getConnection()
    await run(db, async () => {
      await db.execute(
        'INSERT INTO statement (id, text, persona, in_response_to) VALUES (?, ?, ?, ?);',
        [data.id, data.text, data.persona, data.in_response_to],
      )
    })
  }

  public async update(data: { id: number; text: string }): Promise<void> {
    const db = await this._database.getConnection()

    await run(db, async () => {
      await db.execute('UPDATE statement SET text = ? WHERE id = ?;', [
        data.text,
        data.id,
      ])
    })
  }

  public async delete(key: number): Promise<void> {
    const db = await this._database.getConnection()

    await run(db, async () => {
      await db.execute('DELETE FROM statement WHERE id = ?;', [key])
    })
  }
}

export class MaaDatabase {
  private _database = createPool({
    ...config.mysql,
    keepAliveInitialDelay: 10000,
    enableKeepAlive: true,
  })

  public get statement() {
    return new StatementTable(this._database)
  }
}

const database = createPool({
  ...config.mysql,
  keepAliveInitialDelay: 10000,
  enableKeepAlive: true,
})

export default database
