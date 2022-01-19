import React, { ReactElement, useEffect } from 'react';

import {
    goNextStepProductCreate,
    goPreviousStepProductCreate,
    is_product_created,
    product_create_current_step,
    product_create_data,
    product_create_id,
    product_create_step1_data,
    product_create_steps_data,
    ProductCreateStep1Validate,
    ProductCreateStep2Validate,
    ProductCreateStep3Validate,
    ProductCreateStep5Validate,
} from '../../../app/feature/CreateProductFeatures/CreateProduct.slice';
import { changeModalAction } from '../../../app/feature/User.slice';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { createProductThunk, startPlagirismChecker, updateProductThunk } from '../../../app/thunks/CreateProductThunks';
import {
    CreateProduct_CloseButton_STY,
} from '../../../styles/components/styled-blocks/CreateProduct_Style/CreateProduct_Steps.style';
import * as ProductCR_STY from '../../../styles/components/styled-blocks/CreateProduct_Style/CreateProductModal.style';
import ProductCreate_Tabs from './StepsForProductCreate/ProductCreate_Tabs';
import ProductStepsRouter from './StepsForProductCreate/ProductCreateStepsRouter';

// { CreateProduct_Buttons_Cont, ProductCreateForm, ProductCreateModal, ProductLabelCont }

interface Props {
}





function CreateProductModal(this: any, { }: Props): ReactElement {
    const dispatch = useAppDispatch()
    const currentStep = useAppSelector(product_create_current_step)
    const isProductCreated = useAppSelector(is_product_created)
    const productCreateStep1Data = useAppSelector(product_create_step1_data)
    const productCreateId = useAppSelector(product_create_id)
    const productCreateStepsData = useAppSelector(product_create_steps_data)
    const productCreateData = useAppSelector(product_create_data)
    const validateFunctions: { [key: string]: any } = {
        step1: () => dispatch(ProductCreateStep1Validate(null)),
        step2: () => dispatch(ProductCreateStep2Validate(null)),
        step3: () => dispatch(ProductCreateStep3Validate(null)),
        step5: () => dispatch(ProductCreateStep5Validate(null)),
    }
    const productCreation = useAppSelector(is_product_created)


    const goNextSection = async () => {
        if (1 <= currentStep && currentStep <= 5) {
            if (currentStep === 5) {
                await validateFunctions[`step${currentStep}`]()
                if (productCreateStepsData[5].validated === 'valid') {
                    try {
                        dispatch(updateProductThunk({ mainData: productCreateData, productId: productCreateId }))
                        dispatch(changeModalAction('productCreate'))
                    } catch (error) {
                    }
                }
                return
            }


            if (currentStep === 1) {
                await validateFunctions[`step${currentStep}`]()
                if (
                    isProductCreated.status === "created" &&
                    isProductCreated.sendend_source_code === productCreateStep1Data.source_code &&
                    isProductCreated.id !== null
                ) {
                    dispatch(goNextStepProductCreate(null))
                    return
                }

                if (
                    isProductCreated.sendend_source_code !== productCreateStep1Data.source_code &&
                    productCreateStep1Data.source_code.length > 0 &&
                    isProductCreated.id !== null &&
                    isProductCreated.status === "created"
                ) {
                    await dispatch(startPlagirismChecker({ product_id: isProductCreated.id, source_code: productCreateStep1Data.source_code, extension: productCreateStep1Data.lang_type }))
                    return
                }

                if (isProductCreated.sendend_source_code !== productCreateStep1Data.source_code &&
                    isProductCreated.id === null &&
                    productCreateStep1Data.source_code.length > 0) {
                    await dispatch(createProductThunk({ source_code: productCreateStep1Data.source_code, extension: productCreateStep1Data.lang_type }))
                    return
                } else {
                    return
                }
            }

            if (currentStep !== 4) {
                await validateFunctions[`step${currentStep}`]()
                dispatch(goNextStepProductCreate(null))
            } else {
                dispatch(goNextStepProductCreate(null))
            }


        }
    }

    const SubmitProduct = async () => {

    }

    const goPrevoiusSection = async () => {
        if (currentStep !== 1) {
            dispatch(goPreviousStepProductCreate(null))
        }
    }


    return (
        <ProductCR_STY.ProductCreateForm>
            <CreateProduct_CloseButton_STY type="button" onClick={() => dispatch(changeModalAction('productCreate'))} >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
            </CreateProduct_CloseButton_STY>


            <ProductCreate_Tabs />
            <ProductStepsRouter />


            <ProductCR_STY.CreateProduct_Buttons_Cont style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                {currentStep > 1 ? <ProductCR_STY.CreateProduct_Button_PREVOIUS onClick={goPrevoiusSection} type="button">Previous</ProductCR_STY.CreateProduct_Button_PREVOIUS> : <div></div>}
                {currentStep !== 5 ? <ProductCR_STY.CreateProduct_Button_NEXT disabled={productCreation.status === 'pending' || productCreation.plagirismLoading === 'loading'} onClick={goNextSection} type="button"> Next</ProductCR_STY.CreateProduct_Button_NEXT> : <button onClick={goNextSection} type="button"> Submit </button>}
            </ProductCR_STY.CreateProduct_Buttons_Cont>
        </ProductCR_STY.ProductCreateForm>
    )
}

export default CreateProductModal












// Dropable Content



















