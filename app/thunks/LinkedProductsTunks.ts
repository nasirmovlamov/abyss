import { BASE_API_INSTANCE } from './../../helpers/api/BaseInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as types from '../constants/AppContants'





export const getLinkedProducts = createAsyncThunk(
    types.GET_LINKED_PRODUCTS, async (data:{question_id:number,from:number}, {rejectWithValue}) => {
        try {
            const resp = await BASE_API_INSTANCE.get(`/forum/${data.question_id}/answer/loadproducts?from=${data.from}` )
            return resp.data
        } catch (error:any) {
            return rejectWithValue(error.response.data)
        }
    }
  )
  