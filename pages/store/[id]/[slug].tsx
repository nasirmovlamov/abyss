import React, { Component, useState , useEffect } from 'react'
import axios from 'axios'
import StoreLayout from '../../../components/Store/StoreLayout'
import StoreValidate from '../../../components/Store/StoreValidate'
import { useAppSelector } from '../../../app/store/hooks'
import { single_product_data } from '../../../app/feature/SingleProduct.slice'


interface Props {
    
}


const SingleProductPage = (props: Props) => {
    
    return (
        <StoreLayout>
            <StoreValidate/>
        </StoreLayout>       
    )
}

export default SingleProductPage


