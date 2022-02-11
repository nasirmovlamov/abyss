import { ADD_PRODUCT_WAS_REFRESHED_KEY } from 'app/constants';
import { changeModalAction, user_modals } from 'app/store/slices/User.slice';
import { useAppDispatch, useAppSelector } from 'app/store/states/store.hooks';
import Cryption from 'app/utils/Cryption';
import React, { ReactElement, useEffect, useState } from 'react';

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

const Modals = () => {
  const allModals = useAppSelector(user_modals)
  const dispatch = useAppDispatch()
  const [addProductRefreshed, setAddProductRefreshed] = useState(false)

  useEffect(() => {
    const productRefreshedKey = Cryption.encrypt(ADD_PRODUCT_WAS_REFRESHED_KEY)

    // Save a draft when add product modal was open during refresh
    const beforeUnload = () => {
      console.log(allModals.productCreate)
      if (allModals.productCreate) {
        localStorage.setItem(productRefreshedKey, 'true')
      } else {
        localStorage.removeItem(productRefreshedKey)
      }
    }

    // Check if page was refreshed during add product
    if (localStorage.getItem(productRefreshedKey) === 'true') {
      dispatch(changeModalAction('productCreate'))
      setAddProductRefreshed(true)
      localStorage.removeItem(productRefreshedKey)
    }

    window.addEventListener('beforeunload', beforeUnload)
    return () => window.addEventListener('beforeunload', beforeUnload)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allModals.productCreate])

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
          {allModals.productCreate && <CreateProductModal pageWasRefreshed={addProductRefreshed} />}
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
