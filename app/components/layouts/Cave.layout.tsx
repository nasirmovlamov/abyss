import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

import { color_convert, is_Logged } from '../../store/slices/User.slice';
import { useAppSelector } from '../../store/states/store.hooks';
import { Cave_Sty } from '../../styles/styled-components/base/modules/Cave.style';
import { CavePageDefaultStyle, CaveSidePartOfPage_Sty } from '../../styles/styled-components/base/pages/Page.style';
import Cave_Tabs from '../templates/Cave/Cave_Tabs/Cave_Tabs';
import CaveSidebar from '../templates/Cave/CaveSidebar';
import PageMainLayout from './Main.layout';

const CaveSide = ({ children, side }: { children: ReactNode; side: string }) => {
  const colorConvert = useAppSelector(color_convert)

  return (
    <CaveSidePartOfPage_Sty colorConvert={colorConvert} side={side}>
      {children}
      {side === 'left' && (
        <>
          {/* <button onClick={() => dispatch(changeColor(!colorConvert))}>Convert Color</button> */}
        </>
      )}
      {side === 'right' && <></>}
    </CaveSidePartOfPage_Sty>
  )
}

const CaveLayout = ({ children }: { children: ReactNode }) => {
  const isLoggedIn = useAppSelector(is_Logged)
  const router = useRouter()

  if (!isLoggedIn) {
    router.push('/404')
    return <></>
  } else {
    return (
      <CavePageDefaultStyle>
        <CaveSide side={'left'}>
          <CaveSidebar />
        </CaveSide>

        <PageMainLayout>
          <Cave_Tabs />
          <Cave_Sty>{children}</Cave_Sty>
        </PageMainLayout>

        <CaveSide side={'right'}>Right</CaveSide>
      </CavePageDefaultStyle>
    )
  }
}

export default CaveLayout
