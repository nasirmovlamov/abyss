import { BASE_API_INSTANCE } from './../../helpers/api/BaseInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as types from '../constants/App.contants'





export const searchFiltersThunk = createAsyncThunk(
    types.SEARCH_FILTERS, async (data:{query:string}, {rejectWithValue}) => {
        try {
            const resp = await BASE_API_INSTANCE.get(`/other/tags/${data.query}` )
            return resp.data
        } catch (error:any) {
            return rejectWithValue(error.response.data)
        }
    }
)
  
