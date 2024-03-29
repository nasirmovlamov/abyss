import { showComments } from '../store/slices/Comments.slice';
import {
  disableAnswerEditing,
  edit_answer_data,
  editAnswerContent_onChange,
  enableAnswerEditing,
  setDeleteOptions,
} from '../store/slices/Question.slice';
import { changeModalAction, user_data } from '../store/slices/User.slice';
import { useAppDispatch, useAppSelector } from '../store/states/store.hooks';
import { getAnswerComments } from '../store/thunks/Comments.thunk';
import { editAnswerThunk, unVoteAnswer, voteAnswer } from '../store/thunks/Question.thunk';

export const useAnswerHook = ({ answer, direction }: { answer: any; direction: string }) => {
  const dispatch = useAppDispatch()
  const userData = useAppSelector(user_data)
  const editAnswerData = useAppSelector(edit_answer_data)
  const vote = () => {
    if (userData === null) {
      dispatch(changeModalAction('login'))
      return null
    }
    if (answer.user_votes === null || answer.user_votes.type === 'downvote') {
      dispatch(voteAnswer({ id: answer.id, type: 'upvote', direction: `${direction}` }))
    } else {
      dispatch(unVoteAnswer({ id: answer.id, type: 'upvote', direction: `${direction}` }))
    }
    return null
  }

  const downvote = () => {
    if (userData === null) {
      dispatch(changeModalAction('login'))
      return null
    }

    if (answer.user_votes === null || answer.user_votes.type === 'upvote') {
      dispatch(voteAnswer({ id: answer.id, type: 'downvote', direction: direction }))
    } else {
      dispatch(unVoteAnswer({ id: answer.id, type: 'downvote', direction: direction }))
    }
    return null
  }

  const clickToOpenComments = () => {
    document
      .querySelector(`#answer${answer.id}`)
      ?.setAttribute('style', 'border: 1px solid white !important;position:relative;')
    dispatch(
      showComments({
        isQuestion: null,
        isAnswer: true,
        id: answer.id,
        user: answer.user,
        title: answer.content,
        type: 'answer',
        showComments: true,
      }),
    )
    dispatch(getAnswerComments(answer.id))
  }

  const deleteAnswer = () => {
    dispatch(setDeleteOptions({ answer_id: answer.id, direction: direction }))
    dispatch(changeModalAction('areYouSureDelete_Answer'))
  }

  const editAnswer = (content: string) => {
    dispatch(editAnswerContent_onChange(content))
  }

  const enableEditingFunc = () => {
    dispatch(
      enableAnswerEditing({ id: answer.id, new_content: answer.content, direction: direction }),
    )
  }

  const cancelEditingFunc = () => {
    dispatch(disableAnswerEditing(null))
  }

  const saveEditingFunc = () => {
    const form_data = new FormData()
    form_data.append('content', editAnswerData!.new_content)
    dispatch(
      editAnswerThunk({
        id: answer.id,
        new_content: answer.new_content,
        direction: direction,
        form_data: form_data,
      }),
    )
  }

  return {
    clickToOpenComments,
    vote,
    downvote,
    deleteAnswer,
    editAnswer,
    enableEditingFunc,
    cancelEditingFunc,
    saveEditingFunc,
  }
}
