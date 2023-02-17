import {
  createConnection,
  RowDataPacket,
  ConnectionOptions,
} from 'mysql2/promise'
import 'dotenv/config'

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

export const config: ConnectionOptions = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: (process.env.MYSQL_PORT as unknown as number) || 3306,
}

export { BaseData as NSFWData }

export default createConnection(config)
