import {
  AddAnswerCont_STY,
  AddAnswerSubmit_STY,
} from '../../styles/pages/SingleQuestionPage.styled'
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { changeModalAction, is_Logged, user_data } from '../app/feature/User.slice'
import { submit_answer_content, submit_answer_data } from '../app/feature/Question.slice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'

import { LabelCont } from '../../styles/ui/modules/CreateQuestionModal.style'
import MyEditor from './editors/MyEditor'
import { addAnswer } from '../app/thunks/QuestionThunk'
import { autoErrorToasterWithMessage } from '../Notify/AutoSuccessToast'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('./editors/EditorForAddAnswer'), {
  ssr: false,
})

interface Props {
  id: number
}

function AnswerSubmitCont({ id }: Props): ReactElement {
  const [inBrowser, setInBrowser] = useState(false)
  const submitAnswerContent = useAppSelector(submit_answer_content)
  const userData = useAppSelector(user_data)
  const dispatch = useAppDispatch()
  const [textAreaHeight, settextAreaHeight] = useState(50)
  const [textAreaBlur, settextAreaBlur] = useState(true)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const isLogged = useAppSelector(is_Logged)
  const submitAnswerData = useAppSelector(submit_answer_data)

  const submitAnswer = async (e: any) => {
    e.preventDefault()
    if (!isLogged) {
      autoErrorToasterWithMessage('You must be logged in to submit an answer')
      dispatch(changeModalAction('login'))
      return null
    }
    const linkedProductsId = submitAnswerData.linkedProducts.map((item: any) => item.id)
    const mentionedUsersId = submitAnswerData.mentionedUsers.map((item: any) => item.id)
    const linkedProductsIdString = linkedProductsId.join(',')
    const mentionedUsersIdString = mentionedUsersId.join(',')
    const data: any = {}
    data.content = submitAnswerContent
    data.questionId = id
    if (linkedProductsId.length > 0) {
      data.linkedProducts = linkedProductsIdString
    }
    if (mentionedUsersId.length > 0) {
      data.mentionedUsers = mentionedUsersIdString
    }
    if (submitAnswerContent.length > 0) {
      dispatch(addAnswer(data))
    }
  }

  const checkTextAreaHeight = () => {
    if (textAreaHeight === 150) {
      settextAreaHeight(150)
      settextAreaBlur(false)
    }
  }

  const blurToggler = () => {
    settextAreaBlur(true)
    if (textAreaBlur) {
      if (textAreaHeight === 150) {
        settextAreaHeight(50)
      }
    }
  }

  const changeTextAreaHeight = () => {
    if (textAreaHeight < 150) {
      settextAreaHeight(150)
    }
  }

  return (
    <AddAnswerCont_STY onSubmit={submitAnswer}>
      <MyEditor display={'none'} content={''} onChange={(content: any) => content} />

      <LabelCont>
        <label className="title" htmlFor="content">
          Content
        </label>
        <DynamicComponentWithNoSSR />
      </LabelCont>

      <AddAnswerSubmit_STY
        ref={buttonRef}
        className="buttonSubmit"
        onMouseDown={checkTextAreaHeight}
      >
        Post
      </AddAnswerSubmit_STY>
    </AddAnswerCont_STY>
  )
}

export default AnswerSubmitCont
