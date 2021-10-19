import { getClipsIndex , getClips} from './../../logic/createProduct';
import { MainClip } from './../../styles/pages/Store.styled';
import { RootState } from "../store/store";
import { createSlice} from '@reduxjs/toolkit'
import { autoErrorToaster } from "../../components/Notify/AutoErrorToaster";
import { CreateProductState } from "../store/states/CreateProductState";
import { SectionOfProduct } from "../store/state-Interfaces/CreateProductInterface";
import { base64Image } from '../../logic/convertBase64';
import { addFile } from '../thunks/CreateProductThunk';



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
            state.sections_product.push({id:Date.now() , label_key:"Header" , label_value:"" , isEditor:true , isClips:{status:false , clips:[]}})
        },
        deleteSection(state, {payload})
        {   
            let newArray = [...state.sections_product]
            newArray.splice( payload.index, 1)
            state.sections_product = newArray
        },


        deleteClip(state , {payload}) {
            state.sections_product[getClipsIndex(state.sections_product)].isClips.clips.splice(payload.index, 1)
        },

        changeClipPosition(state , {payload})
        {
            state.sections_product[getClipsIndex(state.sections_product)].isClips.clips = payload
        }

    },

    extraReducers: (builder) => {


        // ADD CLIP
        builder.addCase(addFile.fulfilled, (state, {payload}) => {
            console.log(payload)
            state.sections_product[getClipsIndex(state.sections_product)].isClips.clips.push({id: Date.now(), src: payload!.base64! , alt:payload!.alt}) 
        }),
        builder.addCase(addFile.pending, (state, {payload}) => {
        }),
        builder.addCase(addFile.rejected, (state, action:any) => {
        })


    }

})


//function for find clip




// action
export const {  updateKey , updateLabel , addNewSection , updateSectionsOrder , deleteSection , deleteClip ,  changeClipPosition} = CreateProductSlice.actions;




// data
export const sections_product = (state: RootState) => state.createProductReducer.sections_product


export default CreateProductSlice.reducer;






