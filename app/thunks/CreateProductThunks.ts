import { BASE_API_INSTANCE } from './../../helpers/api/BaseInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as types from '../constants/AppContants'
import { autoErrorToaster } from '../../components/Notify/AutoErrorToaster';
import { autoSuccessToaster } from '../../components/Notify/AutoSuccessToast';



// export const submitProduct = createAsyncThunk(
//     types.GET_SINGLE_QUESTION, async (data:{}, {rejectWithValue}) => {
//         try {
//             // const formData = new FormData()
//             // formData.append('content', data.content)
//             const resp = await BASE_API_INSTANCE.post(`/create-product/${}`)
//             return resp.data
//         } catch (error:any) {
//             return rejectWithValue(error.response.data)
//         }
//     }w
// )
  

export const startPlagirismChecker = createAsyncThunk(
    types.CHECK_PLAGIAT, async (bring_data:{product_id:number , source_code:string}, {rejectWithValue}) => {
        try {
            const {product_id , source_code} = bring_data
            const send_data = new FormData()
            send_data.append('source_code', source_code)
            const resp = await BASE_API_INSTANCE.post(`/store/${product_id}/product/plagiarism` , send_data)
            return resp.data
        } catch (error:any) {
          return rejectWithValue(error.response.data)
        }
    }
)
  

export const createProductThunk = createAsyncThunk(
    types.CREATE_PRODUCT, async (_, {rejectWithValue}) => {
        try {
            const resp = await BASE_API_INSTANCE.post(`/store/create`)
            autoSuccessToaster(resp.data.message)
            return resp.data
        } catch (error:any) {
            autoErrorToaster(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

