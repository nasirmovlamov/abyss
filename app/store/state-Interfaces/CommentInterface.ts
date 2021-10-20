import { SerializedError } from "@reduxjs/toolkit";
import { USER_INTERFACE } from "../../../components/AnswersCont";




export interface CommentsInterface {
    comments:CommentInterface[],
    commentsType:{
        id:number, 
        type:"answer" | "question"  
        showComments:boolean , 
        title:string , 
        user:USER_INTERFACE
    } | null
    commentsStatus:"idle" | "loading"
    isCommentOpened:boolean,
    isAnswer:number | null,
    isQuestion:number | null,
    commentsErrors:{
        email:string[],
        content:string[]
        token:string[]
    } 
}

export interface CommentInterface {
    id: number,
    user: {
        id: number,
        name:string,
        email: string
    },
    answer_id: number,
    content:string,
    created_at:string,
    updated_at: string
}