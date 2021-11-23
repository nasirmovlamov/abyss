import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export interface PageTabsState {
    page_tabs:{
        forumTabs:{tabName:string , link:string , id:number , isActive:boolean}[]
        productTabs:{tabName:string , link:string , id:number , isActive:boolean}[]
    }
}

const initialState: PageTabsState = {
    page_tabs:{
        forumTabs:[{tabName:"Answers" , link:"answersCont" , id:0 , isActive:true} , {tabName:"Products" , link:"productsCont" , id:1 , isActive:false}],
        productTabs:[{tabName:"Code" , link:"codeCont" , id:2 , isActive:true} , {tabName:"Info" , link:"requirementsCont" , id:3 , isActive:false} , {tabName:"Forum" , link:"forumCont" , id:4 , isActive:false} , {tabName:"Clips" , link:"clipCont" , id:5 , isActive:false}]
    }
};


export const PageTabsSlice = createSlice({
  name: 'PageTabs',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeForumTabActive: (state , {payload}) => {
        state.page_tabs.forumTabs = payload
    },
    changeProductTabActive: (state , action) => {
        state.page_tabs.productTabs[action.payload.id].isActive = action.payload.isActive
    },
  },  
  
});

export const { changeForumTabActive , changeProductTabActive} = PageTabsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.PageTabs.value)`
export const page_tabs = (state: RootState) => state.tabsReducer.page_tabs;
export const forum_tabs = (state: RootState) => state.tabsReducer.page_tabs.forumTabs;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


export default PageTabsSlice.reducer;
