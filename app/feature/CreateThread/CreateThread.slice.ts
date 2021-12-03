import { CreateThread_STATE } from './../../store/states/CreateThread/CreateThread.state';
import { RootState } from "../../store/store";
import { createSlice} from '@reduxjs/toolkit'



export const CreateThreadSlice = createSlice({
    name: 'create-product-slice',
    initialState:CreateThread_STATE ,

    reducers: {
        selectThreadType(state, action){
            state.threadType = action.payload
        },
       
        
    },

    extraReducers: (builder) => {

    }

})




// action
// export const {} = CreateQuestionSlice.actions;




// data
export const create_thread_data = (state: RootState) => state.createThreadReducer

export default CreateThreadSlice.reducer;



