import React, { ReactElement } from 'react'
import { is_chatbox_opened } from '../app/feature/ChatBoxSlice'
import { is_comment_opened } from '../app/feature/CommentsSlice'
import { useAppSelector } from '../app/store/hooks'
import { SidePartOfPageStyle } from '../styles/pages/Page.styled'
import ChatBox from './ChatBox'
import CommentModal from './CommentsTab'
import PageFilters from './PageFilters'

interface Props {
    children:any,
    side:string
}

function SidePartOfPage({children , side}: Props): ReactElement {
    const isChatBoxOpened = useAppSelector(is_chatbox_opened) 
    const isCommentOpened = useAppSelector(is_comment_opened) 
    return (
        <SidePartOfPageStyle side={side} >
            {children}
            {side ==="left" && 
            <>
            <PageFilters/>
            </>
            }
            {side ==="right" && 
                <>
                </>
            }
        </SidePartOfPageStyle>
    )
}

export default SidePartOfPage
