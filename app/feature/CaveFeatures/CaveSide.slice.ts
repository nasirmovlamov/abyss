import { RootState } from '../../store/store';
import { createSlice } from '@reduxjs/toolkit';
import { CaveState } from '../../store/states/Cave_States/Cave.state';



export const CaveSideSlice = createSlice({
    name: 'cave-side-slice',
    initialState:CaveState.caveSideState ,
    reducers: {
        selectWindow(state, action){
            state.selectedWindow = action.payload
        },

        extraReducers: (builder) => {


            // ADD CLIP
            // builder.addCase(addFile.fulfilled, (state, {payload}) => {
            // }),
            // builder.addCase(addFile.pending, (state, {payload}) => {
            // }),
            // builder.addCase(addFile.rejected, (state, action:any) => {
            // })

        }

    }

})

// action
export const caveSideActions  = CaveSideSlice.actions;

//data
export const cave_side_data = (state: RootState) => state.caveRootReducer.caveSideReducer;



export default CaveSideSlice.reducer;
