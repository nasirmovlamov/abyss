import { successToast } from './../../components/Notify/SuccessToast';
import { RootState } from '../store/store'
import { createSlice} from '@reduxjs/toolkit'
import { autoErrorToaster } from '../../components/Notify/AutoErrorToaster'
import { autoSuccessToaster } from '../../components/Notify/AutoSuccessToast'
import { CommentsState } from '../store/states/CommentState'
import { addAnswerComment, addQuestionComment, getAnswerComments, getQuestionComments } from '../thunks/CommentsThunk'
import { deleteComment } from '../thunks/QuestionThunk'



export const CommentsSlice = createSlice({
    name: 'comments-slice',
    initialState:CommentsState ,
    reducers: {
        showComments(state, {payload}) {
            state.isCommentOpened = true
            if(payload)
            {
                const {id , type , showComments, title, user , isQuestion , isAnswer}  = payload
                state.commentsType = {id:id, type:type , showComments:showComments, title:title, user:user} 
                state.isCommentOpened = true
                state.isQuestion = isQuestion
                state.isAnswer = isAnswer
            }
            else
            {
                state.commentsType = payload 
            }

        },
        closeComments(state, {payload}) {
            state.commentsType = null 
            state.isCommentOpened = false
            state.isAnswer = null
            state.isQuestion = null
        },
    },

    extraReducers: (builder) => {
        //GET QUESTION COMMETS Reducers
        builder.addCase(getQuestionComments.fulfilled, (state, {payload}) => {
            state.comments = payload.data
            state.commentsStatus = 'idle'
        }),
        builder.addCase(getQuestionComments.pending, (state, {payload}) => {
            state.commentsStatus = 'loading'
        }),
        builder.addCase(getQuestionComments.rejected, (state, action:any) => {
            state.commentsStatus = 'idle'
            if (action.payload) {        
                state.commentsErrors = action.payload.errors
            } 
            else 
            {
                state.commentsErrors = action.errors
            }
        }) ,

        //GET ANSWER COMMETS Reducers
        builder.addCase(getAnswerComments.fulfilled, (state, {payload}) => {
            state.comments = payload.data
            state.commentsStatus = 'idle'
        }),
        builder.addCase(getAnswerComments.pending, (state, {payload}) => {
            state.commentsStatus = 'loading'
        }),
        builder.addCase(getAnswerComments.rejected, (state, action:any) => {
            state.commentsStatus = 'idle'
            if (action.payload) {        
                state.commentsErrors = action.payload.errors
            } 
            else 
            {
                state.commentsErrors = action.errors
            }
        }) ,




        //ADD QUESTION COMMETS Reducers
        builder.addCase(addQuestionComment.fulfilled, (state, {payload}) => {
            state.comments = [...state.comments , payload.data]
            autoSuccessToaster(payload.message)
            }),
        builder.addCase(addQuestionComment.pending, (state, {payload}) => {
        }),
        builder.addCase(addQuestionComment.rejected, (state, action) => {
            autoErrorToaster(action.payload)
        }) ,


        //ADD ANSWER COMMETS Reducers
        builder.addCase(addAnswerComment.fulfilled, (state, {payload}) => {
            state.comments = [...state.comments , payload.data]
            autoSuccessToaster(payload.message)
        }),
        builder.addCase(addAnswerComment.pending, (state, {payload}) => {
        }),
        builder.addCase(addAnswerComment.rejected, (state, action) => {
            autoErrorToaster(action.payload)
        }) 


        //Delete Comment THUNK
        builder.addCase(deleteComment.fulfilled, (state, {payload}) => {
            state.comments = state.comments.filter(answer => answer.id !== payload.id)
            successToast("top-right" ,payload.data.message)
        }),
        builder.addCase(deleteComment.pending, (state, {payload}) => {
        }),
        builder.addCase(deleteComment.rejected, (state, {payload}) => {
            autoErrorToaster(payload)
        }) 


    }

})


// action
export const { showComments , closeComments } = CommentsSlice.actions;




// data
export const comments_errors = (state: RootState) => state.commentsReducer.commentsErrors
export const comments = (state: RootState) => state.commentsReducer.comments
export const comments_types = (state: RootState) => state.commentsReducer.commentsType
export const is_comment_opened = (state: RootState) => state.commentsReducer.isCommentOpened
export const is_question = (state: RootState) => state.commentsReducer.isQuestion
export const is_answer = (state: RootState) => state.commentsReducer.isAnswer
export const comments_status = (state: RootState) => state.commentsReducer.commentsStatus


export default CommentsSlice.reducer;






