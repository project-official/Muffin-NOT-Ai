import { createPool } from 'mysql2/promise'
import { LearnTable, NSFWContentTable, StatementTable } from './model'
import config from '../../../config.json'
import run from './run'

export class MaaDatabase {
  private _database = createPool({
    ...config.mysql,
    keepAliveInitialDelay: 10000,
    enableKeepAlive: true,
  })
  public statement = new StatementTable(this._database)
  public nsfwContent = new NSFWContentTable(this._database)
  public learn = new LearnTable(this._database)

  public ping() {
    this._database.getConnection().then(conn => {
      conn.ping()
      conn.release()
    })
  }

  public async execute<T>(sql: string, values?: any): Promise<T> {
    const db = await this._database.getConnection()
    let data: any

    await run(db, async () => {
      data = await db.execute(sql, [...values])
    })
    return data
  }
}
