import React, { ReactElement, useEffect} from 'react'

import { changeModalAction } from '../../../app/feature/User.slice'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { ProductCreateForm, ProductCreateModal, ProductLabelCont } from '../../../styles/components/styled-elements/CreateProductModal.style'
import ProductStepsRouter from './StepsForProductCreate/ProductCreateStepsRouter'
import ProductCreate_Tabs from './StepsForProductCreate/ProductCreate_Tabs'
import { 
    goNextStepProductCreate, 
    goPreviousStepProductCreate, 
    is_product_created, 
    ProductCreateStep1Validate, 
    ProductCreateStep2Validate, 
    ProductCreateStep3Validate, 
    ProductCreateStep5Validate, 
    product_create_current_step, 
    product_create_data, 
    product_create_id, 
    product_create_step1_data, 
    product_create_steps_data, 
    sections_product 
} from '../../../app/feature/CreateProductFeatures/CreateProduct.slice'

import { createProductThunk, startPlagirismChecker, updateProductThunk } from '../../../app/thunks/CreateProductThunks'


interface Props {
}





function CreateProductModal(this: any, {}: Props): ReactElement {
    const dispatch = useAppDispatch()
    const currentStep = useAppSelector(product_create_current_step)
    const isProductCreated = useAppSelector(is_product_created)
    const productCreateStep1Data = useAppSelector(product_create_step1_data)
    const productCreateId = useAppSelector(product_create_id)
    const productCreateStepsData = useAppSelector(product_create_steps_data)
    const productCreateData = useAppSelector(product_create_data)
    const validateFunctions:{[key: string]: any} = {
        step1: () => dispatch(ProductCreateStep1Validate(null)),
        step2: ()=>dispatch(ProductCreateStep2Validate(null)),
        step3: () => dispatch(ProductCreateStep3Validate(null)),
        step5: () => dispatch(ProductCreateStep5Validate(null)),
    }
    


    const goNextSection = async () => {
        if(1 <= currentStep && currentStep <= 5)
        {
            if(currentStep === 5){
                await validateFunctions[`step${currentStep}`]()
                if(productCreateStepsData[5].validated === 'valid'){
                    dispatch(updateProductThunk({mainData:productCreateData , productId: productCreateId}))
                }
                return
            }   


            if(currentStep === 1 ){
                await validateFunctions[`step${currentStep}`]()
                if(
                    isProductCreated.status === "created" && 
                    isProductCreated.sendend_source_code === productCreateStep1Data.source_code && 
                    isProductCreated.id !== null
                    ){
                    dispatch(goNextStepProductCreate(null))
                    return 
                }

                if(
                    isProductCreated.sendend_source_code !== productCreateStep1Data.source_code     && 
                    productCreateStep1Data.source_code.length > 0                                   && 
                    isProductCreated.id !== null &&
                    isProductCreated.status === "created"
                )
                {
                   await  dispatch(startPlagirismChecker({product_id: isProductCreated.id,source_code:productCreateStep1Data.source_code}))
                   return 
                }

                if(isProductCreated.sendend_source_code !== productCreateStep1Data.source_code &&
                    isProductCreated.id === null && 
                    productCreateStep1Data.source_code.length > 0){
                   await  dispatch(createProductThunk(productCreateStep1Data.source_code))
                   return 
                }else {
                    return              
                }
            }

            if(currentStep !== 4)
            {
                await validateFunctions[`step${currentStep}`]()
                dispatch(goNextStepProductCreate(null))
            }else 
            {
                dispatch(goNextStepProductCreate(null))
            }

            
        }
    }

    const SubmitProduct = async () => {
        
    }

    const goPrevoiusSection = async () => {
        if(currentStep !== 1)
        {
            dispatch(goPreviousStepProductCreate(null))
        }
    }


    return (
        <ProductCreateModal>
            {/* {
                isProductCreated.status === 'pending' &&  
                <ProductCreateForm>
                    <div style={{display:'flex',flexDirection:"column",alignItems:'flex-end',marginTop:"0px",marginBottom:"10px"}}>
                            <button type="button" onClick={() => dispatch(changeModalAction('productCreate'))} style={{background:"none",border:"none",cursor:"pointer"}}>X</button>
                    </div>
                    Loading
                </ProductCreateForm>} 
            {
                isProductCreated.status === 'failed' && 
                <ProductCreateForm>
                     <div style={{display:'flex',flexDirection:"column",alignItems:'flex-end',marginTop:"0px",marginBottom:"10px"}}>
                        <button type="button" onClick={() => dispatch(changeModalAction('productCreate'))} style={{background:"none",border:"none",cursor:"pointer"}}>X</button>
                    </div>
                    Please Login your account
                </ProductCreateForm>
            }  */}


            {
                true &&
                <ProductCreateForm>
                    <div style={{display:'flex',flexDirection:"column",alignItems:'flex-end',marginTop:"0px",marginBottom:"10px"}}>
                        <button type="button" onClick={() => dispatch(changeModalAction('productCreate'))} style={{background:"none",border:"none",cursor:"pointer"}}>X</button>
                    </div>
                    

                    <ProductCreate_Tabs/>
                    <ProductStepsRouter/>
                    

                    <div style={{display:'flex' , justifyContent:'space-between' , width:'100%'}}>
                        <button onClick={goPrevoiusSection} type="button">Previous</button>
                        {currentStep !== 5 ? <button onClick={goNextSection} type="button"> Next</button> :<button onClick={goNextSection} type="button"> Submit </button>}
                    </div>
                </ProductCreateForm>
            }       
        </ProductCreateModal>
    )
}

export default CreateProductModal












// Dropable Content



















