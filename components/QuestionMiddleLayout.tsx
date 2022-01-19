import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { is_comment_opened } from '../app/feature/Comments.slice'
import { edit_question_data, single_question_data } from '../app/feature/Question.slice'
import { changeModalAction, user_data } from '../app/feature/User.slice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { getSingleQuestion, unVoteQuestion, voteQuestion } from '../app/thunks/QuestionThunk'
import { useQuestionHooks } from '../hooks/useQuestionHook'
import { parseHtmlWithMention } from '../logic/htmlParser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ShowComments } from '../styles/components/styled-blocks/Answer.style'
import { AnswerCont, AnswerCount, DefaultLine, HelpfulCont, HelpfulCount, PercentageLine, Text, ThumbIcon } from '../styles/components/styled-blocks/FormQuestion.style'
import * as SingleQuestion_STY from '../styles/pages/SingleQuestionPage.styled'
import SearchBoxStaticVersion from './SearchBoxStaticVersion'
import abyssLogo from '../public/main-logo-new.svg'
import { faEdit, faEllipsisV, faThumbsDown as solidfaThumbsDown, faThumbsUp as solidfaThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faComment, faThumbsDown as regularfaThumbsDown, faThumbsUp as regularfaThumbsUp } from '@fortawesome/free-regular-svg-icons'
import AnswerSubmitCont from './AnswerSubmit'
import SinglePageTabs from './SinglePageTabs'
import AnswersConts from './AnswersCont'
import ProductsConts from './ProductsCont'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import MyEditor from './MyEditor'
import HTMLReactParser from 'html-react-parser'
const DynamicComponentWithNoSSR = dynamic(
    () => import('./Editors/EditorForQuestionEdit'),
    { ssr: false }
)

interface Props {
}

interface Props {

}

export const QuestionMiddleLayout = (props: Props) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const question_data: any = useAppSelector(single_question_data)
    const userData = useAppSelector(user_data)
    const isCommentsOpened = useAppSelector(is_comment_opened)
    const [showOptionsValue, setshowOptions] = useState(false)
    const {
        openQuestionComments,
        vote,
        downvote,
        deleteQuestion,
        enableEditingFunc,
        cancelEditingFunc,
        saveEditingFunc
    } = useQuestionHooks()

    const editQuestionData = useAppSelector(edit_question_data)

    return (
        <SingleQuestion_STY.SingleProductMiddle_STY>
            <SearchBoxStaticVersion />

            <SingleQuestion_STY.QuestionCont_STY id={`question${question_data.id}`}>
                <SingleQuestion_STY.PersonCont_STY>
                    <SingleQuestion_STY.Avatar_STY>
                        <div style={{ opacity: 0.618 }}><Image src={abyssLogo} width='65px' height="65px" alt="Abyss Logo" /></div>
                    </SingleQuestion_STY.Avatar_STY>
                    <SingleQuestion_STY.Name_STY>{question_data.user.name}</SingleQuestion_STY.Name_STY>
                </SingleQuestion_STY.PersonCont_STY>

                <SingleQuestion_STY.ContentCont_STY>
                    <SingleQuestion_STY.QuestionTitle_STY>
                        {question_data.title}
                    </SingleQuestion_STY.QuestionTitle_STY>
                    <SingleQuestion_STY.QuestionContent_STY>
                        {
                            (!(editQuestionData === null) && question_data.id === editQuestionData.id)
                                ?
                                <div>
                                    {<DynamicComponentWithNoSSR />}
                                    <MyEditor display={"none"} content={''} onChange={(content: any) => null} />
                                    <div>
                                        <button onClick={cancelEditingFunc}>cancel</button>
                                        <button onClick={saveEditingFunc} disabled={!(editQuestionData.new_content.length > 0)}>save</button>
                                    </div>
                                </div>
                                :
                                <>
                                    {
                                        question_data.linked_products ?
                                            parseHtmlWithMention(question_data.content, question_data.linked_products)
                                            :
                                            HTMLReactParser(question_data.content)
                                    }
                                </>

                        }
                    </SingleQuestion_STY.QuestionContent_STY>

                    <SingleQuestion_STY.QuestionTagsAndDate_STY>
                        <SingleQuestion_STY.QuestionTags_STY>
                            {/* {JSON.parse(question_data.tags).map((tag: any, index: any) => <SingleQuestion_STY.QuestionTag_STY key={tag.name}>{tag.name}</SingleQuestion_STY.QuestionTag_STY>)} */}
                        </SingleQuestion_STY.QuestionTags_STY>


                        <ShowComments type="button" onClick={openQuestionComments}>
                            <FontAwesomeIcon icon={faComment} />
                            <span>{question_data.comment_count}</span> comment {question_data.comment_count > 1 && "s"}
                        </ShowComments>

                    </SingleQuestion_STY.QuestionTagsAndDate_STY>
                </SingleQuestion_STY.ContentCont_STY>


                <SingleQuestion_STY.QuestionStatistics_STY>
                    <SingleQuestion_STY.StatisticContSingleQuestion_STY>
                        {
                            (question_data.user.id === userData?.id) &&
                            <SingleQuestion_STY.QuestionStatisticOptForUser_STY >
                                <SingleQuestion_STY.QuestionStatisticDotsButton_STY onClick={() => setshowOptions(!showOptionsValue)} onBlur={() => setshowOptions(false)}>
                                    <FontAwesomeIcon icon={faEllipsisV} color='white' />
                                </SingleQuestion_STY.QuestionStatisticDotsButton_STY>

                                <SingleQuestion_STY.QuestionStatisticElement_STY visible={true} >
                                    <SingleQuestion_STY.Edit_Question_STY onClick={enableEditingFunc}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </SingleQuestion_STY.Edit_Question_STY>
                                    <SingleQuestion_STY.Delete_Question_STY onClick={deleteQuestion}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </SingleQuestion_STY.Delete_Question_STY>
                                </SingleQuestion_STY.QuestionStatisticElement_STY>
                            </SingleQuestion_STY.QuestionStatisticOptForUser_STY>
                        }
                        <AnswerCont>
                            <AnswerCount>7</AnswerCount>
                            <Text>Answers</Text>
                        </AnswerCont>

                        <HelpfulCont>
                            <HelpfulCount>
                                <SingleQuestion_STY.QuestionStatisticButton_STY changeDirection={false} onClick={vote} ><ThumbIcon><FontAwesomeIcon icon={question_data.user_votes?.type === "upvote" ? solidfaThumbsUp : regularfaThumbsUp} /> </ThumbIcon></SingleQuestion_STY.QuestionStatisticButton_STY>
                                <SingleQuestion_STY.QuestionStatisticButton_STY changeDirection={true} onClick={downvote} ><ThumbIcon><FontAwesomeIcon icon={question_data.user_votes?.type === "downvote" ? solidfaThumbsDown : regularfaThumbsDown} />  </ThumbIcon></SingleQuestion_STY.QuestionStatisticButton_STY>
                            </HelpfulCount>
                            <DefaultLine><PercentageLine percentage={question_data.downvote + question_data.upvote > 0 ? (question_data.upvote / (question_data.downvote + question_data.upvote) * 100) : 0} /></DefaultLine>
                            <SingleQuestion_STY.VotePercentage_STY>
                                {question_data.downvote + question_data.upvote > 0 ? (question_data.upvote / (question_data.downvote + question_data.upvote) * 100) : 0}%
                            </SingleQuestion_STY.VotePercentage_STY>
                        </HelpfulCont>
                    </SingleQuestion_STY.StatisticContSingleQuestion_STY>
                    <SingleQuestion_STY.QuestionDate_STY>
                        {question_data.created_at}
                    </SingleQuestion_STY.QuestionDate_STY>
                    {
                        (question_data.user.id === userData?.id) &&
                        <SingleQuestion_STY.QuestionStatisticElement_STY visible={true}>
                            <SingleQuestion_STY.Edit_Question_STY>
                                <FontAwesomeIcon icon={faEdit} />
                            </SingleQuestion_STY.Edit_Question_STY>
                            <SingleQuestion_STY.Delete_Question_STY onClick={deleteQuestion}>
                                <FontAwesomeIcon icon={faTrash} />
                            </SingleQuestion_STY.Delete_Question_STY>
                        </SingleQuestion_STY.QuestionStatisticElement_STY>
                    }
                </SingleQuestion_STY.QuestionStatistics_STY>
            </SingleQuestion_STY.QuestionCont_STY>

            <AnswerSubmitCont id={question_data.id} />

            <SingleQuestion_STY.AnswersAndProductsCont_STY>
                {
                    (question_data.answer_count > 0)
                    &&
                    <>
                        <SinglePageTabs />
                        <AnswersConts />
                        <ProductsConts />
                    </>
                }
            </SingleQuestion_STY.AnswersAndProductsCont_STY>

        </SingleQuestion_STY.SingleProductMiddle_STY>
    )
}

