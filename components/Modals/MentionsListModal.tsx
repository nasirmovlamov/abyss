import React, { ReactElement, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import {  mentions_of_linked_product, single_question_data, single_question_id } from '../../app/feature/Question.slice'
import { changeModalAction } from '../../app/feature/User.slice';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { getMentionsOfProduct } from '../../app/thunks/LinkedProductsTunks';
import { MentionsListModal_Sty } from '../../styles/components/styled-elements/MentionsListModal.style';
import Answer from '../Answer';
import AnswerSkeleton from '../Skeletons/AnswerSkeleton';
interface Props {
}

function MentionsListModal({}: Props):ReactElement {
    const [inViewRefMentionsLoad, inViewMentionsLoader] = useInView()
    const dispatch = useAppDispatch()
    const singleQuestionData = useAppSelector(single_question_data)
    const mentionsOfLinkedProduct = useAppSelector(mentions_of_linked_product)
    const questionId = useAppSelector(single_question_id) 
    const {productId, mentions , status , current_page , last_page , total} = mentionsOfLinkedProduct


    useEffect(() => {
        if(inViewMentionsLoader){
            const data = {question_id: singleQuestionData.id ,product_id:mentionsOfLinkedProduct.productId! ,  current_page:mentionsOfLinkedProduct.current_page , total:mentionsOfLinkedProduct.total, last_page:mentionsOfLinkedProduct.last_page}
            dispatch(getMentionsOfProduct(data))
        }
    })


    const closeMentionsModal = () => {
        dispatch(changeModalAction("productMentions"))
    }
    
    return (
        <MentionsListModal_Sty>
            <div style={{display:'flex' , justifyContent:'flex-end' , width:'100%'}}> <button onClick={closeMentionsModal}>X</button></div>
            {
                <>    
                    {mentions.map((answer) => <Answer key={answer.id} direction="top"  answer={answer}/>)} 
                </>
            }
            { status === "pending" 
                && 
                <div >
                    <AnswerSkeleton/>
                    <AnswerSkeleton/>
                </div>
            }
            {
                status === "loading" && 
                <div  ref={inViewRefMentionsLoad}>
                    <AnswerSkeleton/>
                    <AnswerSkeleton/>
                </div>
            }
        </MentionsListModal_Sty>
    )
}

export default MentionsListModal
