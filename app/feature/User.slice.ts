import { AUTH_INTERFACE } from './../store/state-Interfaces/AuthInterface'
import {
  verifyEmail,
  resendEmail,
  checkForgetPasswordTokenThunk,
  changePasswordThunk,
} from './../thunks/AuthThunk'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  forgetPasswordThunk,
  userCheck,
  userLogin,
  userLogout,
  userRegister,
} from '../thunks/AuthThunk'
import { RootState } from '../store/store'
import { getKeyValue } from '../../logic/getKeyValue'
import toast from 'react-hot-toast'
import { ToastPosition } from 'react-hot-toast/dist/core/types'
import { AUTH_STATE, user_errors_data } from '../store/states/AuthState'
import { autoSuccessToaster } from '../../components/Notify/AutoSuccessToast'
import { autoErrorToaster } from '../../components/Notify/AutoErrorToaster'
import { removeAccessToken, setAccessToken } from '../../helpers/token/TokenHandle'
import { deleteCookie } from '../../logic/CookieFunctions'
import { on_change_password_interface } from '../store/state-Interfaces/AuthInterface'

export const UserSlice = createSlice({
  name: 'user-slice',
  initialState: AUTH_STATE,
  reducers: {
    changeModalAction(state, action) {
      state.user_errors = user_errors_data
      for (const [key, value] of Object.entries(state.userModals)) {
        if (key !== action.payload) {
          state.userModals = { ...state.userModals, [key]: false }
        }
      }
      state.userModals = {
        ...state.userModals,
        [action.payload]: !getKeyValue(state.userModals, action.payload),
      }
    },

    user_status_not_logged(state, action) {
      state.user_status = action.payload
    },

    changeColor(state, action) {
      state.changeColor = action.payload
    },

    register_Form_OnChange(state, action) {
      state.forms.registerForm = {
        ...state.forms.registerForm,
        [action.payload.name]: action.payload.value,
      }
    },

    login_Form_OnChange(state, action) {
      state.forms.loginForm = {
        ...state.forms.loginForm,
        [action.payload.name]: action.payload.value,
      }
    },

    form_change_password_onChange(state: any, { payload }) {
      state.on_change_password.data[payload.name] = payload.value
    },

    form_change_password_onBlur(state: any, { payload }) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      if (!state.on_change_password.data[payload.name].length) {
        state.on_change_password.errors[payload.name] = {
          errorMessage: `${payload.name} is required`,
        }
      } else if (!passwordRegex.test(state.on_change_password.data[payload.name])) {
        state.on_change_password.errors[payload.name] = {
          errorMessage: `${payload.name} must be at least 8 characters long, contain at least one number, one uppercase letter, one lowercase letter and one special character`,
        }
      } else {
        state.on_change_password.errors[payload.name] = { errorMessage: `` }
      }

      if (payload.name === 'password_confirmation') {
        if (
          state.on_change_password.data.password !==
          state.on_change_password.data.password_confirmation
        ) {
          state.on_change_password.errors[payload.name] = {
            isTouched: true,
            errorMessage: `${payload.name} must be same as password`,
          }
        }
      }

      state.on_change_password.isValid = true

      Object.keys(state.on_change_password.errors).map((key) => {
        if (state.on_change_password.errors[key].errorMessage) {
          state.on_change_password.isValid = false
        }
      })
    },
  },

  extraReducers: (builder) => {
    //Check User Reducers
    builder.addCase(userCheck.fulfilled, (state, { payload }) => {
      state.user = payload.data.data
      state.user_status = 'logged'
      state.loggedIn = true
    }),
      builder.addCase(userCheck.pending, (state, { payload }) => {
        state.user_status = 'loading'
      }),
      builder.addCase(userCheck.rejected, (state, { payload }) => {
        state.user_status = 'not-logged'
        state.loggedIn = false
        state.user = null
        removeAccessToken()
      }),
      // Logout
      builder.addCase(userLogout.fulfilled, (state, { payload }) => {
        state.status = 'idle'
        state.loggedIn = false
        state.user = null
        autoSuccessToaster(payload.message)
        removeAccessToken()
      }),
      builder.addCase(userLogout.pending, (state, { payload }) => {}),
      builder.addCase(userLogout.rejected, (state, { payload }) => {
        state.status = 'failed'
        state.loggedIn = false
        state.user = null
        removeAccessToken()
      }),
      //Login Reducers
      builder.addCase(userLogin.fulfilled, (state, { payload }) => {
        setAccessToken(payload.data.access_token)
        state.user = payload.data.user
        state.loggedIn = true
        state.status = 'idle'
        autoSuccessToaster(payload.message)
        state.userModals = { ...state.userModals, login: false }
      }),
      builder.addCase(userLogin.pending, (state, { payload }) => {
        state.status = 'loading'
      }),
      builder.addCase(userLogin.rejected, (state, action: any) => {
        state.status = 'failed'
        state.loggedIn = false
        removeAccessToken()
        if (action.payload) {
          state.user_errors.loginErrors.errors = action.payload.errors
          state.user_errors.loginErrors.message = action.payload.message
          state.user = null
          // autoErrorToaster(action.payload)
        }
      })

    //VErify Reducers
    builder.addCase(verifyEmail.fulfilled, (state, { payload }) => {
      state.user_verify = {
        status: 'success',
        message: payload.message,
        errors: payload.errors,
      }
      state.user!.isVerified = true
      autoSuccessToaster(payload.message)
    }),
      builder.addCase(verifyEmail.pending, (state, { payload }) => {
        // state.user_verify!.status = 'pending'
      }),
      builder.addCase(verifyEmail.rejected, (state, { payload }: any) => {
        console.log(payload)
        state.user_verify = {
          status: 'failed',
          message: payload.message,
          errors: payload.errors,
        }
        // state.user_verify!.errors = action.payload.data
        // removeAccessToken()
      })

    //Resend MAIL  Reducers
    builder.addCase(resendEmail.fulfilled, (state, { payload }) => {
      state.resend_email = {
        status: 'success',
        message: payload.message,
        errors: payload.errors,
      }
      autoSuccessToaster(payload.message)
    }),
      builder.addCase(resendEmail.pending, (state, { payload }) => {
        state.resend_email = {
          status: 'pending',
          message: '',
          errors: {},
        }
      }),
      builder.addCase(resendEmail.rejected, (state, { payload }: any) => {
        console.log(payload)
        state.resend_email = {
          status: 'failed',
          message: payload.message,
          errors: payload.errors,
        }
      })

    //Register Reducers
    builder.addCase(userRegister.fulfilled, (state, { payload }) => {
      setAccessToken(payload.data.access_token)
      state.loggedIn = true
      state.status = 'idle'
      state.user = payload.data.user
      autoSuccessToaster(payload.message)
      state.userModals = { ...state.userModals, register: false }
    }),
      builder.addCase(userRegister.pending, (state, { payload }) => {
        state.status = 'loading'
      }),
      builder.addCase(userRegister.rejected, (state, { payload }: any) => {
        state.status = 'failed'
        state.loggedIn = false
        removeAccessToken()
        state.user_errors.registerErrors = payload
        state.user = null
        // autoErrorToaster(payload)
      })

    //Forget Password Reducers
    builder.addCase(forgetPasswordThunk.fulfilled, (state, { payload }) => {
      state.userModals = {
        ...state.userModals,
        forgetPassword: false,
        isEmailSend: true,
      }
      state.user_forget_pass = {
        status: 'success',
        message: payload.message,
        errors: payload.errors,
      }
      autoSuccessToaster(payload.message)
    }),
      builder.addCase(forgetPasswordThunk.pending, (state, { payload }) => {
        state.user_forget_pass = {
          status: 'pending',
          message: '',
          errors: {},
        }
      }),
      builder.addCase(forgetPasswordThunk.rejected, (state, { payload }: any) => {
        state.user_forget_pass = {
          status: 'failed',
          message: payload.message,
          errors: payload.errors,
        }
      })

    //Forget Password CHECK TOKEN Reducers
    builder.addCase(checkForgetPasswordTokenThunk.fulfilled, (state, { payload }) => {
      state.user_check_pass_token = {
        data: payload.data,
        status: 'success',
        message: payload.message,
        errors: payload.errors,
      }
      autoSuccessToaster(payload.message)
    }),
      builder.addCase(checkForgetPasswordTokenThunk.pending, (state, { payload }) => {
        state.user_check_pass_token = {
          data: null,
          status: 'pending',
          message: '',
          errors: {},
        }
      }),
      builder.addCase(checkForgetPasswordTokenThunk.rejected, (state, { payload }: any) => {
        state.user_check_pass_token = {
          data: null,
          status: 'failed',
          message: payload.message,
          errors: payload.errors,
        }
      })

    //Forget Password CHECK TOKEN Reducers
    builder.addCase(changePasswordThunk.fulfilled, (state, { payload }) => {
      state.change_password = {
        data: payload.data,
        status: 'success',
        message: payload.message,
        errors: null,
      }
      setAccessToken(payload.data.access_token)
      state.user = payload.data.user
      state.loggedIn = true
      autoSuccessToaster(payload.message)
    }),
      builder.addCase(changePasswordThunk.pending, (state, { payload }) => {
        state.change_password = {
          data: null,
          status: 'pending',
          message: 'Loading ...',
          errors: null,
        }
      }),
      builder.addCase(changePasswordThunk.rejected, (state, { payload }: any) => {
        state.change_password = {
          data: null,
          status: 'failed',
          message: payload.message,
          errors: payload.errors,
        }
      })
  },
})

// action
export const {
  changeModalAction,
  form_change_password_onChange,
  form_change_password_onBlur,
  login_Form_OnChange,
  register_Form_OnChange,
  user_status_not_logged,
  changeColor,
} = UserSlice.actions

// data
export const register_errors = (state: RootState) =>
  state.userReducer.user_errors.registerErrors.errors
export const color_convert = (state: RootState) => state.userReducer.changeColor
export const login_errors = (state: RootState) => state.userReducer.user_errors.loginErrors.errors
export const forget_Password_Errors = (state: RootState) =>
  state.userReducer.user_errors.forgetPasswordErrors.errors
export const user_data = (state: RootState) => state.userReducer.user
export const user_modals = (state: RootState) => state.userReducer.userModals
export const user_verify = (state: RootState) => state.userReducer.user_verify
export const resend_mail = (state: RootState) => state.userReducer.resend_email
export const user_forget_pass = (state: RootState) => state.userReducer.user_forget_pass
export const user_forget_pass_check_token = (state: RootState) =>
  state.userReducer.user_check_pass_token
export const change_password_data = (state: RootState) => state.userReducer.change_password
export const form_change_password_data = (state: RootState) => state.userReducer.on_change_password

export const login_form = (state: RootState) => state.userReducer.forms.loginForm
export const register_form = (state: RootState) => state.userReducer.forms.registerForm

export const is_Logged = (state: RootState) => state.userReducer.loggedIn
export const is_logged = (state: RootState) => state.userReducer.loggedIn
export const is_loading = (state: RootState) => state.userReducer.status
export const user_status = (state: RootState) => state.userReducer.user_status

export default UserSlice.reducer
