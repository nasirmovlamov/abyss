import { RootState } from '..'
import { ToolTipState } from '../states/states/ToolTip.state'
import { createSlice } from '@reduxjs/toolkit'

export const ToolTipSlice = createSlice({
  name: 'linked-product-slice',
  initialState: ToolTipState,
  reducers: {
    showToolTip(state, action) {
      ;(state.show = true), (state.text = action.payload.text)
      state.cursorPosition = action.payload.position
    },

    hideToolTip(state, action) {
      state.text = ''
      state.show = false
      state.cursorPosition = {
        x: 0,
        y: 0,
      }
    },
  },

  extraReducers: (builder) => {
    //GET SINGLE QUESTION Reducers
    // builder.addCase(getSingleQuestion.fulfilled, (state, {payload}) => {
    //   state.singleQuestionData = payload.data
    //   state.singleQuestionData.status = 'idle'
    // }),
    // builder.addCase(getSingleQuestion.pending, (state, {payload}) => {
    //   state.singleQuestionData.status = 'loading'
    // }),
    // builder.addCase(getSingleQuestion.rejected, (state, action) => {
    //   state.singleQuestionData.status = 'failed'
    // })
  },
})

// action

export const ToolTipActions = ToolTipSlice.actions

// data
export const tooltip_data = (state: RootState) => state.toolTipReducer

export default ToolTipSlice.reducer
