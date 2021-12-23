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
import { single_question_data, single_question_status } from '../../../app/feature/Question.slice'
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
    const isCommentsOpened = useAppSelector(is_comment_opened)
    const isChatBoxOpened = useAppSelector(is_chatbox_opened)
    const [isBrowserReady, setisBrowserReady] = useState(false)

    
    useEffect(() => {
        if(router.isReady)
        {
            dispatch(getSingleQuestion(router.asPath))
            setisBrowserReady(true)
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
        if(singleQuestionData.user_votes === null){
            dispatch(voteQuestion({id:id , type:"upvote"}))
        }else {
            dispatch(unVoteQuestion({id:id , type:"upvote"}) )
        }
        return null
    }

    const downvote = () => {
        if(userData === null)
        {
            dispatch(changeModalAction('login'))
            return null
        }
        if(singleQuestionData === null )
        {
            return null
        }
        if(singleQuestionData.user_votes === null){
            dispatch(voteQuestion({id:id , type:"downvote"}))
        }else {
            dispatch(unVoteQuestion({id:id , type:"downvote"}))
        }
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

    if(!isBrowserReady)
    {
        return(
            <></>
        )
    }

    if(singleQuestionData.status === "loading")
    {
        return(
            <></>
        )
    }

    return (

        <PageDefaultStyle >
            <SidePartOfPage side={"left"}>
            </SidePartOfPage>

            <MainPartOfPage>
                <SingleQuestion_STY.SingleProductMiddle_STY>
                        <>  
                            {              
                                singleQuestionStatus === "loading" ? 

                                <QuestionSkeleton/>
                                
                                :
                                <>
                                    <SearchBoxStaticVersion/>
                                    <SingleQuestion_STY.QuestionCont_STY id={`question${singleQuestionData.id}`}>
                                        <SingleQuestion_STY.PersonCont_STY>
                                            <SingleQuestion_STY.Avatar_STY>
                                                <div style={{opacity:0.618}}><Image  src={abyssLogo} width='65px' height="65px" /></div>
                                            </SingleQuestion_STY.Avatar_STY>
                                            <SingleQuestion_STY.Name_STY>{singleQuestionData.user.name}</SingleQuestion_STY.Name_STY>
                                        </SingleQuestion_STY.PersonCont_STY>

                                        <SingleQuestion_STY.ContentCont_STY>
                                            <SingleQuestion_STY.QuestionTitle_STY> 
                                                {singleQuestionData.title}
                                            </SingleQuestion_STY.QuestionTitle_STY>    
                                            <SingleQuestion_STY.QuestionContent_STY> 
                                                 {parseHtmlWithMention(singleQuestionData.content , singleQuestionData.linked_products)} 
                                            </SingleQuestion_STY.QuestionContent_STY>

                                            <SingleQuestion_STY.QuestionTagsAndDate_STY>
                                                <SingleQuestion_STY.QuestionTags_STY>
                                                    {/* {JSON.parse(singleQuestionData.tags).map( (tag:any, index:any ) =>  <SingleQuestion_STY.QuestionTag_STY key={tag}>{tag}</SingleQuestion_STY.QuestionTag_STY>)} */}
                                                </SingleQuestion_STY.QuestionTags_STY> 
                                                
                                                
                                                <ShowComments  type="button" onClick={openQuestionComments}> 
                                                    <FontAwesomeIcon icon={faComment} /> 
                                                    <span>{singleQuestionData.comment_count}</span> comment {singleQuestionData.comment_count > 1 && "s"}
                                                </ShowComments> 

                                            </SingleQuestion_STY.QuestionTagsAndDate_STY>
                                        </SingleQuestion_STY.ContentCont_STY>   


                                        <SingleQuestion_STY.QuestionStatistics_STY>
                                            <SingleQuestion_STY.StatisticContSingleQuestion_STY>
                                                <AnswerCont>
                                                    <AnswerCount>7</AnswerCount>
                                                    <Text>Answers</Text>
                                                </AnswerCont>

                                                <HelpfulCont>
                                                    <HelpfulCount>
                                                        <SingleQuestion_STY.QuestionStatisticButton_STY  changeDirection={false} onClick={vote} ><ThumbIcon><FontAwesomeIcon  icon={singleQuestionData.user_votes?.type === "upvote" ? solidfaThumbsUp :regularfaThumbsUp} /> </ThumbIcon></SingleQuestion_STY.QuestionStatisticButton_STY> 
                                                        <SingleQuestion_STY.QuestionStatisticButton_STY  changeDirection={true} onClick={downvote} ><ThumbIcon><FontAwesomeIcon  icon={singleQuestionData.user_votes?.type === "downvote" ? solidfaThumbsDown :regularfaThumbsDown } />  </ThumbIcon></SingleQuestion_STY.QuestionStatisticButton_STY> 
                                                    </HelpfulCount>
                                                    <DefaultLine><PercentageLine percentage={(69/100*100)}/></DefaultLine>
                                                    <SingleQuestion_STY.VotePercentage_STY>
                                                        6%
                                                    </SingleQuestion_STY.VotePercentage_STY>
                                                </HelpfulCont>
                                            </SingleQuestion_STY.StatisticContSingleQuestion_STY>
                                            <SingleQuestion_STY.QuestionDate_STY>
                                                {singleQuestionData.created_at}
                                            </SingleQuestion_STY.QuestionDate_STY>
                                             <SingleQuestion_STY.QuestionStatisticElement_STY>
                                                <SingleQuestion_STY.QuestionStatisticText_STY>Give Vote</SingleQuestion_STY.QuestionStatisticText_STY>
                                                {/* <SingleQuestion_STY.QuestionDate_STY> {singleQuestionData.created_at} </SingleQuestion_STY.QuestionDate_STY> */}
                                            </SingleQuestion_STY.QuestionStatisticElement_STY> 
                                        </SingleQuestion_STY.QuestionStatistics_STY>
                                    </SingleQuestion_STY.QuestionCont_STY>

                                    <AnswerSubmitCont id={id}/>
                                </>
                            } 
                        </>
                    
                        {              
                               ( singleQuestionStatus === "idle" && singleQuestionData.answer_count > 0)
                                && 
                                <SingleQuestion_STY.AnswersAndProductsCont_STY>
                                    <SinglePageTabs/>
                                    <AnswersConts />
                                        PRODUCTS
                                    <ProductsConts />
                                </SingleQuestion_STY.AnswersAndProductsCont_STY>
                        }

                </SingleQuestion_STY.SingleProductMiddle_STY>
            </MainPartOfPage>

            {isCommentsOpened && <CommentModal/>}
            <SidePartOfPage side={"right"}>
                {
                    singleQuestionStatus=== "loading" ? 
                    <></>
                    // <Loader/>
                    :
                    <> 
                    </>
                }
            </SidePartOfPage>
        </PageDefaultStyle>
        
    )
}

export default SingleQuestionPAge


