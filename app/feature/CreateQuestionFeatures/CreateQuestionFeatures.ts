import { RootState } from "../../store/store";
import { createSlice} from '@reduxjs/toolkit'
import { CreateQuestionState } from "../../store/states/CreateQuestionState";



export const CreateQuestionSlice = createSlice({
    name: 'create-product-slice',
    initialState:CreateQuestionState ,

    reducers: {
        mentionProductAtQuestionCreate(state, action){
            if(state.linkedProducts.filter(product => product.id === action.payload.id).length === 0){
                state.linkedProducts.push(action.payload)
            }
        },
        mentionUserAtQuestionCreate(state, action){
            if(state.mentionedUsers.filter(product => product.id === action.payload.id).length === 0){
                state.mentionedUsers.push(action.payload)
            }
        },

        questionContentOnChangeHandler(state,action){
            state.questionValue = action.payload
        }

        // ProductCreateStep1OnChanges(state, action){
        //     state.steps[1].source_code = action.payload
        //     if(state.steps[1].source_code.length > 0)
        //     {
        //         state.steps[1].validators.isCodeFilled.valid = true
        //     }
        // }
        

    },

    extraReducers: (builder) => {


        // ADD CLIP
        // builder.addCase(addFile.fulfilled, (state, {payload}) => {
        //     console.log(payload)
        //     state.steps[2].details_data.sections_product[getClipsIndex(state.steps[2].details_data.sections_product)].isClips.clips.push({id: Date.now(), src: payload!.base64! , alt:payload!.alt}) 
        // }),
        // builder.addCase(addFile.pending, (state, {payload}) => {
        // }),
        // builder.addCase(addFile.rejected, (state, action:any) => {
        // })



        





    }

})






// action
export const {mentionProductAtQuestionCreate , mentionUserAtQuestionCreate, questionContentOnChangeHandler} = CreateQuestionSlice.actions;




// data
export const linked_products = (state: RootState) => state.createQuestionReducer.linkedProducts
export const mentioned_users = (state: RootState) => state.createQuestionReducer.mentionedUsers
export const question_value = (state: RootState) => state.createQuestionReducer.questionValue

export default CreateQuestionSlice.reducer;






