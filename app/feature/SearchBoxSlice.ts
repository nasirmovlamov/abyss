import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store'
import { SEARCHBOX_STATE } from '../store/states/SearchBoxState'
import { forumSearch } from '../thunks/SearchBoxThunks'
import { autoErrorToaster } from '../../components/Notify/AutoErrorToaster'



export const SearchBoxSlice = createSlice({
  name: 'app-slice',
  initialState:SEARCHBOX_STATE,
  reducers: {

    // changeTopAnswersStatus(state, action) {
    //     state.answersData.topAnswers.status = action.payload.status
    // },
    

  },





  extraReducers: (builder) => {

    // Forum Search
    builder.addCase(forumSearch.fulfilled, (state, {payload}) => {
      state.searchBoxData.forum.data = payload.data.results
      state.searchBoxData.forum.status = "loaded"
    }),
    builder.addCase(forumSearch.pending, (state, {payload}) => {
      state.searchBoxData.forum.status = "loading"
    }),
    builder.addCase(forumSearch.rejected, (state, {payload}) => {
      state.searchBoxData.forum.status = "error"
      autoErrorToaster(payload)
    })  

  },

})


// action
// export const {changeDownAnswersStatus} = QuestionSlice.actions;


// data
export const forum_search_data = (state: RootState) => state.searchBoxReducer.searchBoxData.forum.data  
export const forum_data_status = (state: RootState) => state.searchBoxReducer.searchBoxData.forum.status  




export default SearchBoxSlice.reducer;








