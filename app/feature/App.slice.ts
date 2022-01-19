import { createSlice } from '@reduxjs/toolkit';

import { APP_STATE } from '../store/states/AppState';
import { RootState } from '../store/store';

export const AppSlice = createSlice({
  name: 'app-slice',
  initialState: APP_STATE,
  reducers: {
    set_overflowy(state, { payload }) {
      state.PAGE_OVERFLOWY = payload
    },
    // addNewAnswer(state, {payload}) {
    //   if(state.singleQuestionData !== null)
    //   {
    //     const newAnswer:ANSWER_INTERFACE = payload
    //     state.singleQuestionData.answers =  [...state.singleQuestionData.answers , newAnswer]
    //     state.singleQuestionData.answer_count += 1
    //   }
    // },
  },

  extraReducers: (builder) => {
    // //GET SINGLE QUESTION Reducers
    // builder.addCase(getSingleQuestion.fulfilled, (state, {payload}) => {
    //   state.singleQuestionData = payload.data
    //   state.status = 'idle'
    // }),
    // builder.addCase(getSingleQuestion.pending, (state, {payload}) => {
    //   state.status = 'loading'
    // }),
    // builder.addCase(getSingleQuestion.rejected, (state, action) => {
    //   state.status = 'failed'
    // })
    // //VOTE QUESTION Reducers
    // builder.addCase(voteQuestion.fulfilled, (state, {payload}) => {
    //   state.status = 'idle'
    //   if(state.singleQuestionData !== null)
    //   {
    //     state.singleQuestionData.user_votes = payload.data
    //     state.singleQuestionData.upvote += 1
    //   }
    // }),
    // builder.addCase(voteQuestion.pending, (state, {payload}) => {
    //   state.status = 'loading'
    // }),
    // builder.addCase(voteQuestion.rejected, (state, {payload}) => {
    //   state.status = 'failed'
    //   autoErrorToaster(payload)
    // })
    // //UN VOTE QUESTION Reducers
    // builder.addCase(unVoteQuestion.fulfilled, (state, {payload}) => {
    //   state.status = 'idle'
    //   if(state.singleQuestionData !== null)
    //   {
    //     state.singleQuestionData.user_votes = null
    //     state.singleQuestionData.upvote -= 1
    //   }
    // }),
    // builder.addCase(unVoteQuestion.pending, (state, {payload}) => {
    //   state.status = 'loading'
    // }),
    // builder.addCase(unVoteQuestion.rejected, (state, {payload}) => {
    //   state.status = 'failed'
    //   autoErrorToaster(payload)
    // })
    // //VOTE ANSWER Reducers
    // builder.addCase(voteAnswer.fulfilled, (state, {payload}) => {
    //   state.status = 'idle'
    //   if(state.singleQuestionData !== null)
    //   {
    //     for (let i = 0; i < state.singleQuestionData.answers.length; i++) {
    //       if(state.singleQuestionData.answers[i].id === payload.data.answer_id)
    //       {
    //         state.singleQuestionData.answers[i].user_votes = payload.data
    //       }
    //     }
    //   }
    // }),
    // builder.addCase(voteAnswer.pending, (state, {payload}) => {
    //   state.status = 'loading'
    // }),
    // builder.addCase(voteAnswer.rejected, (state, {payload}) => {
    //   state.status = 'failed'
    //   autoErrorToaster(payload)
    // })
    // //UN VOTE ANSWER Reducers
    // builder.addCase(unVoteAnswer.fulfilled, (state, {payload}) => {
    //   state.status = 'idle'
    //   if(state.singleQuestionData !== null)
    //   {
    //     for (let i = 0; i < state.singleQuestionData.answers.length; i++) {
    //       if(state.singleQuestionData.answers[i].id === payload)
    //       {
    //         state.singleQuestionData.answers[i].user_votes = null
    //       }
    //     }
    //   }
    // }),
    // builder.addCase(unVoteAnswer.pending, (state, {payload}) => {
    //   state.status = 'loading'
    // }),
    // builder.addCase(unVoteAnswer.rejected, (state, {payload}) => {
    //   state.status = 'failed'
    //   autoErrorToaster(payload)
    // })
  },
})

// action
export const { set_overflowy } = AppSlice.actions

// data
export const page_overflowy = (state: RootState) => state.appReducer.PAGE_OVERFLOWY

export default AppSlice.reducer
