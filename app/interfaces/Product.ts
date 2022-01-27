import { Thread } from './Thread';
import { User } from './User';

export interface Product {
  id?: number
  user: User
  threads: Thread[]
  name: string
  slug: string
  description: string
  price: number
  rate: number
  tags: string[]
  download_count: number
  created_at: string
  updated_at: string
}
