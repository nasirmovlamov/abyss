import {
  addAnswerComment,
  addQuestionComment,
  edit_Answer_CommentThunk,
  edit_Question_CommentThunk,
  getAnswerComments,
  getQuestionComments,
} from '../thunks/Comments.thunk'

import { CommentsState } from '../states/states/Comment.state'
import { RootState } from '..'
import { autoErrorToaster } from '../../components/ui/toasters/AutoErrorToaster'
import { autoSuccessToaster } from '../../components/ui/toasters/AutoSuccessToast'
import { createSlice } from '@reduxjs/toolkit'
import { deleteComment } from '../thunks/Question.thunk'
import { successToast } from '../../components/ui/toasters/SuccessToast'

export const CommentsSlice = createSlice({
  name: 'comments-slice',
  initialState: CommentsState,
  reducers: {
    showComments(state, { payload }) {
      state.isCommentOpened = true
      if (payload) {
        const { id, type, showComments, title, user, isQuestion, isAnswer } = payload
        state.commentsType = {
          id: id,
          type: type,
          showComments: showComments,
          title: title,
          user: user,
        }
        state.isCommentOpened = true
        state.isQuestion = isQuestion
        state.isAnswer = isAnswer
      } else {
        state.commentsType = payload
      }
    },
    closeComments(state, { payload }) {
      state.commentsType = null
      state.isCommentOpened = false
      state.isAnswer = null
      state.isQuestion = null
    },

    enableCommentEditing(state, action) {
      state.edit_comment = action.payload
    },

    disableCommentEditing(state, action) {
      state.edit_comment = null
    },

    edit_Comment_onChange(state, action) {
      state.edit_comment!.new_content = action.payload
    },
  },

  extraReducers: (builder) => {
    //GET QUESTION COMMETS Reducers
    builder.addCase(getQuestionComments.fulfilled, (state, { payload }) => {
      state.comments = payload.data
      state.commentsStatus = 'idle'
    }),
      builder.addCase(getQuestionComments.pending, (state, { payload }) => {
        state.commentsStatus = 'loading'
      }),
      builder.addCase(getQuestionComments.rejected, (state, action: any) => {
        state.commentsStatus = 'idle'
        if (action.payload) {
          state.commentsErrors = action.payload.errors
        } else {
          state.commentsErrors = action.errors
        }
      }),
      //GET ANSWER COMMETS Reducers
      builder.addCase(getAnswerComments.fulfilled, (state, { payload }) => {
        state.comments = payload.data
        state.commentsStatus = 'idle'
      }),
      builder.addCase(getAnswerComments.pending, (state, { payload }) => {
        state.commentsStatus = 'loading'
      }),
      builder.addCase(getAnswerComments.rejected, (state, action: any) => {
        state.commentsStatus = 'idle'
        if (action.payload) {
          state.commentsErrors = action.payload.errors
        } else {
          state.commentsErrors = action.errors
        }
      }),
      //ADD QUESTION COMMETS Reducers
      builder.addCase(addQuestionComment.fulfilled, (state, { payload }) => {
        state.comments = [...state.comments, payload.data]
        autoSuccessToaster(payload.message)
      }),
      builder.addCase(addQuestionComment.pending, (state, { payload }) => {}),
      builder.addCase(addQuestionComment.rejected, (state, action) => {
        autoErrorToaster(action.payload)
      }),
      //ADD ANSWER COMMETS Reducers
      builder.addCase(addAnswerComment.fulfilled, (state, { payload }) => {
        state.comments = [...state.comments, payload.data]
        autoSuccessToaster(payload.message)
      }),
      builder.addCase(addAnswerComment.pending, (state, { payload }) => {}),
      builder.addCase(addAnswerComment.rejected, (state, action) => {
        autoErrorToaster(action.payload)
      })

    //Delete Comment THUNK
    builder.addCase(deleteComment.fulfilled, (state, { payload }) => {
      state.comments = state.comments.filter((answer) => answer.id !== payload.id)
      successToast('top-right', payload.data.message)
    }),
      builder.addCase(deleteComment.pending, (state, { payload }) => {}),
      builder.addCase(deleteComment.rejected, (state, { payload }) => {
        autoErrorToaster(payload)
      })

    //EDIT Answer Comment THUNK
    builder.addCase(edit_Answer_CommentThunk.fulfilled, (state, { payload }) => {
      state.comments = state.comments.map((comment) => {
        if (comment.id === payload.data.id) {
          comment.content = payload.data.content
          comment.updated_at = payload.data.updated_at
        }
        return comment
      })
      state.edit_comment!.status = 'success'
      successToast('top-right', payload.data.message)
      state.edit_comment = null
    }),
      builder.addCase(edit_Answer_CommentThunk.pending, (state, { payload }) => {
        state.edit_comment!.status = 'pending'
      }),
      builder.addCase(edit_Answer_CommentThunk.rejected, (state, { payload }) => {
        state.edit_comment!.status = 'failed'
        autoErrorToaster(payload)
      })

    //EDIT Question Comment THUNK
    builder.addCase(edit_Question_CommentThunk.fulfilled, (state, { payload }) => {
      state.comments = state.comments.map((comment) => {
        if (comment.id === payload.data.id) {
          comment.content = payload.data.content
          comment.updated_at = payload.data.updated_at
        }
        return comment
      })
      state.edit_comment!.status = 'success'
      successToast('top-right', payload.data.message)
      state.edit_comment = null
    }),
      builder.addCase(edit_Question_CommentThunk.pending, (state, { payload }) => {
        state.edit_comment!.status = 'pending'
      }),
      builder.addCase(edit_Question_CommentThunk.rejected, (state, { payload }) => {
        state.edit_comment!.status = 'failed'
        autoErrorToaster(payload)
      })
  },
})

// action
export const {
  showComments,
  closeComments,
  enableCommentEditing,
  disableCommentEditing,
  edit_Comment_onChange,
} = CommentsSlice.actions

// data
export const comments_errors = (state: RootState) => state.commentsReducer.commentsErrors
export const comments = (state: RootState) => state.commentsReducer.comments
export const comments_types = (state: RootState) => state.commentsReducer.commentsType
export const is_comment_opened = (state: RootState) => state.commentsReducer.isCommentOpened
export const is_question = (state: RootState) => state.commentsReducer.isQuestion
export const is_answer = (state: RootState) => state.commentsReducer.isAnswer
export const comments_status = (state: RootState) => state.commentsReducer.commentsStatus
export const edit_comment_data = (state: RootState) => state.commentsReducer.edit_comment

export default CommentsSlice.reducer
