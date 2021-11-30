import { SEARCHBOX_INTERFACE } from "../state-Interfaces/SearchBoxInterface";

export const SEARCHBOX_STATE:SEARCHBOX_INTERFACE = {
    isFocused:false,
    page:'',
    search_query:"",
    filters:[],
    searchBoxData:{
        forum:{
            data:[],
            results_number:0,
            fromNumber:0,
            status:"loaded",
            searchOptions:{
                sendedQuery:null,
                forumType:'',
                forumSort:'',    
             }
        },
        store:{
            data:[],
            results_number:0,
            fromNumber:0,
            status:"loaded",
            searchOptions:{
                sendedQuery:null,
                storeType:'',
                storeSort:'',    
             }
        },
    }
}

