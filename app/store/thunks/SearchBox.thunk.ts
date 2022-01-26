import { createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_API_INSTANCE } from '../../helpers/api/BaseInstance';
import * as types from '../constants/App.contants';

export const forumSearch = createAsyncThunk(
  types.FORUM_SEARCH,
  async (query: string, { rejectWithValue }) => {
    try {
      const resp = await BASE_API_INSTANCE.get(`forum/search/?query=${query}`)
      return resp.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const storeSearch = createAsyncThunk(
  types.STORE_SEARCH,
  async (query: string, { rejectWithValue }) => {
    try {
      const resp = await BASE_API_INSTANCE.get(`store/search?query=${query}`)
      return resp.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const unHoverSearchAsync = createAsyncThunk(
  types.UN_HOVER_SEARCH,
  async (data: any, { rejectWithValue }) => {
    setTimeout(() => {
      return true
    }, 100)
  },
)

export const unHoverHeaderAsync = createAsyncThunk(
  types.UN_HOVER_HEADER,
  async (data: any, { rejectWithValue }) => {
    setTimeout(() => {
      return true
    }, 150)
  },
)

export const hoverWindowAsync = createAsyncThunk(
  types.HOVER_WINDOW,
  async (data: any, { rejectWithValue }) => {
    setTimeout(() => {
      return true
    }, 150)
  },
)

export const forumSearchInfinity = createAsyncThunk(
  types.FORUM_SEARCH_INFINITY,
  async (
    data: {
      query: string
      from: number
      forumType: string
      filterTags: any[]
      excludedFilters: any[]
    },
    { rejectWithValue },
  ) => {
    try {
      const type = forumTypeDeterminer(data.forumType)
      // const sort = forumsortDeterminer(data.sort)
      const resp = await BASE_API_INSTANCE.get(
        `forum/search/?query=${data.query}&from=${
          data.from
        }&type=${type}&tags=${data.filterTags.map((tag, index) => `${tag.name}`)}${
          data.excludedFilters.length > 0 ? '&must_not=' : ''
        }${data.excludedFilters.map((tag, index) => `${tag.name}`)}`,
      )
      return resp.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const storeSearchInfinity = createAsyncThunk(
  types.STORE_SEARCH_INFINITY,
  async (
    data: {
      query: string
      from: number
      storeType: string
      filterTags: any[]
      excludedFilters: any[]
    },
    { rejectWithValue },
  ) => {
    try {
      const type = forumTypeDeterminer(data.storeType)
      // const resp = await BASE_API_INSTANCE.get(`store/search?query=${data.query}&from=${data.from}&type=${type}&tags=${data.filterTags.map(  (tag , index) => `${tag.name}${index < data.filterTags.length}`)}`)
      const resp = await BASE_API_INSTANCE.get(
        `store/search?query=${data.query}&from=${data.from}&tags=${data.filterTags.map(
          (tag, index) => `${tag.name}`,
        )}${data.excludedFilters.length > 0 ? '&must_not=' : ''}${data.excludedFilters.map(
          (tag, index) => `${tag.name}`,
        )}`,
      )
      return resp.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)

const forumTypeDeterminer = (type: string) => {
  switch (type) {
    case 'Questions':
      return 1
    case 'Requests':
      return 2
    case 'Discussion':
      return 3
    default:
      return 1
  }
}

const forumsortDeterminer = (type: string) => {
  switch (type) {
    case 'Best':
      return 1
    case 'New':
      return 2
    case 'Top':
      return 3
    default:
  }
}

const storeTypeDeterminer = (type: string) => {
  switch (type) {
    case 'All':
      return 1
    case 'Free':
      return 2
    case 'Paid':
      return 3
    default:
  }
}

const storeSortDeterminer = (type: string) => {
  switch (type) {
    case 'Best':
      return 1
    case 'New':
      return 2
    case 'Top':
      return 3
    default:
  }
}
