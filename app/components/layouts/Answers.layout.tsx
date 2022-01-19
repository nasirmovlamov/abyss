/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect, useState } from 'react'
import { down_answers, top_answers } from '../../store/slices/Question.slice'

import Answer from '../ui/elements/Answer'
import AnswerSkeleton from '../ui/skeletons/AnswerSkeleton'
import { AnswersCont_STY } from '../../styles/pages/SingleQuestionPage.styled'
import { scroller } from 'react-scroll'
import { useAppSelector } from '../../store/states/store.hooks'
import { useInView } from 'react-intersection-observer'

export interface USER_INTERFACE {
  id: number
  email: string
  name: string
}

export interface GET_ANSWER_INTERFAC {
  page: number
  direction: string
  questionId: number
}

interface Props {
  // answers:ANSWER_INTERFACE[]
}

function AnswersConts({}: Props): ReactElement {
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
  }, [inViewAnswersCont])

  useEffect(() => {
    if (inViewLoaderDown) {
      if (topAnswersStatus === 'loading') {
        const data: GET_ANSWER_INTERFAC = {
          page: topPage,
          direction: 'next',
          questionId: question_data.id,
        }
        dispatch(getAnswers(data))
      }
    }
  }, [inViewLoaderDown])

  useEffect(() => {
    if (inViewLoaderUp) {
      if (downAnswersStatus === 'loading') {
        const data: GET_ANSWER_INTERFAC = {
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
        {submittedAnswer.map((answer) => (
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
        {topAnswers.map((answer) => (
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
        {downAnswers.map((answer) => (
          <Answer key={answer.id} direction="bottom" answer={answer} />
        ))}
      </div>
    </AnswersCont_STY>
  )
}

export default AnswersConts
