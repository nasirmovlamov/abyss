/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { changeForumTabActive } from '../app/feature/PageTabsSlice';
import {  changeDownAnswersStatus, changeTopAnswersStatus,  down_answers, down_answers_status, down_page, single_question_data, submitted_answer, top_answers, top_answers_status, top_page, total_page } from '../app/feature/QuestionSlice';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { ANSWER_INTERFACE } from '../app/store/state-Interfaces/QuestionInterface';
import { getAnswers } from '../app/thunks/QuestionThunk';
import { AnswersCont } from '../styles/pages/SingleQuestionPage.styled'
import Answer from './Answer';
import AnswerSkeleton from './Skeletons/AnswerSkeleton';



export interface USER_INTERFACE {
    id:number , 
    email:string, 
    name:string
}

export interface GET_ANSWER_INTERFAC{
    page:number,
    direction:string,
    questionId:number
}




interface Props {
    // answers:ANSWER_INTERFACE[]
}


function AnswersConts({}: Props): ReactElement {
    
    const [inViewRefAnswersCont, inViewAnswersCont] = useInView()
    const [inViewRefLoaderDown, inViewLoaderDown] = useInView()
    const [inViewRefLoaderUp, inViewLoaderUp] = useInView()


    const topAnswers = useAppSelector(top_answers);
    const downAnswers = useAppSelector(down_answers);
    const submittedAnswer = useAppSelector(submitted_answer);
    
    const downAnswersStatus = useAppSelector(down_answers_status);
    const topAnswersStatus = useAppSelector(top_answers_status);


    const topPage = useAppSelector(top_page);
    const downPage = useAppSelector(down_page);
    const totalPage = useAppSelector(total_page);


    const dispatch = useAppDispatch();
    const SingleQuestionData = useAppSelector(single_question_data)



    useEffect(() => {
        if (inViewAnswersCont) {
            dispatch(changeForumTabActive([{tabName:"Answers" , link:"answersCont" , id:0 , isActive:true} , {tabName:"Products" , link:"productsCont" , id:1 , isActive:false}]))
        }
        else 
        {
            dispatch(changeForumTabActive([{tabName:"Answers" , link:"answersCont" , id:0 , isActive:false} , {tabName:"Products" , link:"productsCont" , id:1 , isActive:true}]))
        }
    }, [inViewAnswersCont])
    

    


    useEffect(() => {
        if(inViewLoaderDown)
        {
            if(topAnswersStatus ==="loading" && downAnswersStatus ==="loading")
            {
                const data:GET_ANSWER_INTERFAC ={page:topPage,direction:"next",questionId:1}
                dispatch(getAnswers(data))
                if(topPage === 1)
                {
                    const data:GET_ANSWER_INTERFAC ={page:downPage,direction:"previous",questionId:1}
                    dispatch(getAnswers(data))
                }
            }
        }
        else if(inViewLoaderUp)
        {
            if(topAnswersStatus ==="loading" && downAnswersStatus ==="loading")
            {
                const data:GET_ANSWER_INTERFAC ={page:downPage,direction:"previous",questionId:1}
                dispatch(getAnswers(data))
                window.scrollBy({top:250,behavior: "smooth"}) 
            }
        }
    }, [inViewLoaderDown ,  inViewLoaderUp])
    
    
    return (
        <AnswersCont style={{zIndex:1000 , scrollMarginTop: "250px"}} ref={inViewRefAnswersCont} id="answersCont" >
                {submittedAnswer.length > 0 &&  <div >{submittedAnswer.map((answer) => <Answer key={answer.id} direction="new-submitted"  answer={answer}/>)} </div>}
                <div >{topAnswers.map((answer) => <Answer key={answer.id} direction="top"  answer={answer}/>)} </div>
                    {topAnswersStatus === "loading" && <div ref={inViewRefLoaderDown}><AnswerSkeleton/><AnswerSkeleton/><AnswerSkeleton/><AnswerSkeleton/><AnswerSkeleton/><AnswerSkeleton/></div>}
                    {topAnswersStatus === "loading" && <div style={{height:"100vh"}}></div>}
                    {downAnswersStatus === "loading" && <div ref={inViewRefLoaderUp}><AnswerSkeleton/><AnswerSkeleton/><AnswerSkeleton/><AnswerSkeleton/><AnswerSkeleton/><AnswerSkeleton/><AnswerSkeleton/></div>}
                <div id="downAnswers" >{downAnswers.map((answer ) => <Answer key={answer.id} direction="bottom"  answer={answer}/>)} </div>

                {<div> </div>}
        </AnswersCont>
    )
}

export default AnswersConts
