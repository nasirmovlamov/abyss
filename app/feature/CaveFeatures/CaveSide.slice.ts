import { createSlice } from '@reduxjs/toolkit';

import { CaveState } from '../../store/states/Cave_States/Cave.state';
import { RootState } from '../../store/store';
import { selectAsyncCaveWindow } from './../../thunks/Cave/Cave.thunk';

export const CaveSideSlice = createSlice({
  name: 'cave-side-slice',
  initialState: CaveState.caveSideState,
  reducers: {
    selectWindow(state, action) {
      state.selectedWindow = action.payload
    },
  },
  extraReducers: (builder) => {
    // ASYNC SELECT TAB
    builder.addCase(selectAsyncCaveWindow.fulfilled, (state, { payload }) => {
      state.selectedWindow = payload
      state.status = 'loaded'
    }),
      builder.addCase(selectAsyncCaveWindow.pending, (state, { payload }) => {
        state.status = 'loading'
      }),
      builder.addCase(selectAsyncCaveWindow.rejected, (state, action: any) => {
        state.status = 'error'
      })
  },
})

// action
export const caveSideActions = CaveSideSlice.actions

//data
export const cave_side_data = (state: RootState) => state.caveRootReducer.caveSideReducer

export default CaveSideSlice.reducer
