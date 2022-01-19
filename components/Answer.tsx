import React, { ReactElement, ReactEventHandler, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { changeForumTabActive } from '../app/feature/PageTabs.slice'
import { changeModalAction, user_data } from '../app/feature/User.slice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { unVoteAnswer, voteAnswer } from '../app/thunks/QuestionThunk'
import { AnswerContent, AnswerStyle, Avatar, LikeButton, LikeButtonsCont, Name, PersonCont, ShowComments, ShowCommentsCont } from '../styles/components/styled-blocks/Answer.style'
import { closeComments, showComments } from '../app/feature/Comments.slice'
import { getAnswerComments } from '../app/thunks/CommentsThunk'
import { edit_answer_data, single_question_data } from '../app/feature/Question.slice'
import { errorToastFunc, loginError } from './Notify/ErrorToasts'
import { ANSWER_INTERFACE } from '../app/store/state-Interfaces/QuestionInterface'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faEllipsisV, faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons'
import { set_overflowy } from '../app/feature/App.slice'
import { parseHtml, parseHtmlWithMention } from '../logic/htmlParser'
import { faThumbsDown as solidfaThumbsDown, faThumbsUp as solidfaThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faComment, faThumbsDown as regularfaThumbsDown, faThumbsUp as regularfaThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { ThumbIcon } from '../styles/components/styled-blocks/FormQuestion.style'
import { useAnswerHook } from '../hooks/useAnswerHook'
import * as SingleQuestion_STY from '../styles/pages/SingleQuestionPage.styled'
import HTMLReactParser from 'html-react-parser'
import dynamic from 'next/dynamic'
import MyEditor from './MyEditor'


const DynamicComponentWithNoSSR = dynamic(
    () => import('./Editors/EditorForAnswerEdit'),
    { ssr: false }
)

interface Props {
    answer: ANSWER_INTERFACE,
    direction: string
}

function Answer({ answer, direction }: Props): ReactElement {
    const dispatch = useAppDispatch()
    const userData = useAppSelector(user_data)
    const answerRef = useRef(null)
    const [showOptionsValue, setshowOptions] = useState(false)
    const answer_data = { answer: answer, direction: direction }
    const editAnswerData = useAppSelector(edit_answer_data)


    const showOptions = () => {
        setshowOptions(true)
    }
    const dontShowOptions = () => {
        setshowOptions(false)
    }

    const deleteAnswerFunc = () => {
        deleteAnswer()
        setshowOptions(false)
    }



    const {
        vote,
        downvote,
        clickToOpenComments,
        deleteAnswer,
        editAnswer,
        enableEditingFunc,
        cancelEditingFunc,
        saveEditingFunc
    } = useAnswerHook(answer_data)





    return (
        <AnswerStyle id={`answer${answer.id}`} ref={answerRef} key={answer.id}>
            <div className="flexer c-gp-10 sp-bt j-between">
                <PersonCont>
                    <Avatar></Avatar>
                    <Name>{answer.user.name}</Name>
                </PersonCont>
                <AnswerContent>
                    {
                        (!(editAnswerData === null) && answer.id === editAnswerData.id)
                            ?
                            <div>
                                {<DynamicComponentWithNoSSR />}
                                <MyEditor display={"none"} content={''} onChange={(content: any) => null} />
                                <div>
                                    <button onClick={cancelEditingFunc}>cancel</button>
                                    <button onClick={saveEditingFunc} disabled={!(editAnswerData.new_content.length > 0)}>save</button>
                                </div>
                            </div>
                            :
                            <>
                                {
                                    answer.linked_products ?
                                        parseHtmlWithMention(answer.content, answer.linked_products)
                                        :
                                        HTMLReactParser(answer.content)
                                }
                            </>

                    }
                </AnswerContent>
                <LikeButtonsCont >
                    <LikeButton changeDirection={false} onClick={vote}  ><ThumbIcon><FontAwesomeIcon icon={answer.user_votes?.type === "upvote" ? solidfaThumbsUp : regularfaThumbsUp} /></ThumbIcon>  </LikeButton>
                    <LikeButton changeDirection={true} onClick={downvote} ><ThumbIcon><FontAwesomeIcon icon={answer.user_votes?.type === "downvote" ? solidfaThumbsDown : regularfaThumbsDown} /></ThumbIcon> </LikeButton>
                </LikeButtonsCont>
            </div>
            <ShowCommentsCont className="flexer a-start">
                <ShowComments type="button" onClick={clickToOpenComments}>
                    <FontAwesomeIcon icon={faComment} />
                    <span>{answer.comment_count}</span>
                </ShowComments>


            </ShowCommentsCont>
            {
                (answer.user.id === userData?.id) &&
                <SingleQuestion_STY.QuestionStatisticOptForUser_STY >
                    <SingleQuestion_STY.QuestionStatisticDotsButton_STY onClick={() => setshowOptions(!showOptionsValue)} onBlur={() => setshowOptions(false)}>
                        <FontAwesomeIcon icon={faEllipsisV} color='white' />
                    </SingleQuestion_STY.QuestionStatisticDotsButton_STY>

                    <SingleQuestion_STY.QuestionStatisticElement_STY visible={true} >
                        <SingleQuestion_STY.Edit_Question_STY onClick={enableEditingFunc}>
                            <FontAwesomeIcon icon={faEdit} />
                        </SingleQuestion_STY.Edit_Question_STY>
                        <SingleQuestion_STY.Delete_Question_STY onClick={deleteAnswerFunc}>
                            <FontAwesomeIcon icon={faTrash} />
                        </SingleQuestion_STY.Delete_Question_STY>
                    </SingleQuestion_STY.QuestionStatisticElement_STY>
                </SingleQuestion_STY.QuestionStatisticOptForUser_STY>
            }
        </AnswerStyle>
    )
}

export default Answer
