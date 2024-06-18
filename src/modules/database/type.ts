import type { RowDataPacket } from 'mysql2/promise'
import type { Snowflake } from 'discord.js'

export interface BaseData extends RowDataPacket {
  id: number
  text: string
  created_at: string
  persona: string
}

export interface ResponseData extends BaseData {
  search_text: string
  conversation: string
  in_response_to: string | null
  search_in_response_to: string
}

export interface LearnData extends RowDataPacket {
  id: number
  command: string
  result: string
  user_id: Snowflake
  created_at: string
}

export { BaseData as NSFWData }

export interface BaseTable<T, V> {
  name: string
  all(): Promise<T[]>
  findOne(key: V): Promise<T[]>
  insert(data: any): Promise<void>
  update(data: any): Promise<void>
  delete(key: V): Promise<void>
  findOneAnotherKey(key: string, data: any): Promise<T[]>
  execute<W>(sql: string, values?: any): Promise<W>
}
