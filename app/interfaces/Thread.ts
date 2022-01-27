import { Product } from './Product';
import { User } from './User';

export interface Thread {
  id?: number
  user: User
  title: string
  slug: string
  description: string
  tags: string[]
  accepted_answer_id: number
  linked_products?: Product[]
  answer_count: number
  comment_count: number
  view_count: number
  upvote: number
  downvote: number
  type: string
  product: string | null
  isEdited?: boolean
  last_active_at: string
  created_at: string
  updated_at: string
  closed_at: string
}
