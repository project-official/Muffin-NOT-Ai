import Database from '../src/Database'
import sqlite3 from 'sqlite3'

describe('Test Database', () => {
  const DBPATH = `${__dirname}/../db/db.sqlite3`
  const db = new sqlite3.Database(DBPATH)
  const getData = () => {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM statement;', async (err, rows) => {
        if (err) reject(err)
        resolve(rows)
      }).close()
    })
  }

  test('Get rows', () => {
    getData().then(async rows =>
      expect(await new Database(DBPATH).all()).toEqual(rows)
    )
  })

  test('Insert row', () => {
    const db = new Database(DBPATH)
    return db.all().then(async data1 => {
      db.run(
        'INSERT INTO statement(id, text) VALUES(?, ?)',
        [++data1[data1.length - 1].id, 'TEST'],
        err => {
          if (err) throw err
        }
      )
      const data2 = await db.all()
      expect(data1[data1.length - 1]).not.toEqual(data2[data2.length - 1])
    })
  })

  test('Delete row', () => {
    const db = new Database(DBPATH)
    return db.all().then(async data1 => {
      db.run('DELETE FROM statement WHERE text=?;', ['TEST'], err => {
        if (err) throw err
      })
      const data2 = await db.all()
      expect(data1[data1.length - 1]).not.toEqual(data2[data2.length - 1])
    })
  })
})
