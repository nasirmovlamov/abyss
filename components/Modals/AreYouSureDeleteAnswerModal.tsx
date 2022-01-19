import router, { useRouter } from 'next/router';
import React from 'react';

import { single_question_data, thread_delete_options } from '../../app/feature/Question.slice';
import { search_data, search_query } from '../../app/feature/SearchBox.slice';
import { changeModalAction } from '../../app/feature/User.slice';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { deleteAnswer } from '../../app/thunks/QuestionThunk';
import { AreYouSureButtonsCont, ModalFORM_STY } from '../../styles/components/styled-blocks/Modal_Style/ModalCont.style';

interface Props {

}

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
                <button type="submit" >Yes</button>
                <button onClick={noDelete} >NO</button>
            </AreYouSureButtonsCont>
        </ModalFORM_STY>
    )
}

export default AreYouSureDeleteAnswerModal
