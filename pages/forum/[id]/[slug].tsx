import MainLayout from 'app/components/layouts/Main.layout';
import QuestionLayout from 'app/components/layouts/Question.layout';
import PageFilters from 'app/components/modules/PageFilters';
import { user_data } from 'app/store/slices/User.slice';
import { useAppDispatch, useAppSelector } from 'app/store/states/store.hooks';
import { getSingleQuestion } from 'app/store/thunks/Question.thunk';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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

  const leftPart = <PageFilters />
  const rightPart = <p>Right</p>

  return (
    <MainLayout left={leftPart} leftLgCol={1} rightLgCol={1} right={rightPart}>
      <QuestionLayout />
    </MainLayout>
  )
}

export default QuestionPage
