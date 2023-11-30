import { type Pool } from 'mysql2/promise'
import run from '../run'
import type { BaseTable, NSFWData } from '../type'

export class NSFWContentTable implements BaseTable<NSFWData, number> {
  public name = 'nsfw_content'
  public constructor(private _database: Pool) {}

  public async all(): Promise<NSFWData[]> {
    const [rows] = await this._database.execute<NSFWData[]>(
      'SELECT * FROM nsfw_content;',
    )
    return rows
  }

  public async findOne(key: number): Promise<NSFWData[]> {
    const [rows] = await this._database.execute<NSFWData[]>(
      'SELECT * FROM nsfw_content WHERE id = ?;',
      [key],
    )
    return rows
  }

  public async insert(data: {
    id: number
    text: string
    persona: string
  }): Promise<void> {
    const db = await this._database.getConnection()

    await run(db, async () => {
      await db.execute(
        'INSERT INTO nsfw_content (id, text, persona) VALUES (?, ?, ?);',
        [data.id, data.text, data.persona],
      )
    })
  }

  public async update(data: { id: number; text: string }): Promise<void> {
    const db = await this._database.getConnection()

    await run(db, async () => {
      await db.execute('UPDATE nsfw_content SET text = ? WHERE id = ?;', [
        data.text,
        data.id,
      ])
    })
  }

  public async delete(key: number): Promise<void> {
    const db = await this._database.getConnection()

    await run(db, async () => {
      await db.execute('DELETE FROM nsfw_content WHERE id = ?;', [key])
    })
  }

  public async findOneAnotherKey(
    key: 'id' | 'text' | 'persona' | 'created_at',
    data: any,
  ): Promise<NSFWData[]> {
    const [rows] = await this._database.execute<NSFWData[]>(
      'SELECT * FROM nsfw_content WHERE ? = ?;',
      [key, data],
    )
    return rows
  }
}
