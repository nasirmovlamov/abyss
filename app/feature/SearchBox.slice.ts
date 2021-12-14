import { storeSearch, storeSearchInfinity } from './../thunks/SearchBoxThunks';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store'
import { SEARCHBOX_STATE } from '../store/states/SearchBoxState'
import { forumSearch, forumSearchInfinity } from '../thunks/SearchBoxThunks'
import { autoErrorToaster } from '../../components/Notify/AutoErrorToaster'
import { getCookie, setCookie } from '../../logic/CookieFunctions'



export const SearchBoxSlice = createSlice({
  name: 'app-slice',
  initialState:SEARCHBOX_STATE,
  reducers: {

    getCachedSearchBoxData(state , action)
    { 
      console.log(action.payload.page)
      console.log(getCookie("ForumTypeSearchOption"))
      console.log(getCookie('ForumSortSearchOption'))


      if(getCookie('searchValue')){
        state.search_query = getCookie('searchValue')
      }else{
        state.search_query = ''
      }
      if(JSON.parse(getCookie('filterSearch')))
      {
        state.filters = JSON.parse(getCookie('filterSearch')!)
      }
      state.page = action.payload.page

      if(action.payload.page === '/forum'){
        if(getCookie('ForumTypeSearchOption'))
        {
          state.searchBoxData.forum.searchOptions.forumType = getCookie("ForumTypeSearchOption")!
        }else 
        {
          state.searchBoxData.forum.searchOptions.forumType = "Questions"
        }
        
        if(getCookie('ForumSortSearchOption'))
        {
          state.searchBoxData.forum.searchOptions.forumSort = getCookie("ForumSortSearchOption")!
        }
        else 
        {
          state.searchBoxData.forum.searchOptions.forumSort = "New"
        }
      }

      if(action.payload.page === '/store'){
        if(getCookie('StoreTypeSearchOption'))
        {
          state.searchBoxData.store.searchOptions.storeType = getCookie("StoreTypeSearchOption")!
        }else 
        {
          state.searchBoxData.store.searchOptions.storeType = "Questions"
        }
        if(getCookie('StoreSortSearchOption'))
        {
          state.searchBoxData.store.searchOptions.storeSort = getCookie("StoreSortSearchOption")!
        }
        else 
        {
          state.searchBoxData.store.searchOptions.storeSort = "Newes"
        }
      }
    },

    selectFilterToSearchOption(state, action) {
      for (let i = 0; i < state.filters.length; i++) {
        if (state.filters[i].id === action.payload.id) {
          state.filters = state.filters.filter(tag => tag.id !== action.payload.id)
          setCookie("filterSearch" , JSON.stringify(state.filters) , 365)
          return
        }
      } 
      state.filters.push(action.payload)
      setCookie("filterSearch" , JSON.stringify(state.filters) , 365)
    },

    ifFilterWasDeleted(state, action){
      state.filters = state.filters.filter(tag => tag.id !== action.payload.id)
      setCookie("filterSearch" , JSON.stringify(state.filters) , 365)
    },

    searchValueOnChange(state, action){
      state.search_query = action.payload
      setCookie("searchValue" , action.payload , 365)
    },

    selectTypeSearchOption(state, action) {
      if(state.page === '/forum'){
        state.searchBoxData.forum.searchOptions.forumType = action.payload
        setCookie("ForumTypeSearchOption" , action.payload , 365)
      }else if (state.page === '/store'){
        state.searchBoxData.store.searchOptions.storeType = action.payload
        setCookie("StoreTypeSearchOption" , action.payload , 365)
      } 
    },

    selectSortSearchOption(state, action) {
      console.log(state.page)
      if(state.page === '/forum'){
        state.searchBoxData.forum.searchOptions.forumSort = action.payload
        setCookie("ForumSortSearchOption" , action.payload , 365)
      }else if (state.page === '/store'){
        state.searchBoxData.store.searchOptions.storeSort = action.payload
        setCookie("StoreSortSearchOption" , action.payload , 365)
      } 
    },

    resetSendedQuery (state, _) {
      if(state.page === '/forum'){
        state.searchBoxData.forum.searchOptions.sendedQuery = null
      }else if (state.page === '/store'){
        state.searchBoxData.store.searchOptions.sendedQuery = null
      }
    },
    
    changeSearchVisibilty(state, action) {
      state.isSearchVisible = action.payload  
    },
    changeThunkBackVisibilty(state, action) {
      state.thunkBackground = action.payload  
    },

    setScrollPositionYForum(state , action){
      state.searchBoxData.forum.scrollY = action.payload
    },
    setScrollPositionYStore(state , action){
      state.searchBoxData.store.scrollY = action.payload
    },

    

  },


  extraReducers: (builder) => {

    // // Forum Search
    // builder.addCase(forumSearch.fulfilled, (state, {payload}) => {
    //   state.searchBoxData.forum.data = payload.data.results
    //   state.searchBoxData.forum.fromNumber = state.searchBoxData.forum.data.length
    //   state.searchBoxData.forum.results_number = payload.data.total
    //   state.searchBoxData.forum.searchOptions.sendedQuery = state.search_query
    // }),
    // builder.addCase(forumSearch.pending, (state, {payload}) => {
    //   state.searchBoxData.forum.status = "loading"
    // }),
    // builder.addCase(forumSearch.rejected, (state, {payload}) => {
    //   state.searchBoxData.forum.status = "error"
    //   autoErrorToaster(payload)
    // })  

    // // Forum Search
    // builder.addCase(storeSearch.fulfilled, (state, {payload}) => {
    //   if(payload.data.results === state.searchBoxData.store.data.length){
    //     state.searchBoxData.store.status = "loaded"
    //     return
    //   }
    //   state.searchBoxData.store.data = payload.data.results
    //   state.searchBoxData.store.fromNumber = state.searchBoxData.store.data.length
    //   state.searchBoxData.store.results_number = payload.data.total
    //   state.searchBoxData.store.searchOptions.sendedQuery = state.search_query
    // }),
    // builder.addCase(storeSearch.pending, (state, {payload}) => {
    //   state.searchBoxData.store.status = "loading"
    // }),
    // builder.addCase(storeSearch.rejected, (state, {payload}) => {
    //   state.searchBoxData.store.status = "error"
    //   autoErrorToaster(payload)
    // })  




    // Forum Search
    builder.addCase(forumSearchInfinity.fulfilled, (state, {payload}) => {
      if(payload.data.from == 0){
        state.searchBoxData.forum.data = []
        state.searchBoxData.forum.fromNumber=0
        state.searchBoxData.forum.results_number=0
        state.searchBoxData.forum.searchOptions.sendedQuery = ""
      }
      
      state.searchBoxData.forum.data = [... state.searchBoxData.forum.data , ...payload.data.results]
      state.searchBoxData.forum.fromNumber = state.searchBoxData.forum.data.length
      state.searchBoxData.forum.results_number = payload.data.total
      state.searchBoxData.forum.searchOptions.sendedQuery = state.search_query
      state.searchBoxData.forum.initialLoader = false
      if(state.searchBoxData.forum.data.length >= state.searchBoxData.forum.results_number){
        state.searchBoxData.forum.status = "loaded"
      }
    }),
    builder.addCase(forumSearchInfinity.pending, (state, {payload}) => {
      state.searchBoxData.forum.status = "loading"
      if(state.searchBoxData.forum.searchOptions.sendedQuery !==  state.search_query){
        state.searchBoxData.forum.initialLoader = true
      }
    }),
    builder.addCase(forumSearchInfinity.rejected, (state, {payload}) => {
      autoErrorToaster(payload)
      state.searchBoxData.forum.status = "error"
    })  

    // Store Search Infinity
    builder.addCase(storeSearchInfinity.fulfilled, (state, {payload}) => {
      console.log(payload.data.from == 0)
      if(payload.data.from == 0){
        state.searchBoxData.store.data = []
        state.searchBoxData.store.fromNumber=0
        state.searchBoxData.store.results_number=0
        state.searchBoxData.store.searchOptions.sendedQuery = ""
      }
      
      state.searchBoxData.store.data = [... state.searchBoxData.store.data , ...payload.data.results]
      state.searchBoxData.store.fromNumber = state.searchBoxData.store.data.length
      state.searchBoxData.store.results_number = payload.data.total
      state.searchBoxData.store.searchOptions.sendedQuery = state.search_query
      if(state.searchBoxData.store.data.length >= state.searchBoxData.store.results_number){
        state.searchBoxData.store.status = "loaded"
      }
    }),
    builder.addCase(storeSearchInfinity.pending, (state, {payload}) => {
      state.searchBoxData.store.status = "loading"
    }),
    builder.addCase(storeSearchInfinity.rejected, (state, {payload}) => {
      state.searchBoxData.store.status = "error"
      autoErrorToaster(payload)
    })  


    



    

  },

})


// action
export const 
{
  selectFilterToSearchOption , 
  selectTypeSearchOption , 
  selectSortSearchOption,
  getCachedSearchBoxData,
  ifFilterWasDeleted,
  searchValueOnChange,
  resetSendedQuery,
  changeSearchVisibilty,
  changeThunkBackVisibilty,
  setScrollPositionYForum,
  setScrollPositionYStore,
} = SearchBoxSlice.actions;


export const search_query = (state: RootState) => state.searchBoxReducer.search_query
// data
export const search_data = (state: RootState) => state.searchBoxReducer
export const forum_search_data = (state: RootState) => state.searchBoxReducer.searchBoxData.forum
export const store_search_data = (state: RootState) => state.searchBoxReducer.searchBoxData.store
export const search_filters = (state: RootState) => state.searchBoxReducer.filters


export default SearchBoxSlice.reducer;








