import { SEARCHBOX_INTERFACE } from "../state-Interfaces/SearchBoxInterface";

export const SEARCHBOX_STATE:SEARCHBOX_INTERFACE = {
    isFocused:false,
    searchBoxData:{
        forum:{
            data:[],
            status:"loaded",
            searchOptions:{
                filters:[],
                forumType:'Questions',
                forumSort:'New',    
             }
        },
        store:{
            data:[],
            status:"loaded",
        },
    }
}

