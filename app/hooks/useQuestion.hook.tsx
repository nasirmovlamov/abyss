import { showComments } from '../store/slices/Comments.slice';
import {
  disableQuestionEditing,
  edit_question_data,
  enableQuestionEditing,
  question_status,
  setDeleteOptions,
  single_question_data,
} from '../store/slices/Question.slice';
import { changeModalAction, user_data } from '../store/slices/User.slice';
import { useAppDispatch, useAppSelector } from '../store/states/store.hooks';
import { getQuestionComments } from '../store/thunks/Comments.thunk';
import { editQuestionThunk, unVoteQuestion, voteQuestion } from '../store/thunks/Question.thunk';


export const useQuestionHooks = () => {
  const dispatch = useAppDispatch()
  const questionStatus = useAppSelector(question_status)
  const questionData: any = useAppSelector(single_question_data)
  const userData = useAppSelector(user_data)
  const editQuestionData = useAppSelector(edit_question_data)
  const vote = () => {
    if (userData === null) {
      dispatch(changeModalAction('login'))
      return null
    }
    if (questionData.user_votes === null) {
      dispatch(voteQuestion({ id: questionData.id, type: 'upvote' }))
    } else if (questionData.user_votes.type === 'downvote') {
      dispatch(voteQuestion({ id: questionData.id, type: 'upvote' }))
    } else {
      dispatch(unVoteQuestion({ id: questionData.id, type: 'upvote' }))
    }
    return null
  }

  const downvote = () => {
    console.log(questionData)
    if (userData === null) {
      dispatch(changeModalAction('login'))
      return null
    }
    if (questionData.user_votes === null) {
      dispatch(voteQuestion({ id: questionData.id, type: 'downvote' }))
    } else if (questionData.user_votes.type === 'upvote') {
      dispatch(voteQuestion({ id: questionData.id, type: 'downvote' }))
    } else {
      dispatch(unVoteQuestion({ id: questionData.id, type: 'downvote' }))
    }
    return null
  }

  const openQuestionComments = () => {
    dispatch(getQuestionComments(questionData.id))
    dispatch(
      showComments({
        isQuestion: true,
        isAnswer: null,
        id: questionData.id,
        user: questionData.user,
        title: questionData.title,
        type: 'thread',
        showComments: true,
      }),
    )
  }

  const deleteQuestion = () => {
    dispatch(setDeleteOptions({ id: questionData.id, type: 'question' }))
    dispatch(changeModalAction('areYouSureDelete_Thread'))
  }

  const enableEditingFunc = () => {
    dispatch(enableQuestionEditing({ id: questionData.id, new_content: questionData.content }))
  }

  const cancelEditingFunc = () => {
    dispatch(disableQuestionEditing(null))
  }

  const saveEditingFunc = () => {
    const form_data = new FormData()
    form_data.append('content', editQuestionData!.new_content)
    dispatch(
      editQuestionThunk({
        id: editQuestionData!.id,
        new_content: editQuestionData!.new_content,
        form_data: form_data,
      }),
    )
  }

  return {
    openQuestionComments,
    vote,
    downvote,
    deleteQuestion,
    enableEditingFunc,
    cancelEditingFunc,
    saveEditingFunc,
  }
}
