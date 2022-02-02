import React, { ReactElement, useRef, useState } from 'react';

import { submit_answer_content, submit_answer_data } from '../../store/slices/Question.slice';
import { changeModalAction, is_Logged } from '../../store/slices/User.slice';
import { useAppDispatch, useAppSelector } from '../../store/states/store.hooks';
import { addAnswer } from '../../store/thunks/Question.thunk';
import { AddAnswerCont_STY, AddAnswerSubmit_STY } from '../../styles/styled-components/base/pages/SingleQuestionPage.style';
import { LabelCont } from '../../styles/styled-components/base/pages/Store.style';
import MyEditor from '../ui/editors/MyEditor';
import RichEditor from '../ui/editors/RichEditor';
import { autoErrorToasterWithMessage } from '../ui/toasters/AutoSuccessToast';

interface Props {
  id: number
}

function AnswerSubmitCont({ id }: Props): ReactElement {
  const submitAnswerContent = useAppSelector(submit_answer_content)
  const dispatch = useAppDispatch()
  const [textAreaHeight, settextAreaHeight] = useState(50)
  const [textAreaBlur, settextAreaBlur] = useState(true)
  const buttonRef = useRef<HTMLButtonElement>(null)
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

  return (
    <AddAnswerCont_STY onSubmit={submitAnswer}>
      <MyEditor display={'none'} content={''} onChange={(content: any) => content} />

      <LabelCont>
        <RichEditor />
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
