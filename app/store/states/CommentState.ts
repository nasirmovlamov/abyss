import { CommentsInterface } from "../state-Interfaces/CommentInterface";


export const CommentsState:CommentsInterface = {
    comments:[],
    commentsType:null,
    commentsStatus:"idle",
    isCommentOpened:false,
    isAnswer:null,    
    isQuestion:null,    
    delete_options:null,
    commentsErrors:{
        email:[],
        content:[],
        token:[]
    },
    edit_comment:null
}