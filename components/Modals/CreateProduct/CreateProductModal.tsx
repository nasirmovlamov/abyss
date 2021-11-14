import React, { ReactElement, useEffect} from 'react'

import { changeModalAction } from '../../../app/feature/UserSlice'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { ProductCreateForm, ProductCreateModal, ProductLabelCont } from '../../../styles/components/styled-elements/CreateProductModal.style'
import ProductStepsRouter from './StepsForProductCreate/ProductCreateStepsRouter'
import ProductCreate_Tabs from './StepsForProductCreate/ProductCreate_Tabs'
import { goNextStepProductCreate, goPreviousStepProductCreate, is_product_created, ProductCreateStep1Validate, ProductCreateStep2Validate, ProductCreateStep3Validate, ProductCreateStep5Validate, product_create_current_step, sections_product } from '../../../app/feature/CreateProductFeatures/CreateProductSlice'


interface Props {
}





function CreateProductModal(this: any, {}: Props): ReactElement {
    const dispatch = useAppDispatch()
    const currentStep = useAppSelector(product_create_current_step)
    const isProductCreated = useAppSelector(is_product_created)

    const validateFunctions:{[key: string]: any} = {
        step1: () => dispatch(ProductCreateStep1Validate(null)),
        step2: ()=>dispatch(ProductCreateStep2Validate(null)),
        step3: () => dispatch(ProductCreateStep3Validate(null)),
        step5: () => dispatch(ProductCreateStep5Validate(null)),
    }
    

    const goNextSection = async () => {
        if(1 <= currentStep && currentStep < 5)
        {
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
            {isProductCreated.status === 'pending' && "Loading"} 
            {isProductCreated.status === 'failed' && "Error"} 
            {
                isProductCreated.status === 'created' &&
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



















