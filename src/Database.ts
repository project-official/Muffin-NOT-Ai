import sqlite3 from 'sqlite3'

interface ResponseData {
  id: number
  text: string
  search_text: string
  conversation: string
  created_at: string
  in_response_to: string | null
  search_in_response_to: string
  persona: string
}

export default class Database {
  private sqliteDB: sqlite3.Database
  public constructor(dbPath: string) {
    this.sqliteDB = new sqlite3.Database(dbPath)
  }

  public all(): Promise<ResponseData[]> {
    return new Promise((resolve, reject) => {
      this.sqliteDB.serialize(() => {
        this.sqliteDB.all('SELECT * FROM statement;', (err, rows) => {
          if (err) reject(err)
          resolve([...rows])
        })
      })
    })
  }

  public run(
    sql: string,
    params: any[],
    callBack: (err: Error | null) => void
  ) {
    this.sqliteDB.run(sql, params, callBack)
  }

  public close() {
    this.sqliteDB.close()
  }
}
