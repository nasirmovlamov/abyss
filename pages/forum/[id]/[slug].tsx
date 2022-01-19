import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';

import MainPartOfPage from '../../../app/components/layouts/PageMain.layout';
import SidePartOfPage from '../../../app/components/layouts/PageSide.layout';
import QuestionLayout from '../../../app/components/layouts/Question.layout';
import CommentModal from '../../../app/components/ui/sidebars/CommentsSidebar';
import { is_comment_opened } from '../../../app/store/slices/Comments.slice';
import { user_data } from '../../../app/store/slices/User.slice';
import { useAppDispatch, useAppSelector } from '../../../app/store/states/store.hooks';
import { getSingleQuestion } from '../../../app/store/thunks/Question.thunk';
import { PageDefaultStyle } from '../../../app/styles/pages/Page.styled';


// import { AnswerCont, AnswerCount, DateCount, DefaultLine, HelpfulCont, HelpfulCount, PercentageLine, StatisticCont, Text, ThumbIcon } from '../../../styles/components/styled-elements/FormQuestion.style'
interface Props { }

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
    <PageDefaultStyle>
      <SidePartOfPage side={'left'}></SidePartOfPage>

      <MainPartOfPage>
        <QuestionLayout />
      </MainPartOfPage>

      <SidePartOfPage side={'right'}></SidePartOfPage>
      {isCommentsOpened && <CommentModal />}
    </PageDefaultStyle>
  )
}

export default QuestionPage
