import { USER_INTERFACE } from '../../../components/layouts/Answers.layout'

export interface CommentsInterface {
  comments: CommentInterface[]
  commentsType: {
    id: number
    type: 'answer' | 'thread'
    showComments: boolean
    title: string
    user: USER_INTERFACE
  } | null
  commentsStatus: 'idle' | 'loading'
  isCommentOpened: boolean
  isAnswer: number | null
  isQuestion: number | null
  delete_options: {
    id: number
  } | null
  commentsErrors: {
    email: string[]
    content: string[]
    token: string[]
  }
  edit_comment: {
    id: number
    new_content: string
    status: 'pending' | 'success' | 'failed'
    errors: any
  } | null
}

export interface CommentInterface {
  id: number
  user: {
    id: number
    name: string
    email: string
  }
  answer_id: number
  content: string
  created_at: string
  updated_at: string
}
