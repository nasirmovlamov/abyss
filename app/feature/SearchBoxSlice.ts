import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store'
import { SEARCHBOX_STATE } from '../store/states/SearchBoxState'
import { forumSearch } from '../thunks/SearchBoxThunks'
import { autoErrorToaster } from '../../components/Notify/AutoErrorToaster'
import { getCookie, setCookie } from '../../logic/CookieFunctions'



export const SearchBoxSlice = createSlice({
  name: 'app-slice',
  initialState:SEARCHBOX_STATE,
  reducers: {

    getCachedSearchBoxData(state , action)
    { 
      
      if(JSON.parse(getCookie('ForumFiltersSearchOption')))
      {
        state.searchBoxData.forum.searchOptions.filters = JSON.parse(getCookie('ForumFiltersSearchOption')!)
      }

      if(getCookie('ForumTypeSearchOption'))
      {
        state.searchBoxData.forum.searchOptions.forumType = getCookie("ForumTypeSearchOption")!
      }else 
      {
        state.searchBoxData.forum.searchOptions.forumType = "Questions"
      }

      if(getCookie('ForumSearchValue'))
      {
        state.searchBoxData.forum.searchOptions.searchValue = getCookie('ForumSearchValue')
      }
      else {
        state.searchBoxData.forum.searchOptions.searchValue = ""
      }
      if(getCookie('ForumSortSearchOption'))
      {
        state.searchBoxData.forum.searchOptions.forumSort = getCookie("ForumSortSearchOption")!
      }
      else 
      {
        state.searchBoxData.forum.searchOptions.forumSort = "Newes"
      }
    },

    selectFilterToSearchOption(state, action) {
      for (let i = 0; i < state.searchBoxData.forum.searchOptions.filters.length; i++) {
        if (state.searchBoxData.forum.searchOptions.filters[i].id === action.payload.id) {
          state.searchBoxData.forum.searchOptions.filters = state.searchBoxData.forum.searchOptions.filters.filter(tag => tag.id !== action.payload.id)
          setCookie("ForumFiltersSearchOption" , JSON.stringify(state.searchBoxData.forum.searchOptions.filters) , 365)
          return
        }
      } 
      state.searchBoxData.forum.searchOptions.filters.push(action.payload)
      setCookie("ForumFiltersSearchOption" , JSON.stringify(state.searchBoxData.forum.searchOptions.filters) , 365)
    },

    ifFilterWasDeleted(state, action){
      state.searchBoxData.forum.searchOptions.filters = state.searchBoxData.forum.searchOptions.filters.filter(tag => tag.id !== action.payload.id)
      setCookie("ForumFiltersSearchOption" , JSON.stringify(state.searchBoxData.forum.searchOptions.filters) , 365)
    },

    onForumSearchValue(state, action){
      state.searchBoxData.forum.searchOptions.searchValue = action.payload
      setCookie("ForumSearchValue" , action.payload , 365)
    },

    selectForumTypeSearchOption(state, action) {
      state.searchBoxData.forum.searchOptions.forumType = action.payload
      setCookie("ForumTypeSearchOption" , action.payload , 365)
    },

    selectForumSortSearchOption(state, action) {
      state.searchBoxData.forum.searchOptions.forumSort = action.payload
      setCookie("ForumSortSearchOption" , action.payload , 365)
    },


  },


  extraReducers: (builder) => {

    // Forum Search
    builder.addCase(forumSearch.fulfilled, (state, {payload}) => {
      console.log(payload.data)
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
  selectForumSortSearchOption,
  getCachedSearchBoxData,
  ifFilterWasDeleted,
  onForumSearchValue,
} = SearchBoxSlice.actions;


// data
export const forum_search_data = (state: RootState) => state.searchBoxReducer.searchBoxData.forum.data  
export const forum_data_status = (state: RootState) => state.searchBoxReducer.searchBoxData.forum.status  
export const forum_search_type = (state: RootState) => state.searchBoxReducer.searchBoxData.forum.searchOptions.forumType
export const forum_search_sort = (state: RootState) => state.searchBoxReducer.searchBoxData.forum.searchOptions.forumSort
export const forum_search_filters = (state: RootState) => state.searchBoxReducer.searchBoxData.forum.searchOptions.filters
export const forum_search_value = (state: RootState) => state.searchBoxReducer.searchBoxData.forum.searchOptions.searchValue




export default SearchBoxSlice.reducer;








