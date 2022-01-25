import { ChatBoxInterface } from '../interfaces/ChatBox.interface';

export const ChatBoxState: ChatBoxInterface = {
  status: 'loading',
  isChatBoxOpened: false,
  openedChatRoomId: null,
  rooms: {},
}
