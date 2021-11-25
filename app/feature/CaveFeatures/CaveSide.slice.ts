import { RootState } from '../../store/store';
import { createSlice } from '@reduxjs/toolkit';
import { CaveState } from '../../store/states/Cave_States/Cave.state';



export const CaveSideSlice = createSlice({
    name: 'cave-side-slice',
    initialState:CaveState.caveSideState ,
    reducers: {
        // ProductCreateStep1OnChanges(state, action){
        // }

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
export const {  
    // ProductCreateStep1OnChanges,
} = CaveSideSlice.actions;



export default CaveSideSlice.reducer;
