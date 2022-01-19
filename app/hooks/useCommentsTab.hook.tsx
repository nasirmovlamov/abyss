import { addAnswerComment, addQuestionComment } from '../app/thunks/CommentsThunk'
import { changeModalAction, is_Logged } from '../app/feature/User.slice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { useEffect, useState } from 'react'

import { autoErrorToasterWithMessage } from '../components/Notify/AutoSuccessToast'
import { closeComments } from '../app/feature/Comments.slice'
import { set_overflowy } from '../app/feature/App.slice'

export const useCommentsTabHook = (commentsType: any) => {
  const dispatch = useAppDispatch()
  const [newComment, setNewComment] = useState('')
  const isLogged = useAppSelector(is_Logged)

  const dontShowComments = () => {
    dispatch(closeComments(null))
    dispatch(set_overflowy(''))
  }

  const submitComment = (e: any) => {
    e.preventDefault()
    if (!isLogged) {
      autoErrorToasterWithMessage('You must be logged in to submit an answer')
      dispatch(changeModalAction('login'))
      return null
    }

    const comment = {
      parent_id: commentsType.id,
      content: newComment,
    }

    if (commentsType.type === 'answer') {
      dispatch(addAnswerComment(comment))
      setNewComment('')
    } else if (commentsType.type === 'thread') {
      dispatch(addQuestionComment(comment))
      setNewComment('')
    }
  }

  const commentOnChange = (e: any) => {
    setNewComment(e.target.value)
    if (e.keyCode === 13) {
      submitComment(e)
    }
  }

  return { dontShowComments, newComment, setNewComment, commentOnChange, submitComment }
}
