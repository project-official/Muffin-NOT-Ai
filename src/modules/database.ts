import { type RowDataPacket, createPool } from 'mysql2/promise'
import config from '../../config.json'
import { type Snowflake } from 'discord.js'

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

const database = createPool({
  ...config.mysql,
  keepAliveInitialDelay: 10000,
  enableKeepAlive: true,
})

export default database
