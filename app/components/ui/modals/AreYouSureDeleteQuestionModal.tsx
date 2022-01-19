import {
  AreYouSureButtonsCont,
  ModalFORM_STY,
} from '../../../styles/ui/modules/Modal_Style/ModalCont.style'
import router, { useRouter } from 'next/router'
import { search_data, search_query } from '../../../store/slices/SearchBox.slice'
import { useAppDispatch, useAppSelector } from '../../../store/states/store.hooks'

import { changeModalAction } from '../../../store/slices/User.slice'
import { deleteQuestion } from '../../../store/thunks/Question.thunk'
import { forumSearchInfinity } from '../../../store/thunks/SearchBox.thunk'
import { single_question_data } from '../../../store/slices/Question.slice'

interface Props {}

const AreYouSureDeleteQuestionModal = (props: Props) => {
  const dispatch = useAppDispatch()
  const question_data: any = useAppSelector(single_question_data)
  const router = useRouter()
  const searchData = useAppSelector(search_data)
  const searchQuery = useAppSelector(search_query)

  const yesDelete = (e: any) => {
    e.preventDefault()
    router.push('/')
    dispatch(changeModalAction('areYouSureDelete_Thread'))
    dispatch(deleteQuestion({ id: question_data.id }))
    dispatch(
      forumSearchInfinity({
        query: searchQuery,
        from: 0,
        forumType: searchData.searchBoxData.forum.searchOptions.forumType,
        filterTags: searchData.filters,
        excludedFilters: searchData.exculudedFilters,
      }),
    )
  }

  const noDelete = () => {
    dispatch(changeModalAction('areYouSureDelete_Thread'))
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

export default AreYouSureDeleteQuestionModal
