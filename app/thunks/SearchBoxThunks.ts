
import * as types from '../constants/App.contants'
import { AsyncThunk, createAction, createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit'
import { BASE_API_INSTANCE } from '../../helpers/api/BaseInstance';


export const forumSearch = createAsyncThunk(
    types.SEARCH_FORUM, async (query:string, {rejectWithValue}) => {
          try {
            const resp = await BASE_API_INSTANCE.get(`forum/search/${query}`)
            console.log(resp.data)
            return resp.data
          } catch (error:any) {
            return rejectWithValue(error.response.data)
          }
    }
  )


  export const forumSearchInfinity = createAsyncThunk(
    types.SEARCH_FORUM_INFINITY, async (data:{query:string,from:number}, {rejectWithValue}) => {
        try {
          const resp = await BASE_API_INSTANCE.get(`forum/search/${data.query}?from=${data.from}`)
          console.log(resp.data)
          return resp.data
        } catch (error:any) {
          return rejectWithValue(error.response.data)
        }
    }
  )