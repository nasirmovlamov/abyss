import router from 'next/router'
import React, { useEffect } from 'react'
import { useScrollDirection } from 'react-use-scroll-direction'
import { useScrollYPosition } from 'react-use-scroll-position'
import { is_Logged, user_data } from '../app/feature/User.slice'
import { useAppSelector } from '../app/store/hooks'
import CaveSidebar from '../components/Cave/CaveSidebar'
import Cave_Tabs from '../components/Cave/Cave_Tabs/Cave_Tabs'
import CaveWindowRouter from '../components/Cave/Cave_Windows/CaveWindowRouter'
import CaveSidePartOfPage from '../components/CaveSidePartOfPage'
import MainPartOfPage from '../components/MainPartOfPage'
import SidePartOfPage from '../components/SidePartOfPage'
import { Cave_Sty } from '../styles/components/styled-blocks/Cave.style'
import { CavePageDefaultStyle } from '../styles/pages/Page.styled'

interface Props {
    
}

const Cave = (props: Props) => {
    const { isScrollingUp, isScrollingDown } = useScrollDirection()
    const caveRef = React.useRef<HTMLDivElement>(null)
    const scrollY = useScrollYPosition()
    const isLoggedIn = useAppSelector(is_Logged)

    if(!isLoggedIn)
    {
        router.push('/404')
        return <></>
    }else {
        return (
            <CavePageDefaultStyle>
                <CaveSidePartOfPage side={"left"} >
                    <CaveSidebar/>
                </CaveSidePartOfPage>
                
               
    
    
                <MainPartOfPage>
                    <Cave_Tabs/>
                    <Cave_Sty >
                        <CaveWindowRouter/>
                    </Cave_Sty>
                </MainPartOfPage>
    
    
                <CaveSidePartOfPage side={"right"}>
                    Right
                </CaveSidePartOfPage>
            </CavePageDefaultStyle>
        )
    }


    
}

export default Cave
