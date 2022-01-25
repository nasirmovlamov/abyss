import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { forumWordRegex } from '../../helpers/functions/regex/NavbarRegex';
import { hoverHeader } from '../../store/slices/SearchBox.slice';
import { changeModalAction, is_Logged, user_data } from '../../store/slices/User.slice';
import { useAppDispatch, useAppSelector } from '../../store/states/store.hooks';
import { unHoverHeaderAsync } from '../../store/thunks/SearchBox.thunk';
import { userLogout } from '../../store/thunks/User.thunk';
import * as Header_STY from '../../styles/styled-components/base/modules/Navbar.style';
import MainLayout from '../layouts/Main.layout';
import NavLink from '../ui/elements/NavLink';
import mainLogo from '/public/icons/main-logo-new.svg';
import mainLogoText from '/public/icons/main-logo-side-text-new.svg';

const Header = () => {
  const router = useRouter()
  const { pathname } = router
  const dispatch = useAppDispatch()
  const userData = useAppSelector(user_data)
  const isLogged = useAppSelector(is_Logged)
  const [notificationToolTip, setnotificationToolTip] = useState(false)
  const [messageToolTip, setmessageToolTip] = useState(false)
  const [menuToolTip, setmenuToolTip] = useState(false)

  const goPage = (link: string) => {
    window.scrollTo(0, 0)
    if (router.pathname !== link) {
      router.push(link)
    }
  }

  const unHoverHeader = () => {
    dispatch(unHoverHeaderAsync(null))
  }

  const notfTipHoverHandle = () => {
    setnotificationToolTip(true)
  }
  const notfTipLeaveHandle = () => {
    setnotificationToolTip(false)
  }
  const msgTipHoverHandle = () => {
    setmessageToolTip(true)
  }
  const msgTipLeaveHandle = () => {
    setmessageToolTip(false)
  }
  const menuTipHoverHandle = () => {
    setmenuToolTip(true)
  }
  const menuTipLeaveHandle = () => {
    setmenuToolTip(false)
  }

  const exit = async () => {
    router.push('/')
    await dispatch(userLogout())
  }

  let view

  if (!isLogged) {
    view = (
      <Header_STY.Guest_STY>
        <Header_STY.LoginButton_STY onClick={() => dispatch(changeModalAction('login'))}>
          Sign in
        </Header_STY.LoginButton_STY>
      </Header_STY.Guest_STY>
    )
  } else {
    view = (
      <>
        <Header_STY.Logged_STY>
          <Header_STY.HeaderIcon_STY
            onMouseEnter={notfTipHoverHandle}
            onMouseLeave={notfTipLeaveHandle}
          >
            <Image width="20" height="20" src="/icons/chat.svg" alt="chat" />
            <div
              style={{
                position: 'absolute',
                bottom: '-30px',
                color: 'black',
                background: 'gray',
                padding: '5px',
                borderRadius: '5px',
                display: notificationToolTip ? 'flex' : 'none',
              }}
            >
              messages
            </div>
            <Header_STY.HeaderIconHOVER_BLOCK_MSG_STY>
              MESSAGES
            </Header_STY.HeaderIconHOVER_BLOCK_MSG_STY>
          </Header_STY.HeaderIcon_STY>

          <Header_STY.HeaderIcon_STY
            onMouseEnter={msgTipHoverHandle}
            onMouseLeave={msgTipLeaveHandle}
          >
            <Header_STY.NotifyNumber_STY> 5</Header_STY.NotifyNumber_STY>
            <Image width="24" height="24" src="/icons/notification.svg" alt="notification" />
            <Header_STY.HeaderIconHOVER_BLOCK_NTF_STY>
              NOTIFICATION
            </Header_STY.HeaderIconHOVER_BLOCK_NTF_STY>
          </Header_STY.HeaderIcon_STY>

          <Header_STY.HeaderIcon_STY
            onMouseEnter={menuTipHoverHandle}
            onMouseLeave={menuTipLeaveHandle}
          >
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 1H1V5L9 17H11.5L19 5V1Z" />
            </svg>
            <div
              style={{
                position: 'absolute',
                bottom: '-30px',
                color: 'black',
                background: 'gray',
                padding: '5px',
                borderRadius: '5px',
                display: menuToolTip ? 'flex' : 'none',
              }}
            >
              menu
            </div>
            <Header_STY.HeaderIconHOVER_BLOCK_MENU_STY>
              MENU
            </Header_STY.HeaderIconHOVER_BLOCK_MENU_STY>
          </Header_STY.HeaderIcon_STY>

          <NavLink content="username" href="/cave">
            <Header_STY.PersonName_STY>
              <span>
                {userData.name}
                {!userData.isVerified && (
                  <span style={{ fontSize: '13px', color: 'orange' }}>
                    * <sup>not verified</sup>
                  </span>
                )}
              </span>
            </Header_STY.PersonName_STY>
          </NavLink>
        </Header_STY.Logged_STY>

        <Header_STY.Logout_STY onClick={exit}>
          <span>logout</span>
        </Header_STY.Logout_STY>
      </>
    )
  }

  const leftPart = (
    <NavLink href={'/'} content="Home">
      <Header_STY.Logo_STY className="h-100">
        <div>
          <Image width="49px" src={mainLogo} height="49px" alt={'Abyss logo'} />
        </div>
        <div className="ml-3">
          <Image width="99px" src={mainLogoText} height="40px" alt={'Abyss text'} />
        </div>
        <Header_STY.Light_STY />
        <Header_STY.LightShadow_STY />
      </Header_STY.Logo_STY>
    </NavLink>
  )
  const rightPart = <Header_STY.Enterance_STY className="h-100">{view}</Header_STY.Enterance_STY>

  return (
    <Header_STY.Nav_STY
      onMouseEnter={() => dispatch(hoverHeader(null))}
      onMouseLeave={unHoverHeader}
    >
      <MainLayout
        left={leftPart}
        right={rightPart}
        leftCol={6}
        middleCol={null}
        rightCol={6}
        leftLgCol={pathname === '/' ? 3 : 2}
      >
        <Header_STY.LinksStyleCenterer_STY>
          <Header_STY.LinksStyle_STY>
            <Header_STY.LiStyle_STY
              onClick={() => goPage('/store')}
              focus={pathname === '/store' ? true : false}
            >
              <Header_STY.LinkStyle_STY>Store</Header_STY.LinkStyle_STY>
              <Header_STY.Line_STY />
            </Header_STY.LiStyle_STY>

            <Header_STY.LiStyle_STY
              onClick={() => goPage('/forum')}
              focus={forumWordRegex.test(pathname) ? true : false}
            >
              <Header_STY.LinkStyle_STY>Community</Header_STY.LinkStyle_STY>
              <Header_STY.Line_STY />
            </Header_STY.LiStyle_STY>

            <Header_STY.LiStyle_STY
              onClick={() => goPage('/pedia')}
              focus={pathname === '/pedi' ? true : false}
            >
              <Header_STY.LinkStyle_STY>Pedia</Header_STY.LinkStyle_STY>
              <Header_STY.Line_STY />
            </Header_STY.LiStyle_STY>
          </Header_STY.LinksStyle_STY>
        </Header_STY.LinksStyleCenterer_STY>
      </MainLayout>
    </Header_STY.Nav_STY>
  )
}

export default Header
