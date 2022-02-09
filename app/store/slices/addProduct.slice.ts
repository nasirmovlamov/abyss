import { AnyAction, createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';
import productService from 'app/api/services/product.service';
import { withHandleRequestError } from 'app/hof/withHandleRequestError';
import { Product } from 'app/interfaces/Product';

interface State {
  createdProduct: Product | null
  plagiarismDetected: boolean | null
  isLoading: boolean
  successMsg: string | null
  errorMsg: string | null
  errors: any[] | null
}

const initialState: State = {
  createdProduct: null,
  plagiarismDetected: null,
  isLoading: false,
  successMsg: '',
  errorMsg: '',
  errors: null,
}

// Thunks
export const productCreate = createAsyncThunk(
  'addProduct/create',
  withHandleRequestError(async () => {
    return await productService.create()
  }),
)

export const createdProductUpdate = createAsyncThunk(
  'addProduct/update',
  withHandleRequestError(async ({ data }: { data: Product }, { getState }) => {
    const { addProduct } = getState() as { addProduct: State }
    if (addProduct.createdProduct) {
      return await productService.update(addProduct.createdProduct.id, data)
    }
  }),
)

export const productCheckPlagiarism = createAsyncThunk(
  'addProduct/checkPlagiarism',
  withHandleRequestError(
    async ({ id, data }: { id: number; data: { source_code: string; extension: string } }) => {
      return await productService.checkPlagiarism(id, data)
    },
  ),
)

const addProductActions = [productCreate, createdProductUpdate, productCheckPlagiarism]

const addProductSlice = createSlice({
  name: 'addProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productCreate.fulfilled, (state, { payload }: { payload: Product }) => {
      state.createdProduct = payload
    })

    builder.addCase(createdProductUpdate.fulfilled, (state, { payload }: { payload: Product }) => {
      state.createdProduct = payload
    })

    builder.addCase(productCheckPlagiarism.fulfilled, (state) => {
      state.plagiarismDetected = false
    })

    builder.addCase(productCheckPlagiarism.rejected, (state, { payload }: { payload: any }) => {
      //@todo: show plagiarism message
      state.plagiarismDetected = true
    })

    // Add default behavior for all actions
    builder.addMatcher(
      (isFulfilled as any)(...addProductActions),
      (state, { payload }: AnyAction) => {
        state.isLoading = false
        state.errorMsg = ''
        state.errors = null
        if (payload) state.successMsg = payload.message
      },
    )
    builder.addMatcher((isPending as any)(...addProductActions), (state) => {
      state.isLoading = true
    })
    builder.addMatcher(
      (isRejected as any)(...addProductActions),
      (state, { payload }: AnyAction) => {
        state.isLoading = false
        state.successMsg = ''
        if (payload) {
          state.errors = payload.errors
          state.errorMsg = payload.message
        }
      },
    )
  },
})

export const addProductReducer = addProductSlice.reducer
