export interface ChatBoxInterface {
  status: 'loading' | 'idle' | 'failed'
  isChatBoxOpened: boolean
  openedChatRoomId: number | null
  rooms: { [index: string]: RoomInterface }
}

export interface RoomInterface {
  id: number
  type: 'private' | 'group'
  opponent_user: {
    id: number
    name: string
    email: string
  }
  messages: MessageInterface[]
  last_activity: string
  created_at: string
  updated_at: string
}

export interface MessageInterface {
  id: number
  user: {
    id: string
    name: string
    email: string
  }
  content: string
  created_at: string
  updated_at: string
}
