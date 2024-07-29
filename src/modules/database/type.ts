import type { RowDataPacket } from 'mysql2/promise'
import type { Snowflake } from 'discord.js'

export interface LearnData extends RowDataPacket {
  id: number
  command: string
  result: string
  user_id: Snowflake
  created_at: string
}

export interface BaseTable<T, V> {
  name: string
  all(): Promise<T[]>
  findOne(key: V): Promise<T[]>
  insert(data: any): Promise<void>
  update(data: any): Promise<void>
  delete(key: V): Promise<void>
  findOneAnotherKey(key: string, data: any): Promise<T[]>
}
