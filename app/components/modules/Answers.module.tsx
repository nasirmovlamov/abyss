import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { scroller } from 'react-scroll';

import { changeForumTabActive } from '../../store/slices/PageTabs.slice';
import {
  down_answers,
  down_answers_status,
  down_page,
  single_question_data,
  submitted_answer,
  top_answers,
  top_answers_status,
  top_page,
  total_page,
} from '../../store/slices/Question.slice';
import { useAppDispatch, useAppSelector } from '../../store/states/store.hooks';
import { getAnswers } from '../../store/thunks/Question.thunk';
import { AnswersCont_STY } from '../../styles/styled-components/base/pages/SingleQuestionPage.style';
import Answer from '../ui/elements/Answer';
import AnswerSkeleton from '../ui/skeletons/AnswerSkeleton';

// @todo move this interface to a separate file
export interface USER_INTERFACE {
  id: number
  email: string
  name: string
}

export interface AnswerInterface {
  page: number
  direction: string
  questionId: number
}

const AnswersModule = () => {
  const [inViewRefAnswersCont, inViewAnswersCont] = useInView()
  const [inViewRefLoaderDown, inViewLoaderDown] = useInView()
  const [inViewRefLoaderUp, inViewLoaderUp] = useInView()

  const topAnswers = useAppSelector(top_answers)
  const downAnswers = useAppSelector(down_answers)
  const submittedAnswer = useAppSelector(submitted_answer)

  const downAnswersStatus = useAppSelector(down_answers_status)
  const topAnswersStatus = useAppSelector(top_answers_status)

  const topPage = useAppSelector(top_page)
  const downPage = useAppSelector(down_page)
  const totalPage = useAppSelector(total_page)

  const dispatch = useAppDispatch()
  const question_data: any = useAppSelector(single_question_data)

  useEffect(() => {
    if (inViewAnswersCont) {
      dispatch(
        changeForumTabActive([
          { tabName: 'Answers', link: 'answersCont', id: 0, isActive: true },
          { tabName: 'Products', link: 'productsCont', id: 1, isActive: false },
        ]),
      )
    } else {
      dispatch(
        changeForumTabActive([
          { tabName: 'Answers', link: 'answersCont', id: 0, isActive: false },
          { tabName: 'Products', link: 'productsCont', id: 1, isActive: true },
        ]),
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewAnswersCont])

  useEffect(() => {
    if (inViewLoaderDown) {
      if (topAnswersStatus === 'loading') {
        const data: AnswerInterface = {
          page: topPage,
          direction: 'next',
          questionId: question_data.id,
        }
        dispatch(getAnswers(data))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewLoaderDown])

  useEffect(() => {
    if (inViewLoaderUp) {
      if (downAnswersStatus === 'loading') {
        const data: AnswerInterface = {
          page: downPage,
          direction: 'previous',
          questionId: question_data.id,
        }
        dispatch(getAnswers(data))
        if (downAnswers.length > 0) {
          scrollToLastAnswer(downAnswers[0].id)
        }
      }
    } else {
    }
  })

  useEffect(() => {
    if (inViewLoaderUp) {
      if (downAnswers.length > 3) {
        scrollToLastAnswer(downAnswers[3].id)
      }
    } else {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewLoaderUp])

  const scrollToLastAnswer = (id: number) => {
    scroller.scrollTo(`answer${id}`, {
      duration: 0,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: 0,
    })
  }

  return (
    <AnswersCont_STY
      style={{ scrollMarginTop: '250px' }}
      ref={inViewRefAnswersCont}
      id="answersCont"
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '14px',
          marginTop: '14px',
        }}
      >
        {submittedAnswer.map((answer: any) => (
          <Answer key={answer.id} direction="new-submitted" answer={answer} />
        ))}
      </div>

      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '14px',
          marginTop: '14px',
        }}
      >
        {topAnswers.map((answer: any) => (
          <Answer key={answer.id} direction="top" answer={answer} />
        ))}
      </div>

      {topAnswersStatus === 'loading' && (
        <div ref={inViewRefLoaderDown}>
          <AnswerSkeleton />
          <AnswerSkeleton />
          <AnswerSkeleton />
          <AnswerSkeleton />
          <AnswerSkeleton />
          <AnswerSkeleton />
        </div>
      )}
      {(topAnswersStatus === 'loading' || downAnswersStatus === 'loading') && (
        <div style={{ height: '100vh' }}></div>
      )}

      {downAnswersStatus === 'loading' && (
        <div ref={inViewRefLoaderUp}>
          <AnswerSkeleton />
          <AnswerSkeleton />
          <AnswerSkeleton />
          <AnswerSkeleton />
          <AnswerSkeleton />
          <AnswerSkeleton />
          <AnswerSkeleton />
        </div>
      )}

      <div
        id="downAnswers"
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '40px',
          marginTop: '30px',
        }}
      >
        {downAnswers.map((answer: any) => (
          <Answer key={answer.id} direction="bottom" answer={answer} />
        ))}
      </div>
    </AnswersCont_STY>
  )
}

export default AnswersModule
