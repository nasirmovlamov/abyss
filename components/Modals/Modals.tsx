import React, {ReactElement, useEffect, useState} from 'react'
import { user_modals } from '../../app/feature/User.slice'
import { useAppSelector } from '../../app/store/hooks'
import ForgetPasswordModal from './ForgetPasswordModal'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import IsEmailSendModal from './IsEmailSendModal'
import CreateQuestionModal from './CreateQuestionModal'
import ModalCont from './ModalCont'
import CreateProductModal from './CreateProduct/CreateProductModal'
import CreateDiscussionModal from './CreateDiscussionModal'
import CreateIterationModal from './CreateIterationModal'
import MentionsListModal from './MentionsListModal'

interface Props {
}

function Modals({}: Props):ReactElement {
    const allModals = useAppSelector(user_modals)
    
    return (
        <>
            {allModals.login && <ModalCont> <LoginModal /></ModalCont>}
            {allModals.register && <ModalCont><RegisterModal /></ModalCont>}
            {allModals.forgetPassword && <ModalCont><ForgetPasswordModal /></ModalCont>}
            {allModals.isEmailSend && <ModalCont><IsEmailSendModal /></ModalCont>}
            {allModals.questionCreate && <ModalCont><CreateQuestionModal /></ModalCont>}        
            {allModals.productCreate && <ModalCont><CreateProductModal /></ModalCont>}        
            {allModals.discussionCreate && <ModalCont><CreateDiscussionModal /></ModalCont>}        
            {allModals.iterationCreate && <ModalCont><CreateIterationModal /></ModalCont>}        
            {allModals.productMentions && <ModalCont><MentionsListModal /></ModalCont>}        
        </>
    )
}

export default Modals
