import { createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_API_INSTANCE } from '../../helpers/api/BaseInstance';
import * as types from '../constants/App.contants';

export const getSideProducts = createAsyncThunk(
  types.GET_SIDE_PRODUCTS,
  async (data: { page: number; id: number }, { rejectWithValue }) => {
    try {
      const resp = await BASE_API_INSTANCE.get(
        `forum/${data.id}/answer/loadproducts?page=${data.page}`,
      )
      return resp.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)
