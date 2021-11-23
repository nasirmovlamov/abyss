import { RootState } from "../store/store";
import { createSlice} from '@reduxjs/toolkit'
import { autoErrorToaster } from "../../components/Notify/AutoErrorToaster";
import { ChatBoxState } from "../store/states/ChatBoxState"
import { checkChat, checkRoomChat, loadArchieveMessages, openRooms, sendMessageToRoom } from "../thunks/ChatBoxThunks";



export const ChatBoxSlice = createSlice({
    name: 'chatbox-slice',
    initialState:ChatBoxState ,

    reducers: {
        openChat(state, {payload}) {
            state.isChatBoxOpened = true 
        },
        closeChat(state, {payload}) {
            state.isChatBoxOpened = false 
        },
        setRoomId(state, {payload}) {
            state.openedChatRoomId = payload 
        },
    },

    extraReducers: (builder) => {


        // CHECK USER CHAT
        builder.addCase(checkRoomChat.fulfilled, (state, {payload}) => {
            if(state.rooms[payload.data.id].messages.length === 0) {
                state.rooms[payload.data.id].messages = [...state.rooms[payload.data.id].messages , ...payload.data.messages]
            }
        }),
        builder.addCase(checkRoomChat.pending, (state, {payload}) => {
        }),
        builder.addCase(checkRoomChat.rejected, (state, action:any) => {
        })


        // CHECK ROOM
        builder.addCase(checkChat.fulfilled, (state, {payload}) => {
        }),
        builder.addCase(checkChat.pending, (state, {payload}) => {
        }),
        builder.addCase(checkChat.rejected, (state, action:any) => {
        })


        // CHECK ROOM
        builder.addCase(sendMessageToRoom.fulfilled, (state, {payload}) => {
            state.rooms[state.openedChatRoomId!].messages = [...state.rooms[state.openedChatRoomId!].messages , payload.data]
        }),
        builder.addCase(sendMessageToRoom.pending, (state, {payload}) => {
        }),
        builder.addCase(sendMessageToRoom.rejected, (state, action:any) => {
            autoErrorToaster(action.payload)
        })



        // LOAD MESSAGES ROOM
        builder.addCase(loadArchieveMessages.fulfilled, (state, {payload}) => {
            console.log(payload.data)
            // console.log(state.rooms[state.openedChatRoomId!].messages)
            state.rooms[state.openedChatRoomId!].messages = [...payload.data , ...state.rooms[state.openedChatRoomId!].messages]
        }),
        builder.addCase(loadArchieveMessages.pending, (state, {payload}) => {
        }),
        builder.addCase(loadArchieveMessages.rejected, (state, action:any) => {
            console.log(action.payload)
            // autoErrorToaster(action.payload)
        })



        // OPEN USER CHATBOX
        builder.addCase(openRooms.fulfilled, (state, {payload}) => {
            state.status = 'idle'
            for (let i = 0; i < payload.data.length; i++) {
                state.rooms = { ...state.rooms, [payload.data[i].id]: payload.data[i] }
            }
            state.isChatBoxOpened = true 
        }),
        builder.addCase(openRooms.pending, (state, {payload}) => {
            state.status = 'loading'
        }),
        builder.addCase(openRooms.rejected, (state, action:any) => {
            state.status = 'failed'
            state.rooms = {}
            autoErrorToaster(action.payload)
        })

    }

})


// action
export const { openChat , closeChat, setRoomId } = ChatBoxSlice.actions;




// data
export const is_chatbox_opened = (state: RootState) => state.chatBoxReducer.isChatBoxOpened
export const chat_rooms = (state: RootState) => state.chatBoxReducer.rooms
export const opened_chat_room_id = (state: RootState) => state.chatBoxReducer.openedChatRoomId


export default ChatBoxSlice.reducer;






