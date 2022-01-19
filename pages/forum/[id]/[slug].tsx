/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';

import { is_comment_opened } from '../../../app/feature/Comments.slice';
import { user_data } from '../../../app/feature/User.slice';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { getSingleQuestion } from '../../../app/thunks/QuestionThunk';
import CommentModal from '../../../components/CommentsTab';
import MainPartOfPage from '../../../components/MainPartOfPage';
import QuestionLayout from '../../../components/QuestionLayout';
import SidePartOfPage from '../../../components/SidePartOfPage';
import { PageDefaultStyle } from '../../../styles/pages/Page.styled';

// import { AnswerCont, AnswerCount, DateCount, DefaultLine, HelpfulCont, HelpfulCount, PercentageLine, StatisticCont, Text, ThumbIcon } from '../../../styles/components/styled-elements/FormQuestion.style'
interface Props {
}


function QuestionPage({ }: Props): ReactElement {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const userData = useAppSelector(user_data)
    const isCommentsOpened = useAppSelector(is_comment_opened)

    useEffect(() => {
        if (router.isReady) {
            dispatch(getSingleQuestion(router.asPath))
        }
    }, [router, userData])







    return (
        <PageDefaultStyle >
            <SidePartOfPage side={"left"}>
            </SidePartOfPage>

            <MainPartOfPage>
                <QuestionLayout />
            </MainPartOfPage>

            <SidePartOfPage side={"right"}>
            </SidePartOfPage>
            {isCommentsOpened && <CommentModal />}
        </PageDefaultStyle>
    )
}

export default QuestionPage


