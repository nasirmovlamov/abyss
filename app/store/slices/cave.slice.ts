import { AnyAction, createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';
import caveService from 'app/api/services/cave.service';
import { withHandleRequestError } from 'app/hof/withHandleRequestError';
import { Product } from 'app/interfaces/Product';
import { Profile } from 'app/interfaces/Profile';
import { Thread } from 'app/interfaces/Thread';

interface State {
  profile: Profile | null
  inventory: Product[]
  inventoryHistory: Product[]
  library: Thread[]
  libraryHistory: Thread[]
  isLoading: boolean
  successMsg: string | null
  errorMsg: string | null
  errors: any[] | null
}

const initialState: State = {
  profile: null,
  inventory: [],
  inventoryHistory: [],
  library: [],
  libraryHistory: [],
  isLoading: false,
  successMsg: '',
  errorMsg: '',
  errors: null,
}

// Thunks
export const caveProfileGet = createAsyncThunk(
  'cave/profile/get',
  withHandleRequestError(async () => {
    return await caveService.profileGet()
  }),
)

export const caveProfileUpdate = createAsyncThunk(
  'cave/profile/update',
  withHandleRequestError(async (data: Profile) => {
    return await caveService.profileUpdate(data)
  }),
)

export const caveInventoryGetAll = createAsyncThunk(
  'cave/inventory/getAll',
  withHandleRequestError(async (_: void) => {
    return await caveService.inventoryGetAll()
  }),
)

export const caveInventoryHistory = createAsyncThunk(
  'cave/inventory/history',
  withHandleRequestError(async () => {
    return await caveService.inventoryHistory()
  }),
)

export const caveInventoryAdd = createAsyncThunk(
  'cave/inventory/add',
  withHandleRequestError(async (productID: number) => {
    return await caveService.inventoryAdd(productID)
  }),
)

export const caveInventoryDelete = createAsyncThunk(
  'cave/inventory/delete',
  withHandleRequestError(async (productID: number) => {
    return await caveService.inventoryDelete(productID)
  }),
)

export const caveLibraryHistory = createAsyncThunk(
  'cave/library/history',
  withHandleRequestError(async (_: void) => {
    return await caveService.libraryHistory()
  }),
)

const caveActions = [
  caveProfileGet,
  caveProfileUpdate,
  caveInventoryGetAll,
  caveInventoryHistory,
  caveInventoryAdd,
  caveInventoryDelete,
  caveLibraryHistory,
]

const caveSlice = createSlice({
  name: 'cave',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Inventory CRUD
    builder.addCase(caveInventoryGetAll.fulfilled, (state, { payload }: { payload: any }) => {
      state.inventory = payload
    })

    builder.addCase(caveInventoryHistory.fulfilled, (state, { payload }: { payload: any }) => {
      state.inventoryHistory = payload
    })

    builder.addCase(caveInventoryAdd.fulfilled, (state, { payload }: { payload: any }) => {
      state.inventory.push(payload)
    })

    builder.addCase(caveInventoryDelete.fulfilled, (state, { payload }: { payload: any }) => {
      const index = state.inventory.findIndex(({ id }) => id === payload)
      state.inventory.splice(index, 1)
    })

    // Library CRUD
    builder.addCase(caveLibraryHistory.fulfilled, (state, { payload }: { payload: any }) => {
      state.libraryHistory = payload
    })

    // Get or update profile
    builder.addMatcher(isFulfilled(caveProfileGet, caveProfileUpdate), (state, { payload }) => {
      state.profile = payload
    })

    // Add default behavior for all actions
    builder.addMatcher((isFulfilled as any)(...caveActions), (state, { payload }: AnyAction) => {
      state.isLoading = false
      state.errorMsg = ''
      state.errors = null
      if (payload) state.successMsg = payload.message
    })
    builder.addMatcher((isPending as any)(...caveActions), (state) => {
      state.isLoading = true
    })
    builder.addMatcher((isRejected as any)(...caveActions), (state, { payload }: AnyAction) => {
      state.isLoading = false
      state.successMsg = ''
      if (payload) {
        state.errors = payload.errors
        state.errorMsg = payload.message
      }
    })
  },
})

export const answerReducer = caveSlice.reducer
