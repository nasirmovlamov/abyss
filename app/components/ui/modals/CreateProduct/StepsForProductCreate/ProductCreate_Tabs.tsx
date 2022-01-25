import React from 'react';

import {
  product_create_current_step,
  product_create_steps_data,
} from '../../../../../store/slices/CreateProductFeatures/CreateProduct.slice';
import { useAppDispatch, useAppSelector } from '../../../../../store/states/store.hooks';
import {
  CreateProduct_Tab_Seperator,
  CreateProduct_Tabs,
  CreateProduict_Tab_STY,
} from '../../../../../styles/styled-components/components/modules/CreateProduct_Style/CreateProduct.style';

interface Props {}

const ProductCreate_Tabs = (props: Props) => {
  const dispatch = useAppDispatch()
  const currentStep = useAppSelector(product_create_current_step)
  const productCreateStepsData = useAppSelector(product_create_steps_data)

  return (
    <CreateProduct_Tabs>
      <CreateProduict_Tab_STY
        key={productCreateStepsData[1].id}
        validated={productCreateStepsData[1].validated === 'not-valid'}
        currentStage={currentStep === 1}
      />

      <CreateProduct_Tab_Seperator />

      <CreateProduict_Tab_STY
        key={productCreateStepsData[2].id}
        validated={productCreateStepsData[2].validated === 'not-valid'}
        currentStage={currentStep === 2}
      />

      <CreateProduct_Tab_Seperator />

      <CreateProduict_Tab_STY
        key={productCreateStepsData[3].id}
        validated={productCreateStepsData[3].validated === 'not-valid'}
        currentStage={currentStep === 3}
      />

      <CreateProduct_Tab_Seperator />

      <CreateProduict_Tab_STY
        key={productCreateStepsData[4].id}
        validated={false}
        currentStage={currentStep === 4}
      />

      <CreateProduct_Tab_Seperator />

      <CreateProduict_Tab_STY
        key={productCreateStepsData[5].id}
        validated={productCreateStepsData[5].validated === 'not-valid'}
        currentStage={currentStep === 5}
      />
    </CreateProduct_Tabs>
  )
}

export default ProductCreate_Tabs
