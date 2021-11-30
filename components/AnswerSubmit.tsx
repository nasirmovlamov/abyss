import React, {ReactElement, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { AddAnswer_STY, AddAnswerCont_STY, AddAnswerSubmit_STY } from '../styles/pages/SingleQuestionPage.styled'
import { changeModalAction, is_Logged, user_data } from '../app/feature/User.slice';
import { errorToastFunc } from './Notify/ErrorToasts';
import { autoErrorToasterWithMessage, autoSuccessToaster } from './Notify/AutoSuccessToast';
import { autoErrorToaster } from './Notify/AutoErrorToaster';
import { addAnswer } from '../app/thunks/QuestionThunk';

import MyEditor from './MyEditor';
import dynamic from 'next/dynamic'
import { LabelCont } from '../styles/components/styled-elements/CreateQuestionModal.style';
import { single_question_data, submit_answer_content, submit_answer_data } from '../app/feature/Question.slice';

const DynamicComponentWithNoSSR = dynamic(
    () => import('./EditorForAddAnswer'),
    { ssr: false }
)

interface Props {
    id:string | string[] | undefined
}

function AnswerSubmitCont({id}: Props): ReactElement {
    const [inBrowser, setInBrowser] = useState(false)
    const submitAnswerContent = useAppSelector(submit_answer_content)
    const userData = useAppSelector(user_data);
    const dispatch = useAppDispatch()
    const [textAreaHeight, settextAreaHeight] = useState(50)
    const [textAreaBlur, settextAreaBlur] = useState(true)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const isLogged = useAppSelector(is_Logged)
    const submitAnswerData = useAppSelector(submit_answer_data)

    const submitAnswer = async (e:any) => {
        e.preventDefault()
        if(!isLogged)
        {
            autoErrorToasterWithMessage('You must be logged in to submit an answer')
            dispatch(changeModalAction('login'))
            return null
        }
        const linkedProductsId = submitAnswerData.linkedProducts.map((item:any) => item.id) 
        const mentionedUsersId = submitAnswerData.mentionedUsers.map((item:any) => item.id)

        if(id !== undefined && id !== null && submitAnswerContent.length > 0){
            dispatch(addAnswer({content: submitAnswerContent, questionId: id , mentionedUsers:mentionedUsersId, linkedProducts: linkedProductsId }))
        }
    }

    const checkTextAreaHeight = () =>{
        if(textAreaHeight === 150)
        {
            settextAreaHeight(150)
            settextAreaBlur(false)
        }
    }

    const blurToggler = () =>{
        settextAreaBlur(true)
        if(textAreaBlur)
        {
            if(textAreaHeight === 150)
            {
                settextAreaHeight(50)
            }
        }
    }
    
    


    const changeTextAreaHeight = () =>{
        if(textAreaHeight < 150)
        {
            settextAreaHeight(150)
        }
    }

   
    
    return (
        <AddAnswerCont_STY onSubmit={submitAnswer}> 


            {/* <AddAnswer 
                ref={textAreaRef}  
                style={{height:`${textAreaHeight}px`}} 
                onClick={changeTextAreaHeight}
                onBlur={blurToggler} 
                placeholder='Add new answer' 
                value={answer} 
                onChange={(e)=> textAreaChange(e.target)}
                autoComplete="on"
            /> */}
            {/* <LabelCont> */}
            {/* <label htmlFor="content">Content</label> */}
                <MyEditor display={"none"} content={""} onChange={(content:any) => console.log(content)} />
            {/* <label htmlFor="content">validate</label>
            </LabelCont> */}


            <LabelCont>
                <label htmlFor="content">Content</label>
                <DynamicComponentWithNoSSR/>
                <label htmlFor="content">validate</label>
            </LabelCont>
                
            <AddAnswerSubmit_STY   
                ref={buttonRef} 
                onMouseDown={checkTextAreaHeight}> 
                Post 
            </AddAnswerSubmit_STY>

        </AddAnswerCont_STY>
    )
}

export default AnswerSubmitCont


