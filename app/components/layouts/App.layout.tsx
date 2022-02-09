import { AUTH_TOKEN } from 'app/constants';
import { useAppTheme } from 'app/contexts/Theme.context';
import { authCheckToken } from 'app/store/slices/auth.slice';
import { darkTheme, lightTheme } from 'app/styles/styled-components/abstracts/theme.style';
import { GlobalStyle } from 'app/styles/styled-components/global.style';
import Cookie from 'app/utils/Cookie';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { is_chatbox_opened, openChat } from '../../store/slices/ChatBox.slice';
import { closeComments, is_comment_opened } from '../../store/slices/Comments.slice';
import { unhoverWindow } from '../../store/slices/SearchBox.slice';
import { useAppDispatch, useAppSelector } from '../../store/states/store.hooks';
import { hoverWindowAsync } from '../../store/thunks/SearchBox.thunk';
import ChatBox from '../modules/ChatBox';
import Footer from '../modules/Footer';
import Header from '../modules/Header';
import { ScrollToTopButton } from '../ui/elements/ScrollToTopButton';
import Modals from '../ui/modals/Modals';
import ToolTip from '../ui/tooltips/ToolTip';

const AppLayout = ({ children }: { children: ReactNode }) => {
  const isChatBoxOpened = useAppSelector(is_chatbox_opened)
  const isCommentBoxOpened = useAppSelector(is_comment_opened)
  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const router = useRouter()
  const authState = useAppSelector((state) => state.auth)

  useEffect(() => {
    if (Cookie.get(AUTH_TOKEN)) {
      dispatch(authCheckToken())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isCommentBoxOpened) {
      dispatch(closeComments(null))
    }
  }, [router])

  const openUserChat = () => {
    dispatch(openChat(''))
  }

  return (
    <StyledThemeProvider theme={theme?.isDark ? darkTheme : lightTheme}>
      {/* {!authState.isLoading ? ( */}
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

          {authState.isLoggedIn && (
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
      {/* ) : (
        <Spinner />
      )} */}
    </StyledThemeProvider>
  )
}

export default AppLayout
