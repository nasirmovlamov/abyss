import { linked_products } from './../../feature/CreateQuestionFeatures/CreateQuestionFeatures';
import { USER_INTERFACE } from "../../../components/AnswersCont";

export interface ANSWER_INTERFACE {
    id:number, 
    parent_id:number,
    user:USER_INTERFACE ,
    content:string,
    created_at:string,
    updated_at:string ,
    user_votes:{
            id:number,
            user_id:number,
            answer_id:number,
            type:string,
            created_at:string,
            updated_at:string
    } | null
}

export interface ANSWER_SUBMIT_INTERFACE {
    content:string , 
    linkedProducts:{id:number}[],
    mentionedUsers:{id:number}[]
}

export interface QUESTION_INTERFACE {
    status:"idle" | "loading" | "failed",
    singleQuestionData:SingleFormDataInterface
    answersData:AnswerDataInterface
    answerSubmitData:ANSWER_SUBMIT_INTERFACE
    linkedProductsData:{
        linkedProducts:any[],
        status:"loading" | "idle" | "failed",
        current_page:number,
        last_page:number,
        total:number,
    },
    mentionsOfLinkedProduct:{
        productId:number | null,
        mentions:any[],
        status:"loading" | "idle" | "failed" | "pending",
        current_page:1,
        last_page:1,
        total:0,
    }
}

export interface AnswerDataInterface{
    questionId:number | null , 
    topPage:number,
    downPage:number,
    totalPage:number,
    submittedAnswer:ANSWER_INTERFACE[],
    topAnswers:{
        status:"loading" | "idle" | "failed",
        answers:ANSWER_INTERFACE[]
    },
    downAnswers:{
        status:"loading" | "idle" | "failed",
        answers:ANSWER_INTERFACE[]
    },
}




export interface SingleFormDataInterface{
    status:"loading" | "idle" | "failed",
    id:number ,
    answer_count:number,
    category:{id:number, name:string, slug:string,sort:number}
    linked_products:{[key:string] : any}[],
    closed_at:null,
    comment_count:number,
    content:string,
    created_at:string,
    last_active_at:string,
    upvote:number,
    slug:string,
    tags:string,
    title:string,
    updated_at:string,
    user:{id:number,email:string,name:string}
    user_votes:{
        created_at: string
        id: number
        thread_id: number
        type: string
        updated_at:string
        user_id: number}|null
    view_count:number
}


