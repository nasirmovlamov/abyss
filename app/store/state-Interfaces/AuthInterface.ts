import { SerializedError } from "@reduxjs/toolkit";
import { ForgetPasswordError, LoginAuthError, RegisterAuthError } from "./AppInterface";

export interface AUTH_INTERFACE {
    user:{
        name:string
        id:number
        email:string
    } | null,
    status:'idle'| 'loading' | 'failed',
    changeColor:boolean
    user_status:"loading" | "logged" | "not-logged",
    loggedIn:boolean|null,
    message:null|string,
    userModals:{
        login:boolean
        register:boolean
        forgetPassword:boolean,
        isEmailSend:boolean,
        questionCreate:boolean,
        productCreate:boolean,
        discussionCreate:boolean,
        iterationCreate:boolean,
    }
    forms:{
        registerForm:{
            email:string,
            name:string,
            password:string
        },
        loginForm:{
            email:string,
            password:string
        }
    },
    user_errors:{
        registerErrors: RegisterAuthError , 
        loginErrors: LoginAuthError
        forgetPasswordErrors: ForgetPasswordError ,
    }
}

