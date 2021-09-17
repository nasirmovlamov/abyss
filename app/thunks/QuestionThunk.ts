import { accessToken, getAccessToken, setAccessToken } from '../../helpers/token/TokenHandle';
import { BASE_API_URL } from '../../helpers/urls/BASE_URL';
import * as types from '../constants/AppContants'
import { AsyncThunk, createAction, createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit'
import {getToken} from '../../logic/userToken'
import { AxiosError } from 'axios'
import { APP_INTERFACE } from '../store/state-Interfaces/AppInterface'
import { BASE_API_INSTANCE } from '../../helpers/api/BaseInstance';


export const getSingleQuestion = createAsyncThunk(
  types.GET_SINGLE_QUESTION, async (url:string, {rejectWithValue}) => {
      try {
        const resp = await BASE_API_INSTANCE.get(`${url}`)
        return resp.data
      } catch (error:any) {
        return rejectWithValue(error.response.data)
      }
  }
)




export const getAnswers = createAsyncThunk(
  types.GET_ANSWERS, async (data:{page:number,direction:string,questionId:number}, {rejectWithValue}) => {
      try {
        const resp = await BASE_API_INSTANCE.get(`/forum/${data.questionId}/answer/loadanswers?page=${data.page}`)
        if(data.direction === 'next'){
          return {data: resp.data , next:true}
        }
        else if(data.direction === 'previous'){
          return {data: resp.data , next:false}
        }
        return null
      } catch (error:any) {
        return rejectWithValue(error.response.data)
      }
  }
)









export const voteQuestion = createAsyncThunk(
    types.VOTE_QUESTION, async (vote:{id:string | string[] | undefined , type:string}, {rejectWithValue}) => {
        try {
          const formData = new FormData()
          formData.append("type" , vote.type)
          const resp = await BASE_API_INSTANCE.post(`/forum/${vote.id}/thread/vote` , formData)
          return resp.data
        } catch (error:any) {
          return rejectWithValue(error.response.data)
        }
    }
  )
  
  
  export const unVoteQuestion = createAsyncThunk(
    types.UN_VOTE_QUESTION, async (vote:{id:string | string[] | undefined , type:string}, {rejectWithValue}) => {
        try {
          const formData = new FormData()
          formData.append("type" , vote.type)
          const resp = await BASE_API_INSTANCE.post(`/forum/${vote.id}/thread/unvote` , formData)
          return resp.data
        } catch (error:any) {
            return rejectWithValue(error.response.data)
        }
    }
  )
  
  
  
  export const voteAnswer = createAsyncThunk(
    types.VOTE_ANSWER, async (vote:{id:number, type:string}, {rejectWithValue}) => {
        try {
          const formData = new FormData()
          formData.append("type" , vote.type)
          const resp = await BASE_API_INSTANCE.post(`/forum/${vote.id}/answer/vote` , formData)
          return resp.data
        } catch (error:any) {
          return rejectWithValue(error.response.data)
        }
    }
  )
  
  
  export const unVoteAnswer = createAsyncThunk(
    types.UN_VOTE_ANSWER, async (vote:{id:number , type:string}, {rejectWithValue}) => {
        try {
          const formData = new FormData()
          formData.append("type" , vote.type)
          const resp = await BASE_API_INSTANCE.post(`/forum/${vote.id}/answer/unvote` , formData)
          return vote.id
        } catch (error:any) {
          return rejectWithValue(error.response.data)
        }
    }
  )
  