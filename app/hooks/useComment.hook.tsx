import {
  disableCommentEditing,
  edit_comment_data,
  edit_Comment_onChange,
  enableCommentEditing,
} from '../store/slices/Comments.slice';
import { setDeleteOptions } from '../store/slices/Question.slice';
import { changeModalAction } from '../store/slices/User.slice';
import { useAppDispatch, useAppSelector } from '../store/states/store.hooks';
import { edit_Answer_CommentThunk, edit_Question_CommentThunk } from '../store/thunks/Comments.thunk';


export const useCommentHook = ({ comment, commentType }: any) => {
  const dispatch = useAppDispatch()
  const editCommentData = useAppSelector(edit_comment_data)

  const deleteComment = () => {
    dispatch(setDeleteOptions({ comment_id: comment.id, comment_type: commentType.type }))
    dispatch(changeModalAction('areYouSureDelete_Comment'))
  }

  const editComment_change_func = (content: string) => {
    dispatch(edit_Comment_onChange(content))
  }

  const enableEditingFunc = () => {
    dispatch(
      enableCommentEditing({
        id: comment.id,
        new_content: comment.content,
        commentType: commentType.type,
      }),
    )
  }

  const cancelCommentEditingFunc = () => {
    dispatch(disableCommentEditing(null))
  }

  const saveCommentEditingFunc = () => {
    const form_data = new FormData()
    form_data.append('content', editCommentData!.new_content)
    if (commentType.type === 'answer') {
      dispatch(edit_Answer_CommentThunk({ id: comment.id, form_data: form_data }))
    } else {
      dispatch(edit_Question_CommentThunk({ id: comment.id, form_data: form_data }))
    }
  }

  return {
    deleteComment,
    enableEditingFunc,
    saveCommentEditingFunc,
    cancelCommentEditingFunc,
    editComment_change_func,
  }
}
