import { AUTH_INTERFACE } from './Auth.interface';
import { QUESTION_INTERFACE } from './Question.interface';

export interface APP_INTERFACE {
  AUTH_STATE: AUTH_INTERFACE
  QUESTION_STATE: QUESTION_INTERFACE
  PAGE_OVERFLOWY: 'hidden' | 'scroll'
  CommentsSection: {
    id: number | null
    comments: []
    isShown: boolean
  }
}

export interface MyData {
  data: {
    user: {
      id: number
      name: string
      email: string
      verify: boolean
    }
    access_token: string
    token_type: string
    expires_at: string
  }
  message: string
  errors: null
}

export interface RegisterAuthError {
  errors: {
    email: string[]
    password: string[]
    name: string[]
  }
  message: string
}

export interface LoginAuthError {
  errors: {
    email: string[]
    password: string[]
  }
  message: string
}

export interface ForgetPasswordError {
  errors: {
    attempt: string[]
  }
  message: string
}

export interface RegisterAttributes {
  email: string
  name: string
  password: string
}

export interface LoginAttributes {
  user: {
    email: string
    password: string
  }
}
