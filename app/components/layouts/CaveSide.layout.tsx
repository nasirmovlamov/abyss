import React, { ReactElement } from 'react';

import { is_chatbox_opened } from '../../store/slices/ChatBox.slice';
import { is_comment_opened } from '../../store/slices/Comments.slice';
import { color_convert } from '../../store/slices/User.slice';
import { useAppDispatch, useAppSelector } from '../../store/states/store.hooks';
import { CaveSidePartOfPage_Sty } from '../../styles/pages/Page.styled';

interface Props {
  children: any
  side: string
}

function CaveSidePartOfPage({ children, side }: Props): ReactElement {
  const isChatBoxOpened = useAppSelector(is_chatbox_opened)
  const isCommentOpened = useAppSelector(is_comment_opened)
  const colorConvert = useAppSelector(color_convert)
  const dispatch = useAppDispatch()

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

export default CaveSidePartOfPage
