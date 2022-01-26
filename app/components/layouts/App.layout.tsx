import { useAppTheme } from 'app/contexts/Theme.context';
import { darkTheme, lightTheme } from 'app/styles/styled-components/abstracts/theme.style';
import { GlobalStyle } from 'app/styles/styled-components/global.style';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { is_chatbox_opened, openChat } from '../../store/slices/ChatBox.slice';
import { closeComments, is_comment_opened } from '../../store/slices/Comments.slice';
import { unhoverWindow } from '../../store/slices/SearchBox.slice';
import { user_data, user_status } from '../../store/slices/User.slice';
import { useAppDispatch, useAppSelector } from '../../store/states/store.hooks';
import { hoverWindowAsync } from '../../store/thunks/SearchBox.thunk';
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
  const theme = useAppTheme()
  const authState = useAppSelector((state) => state.auth)

  useEffect(() => {
    // if (Cookie.get(AUTH_TOKEN)) {
    //   dispatch(authCheckToken())
    // }
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

  console.log(authState)

  return (
    <StyledThemeProvider theme={theme?.isDark ? darkTheme : lightTheme}>
      {!authState.isLoading ? (
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
            <Toaster />
            <GlobalStyle />
            <ToolTip />
            <ScrollToTopButton />

            {children}

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
      ) : (
        <></>
      )}
    </StyledThemeProvider>
  )
}

export default AppLayout
