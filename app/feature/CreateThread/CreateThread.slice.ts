import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../store/store';
import { CreateThread_STATE } from './../../store/states/CreateThread/CreateThread.state';

export const CreateThreadSlice = createSlice({
  name: 'create-product-slice',
  initialState: CreateThread_STATE,

  reducers: {
    selectThreadType(state, action) {
      if (state.threadType === action.payload) {
        state.threadType = 'not-selected'
        if (state.validation[1].isValid === 'valid') {
          state.validation[1].isValid = 'not-valid'
        }
        return state
      }
      state.threadType = action.payload
      state.validation[1].isValid = 'valid'
    },

    validateStep1(state, action) {
      if (state.threadType === 'not-selected') {
        state.validation[1].isValid = 'not-valid'
      } else {
        state.validation[1].isValid = 'valid'
      }
    },

    validateStep3(state, action) {
      if (
        state.validation[2].isValid === 'valid' ||
        state.validation[3].isValid === 'valid' ||
        state.validation[4].isValid === 'valid'
      ) {
        state.validation[3].isValid = 'valid'
      } else {
        state.validation[3].isValid = 'not-valid'
      }
    },

    goNextStep(state, action) {
      if (state.currentStage === 2) {
        state.currentStage = state.currentStage + 1
      }
      if (state.validation[state.currentStage].isValid === 'valid' && state.currentStage < 3) {
        state.currentStage = state.currentStage + 1
      }
    },

    goPrevoiusStep(state, action) {
      if (state.currentStage > 1) {
        state.currentStage = state.currentStage - 1
      }
    },
  },

  extraReducers: (builder) => {},
})

// action
export const CreateThreadActions = CreateThreadSlice.actions

// data
export const create_thread_data = (state: RootState) => state.createThreadReducer

export default CreateThreadSlice.reducer
