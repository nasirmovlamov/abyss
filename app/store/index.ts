import { configureStore } from '@reduxjs/toolkit';

import appReducer from './slices/App.slice';
import caveRootReducer from './slices/CaveFeatures/Cave_Reducers/Cave.root.reducer';
import chatBoxReducer from './slices/ChatBox.slice';
import commentsReducer from './slices/Comments.slice';
import createProductReducer from './slices/CreateProductFeatures/CreateProduct.slice';
import createQuestionReducer from './slices/CreateQuestionFeatures/CreateQuestion.slice';
import createThreadReducer from './slices/CreateThread/CreateThread.slice';
import linkedProductsReducer from './slices/LinkedProducts.slice';
import pageFiltersReducer from './slices/PageFilters.slice';
import tabsReducer from './slices/PageTabs.slice';
import questionReducer from './slices/Question.slice';
import searchBoxReducer from './slices/SearchBox.slice';
import sideProductReducer from './slices/SideProducts.slice';
import singleProductReducer from './slices/SingleProduct.slice';
import toolTipReducer from './slices/Tooltip.slice';
import userReducer from './slices/User.slice';

const reducer = {
  appReducer: appReducer,
  userReducer: userReducer,
  questionReducer: questionReducer,
  commentsReducer: commentsReducer,
  tabsReducer: tabsReducer,
  chatBoxReducer: chatBoxReducer,
  searchBoxReducer: searchBoxReducer,
  pageFiltersReducer: pageFiltersReducer,
  createProductReducer: createProductReducer,
  createQuestionReducer: createQuestionReducer,
  linkedProductsReducer: linkedProductsReducer,
  caveRootReducer: caveRootReducer,
  sideProductReducer: sideProductReducer,
  createThreadReducer: createThreadReducer,
  singleProductReducer: singleProductReducer,
  toolTipReducer: toolTipReducer,
}

export const store: any = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
