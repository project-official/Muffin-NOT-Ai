import type { BaseTable, NSFWData } from '../type'
import { type Pool } from 'mysql2/promise'
import run from '../run'

export class NSFWContentTable implements BaseTable<NSFWData, number> {
  public readonly name = 'nsfw_content'
  public constructor(private _database: Pool) {}

  public async all(): Promise<NSFWData[]> {
    const [rows] = await this._database.execute<NSFWData[]>(
      `SELECT * FROM ${this.name};`,
    )
    return rows
  }

  public async findOne(key: number): Promise<NSFWData[]> {
    const [rows] = await this._database.execute<NSFWData[]>(
      `SELECT * FROM ${this.name} WHERE id = ?;`,
      [key],
    )
    return rows
  }

  public async insert(data: { text: string; persona: string }): Promise<void> {
    const db = await this._database.getConnection()

    await run(db, async () => {
      await db.execute(
        `INSERT INTO ${this.name} (text, persona) VALUES (?, ?);`,
        [data.text, data.persona],
      )
    })
  }

  public async update(data: { id: number; text: string }): Promise<void> {
    const db = await this._database.getConnection()

    await run(db, async () => {
      await db.execute(`UPDATE ${this.name} SET text = ? WHERE id = ?;`, [
        data.text,
        data.id,
      ])
    })
  }

  public async delete(key: number): Promise<void> {
    const db = await this._database.getConnection()

    await run(db, async () => {
      await db.execute(`DELETE FROM ${this} WHERE id = ?;`, [key])
    })
  }

  public async findOneAnotherKey(
    key: 'id' | 'text' | 'persona' | 'created_at',
    data: any,
  ): Promise<NSFWData[]> {
    const [rows] = await this._database.execute<NSFWData[]>(
      `SELECT *
       FROM ${this.name}
       WHERE ${key} = ?;`,
      [data],
    )
    return rows
  }
}
