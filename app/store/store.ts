import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../feature/App.slice'
import tabsReducer from '../feature/PageTabs.slice'
import userReducer from '../feature/User.slice'
import questionReducer from '../feature/Question.slice'
import commentsReducer from '../feature/Comments.slice'
import chatBoxReducer from '../feature/ChatBox.slice'
import searchBoxReducer from '../feature/SearchBox.slice'
import pageFiltersReducer from '../feature/PageFilters.slice'
import createProductReducer from '../feature/CreateProductFeatures/CreateProduct.slice'
import createQuestionReducer from '../feature/CreateQuestionFeatures/CreateQuestion.slice'
import linkedProductsReducer from '../feature/LinkedProducts.slice'
import caveReducer from '../feature/CaveFeatures/Cave.slice'


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
  createQuestionReducer:createQuestionReducer,
  linkedProductsReducer:linkedProductsReducer,
  caveReducer:caveReducer
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


