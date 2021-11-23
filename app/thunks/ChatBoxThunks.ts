import { createAsyncThunk } from "@reduxjs/toolkit"
import { BASE_API_INSTANCE } from "../../helpers/api/BaseInstance"
import * as types from '../constants/App.contants'




export const checkChat = createAsyncThunk(
    types.CHECK_CHAT, async (user_id:number, {rejectWithValue}) => {
      try {
          const resp = await BASE_API_INSTANCE.get(`/chat/${user_id}//getcomment`)
          return resp.data
      } catch (error:any) {
        return rejectWithValue(error.response.data)
      }
    }
)

export const openRooms = createAsyncThunk(
    types.OPEN_CHATBOX, async (_, {rejectWithValue}) => {
      try {
        const resp = await BASE_API_INSTANCE.get(`/chat`)
        return resp.data
      } catch (error:any) {
        return rejectWithValue(error.response.data)
      }
    }
)

export const reqRoomMessages = createAsyncThunk(
  types.OPEN_ROOM_MESSAGES, async ({roomId,lastMessageId}:{roomId:number , lastMessageId:number}, {rejectWithValue}) => {
    try {
      const resp = await BASE_API_INSTANCE.get(`/chat/${roomId}/${lastMessageId}/load`)
      return resp.data
    } catch (error:any) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const checkRoomChat = createAsyncThunk(
  types.CHECK_ROOM, async (opponentID:number, {rejectWithValue}) => {
    try {
      const resp = await BASE_API_INSTANCE.get(`/chat/${opponentID}/check`)
      return resp.data
    } catch (error:any) {
      return rejectWithValue(error.response.data)
    }
  }
)


export const sendMessageToRoom = createAsyncThunk(
  types.SEND_MESSAGE_TO_ROOM, async ({roomId , content}:{roomId:number, content:string}, {rejectWithValue}) => {
    try {
      const formData = new FormData() 
      formData.append('content', content)
      const resp = await BASE_API_INSTANCE.post(`/chat/${roomId}/send` , formData)
      return resp.data
    } catch (error:any) {
      return rejectWithValue(error.response.data)
    }
  }
)


export const loadArchieveMessages = createAsyncThunk(
  types.LOAD_MESSAGES_TO_ROOM, async ({roomId , lastMessageId}:{roomId:number, lastMessageId:number}, {rejectWithValue}) => {
    try {
      const resp = await BASE_API_INSTANCE.get(`/chat/${roomId}/${lastMessageId}/load`)
      return resp.data
    } catch (error:any) {
      return rejectWithValue(error.response.data)
    }
  }
)