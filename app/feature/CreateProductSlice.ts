import { RootState } from "../store/store";
import { createSlice} from '@reduxjs/toolkit'
import { autoErrorToaster } from "../../components/Notify/AutoErrorToaster";
import { CreateProductState } from "../store/states/CreateProductState";



export const CreateProductSlice = createSlice({
    name: 'create-product-slice',
    initialState:CreateProductState ,

    reducers: {
        updateKey(state, {payload}) {
            state.sections_product[payload.index].label_key = payload.content
        },
        updateLabel(state, {payload}) {
            state.sections_product[payload.index].label_value = payload.content          
        },
        updateSectionsOrder (state, {payload}) {
            state.sections_product = payload
        },
        addNewSection(state, _)
        {
            state.sections_product =  [...state.sections_product , {id:Date.now() , label_key:"Header" , label_value:"" , isEditor:true , isClips:false}]
        },
        deleteSection(state, {payload})
        {   
            let newArray = [...state.sections_product]
            newArray.splice( payload.index, 1)
            state.sections_product = newArray
        }
        
    },

    extraReducers: (builder) => {


        // CHECK USER CHAT
        // builder.addCase(checkRoomChat.fulfilled, (state, {payload}) => {
        //     if(state.rooms[payload.data.id].messages.length === 0) {
        //         state.rooms[payload.data.id].messages = [...state.rooms[payload.data.id].messages , ...payload.data.messages]
        //     }
        // }),
        // builder.addCase(checkRoomChat.pending, (state, {payload}) => {
        // }),
        // builder.addCase(checkRoomChat.rejected, (state, action:any) => {
        // })


    }

})


// action
export const {  updateKey , updateLabel , addNewSection , updateSectionsOrder , deleteSection} = CreateProductSlice.actions;




// data
export const sections_product = (state: RootState) => state.createProductReducer.sections_product


export default CreateProductSlice.reducer;






