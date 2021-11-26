import React from 'react'
import CaveSidebar from '../components/Cave/CaveSidebar'
import CaveWindowRouter from '../components/Cave/Cave_Windows/CaveWindowRouter'
import CaveSidePartOfPage from '../components/CaveSidePartOfPage'
import MainPartOfPage from '../components/MainPartOfPage'
import SidePartOfPage from '../components/SidePartOfPage'
import { Cave_Sty } from '../styles/components/styled-elements/Cave.style'
import { CavePageDefaultStyle } from '../styles/pages/Page.styled'

interface Props {
    
}

const Cave = (props: Props) => {

    return (
        <CavePageDefaultStyle>
            <CaveSidePartOfPage side={"left"} >
                <CaveSidebar/>
            </CaveSidePartOfPage>
            
           


            <MainPartOfPage>
                <Cave_Sty>
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
