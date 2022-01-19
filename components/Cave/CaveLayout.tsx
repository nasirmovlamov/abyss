import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { useScrollDirection } from 'react-use-scroll-direction';
import { useScrollYPosition } from 'react-use-scroll-position';

import { is_Logged } from '../../app/feature/User.slice';
import { useAppSelector } from '../../app/store/hooks';
import { Cave_Sty } from '../../styles/components/styled-blocks/Cave.style';
import { CavePageDefaultStyle } from '../../styles/pages/Page.styled';
import CaveSidePartOfPage from '../CaveSidePartOfPage';
import MainPartOfPage from '../MainPartOfPage';
import Cave_Tabs from './Cave_Tabs/Cave_Tabs';
import CaveSidebar from './CaveSidebar';

interface Props {

}

const CaveLayout: FC<Props> = ({ children, ...props }) => {
    const { isScrollingUp, isScrollingDown } = useScrollDirection()
    const caveRef = React.useRef<HTMLDivElement>(null)
    const scrollY = useScrollYPosition()
    const isLoggedIn = useAppSelector(is_Logged)
    const router = useRouter()

    if (!isLoggedIn) {
        router.push('/404')
        return <></>
    } else {
        return (
            <CavePageDefaultStyle>
                <CaveSidePartOfPage side={"left"} >
                    <CaveSidebar />
                </CaveSidePartOfPage>

                <MainPartOfPage>
                    <Cave_Tabs />
                    <Cave_Sty >
                        {children}
                    </Cave_Sty>
                </MainPartOfPage>


                <CaveSidePartOfPage side={"right"}>
                    Right
                </CaveSidePartOfPage>
            </CavePageDefaultStyle>
        )
    }
}

export default CaveLayout
