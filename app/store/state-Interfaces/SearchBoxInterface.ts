import { filterTagInterFace } from "./PageFiltersInterface";

export interface SEARCHBOX_INTERFACE {
    isFocused: boolean;
    page:'/store' | '/forum' | '',
    search_query:string,
    isSearchVisible:"visible" | "not-visible",
    thunkBackground:"visible" | "not-visible",
    filters:filterTagInterFace[],
    searchBoxData:{
        forum:{
            data:ForumQuestionInterface[],
            status:"loading" | "loaded" | "error",
            infinityLoader:'loading' | 'loaded' | 'error',
            results_number:number,
            fromNumber:number,
            allDataLoaded:boolean, 
            initialLoader:boolean,
            scrollY:number,
            searchOptions:{
                sendedQuery:string | null,
                forumType:string,
                forumSort:string,    
            }
        },
        store:{
            data:any[],
            status:"loading" | "loaded" | "error",
            results_number:number,
            fromNumber:number,
            allDataLoaded:false,
            scrollY:number,
            infinityLoader:'loading' | 'loaded' | 'error',

            searchOptions:{
                sendedQuery:string | null,
                storeType:string,
                storeSort:string,    
            }
        },
    }
}

interface ForumQuestionInterface {
    id:string,
    slug:string,
    avatar:string
    name:string
    title:string
    content:string
    tags:string[]
    createdAt:string
    answerCount:string
    helpfulCount:string
    viewsCount:string
}