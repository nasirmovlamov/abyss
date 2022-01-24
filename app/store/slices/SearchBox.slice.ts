import { getCookie, setCookie } from '../../helpers/functions/CookieFunctions'
import {
  hoverWindowAsync,
  storeSearchInfinity,
  unHoverHeaderAsync,
  unHoverSearchAsync,
} from '../thunks/SearchBox.thunk'

import { RootState } from '..'
import { SEARCHBOX_STATE } from '../states/states/SearchBox.state'
import { createSlice } from '@reduxjs/toolkit'
import { forumSearchInfinity } from '../thunks/SearchBox.thunk'

export const SearchBoxSlice = createSlice({
  name: 'app-slice',
  initialState: SEARCHBOX_STATE,
  reducers: {
    getCachedSearchBoxData(state, action) {
      if (getCookie('searchValue')) {
        state.search_query = getCookie('searchValue')
      } else {
        state.search_query = ''
      }
      if (JSON.parse(getCookie('filterSearch'))) {
        state.filters = JSON.parse(getCookie('filterSearch')!)
      }
      state.page = action.payload.page

      if (getCookie('ForumTypeSearchOption')) {
        state.searchBoxData.forum.searchOptions.forumType = getCookie('ForumTypeSearchOption')!
      } else {
        state.searchBoxData.forum.searchOptions.forumType = 'Questions'
      }

      if (getCookie('ForumSortSearchOption')) {
        state.searchBoxData.forum.searchOptions.forumSort = getCookie('ForumSortSearchOption')!
      } else {
        state.searchBoxData.forum.searchOptions.forumSort = 'Best'
      }

      if (getCookie('StoreTypeSearchOption')) {
        state.searchBoxData.store.searchOptions.storeType = getCookie('StoreTypeSearchOption')!
      } else {
        state.searchBoxData.store.searchOptions.storeType = 'All'
      }
      if (getCookie('StoreSortSearchOption')) {
        state.searchBoxData.store.searchOptions.storeSort = getCookie('StoreSortSearchOption')!
      } else {
        state.searchBoxData.store.searchOptions.storeSort = 'Best'
      }
    },

    selectFilterToSearchOption(state, action) {
      state.exculudedFilters = state.exculudedFilters.filter((tag) => tag.id !== action.payload.id)
      for (let i = 0; i < state.filters.length; i++) {
        if (state.filters[i].id === action.payload.id) {
          state.filters = state.filters.filter((tag) => tag.id !== action.payload.id)
          setCookie('filterSearch', JSON.stringify(state.filters), 365)
          return
        }
      }
      state.filters.push(action.payload)
      state.filters.sort((a, b) => a.name.localeCompare(b.name))
      setCookie('filterSearch', JSON.stringify(state.filters), 365)
    },

    selectFilterToExcludeOption(state, action) {
      state.filters = state.filters.filter((tag) => tag.id !== action.payload.id)
      for (let i = 0; i < state.exculudedFilters.length; i++) {
        if (state.exculudedFilters[i].id === action.payload.id) {
          state.exculudedFilters = state.exculudedFilters.filter(
            (tag) => tag.id !== action.payload.id,
          )
          setCookie('exculudedFilters', JSON.stringify(state.exculudedFilters), 365)
          return
        }
      }
      state.exculudedFilters.push(action.payload)
      state.exculudedFilters.sort((a, b) => a.name.localeCompare(b.name))
      setCookie('exculudedFilters', JSON.stringify(state.exculudedFilters), 365)
    },

    ifFilterWasDeleted(state, action) {
      state.filters = state.filters.filter((tag) => tag.id !== action.payload.id)
      state.exculudedFilters = state.exculudedFilters.filter((tag) => tag.id !== action.payload.id)
      setCookie('filterSearch', JSON.stringify(state.filters), 365)
    },

    searchValueOnChange(state, action) {
      state.search_query = action.payload
      setCookie('searchValue', action.payload, 365)
    },

    selectTypeSearchOption(state, action) {
      if (action.payload.page === 'forum') {
        state.searchBoxData.forum.searchOptions.forumType = action.payload.type
        setCookie('ForumTypeSearchOption', action.payload.type, 365)
      } else if (action.payload.page === 'store') {
        state.searchBoxData.store.searchOptions.storeType = action.payload.type
        setCookie('StoreTypeSearchOption', action.payload.type, 365)
      }
    },

    selectSortSearchOption(state, action) {
      if (action.payload.page === 'forum') {
        state.searchBoxData.forum.searchOptions.forumSort = action.payload.sort
        setCookie('ForumSortSearchOption', action.payload.sort, 365)
      } else if (action.payload.page === 'store') {
        state.searchBoxData.store.searchOptions.storeSort = action.payload.sort
        setCookie('StoreSortSearchOption', action.payload.sort, 365)
      }
    },

    resetSendedQuery(state, _) {
      if (state.page === '/forum') {
        state.searchBoxData.forum.searchOptions.sendedQuery = null
      } else if (state.page === '/store') {
        state.searchBoxData.store.searchOptions.sendedQuery = null
      }
    },

    changeSearchVisibilty(state, action) {
      state.isSearchVisible = action.payload
    },
    changeThunkBackVisibilty(state, action) {
      state.thunkBackground = action.payload
    },

    setScrollPositionYForum(state, action) {
      state.searchBoxData.forum.scrollY = action.payload
    },
    setScrollPositionYStore(state, action) {
      state.searchBoxData.store.scrollY = action.payload
    },

    hoverSearchBox(state, action) {
      state.isHovered = true
      if (state.isHeaderHovered) {
        state.isFromHeaderToSearch = true
      } else {
        state.isFromHeaderToSearch = false
      }
    },

    unhoverSearchBox(state, action) {
      state.isHovered = false
    },

    hoverSearchNav(state, action) {
      state.isNavHovered = true
    },
    unhoverSearchNav(state, action) {
      state.isNavHovered = false
    },

    focusSearchBox(state, action) {
      state.isFocused = true
    },
    blurSearchBox(state, action) {
      if (!state.isNavHovered) {
        state.isFocused = false
      }
    },

    hoverHeader(state, action) {
      state.isHeaderHovered = true
    },
    unhoverHeader(state, action) {
      if (state.isFromHeaderToSearch) {
        state.isHovered = true
      } else {
        state.isHovered = false
      }
      state.isFromHeaderToSearch = false
      state.isHeaderHovered = false
    },

    hoverWindow(state, action) {
      state.isinWindow = true
      state.isHovered = false

      if (state.isHeaderHovered) {
        state.isHovered = true
      } else {
        state.isHovered = false
      }
    },
    unhoverWindow(state, action) {
      state.isinWindow = false
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
    builder.addCase(forumSearchInfinity.fulfilled, (state, { payload }) => {
      if (payload.data.from == 0) {
        state.searchBoxData.forum.data = []
        state.searchBoxData.forum.fromNumber = 0
        state.searchBoxData.forum.results_number = 0
        state.searchBoxData.forum.searchOptions.sendedQuery = ''
      }

      state.searchBoxData.forum.data = [...state.searchBoxData.forum.data, ...payload.data.results]
      state.searchBoxData.forum.fromNumber = state.searchBoxData.forum.data.length
      state.searchBoxData.forum.results_number = payload.data.total
      state.searchBoxData.forum.searchOptions.sendedQuery = state.search_query
      state.searchBoxData.forum.initialLoader = false
      if (state.searchBoxData.forum.data.length >= state.searchBoxData.forum.results_number) {
        state.searchBoxData.forum.status = 'loaded'
      }
      state.searchBoxData.forum.infinityLoader = 'loaded'
    }),
      builder.addCase(forumSearchInfinity.pending, (state, { payload }) => {
        state.searchBoxData.forum.status = 'loading'
        state.searchBoxData.forum.infinityLoader = 'loading'
        if (state.searchBoxData.forum.searchOptions.sendedQuery !== state.search_query) {
          state.searchBoxData.forum.initialLoader = true
        }
      }),
      builder.addCase(forumSearchInfinity.rejected, (state, { payload }) => {
        state.searchBoxData.forum.status = 'error'
        state.searchBoxData.forum.infinityLoader = 'error'
      })

    // Store Search Infinity
    builder.addCase(storeSearchInfinity.fulfilled, (state, { payload }) => {
      if (payload.data.from == 0) {
        state.searchBoxData.store.data = []
        state.searchBoxData.store.fromNumber = 0
        state.searchBoxData.store.results_number = 0
        state.searchBoxData.store.searchOptions.sendedQuery = ''
      }

      state.searchBoxData.store.data = [...state.searchBoxData.store.data, ...payload.data.results]
      state.searchBoxData.store.fromNumber = state.searchBoxData.store.data.length
      state.searchBoxData.store.results_number = payload.data.total
      state.searchBoxData.store.searchOptions.sendedQuery = state.search_query
      if (state.searchBoxData.store.data.length >= state.searchBoxData.store.results_number) {
        state.searchBoxData.store.status = 'loaded'
      }
      state.searchBoxData.store.infinityLoader = 'loaded'
    }),
      builder.addCase(storeSearchInfinity.pending, (state, { payload }) => {
        state.searchBoxData.store.status = 'loading'
        state.searchBoxData.store.infinityLoader = 'loading'
      }),
      builder.addCase(storeSearchInfinity.rejected, (state, { payload }) => {
        state.searchBoxData.store.status = 'error'
        state.searchBoxData.store.infinityLoader = 'error'
      }),
      builder.addCase(unHoverSearchAsync.fulfilled, (state, { payload }) => {
        if (!state.isHeaderHovered) {
          state.isHovered = false
        }
      })

    builder.addCase(hoverWindowAsync.fulfilled, (state, { payload }) => {
      state.isinWindow = true
      if (state.isHeaderHovered) {
        state.isHovered = true
      } else {
        state.isHovered = false
      }
    })

    builder.addCase(unHoverHeaderAsync.fulfilled, (state, { payload }) => {
      if (state.isinWindow) {
        if (state.isFromHeaderToSearch) {
          state.isHovered = true
        } else {
          state.isHovered = false
        }
        state.isFromHeaderToSearch = false
        state.isHeaderHovered = false
      } else {
        state.isHeaderHovered = false
        state.isFromHeaderToSearch = false
      }
    })
  },
})

// action
export const {
  selectFilterToSearchOption,
  selectTypeSearchOption,
  selectSortSearchOption,
  getCachedSearchBoxData,
  ifFilterWasDeleted,
  searchValueOnChange,
  resetSendedQuery,
  changeSearchVisibilty,
  changeThunkBackVisibilty,
  setScrollPositionYForum,
  setScrollPositionYStore,
  hoverSearchBox,
  unhoverSearchBox,
  focusSearchBox,
  blurSearchBox,
  unhoverHeader,
  hoverHeader,
  hoverSearchNav,
  unhoverSearchNav,
  hoverWindow,
  unhoverWindow,
  selectFilterToExcludeOption,
} = SearchBoxSlice.actions

export const search_query = (state: RootState) => state.searchBoxReducer.search_query
// data
export const search_data = (state: RootState) => state.searchBoxReducer

export const forum_search_data = (state: RootState) => state.searchBoxReducer.searchBoxData.forum
export const store_search_data = (state: RootState) => state.searchBoxReducer.searchBoxData.store
export const search_filters = (state: RootState) => state.searchBoxReducer.filters
export const search_exclude_filters = (state: RootState) => state.searchBoxReducer.exculudedFilters

export default SearchBoxSlice.reducer
