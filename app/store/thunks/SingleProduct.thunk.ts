import * as types from '../constants/App.contants'

import { BASE_API_INSTANCE } from '../../helpers/api/BaseInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getSingleProduct = createAsyncThunk(
  types.GET_SINGLE_PRODUCT,
  async (data: { id: any; slug: any }, { rejectWithValue }) => {
    try {
      const resp = await BASE_API_INSTANCE.get(`/store/${data.id}/${data.slug}`)
      return resp.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)
