import React, { ReactElement } from 'react';

import { is_chatbox_opened } from '../../store/slices/ChatBox.slice';
import { is_comment_opened } from '../../store/slices/Comments.slice';
import { color_convert } from '../../store/slices/User.slice';
import { useAppDispatch, useAppSelector } from '../../store/states/store.hooks';
import { SidePartOfPageStyle } from '../../styles/pages/Page.styled';
import PageFilters from '../modules/PageFilters';

interface Props {
  children: any
  side: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

function SidePartOfPage({ children, side, onMouseEnter, onMouseLeave }: Props): ReactElement {
  const isChatBoxOpened = useAppSelector(is_chatbox_opened)
  const isCommentOpened = useAppSelector(is_comment_opened)
  const colorConvert = useAppSelector(color_convert)
  const dispatch = useAppDispatch()

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

export default SidePartOfPage
