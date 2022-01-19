import { createAsyncThunk } from '@reduxjs/toolkit';

import * as types from '../../constants/App.contants';

export const selectAsyncCaveWindow = createAsyncThunk(
  types.SELECT_CAVE_WINDOW,
  async (data: any, { rejectWithValue }) => {
    try {
      return data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)
