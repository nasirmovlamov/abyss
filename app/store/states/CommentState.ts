import { CommentsInterface } from "../state-Interfaces/CommentInterface";


export const CommentsState:CommentsInterface = {
    comments:[],
    commentsType:null,
    commentsStatus:"idle",
    isCommentOpened:false,
    isAnswer:null,    
    isQuestion:null,    
    commentsErrors:{
        email:[],
        content:[],
        token:[]
    } 
}