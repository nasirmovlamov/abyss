import React, { ReactElement, useEffect} from 'react'

import { changeModalAction } from '../../../app/feature/UserSlice'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { ProductCreateForm, ProductCreateModal, ProductLabelCont } from '../../../styles/components/styled-elements/CreateProductModal.style'
import ProductStepsRouter from './StepsForProductCreate/ProductCreateStepsRouter'
import ProductCreate_Tabs from './StepsForProductCreate/ProductCreate_Tabs'
import { sections_product } from '../../../app/feature/CreateProductFeatures/CreateProductSlice'


interface Props {
}





function CreateProductModal(this: any, {}: Props): ReactElement {
    const dispatch = useAppDispatch()
    
    
    

    return (
        <ProductCreateModal>
            <ProductCreateForm>
                <div style={{display:'flex',flexDirection:"column",alignItems:'flex-end',marginTop:"0px",marginBottom:"10px"}}>
                    <button type="button" onClick={() => dispatch(changeModalAction('productCreate'))} style={{background:"none",border:"none",cursor:"pointer"}}>X</button>
                </div>
                

                <ProductCreate_Tabs/>
                <ProductStepsRouter/>
                

                <div style={{display:'flex' , justifyContent:'space-between' , width:'100%'}}>
                    <button type="button">Previous</button>
                    <button type="button">Next</button>
                </div>
            </ProductCreateForm>
        </ProductCreateModal>
    )
}

export default CreateProductModal












// Dropable Content



















