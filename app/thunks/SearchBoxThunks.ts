
import * as types from '../constants/AppContants'
import { AsyncThunk, createAction, createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit'
import { BASE_API_INSTANCE } from '../../helpers/api/BaseInstance';


export const forumSearch = createAsyncThunk(
    types.SEARCH_FORUM, async (query:string, {rejectWithValue}) => {
        if(query !== "")
        {
            try {
              const resp = await BASE_API_INSTANCE.get(`forum/search/${query}`)
              return resp.data
            } catch (error:any) {
              return rejectWithValue(error.response.data)
            }
        }
    }
  )