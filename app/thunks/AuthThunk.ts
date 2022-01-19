import { BASE_API_URL } from '../../helpers/urls/BASE_URL'
import * as types from '../constants/App.contants'
import { AsyncThunk, createAction, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import {
  APP_INTERFACE,
  ForgetPasswordError,
  LoginAttributes,
  LoginAuthError,
  MyData,
  RegisterAttributes,
  RegisterAuthError,
} from '../store/state-Interfaces/AppInterface'
import { BASE_API_INSTANCE } from '../../helpers/api/BaseInstance'
import { URL } from '../../helpers/urls/URLS'

export const userCheck = createAsyncThunk(types.GET_USER, async (token, { rejectWithValue }) => {
  try {
    const data = await BASE_API_INSTANCE.get(URL.CHECK_USER)
    return data
  } catch (error: any) {
    return rejectWithValue(error.response.data)
  }
})

export const forgetPasswordThunk = createAsyncThunk(
  types.FORGET_PASSWORD,
  async (email: string, { rejectWithValue }) => {
    try {
      const formData = new FormData()
      formData.append('email', email)
      const resp = await BASE_API_INSTANCE.post(URL.PASSWORD_RESET_EMAIL, formData)
      return resp.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const checkForgetPasswordTokenThunk = createAsyncThunk(
  types.CHECK_FORGET_PASSWORD_THUNK,
  async (url: string, { rejectWithValue }) => {
    try {
      const resp = await BASE_API_INSTANCE.get(url)
      return resp.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const changePasswordThunk = createAsyncThunk(
  types.CHANGE_PASSWORD,
  async (form_data: FormData, { rejectWithValue }) => {
    try {
      const resp = await BASE_API_INSTANCE.post(URL.PASSWORD_RESET, form_data)
      return resp.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const userLogout = createAsyncThunk(types.LOGOUT, async (token, { rejectWithValue }) => {
  try {
    const resp = await BASE_API_INSTANCE.get(URL.LOGOUT)
    return resp.data
  } catch (error: any) {
    return rejectWithValue(error.response.data)
  }
})

export const verifyEmail = createAsyncThunk(
  types.VERIFY_EMAIL,
  async (url: any, { rejectWithValue }) => {
    try {
      const resp = await BASE_API_INSTANCE.get(url)
      return resp.data
    } catch (e: any) {
      return rejectWithValue(e.response.data)
    }
  },
)

export const resendEmail = createAsyncThunk(
  types.RESEND_EMAIL,
  async (data: null, { rejectWithValue }) => {
    try {
      const resp = await BASE_API_INSTANCE.post('/email/resend')
      return resp.data
    } catch (e: any) {
      return rejectWithValue(e.response.data)
    }
  },
)

export const userLogin = createAsyncThunk(
  types.LOGIN,
  async (user: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const login_form = new FormData()
      login_form.append('email', user.email)
      login_form.append('password', user.password)
      const data = await BASE_API_INSTANCE.post(URL.LOGIN, login_form)
      return data.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const userRegister = createAsyncThunk(
  types.REGISTER,
  async (user: any, { rejectWithValue }: any) => {
    try {
      const login_form = new FormData()
      login_form.append('name', user.name)
      login_form.append('email', user.email)
      login_form.append('password', user.password)
      const resp = await BASE_API_INSTANCE.post(URL.REGISTER, login_form)

      return resp.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)
