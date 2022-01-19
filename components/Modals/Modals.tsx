import React, { ReactElement, useEffect, useState } from 'react'
import { user_modals } from '../../app/feature/User.slice'
import { useAppSelector } from '../../app/store/hooks'
import ForgetPasswordModal from './ForgetPasswordModal'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import IsEmailSendModal from './IsEmailSendModal'
import CreateQuestionModal from './CreateQuestion/CreateQuestion'
import ModalCont from './ModalCont'
import CreateProductModal from './CreateProduct/CreateProductModal'
import CreateDiscussionModal from './CreateQuestion/CreateDiscussion'
import CreateIterationModal from './CreateIterationModal'
import MentionsListModal from './MentionsListModal'
import CreateThreadModal from './CreateQuestion/CreateThreadModal'
import AreYouSureDeleteQuestionModal from './AreYouSureDeleteQuestionModal'
import AreYouSureDeleteAnswerModal from './AreYouSureDeleteAnswerModal'
import AreYouSureDeleteCommentModal from './AreYouSureDeleteCommentModal'

interface Props {
}

function Modals({ }: Props): ReactElement {
    const allModals = useAppSelector(user_modals)

    return (
        <>
            {
                (allModals.login || allModals.register || allModals.forgetPassword || allModals.forgetPassword || allModals.isEmailSend || allModals.questionCreate || allModals.productCreate || allModals.productMentions || allModals.areYouSureDelete_Thread || allModals.areYouSureDelete_Answer || allModals.areYouSureDelete_Comment) &&
                <ModalCont>
                    {allModals.login && <LoginModal />}
                    {allModals.register && <RegisterModal />}
                    {allModals.forgetPassword && <ForgetPasswordModal />}
                    {allModals.isEmailSend && <IsEmailSendModal />}
                    {allModals.questionCreate && <CreateThreadModal />}
                    {allModals.productCreate && <CreateProductModal />}
                    {allModals.iterationCreate && <CreateIterationModal />}
                    {allModals.productMentions && <MentionsListModal />}
                    {allModals.areYouSureDelete_Thread && <AreYouSureDeleteQuestionModal />}
                    {allModals.areYouSureDelete_Answer && <AreYouSureDeleteAnswerModal />}
                    {allModals.areYouSureDelete_Comment && <AreYouSureDeleteCommentModal />}
                </ModalCont>
            }
        </>
    )
}

export default Modals
