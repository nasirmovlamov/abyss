import React, {ReactElement, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { AddAnswer, AddAnswerCont, AddAnswerSubmit } from '../styles/pages/SingleQuestionPage.styled'
import { user_data } from '../app/feature/UserSlice';
import { errorToastFunc } from './Notify/ErrorToasts';
import { autoSuccessToaster } from './Notify/AutoSuccessToast';
import { autoErrorToaster } from './Notify/AutoErrorToaster';
import { addAnswer } from '../app/thunks/QuestionThunk';

import MyEditor from './MyEditor';


interface Props {
    id:string | string[] | undefined
}

function AnswerSubmitCont({id}: Props): ReactElement {
      const [inBrowser, setInBrowser] = useState(false)

    const [answer, setanswer] = useState("")
    const userData = useAppSelector(user_data);
    const dispatch = useAppDispatch()
    const [textAreaHeight, settextAreaHeight] = useState(50)
    const [textAreaBlur, settextAreaBlur] = useState(true)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const submitAnswer = async (e:any) => {
        e.preventDefault()
        if(userData === null )
        {
            errorToastFunc("top-right" , "You must be logged in to submit an answer")
            return 0
        }
        if(answer === "")
        {
            errorToastFunc("top-right" , "Describe your answer with at least 50 character.")
            return 0
        }
        if(answer.length < 50)
        {
            errorToastFunc("top-right" , "Your answer must be at least 50 charachter.")
            return 0
        }
        dispatch(addAnswer({content: answer, questionId: id}))
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
    
    const textAreaChange = (e:any) =>{
        if (e.scrollHeight !== textAreaHeight && e.scrollHeight < 500) {
            settextAreaHeight(e.scrollHeight+1.5)
        }
        setanswer(e.value)
    }


    const changeTextAreaHeight = () =>{
        if(textAreaHeight < 150)
        {
            settextAreaHeight(150)
        }
    }

   
    
    return (
        <AddAnswerCont onSubmit={submitAnswer}> 


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
            <MyEditor content={answer} onChange={(code:any) => setanswer(code)}/>
                
            <AddAnswerSubmit   
                ref={buttonRef} 
                onMouseDown={checkTextAreaHeight}> 
                Post 
            </AddAnswerSubmit>

        </AddAnswerCont>
    )
}

export default AnswerSubmitCont


