import { SEARCHBOX_INTERFACE } from "../state-Interfaces/SearchBoxInterface";

export const SEARCHBOX_STATE:SEARCHBOX_INTERFACE = {
    isFocused:false,
    searchBoxData:{
        forum:{
            data:[],
            status:"loaded",
            searchOptions:{
                searchValue:'',
                filters:[],
                forumType:'',
                forumSort:'',    
             }
        },
        store:{
            data:[],
            status:"loaded",
        },
    }
}

