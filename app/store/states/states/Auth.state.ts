import { AUTH_INTERFACE } from '../interfaces/Auth.interface';
export const user_errors_data = {
  registerErrors: {
    errors: {
      email: [],
      password: [],
      name: [],
    },
    message: '',
  },
  loginErrors: {
    errors: {
      email: [],
      password: [],
    },
    message: '',
  },
  forgetPasswordErrors: {
    errors: {
      attempt: [],
    },
    message: '',
  },
}

export const AUTH_STATE: AUTH_INTERFACE = {
  user: null,
  status: 'loading',
  user_status: 'loading',
  changeColor: false,
  loggedIn: null,
  message: null,
  userModals: {
    login: false,
    register: false,
    forgetPassword: false,
    isEmailSend: false,
    questionCreate: false,
    productCreate: false,
    discussionCreate: false,
    iterationCreate: false,
    productMentions: false,
    areYouSureDelete_Comment_of_Question: false,
    areYouSureDelete_Comment_of_Answer: false,
    areYouSureDelete_Answer: false,
    areYouSureDelete_Thread: false,
    areYouSureDelete_Comment: false,
  },
  forms: {
    registerForm: {
      email: '',
      name: '',
      password: '',
    },
    loginForm: {
      email: '',
      password: '',
    },
  },
  user_errors: user_errors_data,
  user_verify: {
    status: 'pending',
    message: '',
    errors: {},
  },
  user_forget_pass: {
    status: 'idle',
    message: '',
    errors: {},
  },
  user_check_pass_token: {
    data: null,
    status: 'idle',
    message: '',
    errors: {},
  },
  resend_email: {
    status: 'pending',
    message: '',
    errors: {},
  },
  on_change_password: {
    isValid: false,
    data: {
      password: '',
      password_confirmation: '',
    },
    errors: {
      password: {
        errorMessage: '',
      },
      password_confirmation: {
        errorMessage: '',
      },
    },
  },
  change_password: {
    data: null,
    status: 'pending',
    message: '',
    errors: {},
  },
}
