import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PAGE_FILTERS_STATE } from '../store/states/PageFiltersState';
import { RootState } from '../store/store'



export const PageFiltersSlice = createSlice({
  name: 'app-slice',
  initialState:PAGE_FILTERS_STATE,
  reducers: {

    changePositionOfFilters(state, action) {
        state.isShown = !action.payload
    },
    changeToStayInFocus(state, action) {
      state.stayInFocus= !action.payload
    },
   
    addFilter(state, action) {
      for (let i = 0; i < state.filterTags.length; i++) {
        if (state.filterTags[i].name === action.payload.name) {
          return 
        }
      } 
      state.filterTags.push(action.payload)
    },

    filterSearchValueOnChange(state, action){
      state.filterSearchValue.value = action.payload
      state.filterSearchValue.isTouched = true

    },
    filterTagsSearchisFocused(state, action){
      state.filterSearchValue.isTouched = !action.payload
    },
    
    filterTagsOnClick(state, action){
      // state.filterTagsOnClick=action.payload
    },
    filterTagsOnDelete(state, action){
      state.filterTags = state.filterTags.filter(tag => tag.id !== action.payload)
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

  },

})


// action
export const {
  changePositionOfFilters , 
  changeToStayInFocus , 
  addFilter , 
  filterSearchValueOnChange,
  filterTagsSearchisFocused,
  filterTagsOnClick,
  filterTagsOnDelete
} = PageFiltersSlice.actions;


// data
export const is_focused = (state: RootState) => state.pageFiltersReducer.isShown
export const stay_in_focus = (state: RootState) => state.pageFiltersReducer.stayInFocus
export const filter_search_tags = (state: RootState) => state.pageFiltersReducer.filterSearch
export const filter_tags = (state: RootState) => state.pageFiltersReducer.filterTags
export const filter_search_value = (state: RootState) => state.pageFiltersReducer.filterSearchValue


export default PageFiltersSlice.reducer;








