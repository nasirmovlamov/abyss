import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { side_product_data } from '../app/feature/SideProducts.slice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { getSideProducts } from '../app/thunks/SideProducts.thunk'
import * as SideProducts_STY from '../styles/components/styled-blocks/SideProducts.style'
import SideProduct from './SideProduct'
import AnswerSkeleton from './Skeletons/AnswerSkeleton'
import FormQuestionSkeleton from './Skeletons/ForumQuestionSkeleton'

interface Props {
    
}

const SideProductCont = (props: Props) => {
    const [inViewRefLoaderDown, inViewLoaderDown] = useInView()
    const dispatch  = useAppDispatch()
    const sideProductContData = useAppSelector(side_product_data)

    useEffect(() => {
        if(inViewLoaderDown && !sideProductContData.allDataLoaded){
            const data = {id:sideProductContData.selectedID! , page:sideProductContData.page!} 
            dispatch(getSideProducts(data))
        }
    }, [inViewLoaderDown])
    

    return (
        <SideProducts_STY.SideCont_STY top={sideProductContData.distanceFromTop}>
            {
                sideProductContData.products.map((element , index) => 
                    <SideProducts_STY.SideProduct_STY key={index} >
                        <SideProduct data={element}/>
                    </SideProducts_STY.SideProduct_STY>
                )
            }

            {!sideProductContData.allDataLoaded &&
                <div ref={inViewRefLoaderDown} style={{width:"100%" , display:"flex", flexDirection:"column", rowGap:"10px"}}>
                        <FormQuestionSkeleton/>
                </div>
            }
                    
        </SideProducts_STY.SideCont_STY>
    )
}

export default SideProductCont
