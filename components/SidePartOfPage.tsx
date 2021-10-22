import React, { ReactElement } from 'react'
import { is_chatbox_opened } from '../app/feature/ChatBoxSlice'
import { useAppSelector } from '../app/store/hooks'
import { SidePartOfPageStyle } from '../styles/pages/Page.styled'
import ChatBox from './ChatBox'
import PageFilters from './PageFilters'

interface Props {
    children:any,
    side:string
}

function SidePartOfPage({children , side}: Props): ReactElement {
    const isChatBoxOpened = useAppSelector(is_chatbox_opened) 
    return (
        <SidePartOfPageStyle side={side} >
            {children}
            {side ==="left" && 
            <>
            <PageFilters/>
            </>
            }
            {side ==="right" && 
                (isChatBoxOpened && <ChatBox/>)
            }
        </SidePartOfPageStyle>
    )
}

export default SidePartOfPage
