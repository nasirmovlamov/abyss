import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';

import MainLayout from '../../../app/components/layouts/Main.layout';
import QuestionLayout from '../../../app/components/layouts/Question.layout';
import { user_data } from '../../../app/store/slices/User.slice';
import { useAppDispatch, useAppSelector } from '../../../app/store/states/store.hooks';
import { getSingleQuestion } from '../../../app/store/thunks/Question.thunk';

const QuestionPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const userData = useAppSelector(user_data)

  useEffect(() => {
    if (router.isReady) {
      dispatch(getSingleQuestion(router.asPath))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, userData])

  const leftPart = <p>Left</p>
  const rightPart = <p>Right</p>

  return (
    <MainLayout left={leftPart} right={rightPart}>
      <QuestionLayout />
    </MainLayout>
  )
}

export default QuestionPage
