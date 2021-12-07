import React, { ReactElement } from 'react'
import {  ProductCreateStep1OnChanges, product_create_step1_data,  product_create_steps, selectCreateProductLanguage } from '../../../../../app/feature/CreateProductFeatures/CreateProduct.slice'
import { useAppDispatch, useAppSelector } from '../../../../../app/store/hooks'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { CodeMirror_STY, CreateProduct_Step1_Error, ProductCreate_Step1_Style, SelectLangType_STY } from '../../../../../styles/components/styled-blocks/CreateProduct_Style/Steps/ProductCreate_Step1.style';



interface Props {
    
}

export const ProductCreate_Step1 = ({}: Props): ReactElement => {
    const dispatch = useAppDispatch()
    const ProductCreateSteps = useAppSelector(product_create_steps)
    const Step1Data = ProductCreateSteps['1']
    const sourceCode = Step1Data.source_code
    const productCreateStep1Data = useAppSelector(product_create_step1_data)
    const {validators} = productCreateStep1Data


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
        <ProductCreate_Step1_Style>
            <div className='topCont'> 
                <p className='codeWord'>Code</p>  
                <div className="upload"> 
                    <p className='info'>Upload your code as a file (e.g js php c) or enter it below</p>  
                    <button> 
                        <input  value={""} type="file" placeholder="" onChange={(e:any) => getCodefromfile(e.target.files[0])} />
                        <p className='text'>Upload File</p>
                    </button>
                </div> 
            </div> 
            <CodeMirror_STY>
                <CodeMirror
                    value={sourceCode}
                    height="200px"
                    extensions={[javascript({ jsx: true })]}
                    theme="dark"
                    onChange={(value, viewUpdate) => {
                        dispatch(ProductCreateStep1OnChanges(value));
                    }}
                />    
            </CodeMirror_STY>

            <SelectLangType_STY name="" id="" value={Step1Data.lang_type} onChange={(e)=> dispatch(selectCreateProductLanguage(e.target.value))}>
                <option value="js">Javascript</option>
                <option value="php">Php</option>
                <option value="cpp">C++</option>
                <option value="py">Python</option>
            </SelectLangType_STY>

            <CreateProduct_Step1_Error>{ (productCreateStep1Data.validated === 'not-valid'  &&  !validators.isCodeFilled.valid) && validators.isCodeFilled.message  } </CreateProduct_Step1_Error>
        </ProductCreate_Step1_Style>
    )
}

