import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store'
import { SEARCHBOX_STATE } from '../store/states/SearchBoxState'
import { forumSearch } from '../thunks/SearchBoxThunks'
import { autoErrorToaster } from '../../components/Notify/AutoErrorToaster'



export const SearchBoxSlice = createSlice({
  name: 'app-slice',
  initialState:SEARCHBOX_STATE,
  reducers: {

    selectFilterToSearchOption(state, action) {
      for (let i = 0; i < state.searchBoxData.forum.searchOptions.filters.length; i++) {
        if (state.searchBoxData.forum.searchOptions.filters[i].id === action.payload.id) {
          state.searchBoxData.forum.searchOptions.filters = state.searchBoxData.forum.searchOptions.filters.filter(tag => tag.id !== action.payload.id)
          return
        }
      } 
      state.searchBoxData.forum.searchOptions.filters.push(action.payload)
    },

    selectForumTypeSearchOption(state, action) {
      state.searchBoxData.forum.searchOptions.forumType = action.payload
    },

    selectForumSortSearchOption(state, action) {
      state.searchBoxData.forum.searchOptions.forumSort = action.payload
    },


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
export const 
{
  selectFilterToSearchOption , 
  selectForumTypeSearchOption , 
  selectForumSortSearchOption
  
} = SearchBoxSlice.actions;


// data
export const forum_search_data = (state: RootState) => state.searchBoxReducer.searchBoxData.forum.data  
export const forum_data_status = (state: RootState) => state.searchBoxReducer.searchBoxData.forum.status  
export const forum_search_type = (state: RootState) => state.searchBoxReducer.searchBoxData.forum.searchOptions.forumType
export const forum_search_sort = (state: RootState) => state.searchBoxReducer.searchBoxData.forum.searchOptions.forumSort
export const forum_search_filters = (state: RootState) => state.searchBoxReducer.searchBoxData.forum.searchOptions.filters




export default SearchBoxSlice.reducer;








