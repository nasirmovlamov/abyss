/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect, useState } from 'react'
import { AnswersCont, ProductsCont } from '../styles/pages/SingleQuestionPage.styled'
import { useInView } from 'react-intersection-observer';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { changeForumTabActive, forum_tabs } from '../app/feature/PageTabsSlice';
import AnswerSkeleton from './Skeletons/AnswerSkeleton';
import { getLinkedProducts } from '../app/thunks/LinkedProductsTunks';
import { current_page_linked_products,  last_page_linked_products, linked_products_for_answers_of_question, linked_products_status, single_question_data, total_linked_products } from '../app/feature/QuestionSlice';
import LinkedStoreProduct from './LinkedStoreProduct';

interface Props {
    
}

function ProductsConts({}: Props): ReactElement {
    const { ref, inView, entry } = useInView({threshold: 0,});
    const linkedProductsStatus = useAppSelector(linked_products_status);
    const [inViewRefProductsLoad, inViewProductsLoader] = useInView()

    const singleQuestionData = useAppSelector(single_question_data)
    
    const currentPageLinkedProducts = useAppSelector(current_page_linked_products)
    const totalLinkedProducts = useAppSelector(total_linked_products)
    const lastPageLinkedProducts = useAppSelector(last_page_linked_products)
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
            const data = {question_id: singleQuestionData.id , current_page:currentPageLinkedProducts , total:totalLinkedProducts, last_page:lastPageLinkedProducts}
            dispatch(getLinkedProducts(data))
        }
    }, [inViewProductsLoader])


    return (
        <ProductsCont id="productsCont"  ref={ref} style={{scrollMarginTop: "130px"}}>
            {
                linkedProductsForAnswersOfQuestion.map((element , index)  => 
                    <LinkedStoreProduct key={index} data={element}/>
                )
            } 
            
            {
                linkedProductsStatus === "loading" && 
                <div style={{}} ref={inViewRefProductsLoad}>
                    <AnswerSkeleton/>
                    <AnswerSkeleton/>
                </div>
            }
        </ProductsCont>
    )
}

export default ProductsConts
