import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { forgetPasswordThunk, userCheck, userLogin, userLogout, userRegister,  } from '../thunks/AuthThunk'
import { RootState } from '../store/store'
import { getKeyValue } from '../../logic/getKeyValue'
import toast from 'react-hot-toast'
import { ToastPosition } from 'react-hot-toast/dist/core/types'
import { AUTH_STATE, user_errors_data } from '../store/states/AuthState'
import { autoSuccessToaster } from '../../components/Notify/AutoSuccessToast'
import { autoErrorToaster } from '../../components/Notify/AutoErrorToaster'
import { removeAccessToken, setAccessToken } from '../../helpers/token/TokenHandle'
import { deleteCookie } from '../../logic/CookieFunctions'



export const UserSlice = createSlice({
    name: 'user-slice',
    initialState:AUTH_STATE,
    reducers: {
        changeModalAction(state, action) {
            state.user_errors = user_errors_data
            for (const [key, value] of Object.entries(state.userModals)) {
                if(key !== action.payload)
                {
                    state.userModals = {...state.userModals,[key]:false}
                }
            }
            state.userModals = {...state.userModals, [action.payload]:!getKeyValue(state.userModals, action.payload)}
        },

        user_status_not_logged(state, action) {
            state.user_status = action.payload
        },

        changeColor(state, action) {
            state.changeColor = action.payload
        },

        register_Form_OnChange(state, action) {
            state.forms.registerForm =  {...state.forms.registerForm , [action.payload.name]:action.payload.value}
        },  

        login_Form_OnChange(state, action) {
            state.forms.loginForm =  {...state.forms.loginForm , [action.payload.name]:action.payload.value}
        },
    },

    extraReducers: (builder) => {
        //Check User Reducers
        builder.addCase(userCheck.fulfilled, (state, {payload}) => {
            state.user = payload.data.data
            state.user_status = 'logged'
            state.loggedIn = true   
        }),
        builder.addCase(userCheck.pending, (state, {payload}) => {
            state.user_status = 'loading'
        }),
        builder.addCase(userCheck.rejected, (state, {payload}) => {
            state.user_status = 'not-logged'
            state.loggedIn = false
            state.user = null
            removeAccessToken()
        }),


        // Logout
        builder.addCase(userLogout.fulfilled, (state, {payload}) => {
            state.status = 'idle'
            state.loggedIn = false
            state.user = null
            autoSuccessToaster(payload.message)
            removeAccessToken()
        }),

        builder.addCase(userLogout.pending, (state, {payload}) => {
        }),

        builder.addCase(userLogout.rejected, (state, {payload}) => {
            state.status = 'failed'
            state.loggedIn = false
            state.user = null
            removeAccessToken()
        }),


        //Login Reducers
        builder.addCase(userLogin.fulfilled, (state, {payload}) => {
            setAccessToken(payload.data.access_token)
            state.user =  payload.data.user
            state.loggedIn = true
            state.status = 'idle'
            autoSuccessToaster(payload.message)
            state.userModals = {...state.userModals, 'login':false}
        }),

        builder.addCase(userLogin.pending, (state, {payload}) => {
            state.status = 'loading'
        }),

        builder.addCase(userLogin.rejected, (state,action:any) => {
            state.status = 'failed'
            state.loggedIn = false
            removeAccessToken()
            if(action.payload)
            {
                state.user_errors.loginErrors.errors = action.payload.errors
                state.user_errors.loginErrors.message = action.payload.message
                state.user = null
                autoErrorToaster(action.payload)
            }
        })  


        //Register Reducers
        builder.addCase(userRegister.fulfilled, (state, {payload}) => {
            setAccessToken(payload.data.access_token)
            state.loggedIn = true
            state.status = 'idle'
            state.user = payload.data.user
            autoSuccessToaster(payload.message)
            state.userModals = {...state.userModals, 'register':false}
        }),
        builder.addCase(userRegister.pending, (state, {payload}) => {
            state.status = 'loading'
        }),
        builder.addCase(userRegister.rejected, (state, action) => {
            state.status = 'failed'
            state.loggedIn = false
            removeAccessToken()
            if (action.payload) {                    
                state.user_errors.registerErrors = action.payload      
                state.user = null
                autoErrorToaster(action.payload)
            } 
        })














        //Forget Password Reducers
        builder.addCase(forgetPasswordThunk.fulfilled, (state, {payload}) => {
            state.userModals = {...state.userModals, 'forgetPassword':false , 'isEmailSend':true}
            state.status = 'idle'
        }),
        builder.addCase(forgetPasswordThunk.pending, (state, {payload}) => {
            state.status = 'loading'
        }),
        builder.addCase(forgetPasswordThunk.rejected, (state, action) => {
            state.status = 'failed'
            state.loggedIn = false
            autoErrorToaster(action.payload)
        })  
    }

})


// action
export const { changeModalAction } = UserSlice.actions;
export const { login_Form_OnChange } = UserSlice.actions;
export const { register_Form_OnChange } = UserSlice.actions;
export const { user_status_not_logged } = UserSlice.actions;
export const { changeColor } = UserSlice.actions;




// data
export const register_errors = (state: RootState) => state.userReducer.user_errors.registerErrors.errors;
export const color_convert = (state: RootState) => state.userReducer.changeColor;
export const login_errors = (state: RootState) => state.userReducer.user_errors.loginErrors.errors;
export const forget_Password_Errors = (state: RootState) => state.userReducer.user_errors.forgetPasswordErrors.errors;
export const user_data = (state: RootState) => state.userReducer.user
export const user_modals = (state: RootState) => state.userReducer.userModals

export const login_form = (state: RootState) => state.userReducer.forms.loginForm
export const register_form = (state: RootState) => state.userReducer.forms.registerForm



export const is_Logged = (state: RootState) => state.userReducer.loggedIn
export const is_loading = (state: RootState) => state.userReducer.status
export const user_status = (state: RootState) => state.userReducer.user_status


export default UserSlice.reducer;






