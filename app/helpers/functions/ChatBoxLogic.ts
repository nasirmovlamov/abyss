import { RoomInterface } from '../../store/states/interfaces/ChatBox.interface';

export const getRooms = (rooms: { [index: number]: RoomInterface }) => {
  return Object.keys(rooms).map((id: any) => rooms[id])
}

export const getLastMessageId = (rooms: { [index: number]: RoomInterface }, id: number) => {
  if (rooms[id].messages.length > 0) {
    return rooms[id].messages[rooms[id].messages.length - 1].id
  }
}
