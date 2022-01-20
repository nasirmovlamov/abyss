import React, { ReactElement, useEffect, useState } from 'react';

import { user_modals } from '../../../store/slices/User.slice';
import { useAppSelector } from '../../../store/states/store.hooks';
import AreYouSureDeleteAnswerModal from './AreYouSureDeleteAnswerModal';
import AreYouSureDeleteCommentModal from './AreYouSureDeleteCommentModal';
import AreYouSureDeleteQuestionModal from './AreYouSureDeleteQuestionModal';
import CreateIterationModal from './CreateIterationModal';
import CreateProductModal from './CreateProduct/CreateProductModal';
import CreateThreadModal from './CreateQuestion/CreateThreadModal';
import ForgetPasswordModal from './ForgetPasswordModal';
import IsEmailSendModal from './IsEmailSendModal';
import LoginModal from './LoginModal';
import MentionsListModal from './MentionsListModal';
import ModalCont from './ModalCont';
import RegisterModal from './RegisterModal';

interface Props { }

function Modals({ }: Props): ReactElement {
  const allModals = useAppSelector(user_modals)

  return (
    <>
      {(allModals.login ||
        allModals.register ||
        allModals.forgetPassword ||
        allModals.forgetPassword ||
        allModals.isEmailSend ||
        allModals.questionCreate ||
        allModals.productCreate ||
        allModals.productMentions ||
        allModals.areYouSureDelete_Thread ||
        allModals.areYouSureDelete_Answer ||
        allModals.areYouSureDelete_Comment) && (
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
        )}
    </>
  )
}

export default Modals
