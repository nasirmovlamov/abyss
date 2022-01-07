import { SerializedError } from "@reduxjs/toolkit";
import { ForgetPasswordError, LoginAuthError, RegisterAuthError } from "./AppInterface";

export interface AUTH_INTERFACE {
    user:{
        name:string
        id:number
        email:string
        isVerified:boolean
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
        productMentions:boolean,
        areYouSureDelete_Comment_of_Question:boolean,
        areYouSureDelete_Comment_of_Answer:boolean,
        areYouSureDelete_Answer:boolean,
        areYouSureDelete_Thread:boolean,
        areYouSureDelete_Comment:boolean,
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
    },
    user_verify:{
        status:"pending" | "success" | "failed" | "not-verified" | "verified",
        message:null|string,
        errors:any
    } | null,
    resend_email:{
        status:"pending" | "success" | "failed" | "not-verified" | "verified",
        message:null|string,
        errors:any
    } | null
    user_forget_pass:{
        status:"pending" | "success" | "failed" | "idle",
        message:null|string,
        errors:any
    } 

}

