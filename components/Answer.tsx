import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { changeForumTabActive } from '../app/feature/PageTabsSlice';
import { changeModalAction, user_data } from '../app/feature/UserSlice';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { unVoteAnswer, voteAnswer } from '../app/thunks/QuestionThunk';
import { AnswerContent, AnswerStyle, Avatar, LikeButton, Name, PersonCont, ShowComments } from '../styles/components/styled-elements/Answer.style';
import { AnswersCont } from '../styles/pages/SingleQuestionPage.styled'
import { closeComments, showComments } from '../app/feature/CommentsSlice';
import { getAnswerComments } from '../app/thunks/CommentsThunk';
import { single_question_data } from '../app/feature/QuestionSlice';
import { errorToastFunc, loginError } from './Notify/ErrorToasts';
import { ANSWER_INTERFACE } from '../app/store/state-Interfaces/QuestionInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { set_overflowy } from '../app/feature/AppSlice';
interface Props {
    answer:ANSWER_INTERFACE,
    direction:string
}

function Answer({answer ,direction  }: Props): ReactElement {
    const dispatch = useAppDispatch()
    const userData = useAppSelector(user_data)
    const answerRef = useRef(null)
    const [isLiked, setisLiked] = useState(true)
    const voting = () => {
        if(userData === null)
        {
            loginError()
            return null
        }
        if(answer.user_votes === null)
        {
            dispatch(voteAnswer({id:answer.id, type:"upvote", direction:`${direction}`}))
        }
        else if (answer.user_votes !== null && answer.user_votes.user_id === userData.id)
        {
            dispatch(unVoteAnswer({id: answer.id, type:"upvote", direction:`${direction}`}))
        }
        else{}
    }
    
    // const openComments = () =>{
        
    //     setTimeout(() => {
    //         dispatch(getAnswerComments(answer.id))
    //         dispatch(
    //             showComments(
    //                 {
    //                     id:answer.id, 
    //                     user:answer.user, 
    //                     title:answer.content, 
    //                     type:"answer",
    //                     showComments:true
    //                 }
    //             )
    //         )
    //     }, 1000);
        
    // }

    const clickToOpenComments = () =>{
        document.querySelector(`#answer${answer.id}`)?.setAttribute("style", "z-index: 1000 !important;position:relative;")
        document.body.style.overflow = "hidden"
        dispatch(set_overflowy("hidden"))
        setTimeout(() => {
            dispatch(getAnswerComments(answer.id))
            dispatch(
                showComments(
                    {
                        isQuestion:null , 
                        isAnswer:true,
                        id:answer.id, 
                        user:answer.user, 
                        title:answer.content, 
                        type:"answer",
                        showComments:true
                    }
                )
            )
        }, 1000);
        
    }

    useEffect(() => {
        if(userData)
        {
            answer.user_votes === null ? setisLiked(false) : setisLiked(true)
        }
        else 
        {
            setisLiked(false)
        }
    }, [userData , answer])


 

    return (
        <AnswerStyle id={`answer${answer.id}`} ref={answerRef} key={answer.id}>
            <div  className="flexer c-gp-10">
                <PersonCont>
                    <Avatar></Avatar>
                    <Name>{answer.user.name}</Name>
                </PersonCont>
                <AnswerContent>
                    {answer.content}
                </AnswerContent>
                <div className="flexer fd-c a-end">
                    <LikeButton onClick={voting} style={{color:  isLiked ? "green" : "gray" }}><FontAwesomeIcon icon={faThumbsUp}/> </LikeButton>
                </div>
            </div>
            <div className="flexer fd-c a-end">
                <ShowComments  onClick={clickToOpenComments}>Show Comments</ShowComments>
            </div>
        </AnswerStyle>
    )
}

export default Answer
