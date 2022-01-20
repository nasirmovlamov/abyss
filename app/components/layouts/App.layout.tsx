import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';

import { getCookie } from '../../helpers/functions/CookieFunctions';
import { is_chatbox_opened, openChat } from '../../store/slices/ChatBox.slice';
import { closeComments, is_comment_opened } from '../../store/slices/Comments.slice';
import { unhoverWindow } from '../../store/slices/SearchBox.slice';
import { user_data, user_status, user_status_not_logged } from '../../store/slices/User.slice';
import { useAppDispatch, useAppSelector } from '../../store/states/store.hooks';
import { hoverWindowAsync } from '../../store/thunks/SearchBox.thunk';
import { userCheck } from '../../store/thunks/User.thunk';
import ChatBox from '../modules/ChatBox';
import Footer from '../modules/Footer';
import Header from '../modules/Header';
import { ScrollToTopButton } from '../ui/elements/ScrollToTopButton';
import Modals from '../ui/modals/Modals';
import ToolTip from '../ui/tooltips/ToolTip';

const AppLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const userStatus = useAppSelector(user_status)
  const userData = useAppSelector(user_data)
  const isChatBoxOpened = useAppSelector(is_chatbox_opened)
  const isCommentBoxOpened = useAppSelector(is_comment_opened)

  useEffect(() => {
    if (getCookie('token') !== null) {
      dispatch(userCheck())
    } else {
      dispatch(user_status_not_logged('not-logged'))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isCommentBoxOpened) {
      dispatch(closeComments(null))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  const openUserChat = () => {
    dispatch(openChat(''))
  }

  if (userStatus === 'logged' || userStatus === 'not-logged') {
    return (
      <div
        style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        onMouseEnter={() => dispatch(hoverWindowAsync(null))}
        onMouseLeave={() => dispatch(unhoverWindow(null))}
      >
        <div
          style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
        >
          {router.pathname !== '/login' && router.pathname !== '/register' && <Header />}
          {isChatBoxOpened && <ChatBox />}
          {children}

          <ToolTip />
          <ScrollToTopButton />

          {userData !== null && (
            <button
              type="button"
              style={{ position: 'fixed', right: '0px', bottom: '0px' }}
              onClick={openUserChat}
            >
              Chat
            </button>
          )}
          <Modals />
        </div>

        {router.pathname === '/' && <Footer />}
      </div>
    )
  }

  return <></>
}

export default AppLayout
