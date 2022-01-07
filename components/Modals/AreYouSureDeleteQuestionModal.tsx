import router, { useRouter } from 'next/router'
import React from 'react'
import { single_question_data } from '../../app/feature/Question.slice'
import { search_data, search_query } from '../../app/feature/SearchBox.slice'
import { changeModalAction } from '../../app/feature/User.slice'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { deleteQuestion } from '../../app/thunks/QuestionThunk'
import { forumSearchInfinity } from '../../app/thunks/SearchBoxThunks'
import { AreYouSureButtonsCont, ModalFORM_STY } from '../../styles/components/styled-blocks/Modal_Style/ModalCont.style'

interface Props {
    
}

const AreYouSureDeleteQuestionModal = (props: Props) => {
    const dispatch = useAppDispatch()
    const question_data:any = useAppSelector(single_question_data)
    const router = useRouter()
    const searchData = useAppSelector(search_data)
    const searchQuery = useAppSelector(search_query)

    const yesDelete = (e:any) => {
        e.preventDefault()
        router.push('/')
        dispatch(changeModalAction('areYouSureDelete_Thread'))
        dispatch(deleteQuestion({ id: question_data.id }))
        dispatch(forumSearchInfinity({query:searchQuery , from:0,forumType:searchData.searchBoxData.forum.searchOptions.forumType,filterTags:searchData.filters, excludedFilters:searchData.exculudedFilters}))
    }

    const noDelete = () => {
        dispatch(changeModalAction('areYouSureDelete_Thread'))
    }

    return (
        <ModalFORM_STY onSubmit={yesDelete}>
            <p>Are you sure to delete ?</p>
            <AreYouSureButtonsCont>
                <button type="submit" >Yes</button>
                <button onClick={noDelete} >NO</button>
            </AreYouSureButtonsCont>
        </ModalFORM_STY>
    )
}

export default AreYouSureDeleteQuestionModal
