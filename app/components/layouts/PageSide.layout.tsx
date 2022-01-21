import React, { ReactElement, ReactNode } from 'react';

import { color_convert } from '../../store/slices/User.slice';
import { useAppSelector } from '../../store/states/store.hooks';
import { SidePartOfPageStyle } from '../../styles/styled-components/pages/Page.styled';
import PageFilters from '../modules/PageFilters';

interface Props {
  children: ReactNode
  side: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const PageSideLayout = ({ children, side, onMouseEnter, onMouseLeave }: Props) => {
  const colorConvert = useAppSelector(color_convert)

  return (
    <SidePartOfPageStyle
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      colorConvert={colorConvert}
      side={side}
    >
      {children}
      {side === 'left' && (
        <>
          <PageFilters />
          {/* <button onClick={() => dispatch(changeColor(!colorConvert))}>Convert Color</button> */}
        </>
      )}
      {side === 'right' && <></>}
    </SidePartOfPageStyle>
  )
}

export default PageSideLayout
