import styled from 'styled-components'

export const ChatWindow = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  position: fixed;
  top: 100px;
  box-shadow: 5px 10px #888888;
`

export const ChatNav = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 2px solid blue;
  background-color: green;
  padding: 5px;
`

export const ChatNavName = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0px;
  margin: 0px;
  color: white;
`

export const CloseChatBox = styled.button`
  padding: 0px;
  margin: 0px;
`

export const ChatMain = styled.div`
  width: 100%;
  display: flex;
`
export const ChatRooms = styled.div`
  width: 120px;
`
export const ChatMessagesTab = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  display: flex;
`
export const ChatMessages = styled.div`
  width: 200px;
  height: 200px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`

export const ChatMessagesFix = styled.div`
  flex: 1 1 auto;
`

export const ChatRoom = styled.button`
  height: 30px;
  background-color: green;
  color: white;
  border: none;
  border: 1px solid white;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  white-space: nowrap;
  width: 100px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  outline: none;
`

export const ChatMessage = styled.div<{ isMe: boolean }>`
  width: auto;
  height: 20px;
  background-color: green;
  border-radius: 10px;
  padding: 4px;
  height: 30px;
  background-color: gray;
  color: white;
  align-self: ${({ isMe }) => (isMe ? 'flex-end' : 'flex-start')};
  background-color: ${({ isMe }) => (isMe ? 'green' : 'light-green')};
`

export const ChatSendMessage = styled.div`
  display: flex;
  input {
    width: 100%;
  }
`
