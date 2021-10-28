import { AUTH_INTERFACE } from "../state-Interfaces/AuthInterface";


export const user_errors_data = {
    registerErrors:{
    errors:{
        email:[],
        password:[],
        name:[]
    }, 
    message:"" 
},
loginErrors:{
    errors:{
        email:[],
        password:[],
    }, 
    message:"" 
},
forgetPasswordErrors:{
    errors:{
        attempt:[],
    }, 
    message:"" 
}}

export const AUTH_STATE:AUTH_INTERFACE = {
    user: null ,
    status: 'loading',
    user_status:"loading",
    changeColor:false,
    loggedIn:null,
    message:null,
    userModals:{
        login:false,
        register:false,
        forgetPassword:false,
        isEmailSend:false,
        questionCreate:false,
        productCreate:false,
        discussionCreate:false,
        iterationCreate:false
    },
    forms:{
        registerForm:{
            email:"",
            name:"",
            password:""
        },
        loginForm:{
            email:"",
            password:""
        }
    },
    user_errors: user_errors_data ,
}

