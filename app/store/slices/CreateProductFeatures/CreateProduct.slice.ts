import { createSlice } from '@reduxjs/toolkit';
import { autoErrorToaster } from 'app/components/ui/toasters/AutoErrorToaster';
import { autoSuccessToaster } from 'app/components/ui/toasters/AutoSuccessToast';
import { getClipsIndex } from 'app/helpers/functions/CreateProduct';

import { RootState } from '../..';
import { CreateProductState } from '../../states/states/CreateProduct.state';
import { addFile, createProductThunk, startPlagirismChecker, updateProductThunk } from '../../thunks/CreateProduct.thunk';

export const CreateProductSlice = createSlice({
  name: 'create-product-slice',
  initialState: CreateProductState,

  reducers: {
    ProductCreateStep1OnChanges(state, action) {
      state.steps[1].source_code = action.payload
      if (state.steps[1].source_code.length > 0) {
        state.steps[1].validators.isCodeFilled.valid = true
      }
    },
    selectCreateProductLanguage(state, action) {
      state.steps[1].lang_type = action.payload
    },
    ProductCreateStep1OnBlurs(state, action) {
      state.steps[1].source_code = action.payload
      if (state.steps[1].source_code.length > 0) {
        state.steps[1].validators.isCodeFilled.valid = true
      }
    },

    ProductCreateStep1Validate(state, action) {
      if (state.steps[1].source_code.length < 1) {
        state.steps[1].validators.isCodeFilled.valid = false
        state.steps[1].validated = 'not-valid'
      } else {
        state.steps[1].validated = 'valid'
      }
    },

    ProductCreateStep2OnChanges(state, action) {
      switch (action.payload.type) {
        case 'product_name':
          state.steps[2].details_data.product_name = action.payload.value
          if (state.steps[2].details_data.product_name.length > 0) {
            state.steps[2].validators.isNameFilled.valid = true
          } else {
            state.steps[2].validators.isNameFilled.valid = true
          }
          break
        case 'product_tags':
          switch (action.payload.actionType) {
            case 'add':
              state.steps[2].details_data.product_tags.push({
                id: Date.now(),
                value: action.payload.value,
              })
              if (state.steps[2].details_data.product_tags.length > 0) {
                state.steps[2].validators.isTagsFilled.valid = true
              } else {
                state.steps[2].validators.isTagsFilled.valid = false
              }
              break
            case 'delete':
              state.steps[2].details_data.product_tags =
                state.steps[2].details_data.product_tags.filter(
                  (element: any) => element.id !== action.payload.id,
                )
              if (state.steps[2].details_data.product_tags.length > 0) {
                state.steps[2].validators.isTagsFilled.valid = true
              } else {
                state.steps[2].validators.isTagsFilled.valid = false
              }
              break
            default:
              break
          }
          break
        default:
          break
      }
    },

    ProductCreateStep2Validate(state, _) {
      if (state.steps[2].details_data.product_name.length < 1) {
        state.steps[2].validators.isNameFilled.valid = false
      }
      if (state.steps[2].details_data.product_tags.length < 1) {
        state.steps[2].validators.isTagsFilled.valid = false
      }
      if (
        state.steps[2].details_data.sections_product[0].label_value.replace(/(<([^>]+)>)/gi, '')
          .length < 1
      ) {
        state.steps[2].validators.isDescriptionFilled.valid = false
      }
      if (
        state.steps[2].details_data.sections_product[1].label_value.replace(/(<([^>]+)>)/gi, '')
          .length < 1
      ) {
        state.steps[2].validators.isApplicabilityFilled.valid = false
      }
      if (
        state.steps[2].details_data.sections_product[2].label_value.replace(/(<([^>]+)>)/gi, '')
          .length < 1
      ) {
        state.steps[2].validators.isProblemFormulationFilled.valid = false
      }

      if (
        state.steps[2].details_data.product_name.length < 1 ||
        state.steps[2].details_data.product_tags.length < 1 ||
        state.steps[2].details_data.sections_product[0].label_value.replace(/(<([^>]+)>)/gi, '')
          .length < 1 ||
        state.steps[2].details_data.sections_product[1].label_value.replace(/(<([^>]+)>)/gi, '')
          .length < 1 ||
        state.steps[2].details_data.sections_product[2].label_value.replace(/(<([^>]+)>)/gi, '')
          .length < 1
      ) {
        state.steps[2].validated = 'not-valid'
        return
      } else {
        state.steps[2].validated = 'valid'
      }
    },

    updateKey(state, { payload }) {
      state.steps[2].details_data.sections_product[payload.index].label_key = payload.content
    },
    updateLabel(state, { payload }) {
      state.steps[2].details_data.sections_product[payload.index].label_value = payload.content
      if (payload.index === 0) {
        if (
          state.steps[2].details_data.sections_product[0].label_value.replace(/(<([^>]+)>)/gi, '')
            .length > 0
        ) {
          state.steps[2].validators.isDescriptionFilled.valid = true
        } else {
          state.steps[2].validators.isDescriptionFilled.valid = false
        }
      }
      if (payload.index === 1) {
        if (
          state.steps[2].details_data.sections_product[1].label_value.replace(/(<([^>]+)>)/gi, '')
            .length > 0
        ) {
          state.steps[2].validators.isApplicabilityFilled.valid = true
        } else {
          state.steps[2].validators.isApplicabilityFilled.valid = false
        }
      }
      if (payload.index === 2) {
        if (
          state.steps[2].details_data.sections_product[2].label_value.replace(/(<([^>]+)>)/gi, '')
            .length > 0
        ) {
          state.steps[2].validators.isProblemFormulationFilled.valid = true
        } else {
          state.steps[2].validators.isProblemFormulationFilled.valid = false
        }
      }
    },

    blurOnLabel(state, { payload }) {},

    addNewSection(state) {
      state.steps[2].details_data.sections_product.push({
        id: Date.now(),
        label_key: 'Header',
        label_value: '',
        isEditor: true,
        isClips: { status: false, clips: [] },
      })
    },
    deleteSection(state, { payload }) {
      let newArray = [...state.steps[2].details_data.sections_product]
      newArray.splice(payload.index, 1)
      state.steps[2].details_data.sections_product = newArray
    },

    updateSectionsOrder(state, { payload }) {
      state.steps[2].details_data.sections_product = payload
    },

    deleteClip(state, { payload }) {
      state.steps[2].details_data.sections_product[
        getClipsIndex(state.steps[2].details_data.sections_product)
      ].isClips.clips.splice(payload.index, 1)
    },

    changeClipPosition(state, { payload }) {
      state.steps[2].details_data.sections_product[
        getClipsIndex(state.steps[2].details_data.sections_product)
      ].isClips.clips = payload
    },

    ProductCreateStep3OnChanges(state, action) {
      switch (action.payload.type) {
        case 'add_iteration':
          state.steps[3].iterations_of_product.push({
            id: Date.now(),
            iteration_code: '',
            iteration_note: '',
            iteration_name: '',
            validators: {
              isCodeFilled: {
                valid: false,
                message: 'Please enter code of iteration',
              },
              isNoteFilled: {
                valid: false,
                message: 'Please enter note of iteration',
              },
              isNameFilled: {
                valid: false,
                message: 'Please enter name of iteration',
              },
              areAllFilled: {
                valid: 'empty',
              },
            },
          })
          break
        case 'delete_iteration':
          state.steps[3].iterations_of_product.filter(
            (element: any) => element.id !== action.payload.id,
          )
          break
        case 'update_iteration_code':
          state.steps[3].iterations_of_product.filter(
            (element: any) => element.id === action.payload.id,
          )[0].iteration_code = action.payload.content
          break
        case 'update_iteration_name':
          state.steps[3].iterations_of_product.filter(
            (element: any) => element.id === action.payload.id,
          )[0].iteration_name = action.payload.content
          break
        case 'update_iteration_note':
          state.steps[3].iterations_of_product.filter(
            (element: any) => element.id === action.payload.id,
          )[0].iteration_note = action.payload.content
          break
        default:
          break
      }
    },

    ProductCreateStep3OnBlurs(state, action) {
      switch (action.payload.type) {
        case 'check_iteration_code':
          if (
            state.steps[3].iterations_of_product.filter(
              (element: any) => element.id === action.payload.id,
            )[0].iteration_code.length > 0
          ) {
            state.steps[3].iterations_of_product.filter(
              (element: any) => element.id === action.payload.id,
            )[0].validators.isCodeFilled.valid = true
          } else {
            state.steps[3].iterations_of_product.filter(
              (element: any) => element.id === action.payload.id,
            )[0].validators.isCodeFilled.valid = false
          }
          break
        case 'check_iteration_name':
          if (
            state.steps[3].iterations_of_product.filter(
              (element: any) => element.id === action.payload.id,
            )[0].iteration_name.length > 0
          ) {
            state.steps[3].iterations_of_product.filter(
              (element: any) => element.id === action.payload.id,
            )[0].validators.isNameFilled.valid = true
          } else {
            state.steps[3].iterations_of_product.filter(
              (element: any) => element.id === action.payload.id,
            )[0].validators.isNameFilled.valid = false
          }
          break
        case 'check_iteration_note':
          if (
            state.steps[3].iterations_of_product.filter(
              (element: any) => element.id === action.payload.id,
            )[0].iteration_note.length > 0
          ) {
            state.steps[3].iterations_of_product.filter(
              (element: any) => element.id === action.payload.id,
            )[0].validators.isNoteFilled.valid = true
          } else {
            state.steps[3].iterations_of_product.filter(
              (element: any) => element.id === action.payload.id,
            )[0].validators.isNoteFilled.valid = false
          }
          break
        default:
          break
      }
    },

    ProductCreateStep3Validate(state, action) {
      for (let i = 0; i < state.steps[3].iterations_of_product.length; i++) {
        const element = state.steps[3].iterations_of_product[i]
        if (
          element.iteration_note.length < 1 &&
          element.iteration_name.length < 1 &&
          element.iteration_code.length < 1
        ) {
          state.steps[3].iterations_of_product[i].validators.areAllFilled.valid = 'empty'
        } else if (
          element.iteration_note.length > 0 &&
          element.iteration_name.length > 0 &&
          element.iteration_code.length > 0
        ) {
          state.steps[3].iterations_of_product[i].validators.areAllFilled.valid = 'filled'
        } else if (
          element.iteration_note.length < 1 ||
          element.iteration_name.length < 1 ||
          element.iteration_code.length < 1
        ) {
          state.steps[3].iterations_of_product[i].validators.areAllFilled.valid = 'failed'
        } else {
        }
      }
      if (
        state.steps[3].iterations_of_product.filter(
          (element: any) => element.validators.areAllFilled.valid === 'failed',
        ).length > 0
      ) {
        state.steps[3].validated = 'not-valid'
      } else {
        state.steps[3].validated = 'valid'
      }
    },

    ProductCreateStep5OnChage(state, action) {
      switch (action.payload.type) {
        case 'paid_or_free':
          if (state.steps[5].payment_type !== 'not-selected') {
            if (state.steps[5].payment_type === action.payload.payment_type) {
              state.steps[5].payment_type = 'not-selected'
              state.steps[5].validators.isPaidTypeSelected.valid = false
            } else {
              state.steps[5].payment_type = action.payload.payment_type
              state.steps[5].validators.isPaidTypeSelected.valid = true
            }
          } else {
            state.steps[5].payment_type = action.payload.payment_type
            state.steps[5].validators.isPaidTypeSelected.valid = true
          }

        case 'tier':
          if (state.steps[5].tier_type !== 'not-selected') {
            if (state.steps[5].tier_type === action.payload.tier_type) {
              state.steps[5].tier_type = 'not-selected'
              state.steps[5].validators.isPriceTypeSelected.valid = false
            } else {
              state.steps[5].tier_type = action.payload.tier_type
              state.steps[5].validators.isPriceTypeSelected.valid = true
            }
          } else {
            state.steps[5].tier_type = action.payload.tier_type
            state.steps[5].validators.isPriceTypeSelected.valid = true
          }
          break
        case 'visibility':
          if (state.steps[5].visibility_type !== 'not-selected') {
            if (state.steps[5].visibility_type === action.payload.visibility_type) {
              state.steps[5].visibility_type = 'not-selected'
              state.steps[5].validators.isPriceTypeSelected.valid = false
            } else {
              state.steps[5].visibility_type = action.payload.visibility_type
              state.steps[5].validators.isPriceTypeSelected.valid = true
            }
          } else {
            state.steps[5].visibility_type = action.payload.visibility_type
            state.steps[5].validators.isPriceTypeSelected.valid = true
          }
          break
        default:
          break
      }
    },

    ProductCreateStep5Validate(state, action) {
      if (
        state.steps[5].validators.isPaidTypeSelected.valid &&
        state.steps[5].validators.isPriceTypeSelected.valid &&
        state.steps[5].payment_type === 'paid' &&
        state.steps[5].validators.isVisibilityTypeSelected
      ) {
        state.steps[5].validated = 'valid'
        return
      }
      if (
        state.steps[5].validators.isPaidTypeSelected.valid &&
        state.steps[5].payment_type === 'free' &&
        state.steps[5].validators.isVisibilityTypeSelected
      ) {
        state.steps[5].validated = 'valid'
      } else {
        state.steps[5].validated = 'not-valid'
      }
    },

    goNextStepProductCreate(state, _) {
      if (state.steps[state.current_step].validated === 'valid') {
        state.current_step++
      }
    },
    goPreviousStepProductCreate(state, _) {
      if (state.current_step > 1) {
        state.current_step--
      }
    },
  },

  extraReducers: (builder) => {
    // ADD CLIP
    builder.addCase(addFile.fulfilled, (state, { payload }) => {
      state.steps[2].details_data.sections_product[
        getClipsIndex(state.steps[2].details_data.sections_product)
      ].isClips.clips.push({
        id: Date.now(),
        src: payload!.base64!,
        alt: payload!.alt,
      })
    }),
      builder.addCase(addFile.pending, (state, { payload }) => {}),
      builder.addCase(addFile.rejected, (state, action: any) => {})

    // updateProductThunk
    builder.addCase(updateProductThunk.fulfilled, (state, { payload }) => {
      autoSuccessToaster(payload.message)
    }),
      builder.addCase(updateProductThunk.pending, (state, { payload }) => {}),
      builder.addCase(updateProductThunk.rejected, (state, action: any) => {
        autoErrorToaster(action.payload)
      })

    // Create Product
    builder.addCase(createProductThunk.fulfilled, (state, { payload }) => {
      autoSuccessToaster(payload.message)
      state.product_created.id = payload.product_id
      state.product_created.status = payload.product_status
      state.product_created.sendend_source_code = payload.source_code
      state.product_created.status = 'created'
      if (state.steps[state.current_step].validated === 'valid') {
        state.current_step = 2
      }
    }),
      builder.addCase(createProductThunk.pending, (state, { payload }) => {
        state.product_created.id = null
        state.product_created.status = 'pending'
      }),
      builder.addCase(createProductThunk.rejected, (state, action: any) => {
        state.product_created.id = null
        state.product_created.status = 'failed'
      })

    // Start Plagiarism
    builder.addCase(startPlagirismChecker.fulfilled, (state, { payload }) => {
      autoSuccessToaster(payload.data.message)
      state.product_created.sendend_source_code = payload.source_code
      state.product_created.plagirismLoading = 'valid'
      if (state.steps[state.current_step].validated === 'valid') {
        state.current_step = 2
      }
    }),
      builder.addCase(startPlagirismChecker.pending, (state, { payload }) => {
        state.product_created.plagirismLoading = 'loading'
      }),
      builder.addCase(startPlagirismChecker.rejected, (state, action: any) => {
        state.product_created.plagirismLoading = 'not-valid'
        autoErrorToaster(action.payload)
      })
  },
})

//function for find clip

// action
export const {
  ProductCreateStep1OnChanges,
  ProductCreateStep1OnBlurs,
  ProductCreateStep1Validate,
  ProductCreateStep2OnChanges,
  ProductCreateStep2Validate,
  updateKey,
  updateLabel,
  blurOnLabel,
  addNewSection,
  deleteSection,
  updateSectionsOrder,
  deleteClip,
  changeClipPosition,
  ProductCreateStep3OnChanges,
  ProductCreateStep3OnBlurs,
  ProductCreateStep3Validate,
  ProductCreateStep5OnChage,
  ProductCreateStep5Validate,
  goNextStepProductCreate,
  goPreviousStepProductCreate,
  selectCreateProductLanguage,
} = CreateProductSlice.actions

// data
export const sections_product = (state: RootState) =>
  state.createProductReducer.steps[2].details_data.sections_product
export const product_create_steps = (state: RootState) => state.createProductReducer.steps
export const product_create_current_step = (state: RootState) =>
  state.createProductReducer.current_step
export const product_create_step1_data = (state: RootState) => state.createProductReducer.steps[1]
export const product_create_step2_data = (state: RootState) => state.createProductReducer.steps[2]
export const product_create_step3_data = (state: RootState) => state.createProductReducer.steps[3]
export const product_create_step4_data = (state: RootState) => state.createProductReducer.steps[4]
export const product_create_step5_data = (state: RootState) => state.createProductReducer.steps[5]
export const product_create_steps_data = (state: RootState) => state.createProductReducer.steps
export const product_create_id = (state: RootState) => state.createProductReducer.product_created.id
export const is_product_created = (state: RootState) => state.createProductReducer.product_created

export const product_create_data = (state: RootState) => state.createProductReducer

export default CreateProductSlice.reducer

// ProductCreateStep2OnBlurs(state, action){
//     switch (action.payload.type) {
//         case 'product_name':
//             if(state.steps[2].details_data.product_name.length < 1)
//             {
//                 state.steps[2].validators.isNameFilled.valid = false
//             }else
//             {

//                 state.steps[2].validators.isNameFilled.valid = true
//             }
//             break;
//         case 'product_tags':
//             if(state.steps[2].details_data.product_tags.length < 1)
//             {
//                 state.steps[2].validators.isTagsFilled.valid = false
//             }else
//             {
//                 state.steps[2].validators.isTagsFilled.valid = true
//             }
//         case 'product_description':
//             if(state.steps[2].details_data.sections_product[1].label_value.length < 1)
//             {
//                 state.steps[2].validators.isDescriptionFilled.valid = false
//             }else {
//                 state.steps[2].validators.isDescriptionFilled.valid = true
//             }
//         case 'product_problem_aplicability':
//             if(state.steps[2].details_data.sections_product[2].label_value.length < 1)
//             {
//                 state.steps[2].validators.isApplicabilityFilled.valid = false
//             }else{
//                 state.steps[2].validators.isApplicabilityFilled.valid = true
//             }
//         case 'product_problem_formulation':
//             if(state.steps[2].details_data.sections_product[3].label_value.length < 1)
//             {
//                 state.steps[2].validators.isProblemFormulationFilled.valid = false
//             }else
//             {

//             }

//         default:
//             break;
//     }
// },
