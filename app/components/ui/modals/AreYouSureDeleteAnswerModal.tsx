import { single_question_data, thread_delete_options } from 'app/store/slices/Question.slice';
import { search_data, search_query } from 'app/store/slices/SearchBox.slice';
import { changeModalAction } from 'app/store/slices/User.slice';
import { useAppDispatch, useAppSelector } from 'app/store/states/store.hooks';
import { deleteAnswer } from 'app/store/thunks/Question.thunk';
import { AreYouSureButtonsCont, ModalFORM_STY } from 'app/styles/styled-components/base/modules/Modal_Style/ModalCont.style';
import router, { useRouter } from 'next/router';

interface Props {}

const AreYouSureDeleteAnswerModal = (props: Props) => {
  const dispatch = useAppDispatch()
  const question_data: any = useAppSelector(single_question_data)
  const router = useRouter()
  const searchData = useAppSelector(search_data)
  const searchQuery = useAppSelector(search_query)
  const threadDeleteOptions: any = useAppSelector(thread_delete_options)

  const yesDelete = (e: any) => {
    e.preventDefault()
    dispatch(changeModalAction('areYouSureDelete_Answer'))
    dispatch(deleteAnswer(threadDeleteOptions))
  }

  const noDelete = () => {
    dispatch(changeModalAction('areYouSureDelete_Answer'))
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

export default AreYouSureDeleteAnswerModal
