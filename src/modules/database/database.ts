import { createPool } from 'mysql2/promise'
import { LearnTable, NSFWContentTable, StatementTable } from './model'
import config from '../../../config.json'
import run from './run'

export class MaaDatabase {
  private _database = createPool({
    ...config.mysql,
    keepAliveInitialDelay: 10000,
    enableKeepAlive: true,
  }).on('release', conn => {
    console.log(`${conn.threadId} released.`)
  })
  public statement = new StatementTable(this._database)
  public nsfwContent = new NSFWContentTable(this._database)
  public learn = new LearnTable(this._database)

  public async ping() {
    const db = await this._database.getConnection()

    await db.ping()
    db.release()
  }
}
