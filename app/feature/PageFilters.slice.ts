import { searchFiltersThunk } from './../thunks/PageFiltersThunk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCookie, setCookie } from '../../logic/CookieFunctions';
import { PAGE_FILTERS_STATE } from '../store/states/PageFiltersState';
import { RootState } from '../store/store'



export const PageFiltersSlice = createSlice({
  name: 'app-slice',
  initialState:PAGE_FILTERS_STATE,
  reducers: {

    getFiltersFromCache (state, action ){
      if(getCookie('filterTags')){
        state.filterTags = JSON.parse(getCookie('filterTags'))!;
      }
      if(getCookie('stayInFocusFiltersBlock'))
      {
        state.stayInFocus= JSON.parse(getCookie('stayInFocusFiltersBlock'))
      }
      if(getCookie('FiltersAreShown'))
      {
        state.isShown = JSON.parse(getCookie('FiltersAreShown'))
      }
    },
    
    changePositionOfFilters(state, action) {
        state.isShown = !action.payload
        setCookie('FiltersAreShown', JSON.stringify(state.isShown) , 1)
    },

    inChangePositionOfFilters(state, action) {
      state.isShown = true
      setCookie('FiltersAreShown', JSON.stringify(state.isShown) , 1)
    },
    outChangePositionOfFilters(state, action) {
      state.isShown = false
      setCookie('FiltersAreShown', JSON.stringify(state.isShown) , 1)
    },

    changeToStayInFocus(state, action) {
      state.stayInFocus= !action.payload
      setCookie('stayInFocusFiltersBlock', JSON.stringify(state.stayInFocus) , 1)
    },
   
    addFilter(state, action) {
      for (let i = 0; i < state.filterTags.length; i++) {
        if (state.filterTags[i].name === action.payload.name) {
          return 
        }
      } 
      state.filterTags.push(action.payload)
      setCookie('filterTags', JSON.stringify(state.filterTags), 1)
    },

    filterSearchValueOnChange(state, action){
      state.filterSearchValue.value = action.payload
      state.filterSearchValue.isTouched = true
    },
    
    filterTagsSearchisFocused(state, action){
      state.filterSearchValue.isTouched = true
    },

    filterTagsSearchisBlur(state, action){
      state.filterSearchValue.isTouched = false
    },
    
    filterDropisHovered(state, action){
      state.filterSearchValue.isDropHovered = true
    },

    filterDropisUnHovered(state, action){
      state.filterSearchValue.isDropHovered = false
    },

    filterTagsOnClick(state, action){
      // state.filterTagsOnClick=action.payload
    },
    filterTagsOnDelete(state, action){
      state.filterTags = state.filterTags.filter(tag => tag.id !== action.payload)
      state.filterTags = state.filterTags.filter(tag => tag.id !== action.payload)
      setCookie('filterTags', JSON.stringify(state.filterTags), 1)
    },
          

  },





  extraReducers: (builder) => {

    //ADD NEW ANSWER to Question Reducers
    // builder.addCase(addAnswer.fulfilled, (state, {payload}) => {
    //     successToast("top-right" ,payload.message)
    //     state.answersData.topAnswers.answers = [  payload.data , ...state.answersData.topAnswers.answers ]
    // }),
    // builder.addCase(addAnswer.pending, (state, {payload}) => {
      
    // }),
    // builder.addCase(addAnswer.rejected, (state, {payload}) => {
    //   autoErrorToaster(payload)
    // })  

    builder.addCase(searchFiltersThunk.fulfilled, (state, {payload}) => {
      state.filterSearch.filters = payload.data
      state.filterSearch.searchStatus = 'idle'
    }),
    builder.addCase(searchFiltersThunk.pending, (state, {payload}) => {
      state.filterSearch.searchStatus = 'pending'
      
    }),
    builder.addCase(searchFiltersThunk.rejected, (state, {payload}) => {
      state.filterSearch.searchStatus = 'failed'
      state.filterSearch.filters = []
    })  

  },

})


// action
export const {
  changePositionOfFilters , 
  changeToStayInFocus , 
  addFilter , 
  filterSearchValueOnChange,
  filterTagsSearchisFocused,
  filterTagsSearchisBlur,
  filterTagsOnClick,
  filterTagsOnDelete,
  getFiltersFromCache,
  inChangePositionOfFilters,
  outChangePositionOfFilters,
  filterDropisHovered,
  filterDropisUnHovered
} = PageFiltersSlice.actions;


// data
export const is_focused = (state: RootState) => state.pageFiltersReducer.isShown
export const stay_in_focus = (state: RootState) => state.pageFiltersReducer.stayInFocus
export const filter_search_tags = (state: RootState) => state.pageFiltersReducer.filterSearch
export const filter_tags = (state: RootState) => state.pageFiltersReducer.filterTags
export const filter_search_value = (state: RootState) => state.pageFiltersReducer.filterSearchValue


export default PageFiltersSlice.reducer;








