import { container } from '@sapphire/framework'
import { createPool } from 'mysql2/promise'
import { LearnTable, UserTable } from './model'

export class MaaDatabase {
  public readonly database = createPool({
    ...container.config.mysql,
    keepAliveInitialDelay: 10000,
    enableKeepAlive: true,
  })
    .on('release', conn => {
      container.logger.debug(`[MaaDatabase] ${conn.threadId} Released.`)
    })
    .on('connection', conn => {
      container.logger.debug(`[MaaDatabase] ${conn.threadId} Connected.`)
    })
  public learn = new LearnTable(this.database)
  public user = new UserTable(this.database)

  public ping() {
    this.database.getConnection().then(conn => {
      void conn.ping()
      conn.release()
    })
  }
}
