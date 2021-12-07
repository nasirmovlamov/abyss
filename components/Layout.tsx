import React, { ReactElement, FC, useEffect } from 'react'
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
import { forumWordRegex } from '../logic/regex/NavbarRegex';
import Head from 'next/head'
import CommentModal from './CommentsTab';
import ChatBox from './ChatBox';
import { closeComments, is_comment_opened } from '../app/feature/Comments.slice';
import Cookies from 'js-cookie'
import { getCookie } from '../logic/CookieFunctions';
import Header from './Header';
import { ScrollToTopButton } from './ScrollToTopButton';

interface Props {
    // any props that come into the component
}

const Layout: FC<Props> = ({ children, ...props }) => {
    const router = useRouter();
    const dispatch = useAppDispatch()
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
            <div style={{display:'flex' , flexDirection:"column" , width:'100%'}}>
                
                <div style={{width:"100%" , minHeight:"100vh", display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                    <Header/>

                    <SearchBox/>
                    {isChatBoxOpened && <ChatBox/>}
                    {children}


                    <ScrollToTopButton/>

                    {userData !== null && <button type="button" style={{position:"fixed",right:"0px",bottom:"0px"}} onClick={openUserChat}>Chat</button>}
                    <Modals/>
                </div>   
                <Footer/>
                



                {/* {
                (pageOverflowY === "hidden" 
                    && 
                    <div style={{width:"10px" , height:"100vh" , background:"white", right:"0px",  zIndex:9999999, backgroundColor:"transparent"}}>
                        <div style={{width:"100%" , height:"59.4px" , backgroundColor:"#00090e"}}></div>
                    </div> 
                )
                } */}

            </div>
        )
    }
    return(
        <></>
    )

};


export default Layout


