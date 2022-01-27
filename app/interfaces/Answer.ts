import { Product } from './Product';
import { User } from './User';

export interface Answer {
  id?: number
  user: User
  content: string
  upvote: number
  downvote: number
  linked_products?: Product[]
  comment_count: number
  user_votes: number
  isEdited: boolean
  created_at: string
  updated_at: string
}
