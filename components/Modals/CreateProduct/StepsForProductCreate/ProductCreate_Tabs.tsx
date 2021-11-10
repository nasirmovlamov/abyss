import React from 'react'
import { product_create_current_step, product_create_steps_data } from '../../../../app/feature/CreateProductFeatures/CreateProductSlice'
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
            {Object.keys(productCreateStepsData).map(
                (key, index) => 
                <div key={productCreateStepsData[key].id} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <button style={
                        
                        productCreateStepsData[key].validated === 'not-checked' && (currentStep === productCreateStepsData[key].id ? activeTabStyle : tabStyle )
                        ||
                        productCreateStepsData[key].validated === 'valid' && doneTabStyle
                        ||
                        productCreateStepsData[key].validated === 'loading' && activeTabStyle
                        ||
                        productCreateStepsData[key].validated === 'not-valid' && failedStyle
                    }>
                        {productCreateStepsData[key].id}
                    </button>
                </div>
            )}
        </div>
    )
}

export default ProductCreate_Tabs
