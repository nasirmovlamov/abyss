/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useState } from 'react'
import {  changeModalAction, is_loading,   user_data } from '../../../app/feature/UserSlice'
import { forum_tabs} from '../../../app/feature/PageTabsSlice'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import AnswersConts from '../../../components/AnswersCont'
import AnswerSubmitCont from '../../../components/AnswerSubmit'
import AnswerSubmit from '../../../components/AnswerSubmit'
import ProductsConts from '../../../components/ProductsCont'
import SinglePageTabs from '../../../components/SinglePageTabs'
import { SingleProductPage } from '../../../styles/global/styled-utils/styling-elements/Pages.style'
import { Avatar, Name, PersonCont, QuestionTags, ContentCont, QuestionCont, QuestionContent, QuestionDate, QuestionTag, QuestionTagsAndDate, QuestionTitle, QuestionStatistics, QuestionStatisticElement, QuestionStatisticButton, QuestionStatisticText, AddAnswer, AddAnswerCont, AddAnswerSubmit, AnswersCont, ProductsCont, SingleProductMiddle, SingleProductAside, AnswersAndProductsCont, VotePercentage, StatisticContSingleQuestion } from '../../../styles/pages/SingleQuestionPage.styled'
import CommentModal from '../../../components/CommentsTab'
import { closeComments, comments,   comments_status,   comments_types, is_comment_opened, showComments } from '../../../app/feature/CommentsSlice'
import { closeChat, is_chatbox_opened, openChat } from '../../../app/feature/ChatBoxSlice'
import { ShowComments } from '../../../styles/components/styled-elements/Answer.style'
import { getQuestionComments } from '../../../app/thunks/CommentsThunk'
import { single_question_data, single_question_status } from '../../../app/feature/QuestionSlice'
import { getSingleQuestion, unVoteQuestion, voteQuestion } from '../../../app/thunks/QuestionThunk'
import { SkeletonBox } from '../../../styles/global/styled-utils/Global.style'
import Loader from '../../../components/Loader'
import QuestionSkeleton from '../../../components/Skeletons/QuestionSkeleton'
import ChatBox from '../../../components/ChatBox'
import MainPartOfPage from '../../../components/MainPartOfPage'
import SidePartOfPage from '../../../components/SidePartOfPage'
import { PageDefaultStyle } from '../../../styles/pages/Page.styled'
import SearchBox from '../../../components/SearchBox'
import { AnswerCont, AnswerCount, DateCount, DefaultLine, HelpfulCont, HelpfulCount, PercentageLine, StatisticCont, Text, ThumbIcon } from '../../../styles/components/styled-elements/FormQuestion.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown as solidfaThumbsDown  ,   faThumbsUp as solidfaThumbsUp } from '@fortawesome/free-solid-svg-icons'
import {faComment, faThumbsDown as regularfaThumbsDown  ,   faThumbsUp as regularfaThumbsUp  } from '@fortawesome/free-regular-svg-icons'
import { set_overflowy } from '../../../app/feature/AppSlice'

interface Props {
}



function SingleQuestionPAge({}: Props): ReactElement {
    const router = useRouter()
    const {id} = router.query
    const dispatch = useAppDispatch()
    const singleQuestionData = useAppSelector(single_question_data)
    const singleQuestionStatus = useAppSelector(single_question_status)
    const loading  = useAppSelector(is_loading)
    const userData = useAppSelector(user_data)
    const commentsStatus = useAppSelector(comments_status)
    const isCommentOpened = useAppSelector(is_comment_opened)
    const isChatBoxOpened = useAppSelector(is_chatbox_opened)


    useEffect(() => {
        if(router.isReady && singleQuestionStatus === "loading")
        {
            dispatch(getSingleQuestion(router.asPath))
        }
    }, [router , userData])

    
    const vote = () => {
        if(userData === null)
        {
            dispatch(changeModalAction('login'))
            return null
        }
        if(singleQuestionData === null )
        {
            return null
        }
        dispatch(voteQuestion({id:id , type:"upvote"}))
        return null
    }

    const unvote = () => {
        if(userData === null)
        {
            dispatch(changeModalAction('login'))
            return null
        }
        if(singleQuestionData === null )
        {
            return null
        }
        dispatch(unVoteQuestion({id:id , type:"upvote"}) )
        return null
    }

    const openQuestionComments = () =>{
        document.querySelector(`#question${singleQuestionData.id}`)?.setAttribute("style", "border:1px solid white; position:relative;")
        // document.body.style.overflow = "hidden"
        // dispatch(set_overflowy("hidden"))
        if(singleQuestionData !== null)
        {
            dispatch(
                showComments(
                    {
                        isQuestion: true, 
                        isAnswer:null,
                        id: singleQuestionData.id,
                        user:singleQuestionData.user, 
                        title:singleQuestionData.title, 
                        type:"question",
                        showComments:true
                    }
                )
            )
            dispatch(closeChat(""))
            dispatch(getQuestionComments(singleQuestionData.id))
        }

    }

    

    return (

        <PageDefaultStyle >
            <SidePartOfPage side={"left"}>
                {/* <SingleProductAside>
                {
                    singleQuestionStatus === "loading" ? 
                    <Loader/>
                    :
                    <>Left SIDE</>
                }
                </SingleProductAside> */}
            </SidePartOfPage>

            <MainPartOfPage>
                <SingleProductMiddle>
                    {/* Single Question Title Content Answer Posting */}
                        <>  
                            {              
                                singleQuestionStatus === "loading" ? 

                                <QuestionSkeleton/>
                                
                                :

                                <>
                                    <button style={{alignSelf:'flex-end'}} onClick={() => dispatch(changeModalAction("questionCreate"))}>QuestionCreate</button>

                                    <QuestionCont id={`question${singleQuestionData.id}`}>
                                        <PersonCont>
                                            <Avatar></Avatar>
                                            <Name>{singleQuestionData.user.name}</Name>
                                        </PersonCont>

                                        <ContentCont>
                                            <QuestionTitle> 
                                                {singleQuestionData.title}
                                            </QuestionTitle>    
                                            <QuestionContent> 
                                                {singleQuestionData.content}
                                            </QuestionContent>

                                            <QuestionTagsAndDate>
                                                <QuestionTags>
                                                    <QuestionTag>test 1</QuestionTag>
                                                    <QuestionTag>test 2</QuestionTag>
                                                    <QuestionTag>test 3</QuestionTag>
                                                </QuestionTags> 
                                                
                                                
                                                <ShowComments  type="button" onClick={openQuestionComments}> <FontAwesomeIcon icon={faComment} /> <span>{singleQuestionData.comment_count}</span> comment {singleQuestionData.comment_count > 1 && "s"}</ShowComments> 

                                            </QuestionTagsAndDate>
                                        </ContentCont>


                                        <QuestionStatistics>
                                            <StatisticContSingleQuestion>
                                                    <AnswerCont>
                                                        <AnswerCount>7</AnswerCount>
                                                        <Text>Answers</Text>
                                                    </AnswerCont>

                                                    <HelpfulCont>
                                                        <HelpfulCount>
                                                            <QuestionStatisticButton  changeDirection={false} onClick={vote} ><ThumbIcon><FontAwesomeIcon  icon={singleQuestionData.user_votes?.type === "upvote" ? solidfaThumbsUp :regularfaThumbsUp} /> </ThumbIcon></QuestionStatisticButton> 
                                                            <QuestionStatisticButton  changeDirection={true} onClick={unvote} ><ThumbIcon><FontAwesomeIcon  icon={singleQuestionData.user_votes?.type === "downvote" ? solidfaThumbsDown :regularfaThumbsDown } />  </ThumbIcon></QuestionStatisticButton> 
                                                        </HelpfulCount>
                                                        <DefaultLine><PercentageLine percentage={(69/100*100)}/></DefaultLine>
                                                        <VotePercentage>
                                                            6%
                                                        </VotePercentage>
                                                    </HelpfulCont>
                                            </StatisticContSingleQuestion>
                                            <DateCount>
                                                2d 7h ago
                                            </DateCount>
                                            {/* <QuestionStatisticElement>
                                                <QuestionStatisticButton onClick={voting} color={singleQuestionData.user_votes === null ? "red" : "green"}>like</QuestionStatisticButton>
                                                <QuestionStatisticText>Give Vote</QuestionStatisticText>
                                                <QuestionDate> {singleQuestionData.created_at} </QuestionDate>
                                            </QuestionStatisticElement> */}
                                        </QuestionStatistics>
                                    </QuestionCont>

                                    <AnswerSubmitCont id={id}/>
                                </>
                            } 
                        </>
                    {/* Single Question Title Content Answer Posting */}
                    
                    {/* Answers and Products */}
                    <AnswersAndProductsCont>
                        <SinglePageTabs/>
                        <AnswersConts />
                        <ProductsConts />
                    </AnswersAndProductsCont>
                    {/* Answers and Products */}

                </SingleProductMiddle>
            </MainPartOfPage>

            <SidePartOfPage side={"right"}>
                {
                    singleQuestionStatus=== "loading" ? 
                    <Loader/>
                    :
                    <> 
                    </>
                }
            </SidePartOfPage>
        </PageDefaultStyle>
        
    )
}

export default SingleQuestionPAge


