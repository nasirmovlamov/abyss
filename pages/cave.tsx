import React, { useEffect } from 'react'
import { useScrollDirection } from 'react-use-scroll-direction'
import { useScrollYPosition } from 'react-use-scroll-position'
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

    useEffect(() => {
        if(isScrollingDown){
            caveRef.current?.setAttribute('style', 'margin-top:-10px;')
        }
    }, [isScrollingDown , isScrollingUp])

    useEffect(() => {
        if(scrollY ===0){
            caveRef.current?.setAttribute('style', 'margin-top: 0px;')
        }
    }, [scrollY])

    return (
        <CavePageDefaultStyle>
            <CaveSidePartOfPage side={"left"} >
                <CaveSidebar/>
            </CaveSidePartOfPage>
            
           


            <MainPartOfPage>
                <Cave_Tabs/>
                <Cave_Sty ref={caveRef}>
                    <CaveWindowRouter/>
                </Cave_Sty>
            </MainPartOfPage>


            <CaveSidePartOfPage side={"right"}>
                Right
            </CaveSidePartOfPage>
        </CavePageDefaultStyle>
    )
}

export default Cave
