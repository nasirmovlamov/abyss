import React, { ReactElement, FC, useEffect, useState } from 'react'
import { page_overflowy } from '../app/feature/App.slice';
import {  user_data, user_status, user_status_not_logged } from '../app/feature/User.slice';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { userCheck } from '../app/thunks/AuthThunk';
import Footer from './Footer'
import Modals from './Modals/Modals';
import OverlayBackground from './Overlay';
import SearchBox from './SearchBox';
import { is_chatbox_opened, openChat } from '../app/feature/ChatBox.slice'
import { useRouter } from 'next/router';
import { forumWordRegex, storeWordRegex } from '../logic/regex/NavbarRegex';
import Head from 'next/head'
import CommentModal from './CommentsTab';
import ChatBox from './ChatBox';
import { closeComments, is_comment_opened } from '../app/feature/Comments.slice';
import Cookies from 'js-cookie'
import { getCookie } from '../logic/CookieFunctions';
import Header from './Header';
import { ScrollToTopButton } from './ScrollToTopButton';
import SearchBoxForHome from './SearchBoxForHome';
import ToolTip from './ToolTip';
import LinearProgres from './LinearProgres';
import { hoverWindow, unhoverWindow } from '../app/feature/SearchBox.slice';
import { hoverWindowAsync } from '../app/thunks/SearchBoxThunks';

interface Props {
    // any props that come into the component
}

const Layout: FC<Props> = ({ children, ...props }) => {
    const router = useRouter();
    const dispatch = useAppDispatch()
    const [trig, settrig] = useState(true)
    const userStatus = useAppSelector(user_status)
    const pageOverflowY = useAppSelector(page_overflowy)
    const userData = useAppSelector(user_data)
    const isChatBoxOpened = useAppSelector(is_chatbox_opened)
    const isCommentBoxOpened = useAppSelector(is_comment_opened)

    useEffect(() => {
        if (getCookie('token') !== null) {
            dispatch(userCheck())
        }
        else 
        {
            dispatch(user_status_not_logged("not-logged"))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    useEffect(() => {
        if(isCommentBoxOpened)
        {
            dispatch(closeComments(null))
        }
    }, [router])

    const openUserChat = () => {
        dispatch(openChat(""))
    }
    
    

    if(userStatus === "logged" || userStatus === "not-logged") {
        return (
            <div style={{display:'flex' , flexDirection:"column" , width:'100%'}} onMouseEnter={() => dispatch(hoverWindowAsync(null))} onMouseLeave={() => dispatch(unhoverWindow(null))}>
                
                <div style={{width:"100%" , minHeight:"100vh", display:'flex', flexDirection:'column' }}>
                    
                    {router.pathname !== '/login' && router.pathname !== '/register' &&  <Header/>}
                    {/* {router.pathname === '/forum' && <LinearProgres/>} */}
                    
                    {/* {router.pathname !== '/' && <SearchBox/>} */}
                    {isChatBoxOpened && <ChatBox/>}
                    {children}

                    <ToolTip/>
                    <ScrollToTopButton/>

                    {userData !== null && <button type="button" style={{position:"fixed",right:"0px",bottom:"0px"}} onClick={openUserChat}>Chat</button>}
                    <Modals/>
                </div>   
                
                

                {
                    (router.pathname === '/')
                    && 
                    <Footer/>
                }   



               

            </div>
        )
    }
    return(
        <></>
    )

};


export default Layout


