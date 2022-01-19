import { createAsyncThunk } from '@reduxjs/toolkit';

import * as types from '../constants/App.contants';
import { BASE_API_INSTANCE } from './../../helpers/api/BaseInstance';

export const getLinkedProducts = createAsyncThunk(
  types.GET_LINKED_PRODUCTS,
  async (
    data: {
      question_id: number
      current_page: number
      total: number
      last_page: number
    },
    { rejectWithValue },
  ) => {
    try {
      const resp = await BASE_API_INSTANCE.get(
        `/forum/${data.question_id}/answer/loadproducts?page=${data.current_page}`,
      )
      return resp.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const getMentionsOfProduct = createAsyncThunk(
  types.GET_MENTIONS_LINKED_PRODUCT,
  async (
    data: {
      question_id: number
      product_id: number
      current_page: number
      total: number
      last_page: number
    },
    { rejectWithValue },
  ) => {
    try {
      const resp = await BASE_API_INSTANCE.get(
        `/forum/${data.question_id}/${data.product_id}/answer/getanswers?page=${data.current_page}`,
      )
      return resp.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)
