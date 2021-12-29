import { getSingleProduct } from './../thunks/SingleProductThunk';
import { SingleProductState } from './../store/states/SingleProductState';
import { getSideProducts } from './../thunks/SideProducts.thunk';
import { RootState } from './../store/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export const SingleProduct_Slice = createSlice({
  name: 'linked-product-slice',
  initialState:SingleProductState,
  reducers: {

    goProductPage(state, action) {
      if(state.selectedID !==  action.payload.id){
        state.selectedID = action.payload.id;
        state.status = 'loading';
        state.data = null;
        state.code = '';
      }
    },

    

    
    



  },





  extraReducers: (builder) => {
        // GET SIDE PRODUCTS Reducers
        builder.addCase(getSingleProduct.fulfilled, (state, {payload}) => {
            state.data = payload.data;
            // state.code = payload.message.code;
            state.status = 'loaded';
        }),
        builder.addCase(getSingleProduct.pending, (state, {payload}) => {
            state.status = 'loading';
        }),
        builder.addCase(getSingleProduct.rejected, (state, action) => {
            state.status = 'error';
        })  
}


})


// action
export const {goProductPage} = SingleProduct_Slice.actions;


// data
export const single_product_data = (state: RootState) => state.singleProductReducer


export default SingleProduct_Slice.reducer;








