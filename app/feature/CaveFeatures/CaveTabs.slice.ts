import { RootState } from '../../store/store';
import { createSlice } from '@reduxjs/toolkit';
import { CaveState } from '../../store/states/Cave_States/Cave.state';



export const CaveTabsSlice = createSlice({
    name: 'cave-tabs-slice',
    initialState:CaveState.caveTabsState ,
    reducers: {
        selectTab(state, {payload}){
            state[payload.window].filter(tab => tab.active === true)[0].active = false;
            state[payload.window].filter(tab => tab.id === payload.tab.id)[0].active = true;
        },

        hoverTab(state, {payload}){
            state[payload.window].filter(tab => tab.id === payload.tab.id)[0].hovered = true;
        },

        unHoverTab(state, {payload}){
            state[payload.window].filter(tab => tab.id === payload.tab.id)[0].hovered = false;
        },

        

    },

    extraReducers: (builder) => {
        // // ASYNC SELECT TAB
        // builder.addCase(selectAsyncCaveWindow.fulfilled, (state, {payload}) => {
        //     state[payload.window].filter(tab => tab.active === true)[0].active = false;
        //     state[payload.window].filter(tab => tab.id === payload.tab.id)[0].active = true;
        // }),
        // builder.addCase(selectAsyncCaveWindow.pending, (state, {payload}) => {
        // }),
        // builder.addCase(selectAsyncCaveWindow.rejected, (state, action:any) => {
        // })
    }
})  


// action
export const  cave_actions = CaveTabsSlice.actions; 

export const cave_tabs = (state: RootState) => state.caveRootReducer.caveTabsReducer


export default CaveTabsSlice.reducer;
