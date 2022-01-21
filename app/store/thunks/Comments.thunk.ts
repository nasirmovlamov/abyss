import { createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_API_INSTANCE } from '../../helpers/api/BaseInstance';
import * as types from '../constants/App.contants';

export const getQuestionComments = createAsyncThunk(
  types.GET_QUESTION_COMMENTS,
  async (id: number, { rejectWithValue }) => {
    try {
      const resp = await BASE_API_INSTANCE.get(`/forum/${id}/thread/getcomment`)
      return resp.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const getAnswerComments = createAsyncThunk(
  types.GET_ANSWER_COMMENTS,
  async (id: number, { rejectWithValue }) => {
    try {
      const resp = await BASE_API_INSTANCE.get(`/forum/${id}/answer/getcomment`)
      return resp.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const addQuestionComment = createAsyncThunk(
  types.ADD_QUESTION_COMMENTS,
  async (comment: { parent_id: number; content: string }, { rejectWithValue }) => {
    try {
      const formdata = new FormData()
      formdata.append('content', comment.content)
      const resp = await BASE_API_INSTANCE.post(
        `/forum/${comment.parent_id}/thread/comment`,
        formdata,
      )
      return resp.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const addAnswerComment = createAsyncThunk(
  types.ADD_ANSWER_COMMENTS,
  async (comment: { parent_id: number; content: string }, { rejectWithValue }) => {
    try {
      const formdata = new FormData()
      formdata.append('content', comment.content)
      const resp = await BASE_API_INSTANCE.post(
        `/forum/${comment.parent_id}/answer/comment`,
        formdata,
      )
      return resp.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const edit_Answer_CommentThunk = createAsyncThunk(
  types.EDIT_ANSWER_COMMENT,
  async (data: any, { rejectWithValue }) => {
    try {
      const resp = await BASE_API_INSTANCE.post(
        `/forum/${data.id}/answer/comment/edit?_method=PUT`,
        data.form_data,
      )
      return resp.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const edit_Question_CommentThunk = createAsyncThunk(
  types.EDIT_QUESTION_COMMENT,
  async (data: any, { rejectWithValue }) => {
    try {
      const resp = await BASE_API_INSTANCE.post(
        `/forum/${data.id}/thread/comment/edit?_method=PUT`,
        data.form_data,
      )
      return resp.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)
