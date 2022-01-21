import { single_question_data } from 'app/store/slices/Question.slice';
import { search_data, search_query } from 'app/store/slices/SearchBox.slice';
import { changeModalAction } from 'app/store/slices/User.slice';
import { useAppDispatch, useAppSelector } from 'app/store/states/store.hooks';
import { deleteQuestion } from 'app/store/thunks/Question.thunk';
import { forumSearchInfinity } from 'app/store/thunks/SearchBox.thunk';
import { AreYouSureButtonsCont, ModalFORM_STY } from 'app/styles/styled-components/ui/modules/Modal_Style/ModalCont.style';
import router, { useRouter } from 'next/router';

interface Props { }

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
