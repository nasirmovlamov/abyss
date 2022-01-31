import { AnyAction, createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';
import authService from 'app/api/services/auth.service';
import { AUTH_TOKEN, ENTRY_ROUTE } from 'app/constants';
import { withHandleRequestError } from 'app/hof/withHandleRequestError';
import { User } from 'app/interfaces/User';
import Cookie from 'app/utils/Cookie';
import Router from 'next/router';

interface State {
  isLoggedIn: boolean
  user?: User | null
  isLoading: boolean
  successMsg: string | null
  errorMsg: string | null
  errors: any[] | null
}

const initialState: State = {
  isLoggedIn: false,
  user: null,
  isLoading: false,
  successMsg: '',
  errorMsg: '',
  errors: null,
}

// Shared reducers
const handleAuthSuccess = (state: State, { payload }: { payload: any }) => {
  state.user = payload.data.user
  state.isLoggedIn = true
}
const handleAuthFail = (state: State) => {
  state.user = null
  state.isLoggedIn = false

  Cookie.delete(AUTH_TOKEN)
  Router.push(ENTRY_ROUTE)
}

// Thunks
export const authLogin = createAsyncThunk(
  'auth/login',
  withHandleRequestError(async (data: { email: string; password: string }) => {
    return await authService.login(data)
  }),
)

export const authRegister = createAsyncThunk(
  'auth/register',
  withHandleRequestError(async (data: { email: string; name: string; password: string }) => {
    return await authService.register(data)
  }),
)

export const authCheckToken = createAsyncThunk(
  'auth/checkToken',
  withHandleRequestError(async (_: void) => {
    return await authService.checkToken()
  }),
)

export const authLogout = createAsyncThunk(
  'auth/logout',
  withHandleRequestError(async (_: void) => {
    return await authService.logout()
  }),
)

export const authSendVerifyEmail = createAsyncThunk(
  'auth/sendVerifyEmail',
  withHandleRequestError(async (_: void) => {
    return await authService.sendVerifyEmail()
  }),
)

export const authVerifyEmail = createAsyncThunk(
  'auth/verifyEmail',
  withHandleRequestError(async (link: string) => {
    return await authService.verifyEmail(link)
  }),
)

export const authSendPassResetEmail = createAsyncThunk(
  'auth/sendPassResetEmail',
  withHandleRequestError(async (email: string) => {
    return await authService.sendPassResetEmail(email)
  }),
)

export const authCheckPassReset = createAsyncThunk(
  'auth/checkPassReset',
  withHandleRequestError(async (token: string) => {
    return await authService.checkPassReset(token)
  }),
)

export const authResetPassword = createAsyncThunk(
  'auth/resetPassword',
  withHandleRequestError(async (data: { email: string; password: string; token: string }) => {
    return await authService.resetPassword(data)
  }),
)

const authActions = [
  authLogin,
  authRegister,
  authCheckToken,
  authLogout,
  authSendVerifyEmail,
  authVerifyEmail,
  authSendPassResetEmail,
  authCheckPassReset,
  authResetPassword,
]

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Login
    builder.addCase(authLogin.fulfilled, (state, { payload }: { payload: any }) => {
      handleAuthSuccess(state, { payload })

      Cookie.set(AUTH_TOKEN, payload.data.access_token, new Date(payload.data.expires_at))
    })
    builder.addCase(authLogin.rejected, handleAuthFail)

    // Register
    builder.addCase(authRegister.fulfilled, (state, { payload }: { payload: any }) => {
      handleAuthSuccess(state, { payload })
      Cookie.set(AUTH_TOKEN, payload.data.access_token, new Date(payload.data.expires_at))
    })
    builder.addCase(authRegister.rejected, handleAuthFail)

    // Check token
    builder.addCase(authCheckToken.fulfilled, (state, { payload }: { payload: any }) => {
      state.user = payload.data
      state.isLoggedIn = true
    })
    builder.addCase(authCheckToken.rejected, handleAuthFail)

    // Logout
    builder.addCase(authLogout.fulfilled, handleAuthFail)

    // Verify email
    builder.addCase(authVerifyEmail.fulfilled, (state) => {
      if (state.user) state.user = { ...state.user, isVerified: true }
    })

    // Add default behavior for all actions
    builder.addMatcher((isFulfilled as any)(...authActions), (state, { payload }: AnyAction) => {
      state.isLoading = false
      state.errorMsg = ''
      state.errors = null
      if (payload) state.successMsg = payload.message
    })
    builder.addMatcher((isPending as any)(...authActions), (state) => {
      state.isLoading = true
    })
    builder.addMatcher((isRejected as any)(...authActions), (state, { payload }: AnyAction) => {
      state.isLoading = false
      state.successMsg = ''
      if (payload) {
        state.errors = payload.errors
        state.errorMsg = payload.message
      }
    })
  },
})

export const authReducer = authSlice.reducer
