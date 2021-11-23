import React from 'react'
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
                Left
            </CaveSidePartOfPage>
            
           


            <MainPartOfPage>
                <Cave_Sty>
                    Cave
                </Cave_Sty>
            </MainPartOfPage>


            <CaveSidePartOfPage side={"right"}>
                Right
            </CaveSidePartOfPage>
        </CavePageDefaultStyle>
    )
}

export default Cave
