import React, { useEffect } from 'react'
import { useScrollDirection } from 'react-use-scroll-direction'
import { useScrollYPosition } from 'react-use-scroll-position'
import { is_Logged, user_data } from '../../app/feature/User.slice'
import { useAppSelector } from '../../app/store/hooks'
import CaveLayout from '../../components/Cave/CaveLayout'
import CaveSidebar from '../../components/Cave/CaveSidebar'
import Cave_Tabs from '../../components/Cave/Cave_Tabs/Cave_Tabs'
import CaveWindowRouter from '../../components/Cave/Cave_Windows/CaveWindowRouter'
import CaveSidePartOfPage from '../../components/CaveSidePartOfPage'
import MainPartOfPage from '../../components/MainPartOfPage'
import SidePartOfPage from '../../components/SidePartOfPage'
import { Cave_Sty } from '../../styles/components/styled-blocks/Cave.style'
import { CavePageDefaultStyle } from '../../styles/pages/Page.styled'

interface Props {
    
}

const Cave = (props: Props) => {
        return (
            <CaveLayout>
                <CaveWindowRouter/>
            </CaveLayout>
        )
}
export default Cave
