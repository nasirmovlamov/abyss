import { BASE_API_URL } from '../../helpers/urls/BASE_URL';
import * as types from '../constants/AppContants'
import { AsyncThunk, createAction, createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit'
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



export const addAnswer = createAsyncThunk(
  types.ADD_ANSWER, async (data:{content:string , questionId:any , linkedProducts:number[], mentionedUsers:number[]}, {rejectWithValue}) => {
      try {
        const formData = new FormData()
        formData.append('content', data.content)
        formData.append('linked_products', JSON.stringify(data.linkedProducts))
        formData.append('mentioned_users', JSON.stringify(data.mentionedUsers))
        const resp = await BASE_API_INSTANCE.post(`/forum/${data.questionId}/answer/submit` , formData)
        return resp.data
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
    types.VOTE_ANSWER, async (vote:{id:number, type:string, direction:string}, {rejectWithValue}) => {
        try {
          const formData = new FormData()
          formData.append("type" , vote.type)
          const resp = await BASE_API_INSTANCE.post(`/forum/${vote.id}/answer/vote` , formData)
          return {data:resp.data , direction:vote.direction}
        } catch (error:any) {
          return rejectWithValue(error.response.data)
        }
    }
  )
  
  
  export const unVoteAnswer = createAsyncThunk(
    types.UN_VOTE_ANSWER, async (vote:{id:number , type:string , direction:string}, {rejectWithValue}) => {
        try {
          const formData = new FormData()
          formData.append("type" , vote.type)
          const resp = await BASE_API_INSTANCE.post(`/forum/${vote.id}/answer/unvote` , formData)
          return  {data:resp.data , direction:vote.direction , id:vote.id}
        } catch (error:any) {
          return rejectWithValue(error.response.data)
        }
    }
  )
  