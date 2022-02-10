import { AddProductForm, AddProductFormStep } from 'app/interfaces';
import {
  CreateProduct_Tab_Seperator,
  CreateProduict_Tab_STY,
} from 'app/styles/styled-components/base/modules/CreateProduct_Style/CreateProduct.style';
import React, { useState } from 'react';

import { is_product_created } from '../../../../store/slices/CreateProductFeatures/CreateProduct.slice';
import { changeModalAction } from '../../../../store/slices/User.slice';
import { useAppDispatch, useAppSelector } from '../../../../store/states/store.hooks';
import {
  CreateProduct_CloseButton_STY,
  CreateProduct_StepCont,
  CreateProduct_Tabs,
} from '../../../../styles/styled-components/base/modules/CreateProduct_Style/CreateProduct_Steps.style';
import * as ProductCR_STY from '../../../../styles/styled-components/base/modules/CreateProduct_Style/CreateProductModal.style';
import ProductCreate_Step1 from './StepsForProductCreate/Steps/CreateProductCode';
import CreateProductDetails from './StepsForProductCreate/Steps/CreateProductDetails';
import { ProductCreate_Step3 } from './StepsForProductCreate/Steps/ProductCreate_Step3';
import { ProductCreate_Step4 } from './StepsForProductCreate/Steps/ProductCreate_Step4';
import { ProductCreate_Step5 } from './StepsForProductCreate/Steps/ProductCreate_Step5';

const CreateProductModal = () => {
  const dispatch = useAppDispatch()
  const productCreation = useAppSelector(is_product_created)

  // NOTE: for steps, we start from 0
  const [addProductForm, setAddProductForm] = useState<AddProductForm>({
    curStep: 0,
    supportedLangs: [
      { key: 'javascript', label: 'Javascript' },
      { key: 'php', label: 'PHP' },
      { key: 'c++', label: 'C++' },
      { key: 'python', label: 'Python' },
    ],
    steps: [
      {
        key: 'code',
        label: 'Code',
        isValidated: null,
        code: '',
        lang: 'javascript',
      },
      {
        key: 'details',
        label: 'Details',
        isValidated: null,
        productTitle: '',
        details: [
          { key: 'description', label: 'Description', value: '', isEditable: false },
          { key: 'applicability', label: 'Applicability', value: '', isEditable: false },
          {
            key: 'problem_formulation',
            label: 'Problem Formulation',
            value: '',
            isEditable: false,
          },
        ],
        tags: [],
        clips: [],
      },
      {
        key: 'iterations',
        label: 'Iterations',
        isValidated: null,
        iterationTitle: '',
        iterationCode: '',
        iterationLang: 'javascript',
        iterationNote: '',
      },
      {
        key: 'checks',
        label: 'Checks',
        isValidated: null,
      },
      {
        key: 'pricing',
        label: 'Pricing',
        isValidated: null,
        tierType: null,
        visibilityType: null,
      },
    ],
  })

  // Helper function to update a step
  const _updateSteps = (updatedStep: AddProductFormStep) => {
    const updatedSteps = [...addProductForm.steps]
    updatedSteps[addProductForm.curStep] = updatedStep

    setAddProductForm({ ...addProductForm, steps: updatedSteps })
  }

  const goNextStep = () => {
    const step = addProductForm.curStep

    //@todo: Validate the step

    if (step < addProductForm.steps.length - 1) {
      setAddProductForm({ ...addProductForm, curStep: step + 1 })
    }
  }

  const goPrevStep = () => {
    const step = addProductForm.curStep
    if (step >= 0) {
      setAddProductForm({ ...addProductForm, curStep: step - 1 })
    }
  }

  // Update value of item in the current step
  const handleValueChange = (itemId: string, value: string) => {
    const updatedStep = {
      ...addProductForm.steps[addProductForm.curStep],
      [itemId]: value,
    }
    _updateSteps(updatedStep)
  }

  // Create a detail block with unique key
  const handleAddDetailBlock = () => {
    const curStepState = addProductForm.steps[addProductForm.curStep]

    if (curStepState.details) {
      const updatedStep = {
        ...curStepState,
        details: [
          ...curStepState.details,
          { key: Math.random().toString(), label: '', value: '', isEditable: true },
        ],
      }
      _updateSteps(updatedStep)
    }
  }

  // Find detail block in state and update it
  const handleUpdateDetailBlock = (key: string, label?: string, value?: string) => {
    const curStepState = addProductForm.steps[addProductForm.curStep]

    if (curStepState.details) {
      const detailIndex = curStepState.details.findIndex((item) => item.key === key)
      const oldDetail = curStepState.details[detailIndex]
      const updatedDetails = [...curStepState.details]
      updatedDetails[detailIndex] = {
        ...oldDetail,
        label: label || oldDetail.label,
        value: value || oldDetail.value,
      }

      const updatedStep = {
        ...curStepState,
        details: updatedDetails,
      }
      _updateSteps(updatedStep)
    }
  }

  // Find and remove block with given key
  const handleDeleteDetailBlock = (key: string) => {
    const curStepState = addProductForm.steps[addProductForm.curStep]

    if (curStepState.details) {
      const updatedDetails = curStepState.details.filter((item) => item.key !== key)
      const updatedStep = {
        ...curStepState,
        details: updatedDetails,
      }
      _updateSteps(updatedStep)
    }
  }

  // Create a tag and add to the list
  const handleAddTag = (tag: string) => {
    const curStepState = addProductForm.steps[addProductForm.curStep]

    if (curStepState.tags) {
      const updatedStep = {
        ...curStepState,
        tags: [...curStepState.tags, tag],
      }
      _updateSteps(updatedStep)
    }
  }

  // Find and remove tag in given index
  const handleDeleteTag = (index: number) => {
    const curStepState = addProductForm.steps[addProductForm.curStep]

    if (curStepState.tags) {
      const updatedTags = curStepState.tags.filter((_, i) => i !== index)
      const updatedStep = {
        ...curStepState,
        tags: updatedTags,
      }
      _updateSteps(updatedStep)
    }
  }

  // Render current step view
  let curStepView
  const stepViewProps = {
    state: addProductForm.steps[addProductForm.curStep],
    handleValueChange,
  }

  switch (addProductForm.curStep) {
    case 1:
      curStepView = (
        <CreateProductDetails
          {...stepViewProps}
          addDetailBlock={handleAddDetailBlock}
          deleteDetailBlock={handleDeleteDetailBlock}
          updateDetailBlock={handleUpdateDetailBlock}
          addTag={handleAddTag}
          deleteTag={handleDeleteTag}
        />
      )
      break
    case 2:
      curStepView = <ProductCreate_Step3 {...stepViewProps} />
      break
    case 3:
      curStepView = <ProductCreate_Step4 {...stepViewProps} />
      break
    case 4:
      curStepView = <ProductCreate_Step5 {...stepViewProps} />
      break
    default:
      curStepView = (
        <ProductCreate_Step1 {...stepViewProps} supportedLangs={addProductForm.supportedLangs} />
      )
  }

  return (
    <ProductCR_STY.ProductCreateForm>
      <CreateProduct_CloseButton_STY
        type="button"
        onClick={() => dispatch(changeModalAction('productCreate'))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
      </CreateProduct_CloseButton_STY>

      <CreateProduct_Tabs>
        {addProductForm.steps.map((step, index) => (
          <>
            <CreateProduict_Tab_STY
              key={step.key}
              validated={step.isValidated === true}
              currentStage={addProductForm.curStep === index}
            />

            {index !== addProductForm.steps.length - 1 && <CreateProduct_Tab_Seperator />}
          </>
        ))}
      </CreateProduct_Tabs>
      <CreateProduct_StepCont>{curStepView}</CreateProduct_StepCont>

      <ProductCR_STY.CreateProduct_Buttons_Cont
        style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
      >
        {addProductForm.curStep > 0 ? (
          <ProductCR_STY.CreateProduct_Button_PREVOIUS onClick={goPrevStep} type="button">
            Previous
          </ProductCR_STY.CreateProduct_Button_PREVOIUS>
        ) : (
          <div></div>
        )}
        {addProductForm.curStep < addProductForm.steps.length - 1 ? (
          <ProductCR_STY.CreateProduct_Button_NEXT
            disabled={
              productCreation.status === 'pending' || productCreation.plagirismLoading === 'loading'
            }
            onClick={goNextStep}
            type="button"
          >
            Next
          </ProductCR_STY.CreateProduct_Button_NEXT>
        ) : (
          <ProductCR_STY.CreateProduct_Button_NEXT onClick={goNextStep} type="button">
            Submit
          </ProductCR_STY.CreateProduct_Button_NEXT>
        )}
      </ProductCR_STY.CreateProduct_Buttons_Cont>
    </ProductCR_STY.ProductCreateForm>
  )
}

export default CreateProductModal
