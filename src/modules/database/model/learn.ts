import type { BaseTable, LearnData } from '../type'
import { type Pool } from 'mysql2/promise'
import { Snowflake } from 'discord.js'
import run from '../run'

export class LearnTable implements BaseTable<LearnData, string> {
  public readonly name = 'learn'
  public constructor(private _database: Pool) {}

  public async all(): Promise<LearnData[]> {
    const [rows] = await this._database.execute<LearnData[]>(
      `SELECT * FROM ${this.name};`,
    )
    return rows
  }

  public async findOne(key: string): Promise<LearnData[]> {
    const [rows] = await this._database.execute<LearnData[]>(
      `SELECT * FROM ${this.name} WHERE command = ?;`,
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
        `INSERT INTO ${this.name} (command, result, user_id) VALUES (?, ?, ?);`,
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
      await db.execute(
        `UPDATE ${this.name} SET result = ? WHERE command = ?;`,
        [data.command, data.result],
      )
    })
  }

  public async delete(key: string): Promise<void> {
    const db = await this._database.getConnection()

    await run(db, async () => {
      await db.execute(`DELETE FROM ${this.name} WHERE id = ?;`, [key])
    })
  }

  public async findOneAnotherKey(
    key: 'id' | 'command' | 'result' | 'user_id' | 'created_at',
    data: any,
  ): Promise<LearnData[]> {
    const [rows] = await this._database.execute<LearnData[]>(
      `SELECT * FROM ${this.name} WHERE ${key} = ?;`,
      [data],
    )
    return rows
  }
}
