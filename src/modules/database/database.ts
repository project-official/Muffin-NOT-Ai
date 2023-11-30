import { createPool } from 'mysql2/promise'
import { LearnTable, NSFWContentTable, StatementTable } from './model'
import config from '../../../config.json'

export class MaaDatabase {
  private _database = createPool({
    ...config.mysql,
    keepAliveInitialDelay: 10000,
    enableKeepAlive: true,
  })

  public get statement() {
    return new StatementTable(this._database)
  }

  public get nsfwContent() {
    return new NSFWContentTable(this._database)
  }

  public get learn() {
    return new LearnTable(this._database)
  }

  public async ping() {
    this._database.getConnection().then(conn => {
      conn.ping()
      conn.release()
    })
  }
}

const database = createPool({
  ...config.mysql,
  keepAliveInitialDelay: 10000,
  enableKeepAlive: true,
})

export { database }
