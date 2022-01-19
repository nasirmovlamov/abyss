import { CreateQuestionState } from '../../states/states/CreateQuestion.state'
import { RootState } from '../..'
import { autoErrorToaster } from '../../../components/ui/toasters/AutoErrorToaster'
import { autoSuccessToaster } from '../../../components/ui/toasters/AutoSuccessToast'
import { createQuestionThunk } from '../../thunks/CreateThread/CreateQuestion.thunk'
import { createSlice } from '@reduxjs/toolkit'

export const CreateQuestionSlice = createSlice({
  name: 'create-product-slice',
  initialState: CreateQuestionState,

  reducers: {
    mentionProductAtQuestionCreate(state, action) {
      if (state.linkedProducts.filter((product) => product.id === action.payload.id).length === 0) {
        state.linkedProducts.push(action.payload)
      }
    },

    mentionUserAtQuestionCreate(state, action) {
      if (state.mentionedUsers.filter((product) => product.id === action.payload.id).length === 0) {
        state.mentionedUsers.push(action.payload)
      }
    },

    questionTitleOnChange(state, action) {
      state.questionTitle = action.payload
      if (state.questionTitle === '') {
        state.validations.questionTitle.isValid = false
      } else {
        state.validations.questionTitle.isValid = true
      }
    },

    questionContentOnChangeHandler(state, action) {
      state.questionValue = action.payload
      if (state.questionValue === '<p><br></p>') {
        state.validations.questionValue.isValid = false
      } else {
        state.validations.questionValue.isValid = true
      }
    },

    questionTagValueOnChangeHandler(state, action) {
      state.tagValue = action.payload
    },

    questionCreateTagOnClickHandler(state, action) {
      const newTag = {
        id: new Date().getTime(),
        name: state.tagValue.replaceAll(' ', ''),
      }
      state.tags.push(newTag)
      if (state.tags.length === 0) {
        state.validations.tags.isValid = false
      } else {
        state.validations.tags.isValid = true
      }
    },

    questionDeleteTagOnClickHandler(state, action) {
      state.tags = state.tags.filter((tag) => tag.id !== action.payload.id)
      if (state.tags.length === 0) {
        state.validations.tags.isValid = false
      } else {
        state.validations.tags.isValid = true
      }
    },

    questionDeleteLastTagOnClickHandler(state, action) {
      state.tags.pop()
      if (state.tags.length === 0) {
        state.validations.tags.isValid = false
      } else {
        state.validations.tags.isValid = true
      }
    },

    validateQuestionCreate(state, action) {
      if (state.questionTitle === '') {
        state.validations.questionTitle.isValid = false
      } else {
        state.validations.questionTitle.isValid = true
      }
      if (state.questionValue === '') {
        state.validations.questionValue.isValid = false
      } else {
        state.validations.questionValue.isValid = true
      }
      if (state.tags.length === 0) {
        state.validations.tags.isValid = false
      } else {
        state.validations.tags.isValid = true
      }
      if (
        state.validations.questionTitle.isValid &&
        state.validations.questionValue.isValid &&
        state.validations.tags.isValid
      ) {
        state.validation_check = 'valid'
      } else {
        state.validation_check = 'not-valid'
      }
    },

    // ProductCreateStep1OnChanges(state, action){
    //     state.steps[1].source_code = action.payload
    //     if(state.steps[1].source_code.length > 0)
    //     {
    //         state.steps[1].validators.isCodeFilled.valid = true
    //     }
    // }
  },

  extraReducers: (builder) => {
    // CREATE QUESTION
    builder.addCase(createQuestionThunk.fulfilled, (state, { payload }) => {
      autoSuccessToaster(payload.message)
    }),
      builder.addCase(createQuestionThunk.pending, (state, { payload }) => {}),
      builder.addCase(createQuestionThunk.rejected, (state, { payload }) => {
        autoErrorToaster(payload)
        return
      })
  },
})

// action

export const CreateQuestionActions = CreateQuestionSlice.actions

// data
export const linked_products = (state: RootState) => state.createQuestionReducer.linkedProducts
export const mentioned_users = (state: RootState) => state.createQuestionReducer.mentionedUsers
export const question_value = (state: RootState) => state.createQuestionReducer.questionValue
export const create_question_data = (state: RootState) => state.createQuestionReducer

export default CreateQuestionSlice.reducer
