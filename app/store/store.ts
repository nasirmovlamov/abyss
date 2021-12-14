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
import caveRootReducer from '../feature/CaveFeatures/Cave_Reducers/Cave.root.reducer'
import sideProductReducer from '../feature/SideProducts.slice'
import createThreadReducer from '../feature/CreateThread/CreateThread.slice'
import singleProductReducer from '../feature/SingleProduct.slice'
import toolTipReducer from '../feature/Tooltip.slice'

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
  caveRootReducer:caveRootReducer,
  sideProductReducer:sideProductReducer,
  createThreadReducer:createThreadReducer,
  singleProductReducer:singleProductReducer,
  toolTipReducer:toolTipReducer,
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


