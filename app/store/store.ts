import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../feature/AppSlice'
import tabsReducer from '../feature/PageTabsSlice'
import userReducer from '../feature/UserSlice'
import questionReducer from '../feature/QuestionSlice'
import commentsReducer from '../feature/CommentsSlice'
import chatBoxReducer from '../feature/ChatBoxSlice'
import searchBoxReducer from '../feature/SearchBoxSlice'
import pageFiltersReducer from '../feature/PageFiltersSlice'
import createProductReducer from '../feature/CreateProductFeatures/CreateProductSlice'
import createQuestionReducer from '../feature/CreateQuestionFeatures/CreateQuestionFeatures'

const reducer = 
{  
  appReducer: appReducer , 
  userReducer:userReducer , 
  questionReducer:questionReducer, 
  commentsReducer:commentsReducer  ,
  tabsReducer:tabsReducer,
  chatBoxReducer:chatBoxReducer,
  searchBoxReducer:searchBoxReducer,
  pageFiltersReducer:pageFiltersReducer,
  createProductReducer:createProductReducer,
  createQuestionReducer:createQuestionReducer
}



export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


