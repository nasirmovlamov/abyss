import React from 'react'
import { ProductCreateStep5OnChage, product_create_step5_data } from '../../../../../app/feature/CreateProductFeatures/CreateProductSlice'
import { useAppDispatch, useAppSelector } from '../../../../../app/store/hooks'

interface Props {
    
}

export const ProductCreate_Step5 = (props: Props) => {
    const dispatch = useAppDispatch()
    const productCreateStep5Data = useAppSelector(product_create_step5_data)
    const {validators , validated , payment_type , tier_type , visibility_type} =  productCreateStep5Data   
    const selectPaymentType = (type:string) => {
        dispatch(ProductCreateStep5OnChage({type:'paid_or_free' , payment_type:type}))
    }

    const selectTierType = (type:number) => {
        dispatch(ProductCreateStep5OnChage({type:'tier' , tier_type:type}))
    }

    const selectVisibilityType = (type:string) => {
        dispatch(ProductCreateStep5OnChage({type:'visibility' , visibility_type:type}))
    }

    return (
        <div>

            <div style={{width:"100%" , display:"flex" , justifyContent:'space-between'}}>
                <button style={{border:visibility_type === 'public' ?  '5px solid green' : "5px solid black"}} onClick={() => selectVisibilityType('public')}>Public</button>
                <button style={{border:visibility_type === 'private' ?  '5px solid green' : "5px solid black"}} onClick={() => selectVisibilityType('private')}>private</button>
            </div>


            <div style={{width:"100%" , display:"flex" , justifyContent:'space-between'}}>
                <button style={{border:payment_type === 'free' ?  '5px solid green' : "5px solid black"}} onClick={() => selectPaymentType('free')}>Free</button>
                <button style={{border:payment_type === 'paid' ?  '5px solid green' : "5px solid black"}} onClick={() => selectPaymentType('paid')}>Paid</button>
            </div>



            {
                payment_type === 'paid' &&
                <div style={{width:"100%" , display:"flex" , justifyContent:'space-between'}}>
                    <button style={{border:tier_type === 1 ?  '5px solid green' : "5px solid black"}} onClick={() => selectTierType(1)}>0.99</button>
                    <button style={{border:tier_type === 2 ?  '5px solid green' : "5px solid black"}} onClick={() =>selectTierType(2)}>1.99</button>
                    <button style={{border:tier_type === 3 ?  '5px solid green' : "5px solid black"}} onClick={() => selectTierType(3)}>2.99</button>
                </div>
            }

                <div style={{width:"100%" , display:"flex" , flexDirection:'column', justifyContent:'space-between'}}>
                {
                    validated === 'not-valid' 
                    &&
                    
                    <>
                        {!validators.isPaidTypeSelected.valid && <div style={{color:'red'}}>{validators.isPaidTypeSelected.message}</div>}
                        {(payment_type === 'paid'  &&  !validators.isPriceTypeSelected.valid) && <div style={{color:'red'}}>{validators.isPriceTypeSelected.message}</div>}
                        {(!validators.isVisibilityTypeSelected.valid) && <div style={{color:'red'}}>{validators.isVisibilityTypeSelected.message}</div>}
                    </>
                }
            </div>

        </div>
    )
}
