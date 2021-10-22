import { CommentsInterface } from "../state-Interfaces/CommentInterface";


export const CommentsState:CommentsInterface = {
    comments:[],
    commentsType:null,
    commentsStatus:"idle",
    isCommentOpened:true,
    isAnswer:null,    
    isQuestion:null,    
    commentsErrors:{
        email:[],
        content:[],
        token:[]
    } 
}