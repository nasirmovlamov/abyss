import React, { FC, useEffect, useLayoutEffect } from 'react'
import { changeProductTabActiveWithoutScroll } from '../../app/feature/PageTabs.slice'
import { goProductPage, single_product_data } from '../../app/feature/SingleProduct.slice'
import { is_logged, user_data } from '../../app/feature/User.slice'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { getSingleProduct } from '../../app/thunks/SingleProductThunk'
import { useSubscribe } from '../../hooks/useSubscribe'
import { PageDefaultStyle } from '../../styles/pages/Page.styled'
import MainPartOfPage from '../MainPartOfPage'
import SidePartOfPage from '../SidePartOfPage'
import { useRouter  } from 'next/router'
import { inChangePositionOfFilters, outChangePositionOfFilters } from '../../app/feature/PageFilters.slice'

interface Props {
    
}

const StoreLayout:FC <Props> = ({children , ...props}) => {
    const router = useRouter()
    const [loading , subscribe] = useSubscribe()
    const singleProductData = useAppSelector(single_product_data)
    const dispatch = useAppDispatch()
    const isLogged = useAppSelector(is_logged)

    

    useLayoutEffect(() => {
        if(router.isReady){
            if(singleProductData.data === null && singleProductData.status !== 'loading' ) {
                if(!isLogged){
                    dispatch(changeProductTabActiveWithoutScroll({id:3}))
                }else {
                    dispatch(changeProductTabActiveWithoutScroll({id:2}))
                }
                dispatch(goProductPage({id: router.query.id}))
                dispatch(getSingleProduct({id: router.query.id , slug: router.query.slug}))
            }
        }
    }, [router])

    const hoverSideLeft = () => {
        dispatch(inChangePositionOfFilters(null))
    }

    const hoverSideRight = () => {
        dispatch(outChangePositionOfFilters(null))
    }


    return (
        <PageDefaultStyle>
            <SidePartOfPage onMouseEnter={hoverSideLeft} onMouseLeave={hoverSideRight}  side={"left"}>
            </SidePartOfPage>

            <MainPartOfPage>
                {singleProductData.data !== null && <>{children}</>}
                {
                    (loading || singleProductData.status === 'loading')
                    &&
                    <p style={{fontSize:"30px" , color:"white", textAlign:'center' , padding:"30px"}}>LOADING ...</p>
                } 
                {singleProductData.status === 'error' && <p style={{fontSize:"30px" , color:"red",textAlign:'center', padding:"30px"}}>ERROR ...</p>}
                {singleProductData.data === null && <></>}
            </MainPartOfPage>

            {/* <SidePartOfPage side={"right"}>
            </SidePartOfPage> */}
        </PageDefaultStyle>
        ) 
  
}

export default StoreLayout
