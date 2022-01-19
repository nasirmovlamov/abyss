import { SerializedError } from '@reduxjs/toolkit'
import { ForgetPasswordError, LoginAuthError, RegisterAuthError } from './AppInterface'

export interface AUTH_INTERFACE {
  user: {
    name: string
    id: number
    email: string
    isVerified: boolean
  } | null
  status: 'idle' | 'loading' | 'failed'
  changeColor: boolean
  user_status: 'loading' | 'logged' | 'not-logged'
  loggedIn: boolean | null
  message: null | string
  userModals: modals
  forms: loginAndRegisterForms
  user_errors: user_errors
  user_verify: user_verify
  resend_email: resend_email
  user_forget_pass: user_forget_pass
  user_check_pass_token: user_check_pass_token
  on_change_password: on_change_password_interface
  change_password: change_password
}
export interface modals {
  login: boolean
  register: boolean
  forgetPassword: boolean
  isEmailSend: boolean
  questionCreate: boolean
  productCreate: boolean
  discussionCreate: boolean
  iterationCreate: boolean
  productMentions: boolean
  areYouSureDelete_Comment_of_Question: boolean
  areYouSureDelete_Comment_of_Answer: boolean
  areYouSureDelete_Answer: boolean
  areYouSureDelete_Thread: boolean
  areYouSureDelete_Comment: boolean
}
export interface loginAndRegisterForms {
  registerForm: {
    email: string
    name: string
    password: string
  }
  loginForm: {
    email: string
    password: string
  }
}
export interface user_errors {
  registerErrors: RegisterAuthError
  loginErrors: LoginAuthError
  forgetPasswordErrors: ForgetPasswordError
}
export interface user_verify {
  status: 'pending' | 'success' | 'failed' | 'not-verified' | 'verified'
  message: string
  errors: any
}
export interface resend_email {
  status: 'pending' | 'success' | 'failed' | 'not-verified' | 'verified'
  message: string
  errors: any
}
export interface on_change_password_interface {
  isValid: boolean
  data: {
    password: ''
    password_confirmation: ''
  }
  errors: {
    password: {
      errorMessage: ''
    }
    password_confirmation: {
      errorMessage: ''
    }
  }
}
export interface change_password {
  data: null | any
  status: 'pending' | 'success' | 'failed' | 'idle'
  message: string
  errors: any
}
export interface user_check_pass_token {
  data: null | any
  status: 'pending' | 'success' | 'failed' | 'idle'
  message: string
  errors: any
}
export interface user_forget_pass {
  status: 'pending' | 'success' | 'failed' | 'idle'
  message: string
  errors: any
}
