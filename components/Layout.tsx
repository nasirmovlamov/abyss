import React, { ReactElement, FC, useEffect } from 'react'
import { page_overflowy } from '../app/feature/AppSlice';
import {  user_data, user_status, user_status_not_logged } from '../app/feature/UserSlice';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { userCheck } from '../app/thunks/AuthThunk';
import Footer from './Footer'
import Modals from './Modals/Modals';
import Navbar from './Navbar'
import OverlayBackground from './Overlay';
import SearchBox from './SearchBox';
import { openChat } from '../app/feature/ChatBoxSlice'
import router from 'next/router';
import { forumWordRegex } from '../logic/regex/NavbarRegex';
import Head from 'next/head'


interface Props {
    // any props that come into the component
}

const Layout: FC<Props> = ({ children, ...props }) => {
    const dispatch = useAppDispatch()
    const userStatus = useAppSelector(user_status)
    const pageOverflowY = useAppSelector(page_overflowy)
    const userData = useAppSelector(user_data)

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            dispatch(userCheck())
        }
        else 
        {
            dispatch(user_status_not_logged("not-logged"))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const openUserChat = () => {
        dispatch(openChat(""))
    }
    

    if(userStatus === "logged" || userStatus === "not-logged") {
        return (
            <>
                
                <div style={{width:"100%" , minHeight:"100vh", backgroundColor: "#0f1113" }}>
                    <Navbar/>
                    
                    <SearchBox/>
                    {children}

                    {userData !== null && <button type="button" style={{position:"fixed",right:"0px",bottom:"0px"}} onClick={openUserChat}>Chat</button>}
                    <Modals/>
                    {/* <Footer/> */}
                </div>   
                {
                (pageOverflowY === "hidden" 
                    && 
                    <div style={{position:"fixed",  width:"100%" , height:"100vh" , right:"0px", top:"0px",  zIndex:999, backgroundColor:"rgba(0,0,0,0.5)"}}>
                        <div style={{width:"100%" , height:"59.4px" , backgroundColor:"#00090e"}}></div>
                    </div> 
                )
                }



                {
                (pageOverflowY === "hidden" 
                    && 
                    <div style={{width:"10px" , height:"100vh" , background:"white", right:"0px",  zIndex:9999999, backgroundColor:"transparent"}}>
                        <div style={{width:"100%" , height:"59.4px" , backgroundColor:"#00090e"}}></div>
                    </div> 
                )
                }

            </>
        )
    }
    return(
        <></>
    )

};


export default Layout


