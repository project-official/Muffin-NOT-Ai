import { type Pool } from 'mysql2/promise'
import run from '../run'
import type { BaseTable, ResponseData } from '../type'

export class StatementTable implements BaseTable<ResponseData, number> {
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

  public async insert(data: {
    text: string
    persona: string
    in_response_to: string
  }): Promise<void> {
    const db = await this._database.getConnection()

    await run(db, async () => {
      await db.execute(
        'INSERT INTO statement (text, persona, in_response_to) VALUES (?, ?, ?);',
        [data.text, data.persona, data.in_response_to],
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

  public async findOneAnotherKey(
    key:
      | 'id'
      | 'text'
      | 'persona'
      | 'created_at'
      | 'search_text'
      | 'conversation'
      | 'in_response_to'
      | 'search_in_response_to',
    data: any,
  ): Promise<ResponseData[]> {
    const [rows] = await this._database.execute<ResponseData[]>(
      `SELECT * FROM statement WHERE ${key} = ?;`,
      [data],
    )
    return rows
  }
}
