import { createAsyncThunk } from '@reduxjs/toolkit';

import { autoErrorToaster } from '../../components/ui/toasters/AutoErrorToaster';
import { autoSuccessToaster } from '../../components/ui/toasters/AutoSuccessToast';
import { BASE_API_INSTANCE } from '../../helpers/api/BaseInstance';
import { convertAnyFileBase64 } from '../../helpers/functions/ConvertBase64';
import * as types from '../constants/App.contants';

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

export const addFile = createAsyncThunk(types.ADD_FILE, async (file: File, { rejectWithValue }) => {
  try {
    let base64 = await convertAnyFileBase64(file)
    return { base64: base64, alt: file.name }
  } catch (error: any) {
    return null
  }
})

export const startPlagirismChecker = createAsyncThunk(
  types.CHECK_PLAGIAT,
  async (
    bring_data: { product_id: number; source_code: string; extension: string },
    { rejectWithValue },
  ) => {
    try {
      const { product_id, source_code, extension } = bring_data
      const send_data = new FormData()
      send_data.append('source_code', source_code)
      send_data.append('extension', extension)
      const resp_start_plagirism = await BASE_API_INSTANCE.post(
        `/store/${product_id}/product/plagiarism`,
        send_data,
      )
      return { data: resp_start_plagirism.data, source_code: source_code }
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const createProductThunk = createAsyncThunk(
  types.CREATE_PRODUCT,
  async (bring_data: any, { rejectWithValue }) => {
    try {
      const resp_product_create = await BASE_API_INSTANCE.post(`/store/create`)
      autoSuccessToaster(resp_product_create.data.message)
      const product_id = resp_product_create.data.data.id
      const send_data = new FormData()
      send_data.append('source_code', bring_data.source_code)
      send_data.append('extension', bring_data.extension)
      const resp_start_plagirism = await BASE_API_INSTANCE.post(
        `/store/${product_id}/product/plagiarism`,
        send_data,
      )
      const data: {
        product_status: 'pending' | 'created' | 'failed'
        product_id: number
        isPlagiat: 'valid'
        source_code: string
        message: string
      } = {
        product_status: 'created',
        product_id: product_id,
        isPlagiat: 'valid',
        source_code: bring_data.source_code,
        message: resp_start_plagirism.data.message,
      }
      return data
    } catch (error: any) {
      autoErrorToaster(error.response.data)
      return rejectWithValue(error.response.data)
    }
  },
)

export const updateProductThunk = createAsyncThunk(
  types.UPDATE_PRODUCT,
  async (data: any, { rejectWithValue }) => {
    try {
      const send_data = new FormData()

      const tags = data.mainData.steps[2].details_data['product_tags']
        .map((tag: any, index: any) => tag.value)
        .join(',')

      send_data.append('price', '0')
      send_data.append('description', JSON.stringify(data.mainData.steps[2]))
      send_data.append('name', data.mainData.steps[2].details_data.product_name)
      send_data.append('tags', tags)
      // send_data.append('category_id', '1')

      const resp = await BASE_API_INSTANCE.post(
        `store/${data.productId}/product/edit?_method=PUT`,
        send_data,
      )
      autoSuccessToaster(resp.data.message)
      const submitproduct = await BASE_API_INSTANCE.post(`store/${data.productId}/product/submit`)
      return submitproduct.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  },
)
