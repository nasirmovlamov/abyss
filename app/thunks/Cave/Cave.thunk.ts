
import * as types from '../../constants/App.contants'
import { AsyncThunk, createAction, createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit'
import { BASE_API_INSTANCE } from '../../../helpers/api/BaseInstance';


export const selectAsyncCaveWindow = createAsyncThunk(
    types.SELECT_CAVE_WINDOW, async (data:any, {rejectWithValue}) => {
          try {
            return data
          } catch (error:any) {
            return rejectWithValue(error.response.data)
          }
    }
  )

