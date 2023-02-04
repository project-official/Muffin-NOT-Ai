import { createPool } from 'mysql2/promise'
import 'dotenv/config'

export interface ResponseData {
  id: number
  text: string
  search_text: string
  conversation: string
  created_at: string
  in_response_to: string | null
  search_in_response_to: string
  persona: string
}

export default createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
})
