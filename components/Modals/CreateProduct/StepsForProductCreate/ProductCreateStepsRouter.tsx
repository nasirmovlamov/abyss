import React from 'react'
import { product_create_current_step } from '../../../../app/feature/CreateProductFeatures/CreateProduct.slice'
import { useAppSelector } from '../../../../app/store/hooks'
import { ProductCreate_Step1  } from './Steps/ProductCreate_Step1'
import { ProductCreate_Step2  } from './Steps/ProductCreate_Step2'
import { ProductCreate_Step3  } from './Steps/ProductCreate_Step3'
import { ProductCreate_Step4  } from './Steps/ProductCreate_Step4'
import { ProductCreate_Step5  } from './Steps/ProductCreate_Step5'

interface Props {
    
}



const ProductStepsRouter = (props: Props) => {
    const ProductCreateSteps: {[key: number]: JSX.Element} = {
        1: <ProductCreate_Step1/>,
        2: <ProductCreate_Step2/>,
        3: <ProductCreate_Step3/>,
        4: <ProductCreate_Step4/>,
        5: <ProductCreate_Step5/>,
    }
    const currentStep =  useAppSelector(product_create_current_step)

    return (<div>{ProductCreateSteps[currentStep]}</div>)
}

export default ProductStepsRouter
