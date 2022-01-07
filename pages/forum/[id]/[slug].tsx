/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useState } from 'react'
import {  changeModalAction, is_loading,   user_data } from '../../../app/feature/User.slice'
import { forum_tabs} from '../../../app/feature/PageTabs.slice'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import AnswersConts from '../../../components/AnswersCont'
import AnswerSubmitCont from '../../../components/AnswerSubmit'
import AnswerSubmit from '../../../components/AnswerSubmit'
import ProductsConts from '../../../components/ProductsCont'
import SinglePageTabs from '../../../components/SinglePageTabs'
import { SingleProductPage } from '../../../styles/pages/Pages.style'
import * as SingleQuestion_STY from '../../../styles/pages/SingleQuestionPage.styled'
import CommentModal from '../../../components/CommentsTab'
import { closeComments, comments,   comments_status,   comments_types, is_comment_opened, showComments } from '../../../app/feature/Comments.slice'
import { closeChat, is_chatbox_opened, openChat } from '../../../app/feature/ChatBox.slice'
import { ShowComments } from '../../../styles/components/styled-blocks/Answer.style'
import { getQuestionComments } from '../../../app/thunks/CommentsThunk'
import { question_errors, question_status, single_question_data } from '../../../app/feature/Question.slice'
import { getSingleQuestion, unVoteQuestion, voteQuestion } from '../../../app/thunks/QuestionThunk'
import { SkeletonBox } from '../../../styles/global/styled-utils/Global.style'
import Loader from '../../../components/Loader'
import QuestionSkeleton from '../../../components/Skeletons/QuestionSkeleton'
import ChatBox from '../../../components/ChatBox'
import MainPartOfPage from '../../../components/MainPartOfPage'
import SidePartOfPage from '../../../components/SidePartOfPage'
import { PageDefaultStyle } from '../../../styles/pages/Page.styled'
import SearchBox from '../../../components/SearchBox'
// import { AnswerCont, AnswerCount, DateCount, DefaultLine, HelpfulCont, HelpfulCount, PercentageLine, StatisticCont, Text, ThumbIcon } from '../../../styles/components/styled-elements/FormQuestion.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown as solidfaThumbsDown  ,   faThumbsUp as solidfaThumbsUp } from '@fortawesome/free-solid-svg-icons'
import {faComment, faThumbsDown as regularfaThumbsDown  ,   faThumbsUp as regularfaThumbsUp  } from '@fortawesome/free-regular-svg-icons'
import { set_overflowy } from '../../../app/feature/App.slice'
import { parseHtmlWithMention } from '../../../logic/htmlParser'
import abyssLogo from '../../../public/main-logo.svg'
import Image from 'next/image'
import SearchBoxStaticVersion from '../../../components/SearchBoxStaticVersion'
import { AnswerCont, AnswerCount, DefaultLine, HelpfulCont, HelpfulCount, PercentageLine, Text, ThumbIcon } from '../../../styles/components/styled-blocks/FormQuestion.style'
import { useQuestionHooks } from '../../../hooks/useQuestionHook'
import QuestionLayout from '../../../components/QuestionLayout'
import { question_data_interface } from '../../../app/store/state-Interfaces/QuestionInterface'
interface Props {
}


function QuestionPage({}: Props): ReactElement {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const userData = useAppSelector(user_data)
    const isCommentsOpened = useAppSelector(is_comment_opened)
    
    useEffect(() => {
        if(router.isReady)
        {
            dispatch(getSingleQuestion(router.asPath))
        }
    }, [router , userData])

    

   

    
    
    return (
        <PageDefaultStyle >
            <SidePartOfPage side={"left"}>
            </SidePartOfPage>

            <MainPartOfPage>
                <QuestionLayout/>
            </MainPartOfPage>

            <SidePartOfPage side={"right"}>
            </SidePartOfPage>
            {isCommentsOpened && <CommentModal/>}
        </PageDefaultStyle>
    )
}

export default QuestionPage


