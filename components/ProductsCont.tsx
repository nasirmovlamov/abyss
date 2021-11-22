/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect, useState } from 'react'
import { AnswersCont, ProductsCont } from '../styles/pages/SingleQuestionPage.styled'
import { useInView } from 'react-intersection-observer';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { changeForumTabActive, forum_tabs } from '../app/feature/PageTabsSlice';
import AnswerSkeleton from './Skeletons/AnswerSkeleton';
import { linked_products_status } from '../app/feature/LinkedProductsSlice';
import { getLinkedProducts } from '../app/thunks/LinkedProductsTunks';
import { from_value_for_linked_products, linked_products_for_answers_of_question, single_question_data } from '../app/feature/QuestionSlice';
import ListingStoreProduct from './ListingStoreProduct';

interface Props {
    
}

function ProductsConts({}: Props): ReactElement {
    const { ref, inView, entry } = useInView({threshold: 0,});
    const linkedProductsStatus = useAppSelector(linked_products_status);
    const [inViewRefProductsLoad, inViewProductsLoader] = useInView()
    const singleQuestionData = useAppSelector(single_question_data)
    const fromValueForLinkedProducts = useAppSelector(from_value_for_linked_products)
    const linkedProductsForAnswersOfQuestion = useAppSelector(linked_products_for_answers_of_question)
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
            const data = {question_id: singleQuestionData.id , from:fromValueForLinkedProducts}
            dispatch(getLinkedProducts(data))
        }
    }, [inViewProductsLoader])


    return (
        <ProductsCont id="productsCont"  ref={ref} style={{scrollMarginTop: "130px"}}>
            {
                linkedProductsForAnswersOfQuestion.map((element , index)  => 
                    <ListingStoreProduct key={index} data={element}/>
                )
            } 
            
            {
                linkedProductsStatus === "loading" && 
                <div ref={inViewRefProductsLoad}>
                    <AnswerSkeleton/>
                    <AnswerSkeleton/>
                </div>
            }
        </ProductsCont>
    )
}

export default ProductsConts
