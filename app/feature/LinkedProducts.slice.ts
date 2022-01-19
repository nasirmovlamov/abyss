import { createSlice } from '@reduxjs/toolkit';

import { LINKED_PRODUCT_STATE } from '../store/states/LinkedProductState';

export const LinkedProductsSlice = createSlice({
  name: 'linked-product-slice',
  initialState: LINKED_PRODUCT_STATE,
  reducers: {
    // getLinkedProducts(state, action) {
    // },
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

// export const {} = LinkedProductsSlice.actions;

// data
// export const linked_products_status = (state: RootState) => state.linkedProductsReducer.status

export default LinkedProductsSlice.reducer
