import { editAnswerThunk } from './../thunks/QuestionThunk';
import { getMentionsOfProduct } from './../thunks/LinkedProductsTunks';
import { getLinkedProducts } from '../thunks/LinkedProductsTunks';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { forgetPasswordThunk,   userCheck, userLogin, userLogout, userRegister,  } from '../thunks/AuthThunk'
import {APP_STATE} from '../store/states/AppState'
import { RootState } from '../store/store'
import { getKeyValue } from '../../logic/getKeyValue'
import toast from 'react-hot-toast'
import { ToastPosition } from 'react-hot-toast/dist/core/types'
import { addAnswer, deleteAnswer, deleteQuestion, getAnswers, unVoteAnswer, unVoteQuestion, voteAnswer, voteQuestion } from '../thunks/QuestionThunk'
import { getSingleQuestion } from '../thunks/QuestionThunk'
import { autoErrorToaster } from '../../components/Notify/AutoErrorToaster'
import { QUESTION_STATE } from '../store/states/QuestionState'
import { successToast } from '../../components/Notify/SuccessToast'



export const QuestionSlice = createSlice({
  name: 'app-slice',
  initialState:QUESTION_STATE,
  reducers: {

    changeTopAnswersStatus(state, action) {
        state.answersData.topAnswers.status = action.payload.status
    },

    editAnswerContent_onChange(state, action) {
        state.edit_answer!.new_content = action.payload
    },

    changeDownAnswersStatus(state, action) {
      state.answersData.downAnswers.status = action.payload.status
    },

    setDeleteOptions(state, action) {
      state.delete_options = action.payload
    },

    mentionUserAtAnswer(state , action){
      if(state.answerSubmitData.mentionedUsers.filter(answer => answer.id === action.payload.id).length === 0){
        state.answerSubmitData.mentionedUsers.push(action.payload)
      }
    },

    linkProductAtAnswer(state , action){
      if(state.answerSubmitData.linkedProducts.filter(answer => answer.id === action.payload.id).length === 0){
        state.answerSubmitData.linkedProducts.push(action.payload)
      }
    },
    
    AnswerContentOnChange(state, action){
      state.answerSubmitData.content = action.payload
    },

    enableEditing(state, action){
      state.edit_answer = action.payload
    },

    disableEditing(state, action){
      state.edit_answer = null
    },

    getOptionsForMentionOfProduct(state, action){
      if(state.mentionsOfLinkedProduct.productId !== action.payload.productId){
        state.mentionsOfLinkedProduct.productId = action.payload.productId
        state.mentionsOfLinkedProduct.mentions = []
        state.mentionsOfLinkedProduct.current_page = 1
        state.mentionsOfLinkedProduct.last_page = 1
        state.mentionsOfLinkedProduct.total = 0
        state.mentionsOfLinkedProduct.status = 'loading'
      }
    },

    mentionProductAtAnswerEdit(state, action){
      if(state.edit_answer!.linkedProducts.filter(product => product.id === action.payload.id).length === 0){
          state.edit_answer!.linkedProducts.push(action.payload)
      }
  },

  mentionUserAtQuestionCreate(state, action){
      if(state.edit_answer!.mentionedUsers.filter(product => product.id === action.payload.id).length === 0){
          state.edit_answer!.mentionedUsers.push(action.payload)
      }
  },



  },





  extraReducers: (builder) => {

    //GET SINGLE QUESTION 
    builder.addCase(getSingleQuestion.fulfilled, (state, {payload}) => {
      state.question_data = payload.data
      state.status = 'idle'  
      // if(state.question_data.id !== state.answersData.questionId){
      //   state.answersData.topAnswers.answers= []
      //   state.answersData.downAnswers.answers= []
      //   state.answersData.topAnswers.status= 'loading'
      //   state.answersData.downAnswers.status= 'loading'
      //   state.answersData.topPage = 1
      //   state.answersData.downPage = 0
      //   state.answersData.totalPage = 0

      //   state.linkedProductsData.status = 'loading'
      //   state.linkedProductsData.current_page = 1
      //   state.linkedProductsData.last_page = 1
      //   state.linkedProductsData.total = 0
      //   state.linkedProductsData.linkedProducts = []
      // }
    }),
    builder.addCase(getSingleQuestion.pending, (state, {payload}) => {
      state.status = 'loading'
    }),
    builder.addCase(getSingleQuestion.rejected, (state, action) => {
      state.status = 'failed'
      state.errors = action.payload
    })  





    //GET  QUESTION ANSWERS 
    builder.addCase(getAnswers.fulfilled, (state, {payload}) => {
      const topAnswers = state.answersData.topAnswers
      const downAnswers = state.answersData.downAnswers
      state.answersData.questionId = state.question_data!.id
      if(payload === null)
      {
        
      }
      else 
      {
        if(payload.data.data.length === 0){
          topAnswers.status = 'idle'
          downAnswers.status = 'idle'
        }
        if(payload.next)
        {
            topAnswers.answers = [... topAnswers.answers , ...payload.data.data]
            if(state.answersData.topPage === 1)
            {
              state.answersData.downPage = payload.data.meta.last_page
              state.answersData.totalPage  = payload.data.meta.total
            }
            state.answersData.topPage = state.answersData.topPage + 1
  
            if(topAnswers.answers.length + downAnswers.answers.length === state.answersData.totalPage && state.answersData.topPage > 1)
            {
                topAnswers.status = 'idle'
                downAnswers.status = 'idle'
            }
        }
        else 
        {
          downAnswers.answers = [ ...payload.data.data , ... downAnswers.answers ]
          state.answersData.downPage = state.answersData.downPage - 1
          if(downAnswers.answers.length + topAnswers.answers.length === state.answersData.totalPage )
          {
            downAnswers.status = 'idle'
            topAnswers.status = 'idle'
          }
        }
      
      }
    }),
    builder.addCase(getAnswers.pending, (state, {payload}) => {
      state.answersData.topAnswers.status = 'loading'
      const topAnswers = state.answersData.topAnswers
      const downAnswers = state.answersData.downAnswers
      if(topAnswers.answers.length + downAnswers.answers.length === state.answersData.totalPage && state.answersData.topPage > 1)
      {
          topAnswers.status = 'idle'
          downAnswers.status = 'idle'
      }

    }),
    builder.addCase(getAnswers.rejected, (state, action) => {
      state.answersData.topAnswers.answers = [...state.answersData.topAnswers.answers]
      state.answersData.topAnswers.status = 'failed'
    }) 


    //GET LINKED PRODUCTS 
    builder.addCase(getLinkedProducts.fulfilled, (state, action) => {
      state.linkedProductsData.linkedProducts = [...state.linkedProductsData.linkedProducts , ...action.payload.data] 
      if(state.linkedProductsData.current_page === action.payload.meta.last_page){
        state.linkedProductsData.status = "idle"
        return
      }

      state.linkedProductsData.current_page += 1
      if(state.linkedProductsData.current_page < action.payload.meta.last_page){
        state.linkedProductsData.last_page = action.payload.meta.last_page
        state.linkedProductsData.total = action.payload.meta.total  
      }
      


    }) 
    builder.addCase(getLinkedProducts.pending, (state, action) => {
      state.linkedProductsData.status = 'loading'
    }) 
    builder.addCase(getLinkedProducts.rejected, (state, action) => {
      state.linkedProductsData.status = 'failed'
    }) 



    //getMentionsOfProduct
    builder.addCase(getMentionsOfProduct.fulfilled, (state, action) => {
        state.mentionsOfLinkedProduct.mentions = [...state.mentionsOfLinkedProduct.mentions , ...action.payload.data]

        if(state.mentionsOfLinkedProduct.current_page === action.payload.meta.last_page){
          state.mentionsOfLinkedProduct.status = "idle"
          return
        }else {
          state.mentionsOfLinkedProduct.status = 'loading'
        }
        state.mentionsOfLinkedProduct.current_page += 1
        if(state.mentionsOfLinkedProduct.current_page < action.payload.meta.last_page){
          state.mentionsOfLinkedProduct.last_page = action.payload.meta.last_page
          state.mentionsOfLinkedProduct.total = action.payload.meta.total  
        }
    }) 
    builder.addCase(getMentionsOfProduct.pending, (state, action) => {
        state.mentionsOfLinkedProduct.status = 'pending'
    }) 
    builder.addCase(getMentionsOfProduct.rejected, (state, action) => {
        state.mentionsOfLinkedProduct.status = 'failed'
    }) 


    //ADD NEW ANSWER to Question Reducers
    builder.addCase(addAnswer.fulfilled, (state, {payload}) => {
        successToast("top-right" , payload.message)
        state.answersData.submittedAnswer = [  payload.data , ...state.answersData.submittedAnswer ]
    }),
    builder.addCase(addAnswer.pending, (state, {payload}) => {
      
    }),
    builder.addCase(addAnswer.rejected, (state, {payload}) => {
      autoErrorToaster(payload)
    })  


    //VOTE QUESTION Reducers
    builder.addCase(voteQuestion.fulfilled, (state, {payload}) => {
      if(state.question_data !== null)
      {
        state.question_data.user_votes = payload.data
        state.question_data.upvote += 1
      }
      successToast("top-right" ,payload.message)

    }),
    builder.addCase(voteQuestion.pending, (state, {payload}) => {
    }),
    builder.addCase(voteQuestion.rejected, (state, {payload}) => {
      autoErrorToaster(payload)
    })  


    //UN VOTE QUESTION Reducers
    builder.addCase(unVoteQuestion.fulfilled, (state, {payload}) => {
      if(state.question_data !== null)
      {
        state.question_data.user_votes = null
        state.question_data.upvote -= 1
      }
      successToast("top-right" ,payload.message)
    }),
    builder.addCase(unVoteQuestion.pending, (state, {payload}) => {
    }),
    builder.addCase(unVoteQuestion.rejected, (state, {payload}) => {
      autoErrorToaster(payload)
    }) 


    //VOTE ANSWER Reducers
    builder.addCase(voteAnswer.fulfilled, (state, {payload}) => {
      console.log(payload)
      if(payload.direction === "bottom")
      {
        for (let i = 0; i < state.answersData.downAnswers.answers.length; i++) {
          if(state.answersData.downAnswers.answers[i].id === payload.id)
          {
            state.answersData.downAnswers.answers[i].user_votes = payload.data.data
          } 
        }
      }
      else if (payload.direction === "top")
      {
        for (let i = 0; i < state.answersData.topAnswers.answers.length; i++) {
          if(state.answersData.topAnswers.answers[i].id === payload.id)
          {
            state.answersData.topAnswers.answers[i].user_votes = payload.data.data
          } 
        }
      }
      else if (payload.direction === "new-submitted")
      {
        for (let i = 0; i < state.answersData.submittedAnswer.length; i++) {
          if(state.answersData.submittedAnswer[i].id === payload.id)
          {
            state.answersData.submittedAnswer[i].user_votes = payload.data.data
          } 
        }
      }
      successToast("top-right" ,payload.data.message)
      
    }),
    builder.addCase(voteAnswer.pending, (state, {payload}) => {
    }),
    builder.addCase(voteAnswer.rejected, (state, {payload}) => {
      autoErrorToaster(payload)
    })  
    

    //UN VOTE ANSWER Reducers
    builder.addCase(unVoteAnswer.fulfilled, (state, {payload}) => {
      if(payload.direction === "bottom")
      {
        for (let i = 0; i < state.answersData.downAnswers.answers.length; i++) {
          if(state.answersData.downAnswers.answers[i].id === payload.id)
          {
            state.answersData.downAnswers.answers[i].user_votes = null
          } 
        }
      }
      else if (payload.direction === "top")
      {
        for (let i = 0; i < state.answersData.topAnswers.answers.length; i++) {
          if(state.answersData.topAnswers.answers[i].id === payload.id)
          {
            state.answersData.topAnswers.answers[i].user_votes = null
          } 
        }
      }
      else if (payload.direction === "new-submitted")
      {
        for (let i = 0; i < state.answersData.topAnswers.answers.length; i++) {
          if(state.answersData.submittedAnswer[i].id === payload.id)
          {
            state.answersData.submittedAnswer[i].user_votes = null
          } 
        }
      }
      else {}
      successToast("top-right" ,payload.data.message)
    }),
    builder.addCase(unVoteAnswer.pending, (state, {payload}) => {
    }),
    builder.addCase(unVoteAnswer.rejected, (state, {payload}) => {
      autoErrorToaster(payload)
    }) 


    //Delete Question THUNK
    builder.addCase(deleteQuestion.fulfilled, (state, {payload}) => {
      state.question_data = null
      successToast("top-right" ,payload.message)
      state.delete_options = null
      state.status = 'loading'
    }),
    builder.addCase(deleteQuestion.pending, (state, {payload}) => {
    }),
    builder.addCase(deleteQuestion.rejected, (state, {payload}) => {
      autoErrorToaster(payload)
    }) 


    //Delete Answer THUNK
    builder.addCase(deleteAnswer.fulfilled, (state, {payload}) => {
      const topAnswers = state.answersData.topAnswers
      const downAnswers = state.answersData.downAnswers
      
      if(payload.direction === "bottom")
      {
        state.answersData.downAnswers.answers = state.answersData.downAnswers.answers.filter(answer => answer.id !== payload.id)
      }
      else if (payload.direction === "top")
      {
        state.answersData.topAnswers.answers = state.answersData.topAnswers.answers.filter(answer => answer.id !== payload.id)
      }
      else if (payload.direction === "new-submitted")
      {
        state.answersData.submittedAnswer = state.answersData.submittedAnswer.filter(answer => answer.id !== payload.id)
      }
      successToast("top-right" ,payload.data.message)
      if(state.delete_options) state.delete_options.answer_delete_status = 'success';
      if(topAnswers.answers.length + downAnswers.answers.length === state.answersData.totalPage && state.answersData.topPage > 1)
      {
          topAnswers.status = 'idle'
          downAnswers.status = 'idle'
      }

    }),
    builder.addCase(deleteAnswer.pending, (state, {payload}) => {
      if(state.delete_options) state.delete_options.answer_delete_status = 'pending';
    }),
    builder.addCase(deleteAnswer.rejected, (state, {payload}) => {
      if(state.delete_options) state.delete_options.answer_delete_status = 'failed';
      autoErrorToaster(payload)
    }) 


     //Edit Answer THUNK
     builder.addCase(editAnswerThunk.fulfilled, (state, {payload}) => {
      const topAnswers = state.answersData.topAnswers
      const downAnswers = state.answersData.downAnswers
      console.log(payload.data.content)
      if(payload.direction === "bottom")
      {
        state.answersData.downAnswers.answers = state.answersData.downAnswers.answers.map(answer =>  {
          if(answer.id === payload.id)
          {
            answer.content = payload.data.content
            answer.updated_at = payload.data.updated_at
          }
          return answer
        })
      }
      else if (payload.direction === "top")
      {
        state.answersData.topAnswers.answers = state.answersData.topAnswers.answers.map(answer => {
          if(answer.id === payload.id)
          {
            answer.content = payload.data.content
            answer.updated_at = payload.data.updated_at
          }
          return answer
        })
      }
      else if (payload.direction === "new-submitted")
      {
        state.answersData.submittedAnswer = state.answersData.submittedAnswer.map(answer => {
          if(answer.id === payload.id)
          {
            answer.content = payload.data.content
            answer.updated_at = payload.data.updated_at
          }
          return answer
        })
      }
      successToast("top-right" ,payload.data.message)
      state.edit_answer = null;
    }),
    builder.addCase(editAnswerThunk.pending, (state, {payload}) => {
      state.edit_answer!.status = 'pending';
    }),
    builder.addCase(editAnswerThunk.rejected, (state, {payload}:any) => {
      state.edit_answer!.status = 'failed';
      state.edit_answer!.errors = payload.errors;
      autoErrorToaster(payload)
    }) 



    
  },

})


// action

export const {
  changeTopAnswersStatus , 
  mentionUserAtAnswer, 
  linkProductAtAnswer, 
  changeDownAnswersStatus , 
  AnswerContentOnChange , 
  getOptionsForMentionOfProduct,
  setDeleteOptions,
  editAnswerContent_onChange,
  enableEditing,
  disableEditing,
  mentionProductAtAnswerEdit,
  mentionUserAtQuestionCreate
} = QuestionSlice.actions;


// data
export const single_question_data = (state: RootState) => state.questionReducer.question_data
export const question_status = (state: RootState) => state.questionReducer.status
export const question_errors = (state: RootState) => state.questionReducer.errors
export const thread_delete_options = (state: RootState) => state.questionReducer.delete_options

export const submitted_answer = (state: RootState) => state.questionReducer.answersData.submittedAnswer
export const down_answers = (state: RootState) => state.questionReducer.answersData.downAnswers.answers
export const top_answers = (state: RootState) => state.questionReducer.answersData.topAnswers.answers
export const top_answers_status = (state: RootState) => state.questionReducer.answersData.topAnswers.status
export const down_answers_status = (state: RootState) => state.questionReducer.answersData.downAnswers.status
export const mentioned_users_at_anwser_submit = (state: RootState) => state.questionReducer.answerSubmitData.mentionedUsers
export const linked_products_at_anwser_submit = (state: RootState) => state.questionReducer.answerSubmitData.linkedProducts
export const submit_answer_content = (state: RootState) => state.questionReducer.answerSubmitData.content
export const submit_answer_data = (state: RootState) => state.questionReducer.answerSubmitData
export const edit_answer_data = (state: RootState) => state.questionReducer.edit_answer


export const top_page = (state: RootState) => state.questionReducer.answersData.topPage
export const down_page = (state: RootState) => state.questionReducer.answersData.downPage
export const total_page = (state: RootState) => state.questionReducer.answersData.totalPage
export const current_page_linked_products = (state: RootState) => state.questionReducer.linkedProductsData.current_page
export const total_linked_products = (state: RootState) => state.questionReducer.linkedProductsData.total
export const last_page_linked_products = (state: RootState) => state.questionReducer.linkedProductsData.last_page
export const linked_products_for_answers_of_question = (state: RootState) => state.questionReducer.linkedProductsData.linkedProducts
export const linked_products_status = (state: RootState) => state.questionReducer.linkedProductsData.status

export const mentions_of_linked_product = (state: RootState) => state.questionReducer.mentionsOfLinkedProduct


export default QuestionSlice.reducer;








