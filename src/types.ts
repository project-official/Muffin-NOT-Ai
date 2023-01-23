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
