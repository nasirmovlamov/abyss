import React, {ReactElement, useEffect, useState} from 'react'
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

interface Props {
}

function Modals({}: Props):ReactElement {
    const allModals = useAppSelector(user_modals)
    
    return (
        <>
            {
            (allModals.login || allModals.register || allModals.forgetPassword || allModals.forgetPassword || allModals.isEmailSend || allModals.questionCreate || allModals.productCreate || allModals.productMentions) &&
                <ModalCont>
                    {allModals.login && <LoginModal />}
                    {allModals.register && <RegisterModal />}
                    {allModals.forgetPassword && <ForgetPasswordModal />}
                    {allModals.isEmailSend && <IsEmailSendModal />}
                    {allModals.questionCreate && <CreateThreadModal />}        
                    {allModals.productCreate && <CreateProductModal />}        
                    {allModals.iterationCreate && <CreateIterationModal />}        
                    {allModals.productMentions && <MentionsListModal />}        
                </ModalCont>
            }
        </>
    )
}

export default Modals
