import { User } from './User';

export interface Comment {
  id?: number
  user: User
  content: string
  isEdited?: boolean
}
