import { createSlice } from '@reduxjs/toolkit';

import { SIDEPRODUCT_STATE } from './../store/states/SideProdcuts.state';
import { RootState } from './../store/store';
import { getSideProducts } from './../thunks/SideProducts.thunk';

export const SideProductSlice = createSlice({
  name: 'linked-product-slice',
  initialState: SIDEPRODUCT_STATE,
  reducers: {
    set_side_product_data(state, action) {
      if (state.selectedID !== action.payload.id) {
        state.selectedID = action.payload.id
        state.distanceFromTop = action.payload.distanceFromTop
        state.page = 1
        state.products = []
        state.status = 'loading'
        state.totalNumber = 0
      }
    },
  },

  extraReducers: (builder) => {
    // GET SIDE PRODUCTS Reducers
    builder.addCase(getSideProducts.fulfilled, (state, { payload }) => {
      if (state.allDataLoaded) {
        return state
      }
      state.status = 'loaded'
      state.products = [...state.products, ...payload.data]
      state.totalNumber = payload.meta.total
      state.lastPage = payload.meta.last_page
      if (state.page === payload.meta.last_page && state.products.length === payload.meta.total) {
        state.allDataLoaded = true
        return
      }
      state.page += 1
    }),
      builder.addCase(getSideProducts.pending, (state, { payload }) => {}),
      builder.addCase(getSideProducts.rejected, (state, action) => {
        state.status = 'error'
      })
  },
})

// action

export const { set_side_product_data } = SideProductSlice.actions

// data
export const side_product_data = (state: RootState) => state.sideProductReducer

export default SideProductSlice.reducer
