import React, { FC } from 'react'

import { CavePageDefaultStyle } from '../../../styles/pages/Page.styled'
import CaveSidePartOfPage from '../../layouts/CaveSide.layout'
import CaveSidebar from './CaveSidebar'
import { Cave_Sty } from '../../../styles/ui/modules/Cave.style'
import Cave_Tabs from './Cave_Tabs/Cave_Tabs'
import MainPartOfPage from '../../layouts/PageMain.layout'
import { is_Logged } from '../../app/feature/User.slice'
import { useAppSelector } from '../../app/store/hooks'
import { useRouter } from 'next/router'
import { useScrollDirection } from 'react-use-scroll-direction'
import { useScrollYPosition } from 'react-use-scroll-position'

interface Props {}

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
        <CaveSidePartOfPage side={'left'}>
          <CaveSidebar />
        </CaveSidePartOfPage>

        <MainPartOfPage>
          <Cave_Tabs />
          <Cave_Sty>{children}</Cave_Sty>
        </MainPartOfPage>

        <CaveSidePartOfPage side={'right'}>Right</CaveSidePartOfPage>
      </CavePageDefaultStyle>
    )
  }
}

export default CaveLayout
