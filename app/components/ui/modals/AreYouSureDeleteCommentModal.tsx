import {
  AreYouSureButtonsCont,
  ModalFORM_STY,
} from '../../../styles/ui/modules/Modal_Style/ModalCont.style'
import router, { useRouter } from 'next/router'
import { search_data, search_query } from '../../../store/slices/SearchBox.slice'
import { single_question_data, thread_delete_options } from '../../../store/slices/Question.slice'
import { useAppDispatch, useAppSelector } from '../../../store/states/store.hooks'

import { changeModalAction } from '../../../store/slices/User.slice'
import { deleteComment } from '../../../store/thunks/Question.thunk'

interface Props {}

const AreYouSureDeleteCommentModal = (props: Props) => {
  const dispatch = useAppDispatch()
  const question_data: any = useAppSelector(single_question_data)
  const router = useRouter()
  const searchData = useAppSelector(search_data)
  const searchQuery = useAppSelector(search_query)
  const threadDeleteOptions: any = useAppSelector(thread_delete_options)

  const yesDelete = (e: any) => {
    e.preventDefault()
    dispatch(changeModalAction('areYouSureDelete_Comment'))
    console.log(threadDeleteOptions)
    dispatch(
      deleteComment({
        id: threadDeleteOptions.comment_id,
        comment_type: threadDeleteOptions.comment_type,
      }),
    )
  }

  const noDelete = () => {
    dispatch(changeModalAction('areYouSureDelete_Comment'))
  }

  return (
    <ModalFORM_STY onSubmit={yesDelete}>
      <p>Are you sure to delete ?</p>
      <AreYouSureButtonsCont>
        <button type="submit">Yes</button>
        <button onClick={noDelete}>NO</button>
      </AreYouSureButtonsCont>
    </ModalFORM_STY>
  )
}

export default AreYouSureDeleteCommentModal