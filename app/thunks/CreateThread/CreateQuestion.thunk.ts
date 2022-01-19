import { createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_API_INSTANCE } from '../../../helpers/api/BaseInstance'
import * as types from '../../constants/App.contants'

export const createQuestionThunk = createAsyncThunk(
  types.CREATE_QUESTION,
  async (data: any, { rejectWithValue }) => {
    try {
      const form_data = new FormData()
      form_data.append('title', data.questionTitle)
      form_data.append('content', data.questionValue)
      form_data.append('tags', JSON.stringify(data.tags))
      form_data.append('type', '1')
      const resp = await BASE_API_INSTANCE.post(`/forum/create`, form_data)
      return resp.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)
