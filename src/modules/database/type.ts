import type { RowDataPacket } from 'mysql2/promise'
import type { Snowflake } from 'discord.js'

export interface BaseData extends RowDataPacket {
  id: number
  user_id: Snowflake
  created_at: string
}

export interface LearnData extends BaseData {
  command: string
  result: string
}

export interface UserData extends BaseData {
  money: bigint
  blocked: boolean
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
