import { RootState } from '../../store/store';
import { createSlice } from '@reduxjs/toolkit';
import { CaveState } from '../../store/states/Cave_States/Cave.state';



export const CaveTabsSlice = createSlice({
    name: 'cave-tabs-slice',
    initialState:CaveState.caveTabsState ,
    reducers: {
        selectTab(state, {payload}){
            console.log(payload)
            state.profileTabs.filter(tab => tab.active === true)[0].active = false;
            state.profileTabs.filter(tab => tab.id === payload.id)[0].active = true;
        },

        hoverTab(state, {payload}){
            state.profileTabs.filter(tab => tab.id === payload.id)[0].hovered = true;
        },

        unHoverTab(state, {payload}){
            state.profileTabs.filter(tab => tab.id === payload.id)[0].hovered = false;
        },

        

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
})  


// action
export const  cave_actions = CaveTabsSlice.actions; 

export const cave_profile_tabs = (state: RootState) => state.caveRootReducer.caveTabsReducer.profileTabs


export default CaveTabsSlice.reducer;
