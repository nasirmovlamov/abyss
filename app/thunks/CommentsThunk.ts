
import { BASE_API_URL } from '../../helpers/urls/BASE_URL';
import * as types from '../constants/AppContants'
import { AsyncThunk, createAction, createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { APP_INTERFACE, ForgetPasswordError, LoginAttributes, LoginAuthError, MyData, RegisterAttributes, RegisterAuthError } from '../store/state-Interfaces/AppInterface'
import { BASE_API_INSTANCE } from '../../helpers/api/BaseInstance';



export const getQuestionComments = createAsyncThunk(
    types.GET_QUESTION_COMMENTS, async (id:number, {rejectWithValue}) => {
      try {
          const resp = await BASE_API_INSTANCE.get(`/forum/${id}/thread/getcomment`)
          return resp.data
      } catch (error:any) {
        return rejectWithValue(error.response.data)
      }
    }
  )


export const getAnswerComments = createAsyncThunk(
    types.GET_ANSWER_COMMENTS, async (id:number, {rejectWithValue}) => {
    try {
        const resp = await BASE_API_INSTANCE.get(`/forum/${id}/answer/getcomment`)
        return resp.data
    } catch (error:any) {
      return rejectWithValue(error.response.data)
    }
}
)


export const addQuestionComment = createAsyncThunk(
    types.ADD_QUESTION_COMMENTS, async (comment:{parent_id:number, content:string}, {rejectWithValue}) => {
      try {
        const formdata = new FormData()
        formdata.append('content', comment.content)
        const resp = await BASE_API_INSTANCE.post(`/forum/${comment.parent_id}/thread/comment` , formdata)
        return resp.data
      } catch (error:any) {
        return rejectWithValue(error.response.data)
      }
    }
  )

  export const addAnswerComment = createAsyncThunk(
    types.ADD_ANSWER_COMMENTS, async (comment:{parent_id:number, content:string}, {rejectWithValue}) => {
      try {
        const formdata = new FormData()
        formdata.append('content', comment.content)
        const resp = await BASE_API_INSTANCE.post(`/forum/${comment.parent_id}/answer/comment`, formdata)
        return resp.data
      } catch (error:any) {
        return rejectWithValue(error.response.data)
      }
    }
  )