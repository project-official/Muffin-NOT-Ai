import { type PoolConnection } from 'mysql2/promise'

export default async function run(db: PoolConnection, fn: () => Promise<any>) {
  try {
    await db.beginTransaction()
    await fn()
    await db.commit()
  } catch (err) {
    console.error(err)
    await db.rollback()
  } finally {
    db.release()
  }
}
