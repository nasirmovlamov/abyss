/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { user_data } from '../app/feature/User.slice'
import { useInView } from 'react-intersection-observer';

import { chat_rooms, closeChat, opened_chat_room_id, setRoomId } from '../app/feature/ChatBox.slice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { openRooms, reqRoomMessages, checkRoomChat, sendMessageToRoom, loadArchieveMessages } from '../app/thunks/ChatBoxThunks'
import { getLastMessageId,  getRooms } from '../logic/chatBoxLogic'
import { ChatMain, ChatMessage, ChatMessages, ChatMessagesFix, ChatMessagesTab, ChatNav, ChatNavName, ChatRoom, ChatRooms, ChatSendMessage, ChatWindow, CloseChatBox } from '../styles/components/styled-blocks/ChatBox.style'

interface Props {
    
}

export default function ChatBox({}: Props): ReactElement {

    const [inViewRefChatLoaderCont, inViewChatLoaderCont] = useInView()
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const messagesBoxRef = useRef<HTMLDivElement>(null)

    const userData = useAppSelector(user_data)
    const dispatch = useAppDispatch()
    const chatRooms = useAppSelector(chat_rooms)
    const openedChatRoomId = useAppSelector(opened_chat_room_id)
    const [userMessage, setuserMessage] = useState<string>("")
    

    const closeChatBox = () => {
        dispatch(closeChat(""))
    }


    useEffect(() => {
        if(Object.keys(chatRooms).length === 0)
        {
            dispatch(openRooms())
        }
    }, [])

   

    useEffect(() => {
        if(openedChatRoomId)
        {
            console.log("scroll")
            scrollToBottom()
        }
    }, [openedChatRoomId ])

    

    useEffect(() => {
        console.log(inViewChatLoaderCont)
        if(inViewChatLoaderCont && openedChatRoomId !== null && chatRooms[openedChatRoomId].messages.length > 0)
        {   
            dispatch(loadArchieveMessages({roomId:chatRooms[openedChatRoomId].id , lastMessageId:chatRooms[openedChatRoomId].messages[0].id}))   
        }
    }, [inViewChatLoaderCont])


    const scrollToBottom = () => {
        messagesEndRef!.current!.scrollIntoView({block: 'nearest',inline: 'start'})
    }


    const changeRoomId = (id:number) => {
        dispatch(setRoomId(id))
        if(chatRooms[id].messages.length === 0)
        {
            dispatch(checkRoomChat(chatRooms[id].opponent_user.id))
        }
        if(openedChatRoomId !== null && openedChatRoomId !== id)
        {
            scrollToBottom()
        }
    }
    
    return (
        <ChatWindow>
            <ChatNav><ChatNavName>{userData!.name}</ChatNavName>  <CloseChatBox onClick={closeChatBox}>X</CloseChatBox></ChatNav>
            
            <ChatMain>
                <ChatRooms>
                    {getRooms(chatRooms).map((room: any) => <ChatRoom onClick={() => changeRoomId(room.id)} key={room.id}>{room.opponent_user.name}</ChatRoom>)}
                </ChatRooms>
                <ChatMessagesTab>
                    { openedChatRoomId !== null &&
                        <>
                            <ChatMessages ref={messagesBoxRef}>
                                <div ref={inViewRefChatLoaderCont}>loader</div>
                                <ChatMessagesFix></ChatMessagesFix>
                                    {chatRooms[openedChatRoomId].messages.map((message: any) => <ChatMessage isMe={userData!.id === message.user.id} key={message.id}>{message.content}</ChatMessage>)}
                                    <div ref={messagesEndRef} ></div>
                            </ChatMessages>
                            <ChatSendMessage>
                                <input value={userMessage} onChange={(e:any) => setuserMessage(e.target.value)} type="text" placeholder="Type your message here..."/>
                                {<button onClick={() => dispatch(sendMessageToRoom({roomId:openedChatRoomId, content:userMessage }))}>Send</button>}
                            </ChatSendMessage>
                        </>
                    }
                </ChatMessagesTab>
            </ChatMain>
            
        </ChatWindow>
    )
}
