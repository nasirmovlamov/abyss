import React, { ReactElement } from 'react'
import {  ProductCreateStep1OnChanges, product_create_steps } from '../../../../../app/feature/CreateProductFeatures/CreateProductSlice'
import { useAppDispatch, useAppSelector } from '../../../../../app/store/hooks'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';



interface Props {
    
}

export const ProductCreate_Step1 = ({}: Props): ReactElement => {
    const dispatch = useAppDispatch()
    const ProductCreateSteps = useAppSelector(product_create_steps)
    const Step1Data = ProductCreateSteps['1']
    const sourceCode = Step1Data.source_code



    const getCodefromfile = (file:any) => {
        const reader = new FileReader();
        let textFile = /text.*/;
         if (file.type.match(textFile)) {
            reader.onload = function (event:any) {
                dispatch(ProductCreateStep1OnChanges((event.target.result)))
            }
         } else {
            alert("IT IS NOT TEXT FILE")
         }
         reader.readAsText(file);
    }


    return (
        <div>
            <button>get code from file <input  value={""} type="file" placeholder="add Image" onChange={(e:any) => getCodefromfile(e.target.files[0])} /></button>

            <CodeMirror
                value={sourceCode}
                height="200px"
                extensions={[javascript({ jsx: true })]}
                onChange={(value, viewUpdate) => {
                    dispatch(ProductCreateStep1OnChanges(value));
                }}
            />    
        </div>
    )
}

