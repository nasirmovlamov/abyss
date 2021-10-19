
import { accessToken, getAccessToken, setAccessToken } from '../../helpers/token/TokenHandle';
import { BASE_API_URL } from '../../helpers/urls/BASE_URL';
import * as types from '../constants/AppContants'
import { AsyncThunk, createAction, createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit'
import {getToken} from '../../logic/userToken'
import { AxiosError } from 'axios'
import { APP_INTERFACE, ForgetPasswordError, LoginAttributes, LoginAuthError, MyData, RegisterAttributes, RegisterAuthError } from '../store/state-Interfaces/AppInterface'
import { BASE_API_INSTANCE } from '../../helpers/api/BaseInstance';
import { convertAnyFileBase64 } from '../../logic/convertBase64';



export const addFile = createAsyncThunk(
    types.ADD_FILE, async (file:File, {rejectWithValue}) => {
      try {
        let base64 = await convertAnyFileBase64(file)
        return {base64:base64 , alt:file.name}
      } catch (error:any) {
        return null
      }
    }
  )