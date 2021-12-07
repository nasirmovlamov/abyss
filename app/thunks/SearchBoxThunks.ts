
import * as types from '../constants/App.contants'
import { AsyncThunk, createAction, createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit'
import { BASE_API_INSTANCE } from '../../helpers/api/BaseInstance';


export const forumSearch = createAsyncThunk(
    types.FORUM_SEARCH, async (query:string, {rejectWithValue}) => {
          try {
            const resp = await BASE_API_INSTANCE.get(`forum/search/?query=${query}`)
            console.log(resp.data)
            return resp.data
          } catch (error:any) {
            return rejectWithValue(error.response.data)
          }
    }
)


export const forumSearchInfinity = createAsyncThunk(
    types.FORUM_SEARCH_INFINITY, async (data:{query:string,from:number}, {rejectWithValue}) => {
        try {
          const resp = await BASE_API_INSTANCE.get(`forum/search/?query=${data.query}&from=${data.from}`)
          console.log(resp.data)
          return resp.data
        } catch (error:any) {
          return rejectWithValue(error.response.data)
        }
    }
)



export const storeSearch = createAsyncThunk(
  types.STORE_SEARCH, async (query:string, {rejectWithValue}) => {
        try {
          const resp = await BASE_API_INSTANCE.get(`store/search?query=${query}`)
          console.log(resp.data)
          return resp.data
        } catch (error:any) {
          return rejectWithValue(error.response.data)
        }
  }
)


export const storeSearchInfinity = createAsyncThunk(
  types.STORE_SEARCH_INFINITY, async (data:{query:string,from:number}, {rejectWithValue}) => {
      try {
        const resp = await BASE_API_INSTANCE.get(`store/search?query=${data.query}&from=${data.from}`)
        console.log(resp.data)
        return resp.data
      } catch (error:any) {
        return rejectWithValue(error.response.data)
      }
  }
)