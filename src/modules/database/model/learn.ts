import { type Pool } from 'mysql2/promise'
import run from '../run'
import type { BaseTable, LearnData } from '../type'
import { Snowflake } from 'discord.js'

export class LearnTable implements BaseTable<LearnData, string> {
  public name = 'learn'
  public constructor(private _database: Pool) {}

  public async all(): Promise<LearnData[]> {
    const [rows] = await this._database.execute<LearnData[]>(
      'SELECT * FROM learn;',
    )
    return rows
  }

  public async findOne(key: string): Promise<LearnData[]> {
    const [rows] = await this._database.execute<LearnData[]>(
      'SELECT * FROM learn WHERE command = ?;',
      [key],
    )
    return rows
  }

  public async insert(data: {
    command: string
    result: string
    user_id: Snowflake
  }): Promise<void> {
    const db = await this._database.getConnection()

    await run(db, async () => {
      await db.execute(
        'INSERT INTO learn (command, result, user_id) VALUES (?, ?, ?);',
        [data.command, data.result, data.user_id],
      )
    })
  }

  public async update(data: {
    command: string
    result: string
  }): Promise<void> {
    const db = await this._database.getConnection()

    await run(db, async () => {
      await db.execute('UPDATE learn SET result = ? WHERE command = ?;', [
        data.command,
        data.result,
      ])
    })
  }

  public async delete(key: string): Promise<void> {
    const db = await this._database.getConnection()

    await run(db, async () => {
      await db.execute('DELETE FROM learn WHERE command = ?;', [key])
    })
  }

  public async findOneAnotherKey(
    key: 'id' | 'command' | 'result' | 'user_id' | 'created_at',
    data: any,
  ): Promise<LearnData[]> {
    const [rows] = await this._database.execute<LearnData[]>(
      `SELECT * FROM learn WHERE ${key} = ?;`,
      [data],
    )
    return rows
  }

  public async execute<W>(sql: string, values?: any): Promise<W> {
    const db = await this._database.getConnection()
    let data: any

    await run(db, async () => {
      data = await db.execute(sql, [...values])
    })
    return data
  }
}
