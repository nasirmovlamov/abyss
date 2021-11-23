import React from 'react'
import { product_create_current_step, product_create_steps_data } from '../../../../app/feature/CreateProductFeatures/CreateProduct.slice'
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks'

interface Props {
    
}

const ProductCreate_Tabs = (props: Props) => {
    const dispatch = useAppDispatch()
    const currentStep = useAppSelector(product_create_current_step)
    const productCreateStepsData = useAppSelector(product_create_steps_data)


    const tabStyle= { 
        width:"30px" , 
        height:"30px", 
        backgroundColor:  "gray",
        color:'black',
        border:'none',
        borderRadius:'50%',
        cursor:'pointer',
    }
    
    const failedStyle= { 
        width:"30px" , 
        height:"30px", 
        backgroundColor:  "red",
        color:'black',
        border:'none',
        borderRadius:'50%',
        cursor:'pointer',
    }

    const activeTabStyle= { 
        width:"30px" , 
        height:"30px", 
        backgroundColor:  "orange",
        color:'black',
        border:'none',
        borderRadius:'50%',
        cursor:'pointer',
    }

    const doneTabStyle= { 
        width:"30px" , 
        height:"30px", 
        backgroundColor:  "green",
        color:'black',
        border:'none',
        borderRadius:'50%',
        cursor:'pointer',
    }

    return (
        <div style={{display:"flex", columnGap:"20px", alignItems:"center" ,width:"100%", justifyContent:"center"}}>
            
                <div key={productCreateStepsData[1].id} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <button style={
                        productCreateStepsData[1].validated === 'not-checked' && (currentStep === productCreateStepsData[1].id ? activeTabStyle : tabStyle )
                        ||
                        productCreateStepsData[1].validated === 'valid' && doneTabStyle
                        ||
                        productCreateStepsData[1].validated === 'loading' && activeTabStyle
                        ||
                        productCreateStepsData[1].validated === 'not-valid' && failedStyle
                        ||
                        {}
                    }>
                        {productCreateStepsData[1].id}
                    </button>
                </div>


                <div key={productCreateStepsData[2].id} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <button style={
                        productCreateStepsData[2].validated === 'not-checked' && (currentStep === productCreateStepsData[2].id ? activeTabStyle : tabStyle )
                        ||
                        productCreateStepsData[2].validated === 'valid' && doneTabStyle
                        ||
                        productCreateStepsData[2].validated === 'loading' && activeTabStyle
                        ||
                        productCreateStepsData[2].validated === 'not-valid' && failedStyle
                        ||
                        {}
                    }>
                        {productCreateStepsData[2].id}
                    </button>
                </div>



                <div key={productCreateStepsData[3].id} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <button style={
                        productCreateStepsData[3].validated === 'not-checked' && (currentStep === productCreateStepsData[3].id ? activeTabStyle : tabStyle )
                        ||
                        productCreateStepsData[3].validated === 'valid' && doneTabStyle
                        ||
                        productCreateStepsData[3].validated === 'loading' && activeTabStyle
                        ||
                        productCreateStepsData[3].validated === 'not-valid' && failedStyle
                        ||
                        {}
                    }>
                        {productCreateStepsData[3].id}
                    </button>
                </div>



                <div key={productCreateStepsData[4].id} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <button style={
                        productCreateStepsData[4].validated === 'not-checked' && (currentStep === productCreateStepsData[4].id ? activeTabStyle : tabStyle )
                        ||
                        productCreateStepsData[4].validated === 'valid' && doneTabStyle
                        ||
                        productCreateStepsData[4].validated === 'loading' && activeTabStyle
                        ||
                        productCreateStepsData[4].validated === 'not-valid' && failedStyle
                        ||
                        {}
                    }>
                        {productCreateStepsData[4].id}
                    </button>
                </div>


                <div key={productCreateStepsData[5].id} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <button style={
                        productCreateStepsData[5].validated === 'not-checked' && (currentStep === productCreateStepsData[5].id ? activeTabStyle : tabStyle )
                        ||
                        productCreateStepsData[5].validated === 'valid' && doneTabStyle
                        ||
                        productCreateStepsData[5].validated === 'loading' && activeTabStyle
                        ||
                        productCreateStepsData[5].validated === 'not-valid' && failedStyle
                        ||
                        {}
                    }>
                        {productCreateStepsData[5].id}
                    </button>
                </div>
        </div>
    )
}

export default ProductCreate_Tabs
