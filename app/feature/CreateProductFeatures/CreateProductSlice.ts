import { getClipsIndex , getClips} from '../../../logic/createProduct';
import { MainClip } from '../../../styles/pages/Store.styled';
import { RootState } from "../../store/store";
import { createSlice} from '@reduxjs/toolkit'
import { autoErrorToaster } from "../../../components/Notify/AutoErrorToaster";
import { CreateProductState } from "../../store/states/CreateProductState";
import { SectionOfProduct } from "../../store/state-Interfaces/CreateProductInterface";
import { addFile } from '../../thunks/CreateProductThunk';



export const CreateProductSlice = createSlice({
    name: 'create-product-slice',
    initialState:CreateProductState ,

    reducers: {
        ProductCreateStep1OnChanges: (state, action) => {
            state.steps[1].source_code = action.payload
            
        },
        ProductCreateStep1OnBlurs: (state, action) => {
            state.steps[1].source_code = action.payload
            if(state.steps[1].source_code.length > 0)
            {
                state.steps[1].validators.isCodeFilled.valid = true
            }
        },

        ProductCreateStep1Validate: (state, action) => {
            if(state.steps[1].source_code.length < 1)
            {
                state.steps[1].validators.isCodeFilled.valid = false
            }
        },



        ProductCreateStep2OnChanges: (state, action) => {
            switch (action.payload.type) {
                case 'product_name':
                    state.steps[2].details_data.product_name = action.payload       
                    break;
                case 'product_tags':
                    switch (action.payload.actionType) {
                        case 'add':
                            state.steps[2].details_data.product_tags.push({id: Date.now() , value:action.payload.value})       
                            break;
                        case 'delete':
                            state.steps[2].details_data.product_tags.filter(element => element.id !== action.payload.id)       
                            break;
                        default:
                            break;
                    }
                    break;
                default: 
                    break;
            }
        },

        ProductCreateStep2OnBlurs: (state, action) => {
            switch (action.payload.type) {
                case 'product_name':
                    if(state.steps[2].details_data.product_name.length < 1)
                    {
                        state.steps[2].validators.isNameFilled.valid = false
                    }
                    break;
                case 'product_tags':
                    if(state.steps[2].details_data.product_tags.length < 1)
                    {
                        state.steps[2].validators.isTagsFilled.valid = false
                    }
                case 'product_description':
                    if(state.steps[2].details_data.sections_product[1].label_value.length < 1)
                    {
                        state.steps[2].validators.isDescriptionFilled.valid = false
                    }
                case 'product_problem_aplicability':
                    if(state.steps[2].details_data.sections_product[2].label_value.length < 1)
                    {
                        state.steps[2].validators.isApplicabilityFilled.valid = false
                    }
                case 'product_problem_formulation':
                    if(state.steps[2].details_data.sections_product[3].label_value.length < 1)
                    {
                        state.steps[2].validators.isProblemFormulationFilled.valid = false
                    }
                    
                default: 
                    break;
            }
        },




        updateKey(state, {payload}) {
            state.steps[2].details_data.sections_product[payload.index].label_key = payload.content
        },
        updateLabel(state, {payload}) {
            state.steps[2].details_data.sections_product[payload.index].label_value = payload.content  
            if(payload.index === 1 || payload.index === 2 || payload.index === 3) 
            {
                if(state.steps[2].details_data.sections_product[1].label_value.length > 0)
                {
                    state.steps[2].validators.isDescriptionFilled.valid = true
                }     
                if(state.steps[2].details_data.sections_product[2].label_value.length > 0)
                {
                    state.steps[2].validators.isApplicabilityFilled.valid = true
                }  
                if(state.steps[2].details_data.sections_product[3].label_value.length < 0)
                {
                    state.steps[2].validators.isProblemFormulationFilled.valid = true
                }
            }
        },

        blurOnLabel(state, {payload}) {
            if(payload.index === 1 || payload.index === 2 || payload.index === 3) 
            {
                if(state.steps[2].details_data.sections_product[1].label_value.length > 0)
                {
                    state.steps[2].validators.isDescriptionFilled.valid = true
                }     
                if(state.steps[2].details_data.sections_product[2].label_value.length > 0)
                {
                    state.steps[2].validators.isApplicabilityFilled.valid = true
                }  
                if(state.steps[2].details_data.sections_product[3].label_value.length < 0)
                {
                    state.steps[2].validators.isProblemFormulationFilled.valid = true
                }
            }
        },

        updateSectionsOrder (state, {payload}) {
            state.steps[2].details_data.sections_product = payload
        },
        addNewSection(state, _)
        {
            state.steps[2].details_data.sections_product.push({id:Date.now() , label_key:"Header" , label_value:"" , isEditor:true , isClips:{status:false , clips:[]}})
        },
        deleteSection(state, {payload})
        {   
            let newArray = [...state.steps[2].details_data.sections_product]
            newArray.splice( payload.index, 1)
            state.steps[2].details_data.sections_product = newArray
        },


        deleteClip(state , {payload}) {
            state.steps[2].details_data.sections_product[getClipsIndex(state.steps[2].details_data.sections_product)].isClips.clips.splice(payload.index, 1)
        },

        changeClipPosition(state , {payload})
        {
            state.steps[2].details_data.sections_product[getClipsIndex(state.steps[2].details_data.sections_product)].isClips.clips = payload
        },

        

       

        ProductCreate_delete_iteration(state, action) {
        },

        

        ProductCreateStep3OnChanges(state, action){
            switch (action.payload.type) {
                case 'add_iteration':
                    state.steps[3].iterations_of_product.push({
                        id: Date.now(),
                        iteration_code: '',
                        iteration_note: '',
                        validators:{
                            isCodeFilled:{
                                valid:false,
                                message:"Please enter code of iteration"
                            },
                            isNoteFilled:{
                                valid:false,
                                message:"Please enter note of iteration"
                            },
                            areCodeAndNoteFilled:{
                                valid:false,
                            }
                        }
                    })
                    break;
                case 'delete_iteration':
                    state.steps[3].iterations_of_product.filter(element => element.id !== action.payload.id)
                case 'update_iteration_code':
                    state.steps[3].iterations_of_product.filter(element => element.id === action.payload.id)[0].iteration_code = action.payload.content
                    if(state.steps[3].iterations_of_product.filter(element => element.id === action.payload.id)[0].iteration_code.length > 0)
                    {
                        state.steps[3].iterations_of_product.filter(element => element.id === action.payload.id)[0].validators.isCodeFilled.valid = true
                    }
                    break;
                case 'update_iteration_note':
                    state.steps[3].iterations_of_product.filter(element => element.id === action.payload.id)[0].iteration_note = action.payload.content
                    if(state.steps[3].iterations_of_product.filter(element => element.id === action.payload.id)[0].iteration_note.length > 0)
                    {
                        state.steps[3].iterations_of_product.filter(element => element.id === action.payload.id)[0].validators.isNoteFilled.valid = true
                    }
                    break;
                default:
                    break;
            }
            
        },

        ProductCreateStep3OnBlurs(state , action){
            switch (action.payload.type) {
                case 'check_iteration_code':
                    if(state.steps[3].iterations_of_product.filter(element => element.id === action.payload.id)[0])
                    {
                        state.steps[3].iterations_of_product.filter(element => element.id === action.payload.id)[0].validators.isCodeFilled.valid = true
                    }
                    break;
                case 'check_iteration_note':
                    if(state.steps[3].iterations_of_product.filter(element => element.id === action.payload.id)[0])
                    {
                        state.steps[3].iterations_of_product.filter(element => element.id === action.payload.id)[0].validators.isNoteFilled.valid = true
                    }
                    break;
                default:
                    break;
            }
        },

        ProductCreateStep3Validate(state, action){
            state.steps[3].iterations_of_product.map(element => 
                () => {
                    if(element.iteration_code.length > 0 )
                    {
                        element.validators.isCodeFilled.valid = true
                    }
                    else{
                        element.validators.isCodeFilled.valid = false
                    }
                    if(element.iteration_note.length > 0 )
                    {
                        element.validators.isNoteFilled.valid = true
                    }else{
                        element.validators.isNoteFilled.valid = false
                    }
                    if(element.iteration_code.length > 0 && element.iteration_note.length > 0)
                    {
                        element.validators.areCodeAndNoteFilled.valid = true
                    }
                }
            )

            if(state.steps[3].iterations_of_product.filter(element => element.validators.areCodeAndNoteFilled.valid === false).length > 0)
            {
                state.steps[3].validated = 'not-valid'
            }
            else {
                state.steps[3].validated = 'valid'
            }

            
        },


        ProductCreateStep5OnChage(state, action){
            switch (action.payload.type) {
                case 'select_type':
                    
                    break;
            
                default:
                    break;
            }
        },

        ProductCreateStep5Validate(state, action){
            if(state.steps[5].validators.isPaidTypeSelected && state.steps[5].validators.isPriceTypeSelected.valid)
            {
                state.steps[5].validated = 'valid'
            }
            else 
            {
                state.steps[5].validated = 'not-valid'
            }
            
        },



        












        goNextStepProductCreate(state, _)
        {
            state.current_step = state.current_step + 1
        },
        goPreviousStepProductCreate(state, _)
        {
            state.current_step = state.current_step + 1
        }

    },

    extraReducers: (builder) => {


        // ADD CLIP
        builder.addCase(addFile.fulfilled, (state, {payload}) => {
            console.log(payload)
            state.steps[2].details_data.sections_product[getClipsIndex(state.steps[2].details_data.sections_product)].isClips.clips.push({id: Date.now(), src: payload!.base64! , alt:payload!.alt}) 
        }),
        builder.addCase(addFile.pending, (state, {payload}) => {
        }),
        builder.addCase(addFile.rejected, (state, action:any) => {
        })


    }

})


//function for find clip




// action
export const {  
    updateKey , 
    updateLabel , 
    addNewSection , 
    updateSectionsOrder , 
    deleteSection , 
    deleteClip ,  
    changeClipPosition,

    ProductCreateStep1OnChanges
} = CreateProductSlice.actions;




// data
export const sections_product = (state: RootState) => state.createProductReducer.steps[2].details_data.sections_product
export const product_create_steps = (state: RootState) => state.createProductReducer.steps
export const product_create_current_step = (state: RootState) => state.createProductReducer.current_step


export default CreateProductSlice.reducer;






