import { ChatBoxInterface } from '../state-Interfaces/ChatBoxInterface';

export const ChatBoxState: ChatBoxInterface = {
  status: 'loading',
  isChatBoxOpened: false,
  openedChatRoomId: null,
  rooms: {},
}
