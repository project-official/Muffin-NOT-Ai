import { createPool } from 'mysql2/promise'
import { StatementTable } from './model'
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
}

const database = createPool({
  ...config.mysql,
  keepAliveInitialDelay: 10000,
  enableKeepAlive: true,
})

export { database }
