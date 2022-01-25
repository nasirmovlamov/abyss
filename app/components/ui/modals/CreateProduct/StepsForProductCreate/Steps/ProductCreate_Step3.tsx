import React from 'react';

import {
  product_create_step3_data,
  ProductCreateStep3OnBlurs,
  ProductCreateStep3OnChanges,
} from '../../../../../../store/slices/CreateProductFeatures/CreateProduct.slice';
import { useAppDispatch, useAppSelector } from '../../../../../../store/states/store.hooks';

interface Props {}

export const ProductCreate_Step3 = (props: Props) => {
  const dispatch = useAppDispatch()
  const productCreate_Step3Data = useAppSelector(product_create_step3_data)
  const { iterations_of_product } = productCreate_Step3Data
  const { validated } = productCreate_Step3Data
  const productIterationADD = () => {
    dispatch(ProductCreateStep3OnChanges({ type: 'add_iteration' }))
  }

  const productIterationDelete = (id: number) => {
    dispatch(ProductCreateStep3OnChanges({ type: 'delete_iteration', id: id }))
  }

  const productIterationOnChangeHandleName = (id: number, name: string) => {
    dispatch(ProductCreateStep3OnChanges({ type: 'update_iteration_name', id: id, content: name }))
  }
  const productIterationOnChangeHandleCode = (id: number, code: string) => {
    dispatch(ProductCreateStep3OnChanges({ type: 'update_iteration_code', id: id, content: code }))
  }
  const productIterationOnChangeHandleNote = (id: number, note: string) => {
    dispatch(ProductCreateStep3OnChanges({ type: 'update_iteration_note', id: id, content: note }))
  }

  const productIterationOnBlurHandleName = (id: number) => {
    dispatch(ProductCreateStep3OnBlurs({ type: 'check_iteration_name', id: id }))
  }
  const productIterationOnBlurHandleCode = (id: number) => {
    dispatch(ProductCreateStep3OnBlurs({ type: 'check_iteration_code', id: id }))
  }
  const productIterationOnBlurHandleNote = (id: number) => {
    dispatch(ProductCreateStep3OnBlurs({ type: 'check_iteration_note', id: id }))
  }
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '25px' }}>
        <button onClick={productIterationADD}>add new iteration</button>

        {iterations_of_product.map((iteration: any, index: any) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '5px',
              border: '1px solid black',
              padding: '5px',
            }}
            key={iteration.id}
          >
            <button onClick={() => productIterationDelete(iteration.id)}>del</button>
            <label htmlFor="">name of iteration</label>
            <input
              onBlur={() => productIterationOnBlurHandleName(iteration.id)}
              type="text"
              value={iteration.iteration_name}
              onChange={(e) => productIterationOnChangeHandleName(iteration.id, e.target.value)}
            />
            <label htmlFor="">code of iteration</label>
            <input
              onBlur={() => productIterationOnBlurHandleCode(iteration.id)}
              type="text"
              value={iteration.iteration_code}
              onChange={(e) => productIterationOnChangeHandleCode(iteration.id, e.target.value)}
            />
            <label htmlFor="">note of iteration</label>
            <input
              onBlur={() => productIterationOnBlurHandleNote(iteration.id)}
              type="text"
              value={iteration.iteration_note}
              onChange={(e) => productIterationOnChangeHandleNote(iteration.id, e.target.value)}
            />
            {iteration.validators.areAllFilled.valid === 'failed' && (
              <>
                {!iteration.validators.isCodeFilled.valid && (
                  <div>{iteration.validators.isCodeFilled.message}</div>
                )}
                {!iteration.validators.isNameFilled.valid && (
                  <div>{iteration.validators.isNameFilled.message}</div>
                )}
                {!iteration.validators.isNoteFilled.valid && (
                  <div>{iteration.validators.isNoteFilled.message}</div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
