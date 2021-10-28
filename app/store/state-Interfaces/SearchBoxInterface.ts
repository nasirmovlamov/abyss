export interface SEARCHBOX_INTERFACE {
    isFocused: boolean;
    searchBoxData:{
        forum:{
            data:ForumQuestionInterface[],
            status:"loading" | "loaded" | "error",
        },
        store:{
            data:[],
            status:"loading" | "loaded" | "error",
        },
    }
}

interface ForumQuestionInterface {
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