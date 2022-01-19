import React, { ReactElement } from 'react'
import { is_chatbox_opened } from '../app/feature/ChatBox.slice'
import { is_comment_opened } from '../app/feature/Comments.slice'
import { changeColor, color_convert } from '../app/feature/User.slice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { CaveSidePartOfPage_Sty } from '../styles/pages/Page.styled'
import ChatBox from './ChatBox'
import CommentModal from './CommentsTab'
import PageFilters from './PageFilters'

interface Props {
    children: any,
    side: string
}

function CaveSidePartOfPage({ children, side }: Props): ReactElement {
    const isChatBoxOpened = useAppSelector(is_chatbox_opened)
    const isCommentOpened = useAppSelector(is_comment_opened)
    const colorConvert = useAppSelector(color_convert)
    const dispatch = useAppDispatch()

    return (
        <CaveSidePartOfPage_Sty colorConvert={colorConvert} side={side} >
            {children}
            {side === "left" &&
                <>
                    {/* <button onClick={() => dispatch(changeColor(!colorConvert))}>Convert Color</button> */}
                </>
            }
            {side === "right" &&
                <>
                </>
            }
        </CaveSidePartOfPage_Sty>
    )
}

export default CaveSidePartOfPage
