import { AnyAction, createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';
import productService from 'app/api/services/product.service';
import { withHandleRequestError } from 'app/hof/withHandleRequestError';
import { Product } from 'app/interfaces/Product';

interface State {
  items: Product[]
  currentItem: Product | null
  isLoading: boolean
  successMsg: string | null
  errorMsg: string | null
  errors: any[] | null
}

const initialState: State = {
  items: [],
  currentItem: null,
  isLoading: false,
  successMsg: '',
  errorMsg: '',
  errors: null,
}

// Thunks
export const productSearch = createAsyncThunk(
  'product/getAll',
  withHandleRequestError(
    async ({ keyword, tags, mustNot }: { keyword: string; tags: string[]; mustNot: string[] }) => {
      return await productService.search(keyword, tags, mustNot)
    },
  ),
)

export const productGet = createAsyncThunk(
  'product/get',
  withHandleRequestError(async (id: number) => {
    return await productService.get(id)
  }),
)

export const productCreate = createAsyncThunk(
  'product/create',
  withHandleRequestError(async (data: Product) => {
    return await productService.create(data)
  }),
)

export const productUpdate = createAsyncThunk(
  'product/update',
  withHandleRequestError(async ({ id, data }: { id: number; data: Product }) => {
    return await productService.update(id, data)
  }),
)

export const productDelete = createAsyncThunk(
  'product/delete',
  withHandleRequestError(async (id: number) => {
    return await productService.delete(id)
  }),
)

export const productSubmit = createAsyncThunk(
  'product/submit',
  withHandleRequestError(async ({ id, data }: { id: number; data: Product }) => {
    return await productService.submit(id, data)
  }),
)

const productActions = [
  productSearch,
  productGet,
  productCreate,
  productUpdate,
  productDelete,
  productSubmit,
]

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Product CRUD
    builder.addCase(productSearch.fulfilled, (state, { payload }: { payload: any }) => {
      state.items = payload
    })

    builder.addCase(productGet.fulfilled, (state, { payload }: { payload: any }) => {
      state.currentItem = payload.data
    })

    builder.addCase(productCreate.fulfilled, (state, { payload }: { payload: any }) => {
      state.items.push(payload)
    })

    builder.addCase(productUpdate.fulfilled, (state, { payload }: { payload: any }) => {
      const index = state.items.findIndex(({ id }) => id === payload.id)
      state.items[index] = payload
    })

    builder.addCase(productDelete.fulfilled, (state, { payload }: { payload: any }) => {
      const index = state.items.findIndex(({ id }) => id === payload)
      state.items.splice(index, 1)
    })

    // Add default behavior for all actions
    builder.addMatcher((isFulfilled as any)(...productActions), (state, { payload }: AnyAction) => {
      state.isLoading = false
      state.errorMsg = ''
      state.errors = null
      if (payload) state.successMsg = payload.message
    })
    builder.addMatcher((isPending as any)(...productActions), (state) => {
      state.isLoading = true
    })
    builder.addMatcher((isRejected as any)(...productActions), (state, { payload }: AnyAction) => {
      state.isLoading = false
      state.successMsg = ''
      if (payload) {
        state.errors = payload.errors
        state.errorMsg = payload.message
      }
    })
  },
})

export const productReducer = productSlice.reducer
