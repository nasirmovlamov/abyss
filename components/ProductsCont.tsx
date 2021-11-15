/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect, useState } from 'react'
import { AnswersCont, ProductsCont } from '../styles/pages/SingleQuestionPage.styled'
import { useInView } from 'react-intersection-observer';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { changeForumTabActive, forum_tabs } from '../app/feature/PageTabsSlice';
import AnswerSkeleton from './Skeletons/AnswerSkeleton';
import { linked_products_status } from '../app/feature/LinkedProductsSlice';

interface Props {
    
}

function ProductsConts({}: Props): ReactElement {
    const { ref, inView, entry } = useInView({threshold: 0,});
    const linkedProductsStatus = useAppSelector(linked_products_status);
    const [inViewRefProductsLoad, inViewProductsLoader] = useInView()

    const dispatch = useAppDispatch();
    const forumTabs = useAppSelector(forum_tabs)

    useEffect(() => {
        if (inView) {
            dispatch(changeForumTabActive([{tabName:"Answers" , link:"answersCont" , id:0 , isActive:false} , {tabName:"Products" , link:"productsCont" , id:1 , isActive:true}]))
        }
        else 
        {
            dispatch(changeForumTabActive([{tabName:"Answers" , link:"answersCont" , id:0 , isActive:true} , {tabName:"Products" , link:"productsCont" , id:1 , isActive:false}]))
        }
    }, [inView])

    useEffect(() => {
        if (inViewProductsLoader) {
            // dispatch()
        }
    }, [inViewProductsLoader])


    return (
        <ProductsCont id="productsCont"  ref={ref} style={{scrollMarginTop: "130px"}}>


        {
            linkedProductsStatus === "loading" && 
            <div ref={inViewRefProductsLoad}>
                <AnswerSkeleton/>
                <AnswerSkeleton/>
                <AnswerSkeleton/>
                <AnswerSkeleton/>
                <AnswerSkeleton/>
                <AnswerSkeleton/>
            </div>
        }
        </ProductsCont>
    )
}

export default ProductsConts
