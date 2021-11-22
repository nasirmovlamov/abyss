import { BASE_API_INSTANCE } from './../../helpers/api/BaseInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as types from '../constants/AppContants'





export const getLinkedProducts = createAsyncThunk(
    types.GET_LINKED_PRODUCTS, async (data:{question_id: number , current_page:number , total:number, last_page:number}, {rejectWithValue}) => {
        try {
            const resp = await BASE_API_INSTANCE.get(`/forum/${data.question_id}/answer/loadproducts?page=${data.current_page}` )
            return resp.data
        } catch (error:any) {
            return rejectWithValue(error.response.data)
        }
    }
  )
  