import { linked_products } from '../../feature/CreateQuestionFeatures/CreateQuestion.slice'
import { USER_INTERFACE } from '../../../components/AnswersCont'

export interface ANSWER_INTERFACE {
  id: number
  parent_id: number
  user: USER_INTERFACE
  content: string
  created_at: string
  comment_count: number
  updated_at: string
  linked_products: any[]
  user_votes: {
    id: number
    user_id: number
    answer_id: number
    type: string
    created_at: string
    updated_at: string
  } | null
}

export interface ANSWER_SUBMIT_INTERFACE {
  content: string
  linkedProducts: { id: number }[]
  mentionedUsers: { id: number }[]
}

export interface QUESTION_INTERFACE {
  status: 'idle' | 'loading' | 'failed'
  errors: any
  question_data: question_data_interface | null
  answersData: AnswerDataInterface
  answerSubmitData: ANSWER_SUBMIT_INTERFACE
  delete_options: {
    id: number
    answer_id: number | undefined
    question_id: number | undefined
    comment_id: number | undefined
    answer_delete_status: 'success' | 'failed' | 'pending'
    question_delete_status: 'success' | 'failed' | 'pending'
  } | null
  linkedProductsData: {
    linkedProducts: any[]
    status: 'loading' | 'idle' | 'failed'
    current_page: number
    last_page: number
    total: number
  }
  mentionsOfLinkedProduct: {
    productId: number | null
    mentions: any[]
    status: 'loading' | 'idle' | 'failed' | 'pending'
    current_page: 1
    last_page: 1
    total: 0
  }
  edit_answer: {
    id: number
    new_content: string
    direction: string
    status: 'pending' | 'success' | 'failed'
    errors: any
    linkedProducts: any[]
    mentionedUsers: any[]
  } | null
  edit_question: {
    id: number
    new_content: string
    status: 'pending' | 'success' | 'failed'
    errors: any
    linkedProducts: any[]
    mentionedUsers: any[]
  } | null
}

export interface AnswerDataInterface {
  questionId: number | null
  topPage: number
  downPage: number
  totalPage: number
  submittedAnswer: ANSWER_INTERFACE[]
  topAnswers: {
    status: 'loading' | 'idle' | 'failed'
    answers: ANSWER_INTERFACE[]
  }
  downAnswers: {
    status: 'loading' | 'idle' | 'failed'
    answers: ANSWER_INTERFACE[]
  }
}

export interface question_data_interface {
  status: 'loading' | 'idle' | 'failed'
  id: number
  upvote: number
  downvote: number
  answer_count: number
  category: { id: number; name: string; slug: string; sort: number }
  linked_products: { [key: string]: any }[]
  closed_at: null
  comment_count: number
  content: string
  created_at: string
  last_active_at: string
  slug: string
  tags: string
  title: string
  updated_at: string
  user: { id: number; email: string; name: string }
  user_votes: {
    created_at: string
    id: number
    thread_id: number
    type: string
    updated_at: string
    user_id: number
  } | null
  view_count: number
}
