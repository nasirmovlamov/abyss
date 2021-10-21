import { PAGE_FILTERS_INTERFACE } from "../state-Interfaces/PageFiltersInterface";

export const PAGE_FILTERS_STATE:PAGE_FILTERS_INTERFACE = {
    isShown:true,
    stayInFocus:false,
    filterSearch:[
        {id:Date.now(), name:"react"} , 
        {id:Date.now() + 1, name:"css"} , 
        {id:Date.now() + 2, name:"html"} , 
        {id:Date.now()+3, name:"javascript"} , 
        {id:Date.now()+4, name:"angular"} , 
        {id:Date.now()+5, name:"vue"},
        {id:Date.now()+6, name:"c++"} , 
        {id:Date.now() + 7, name:"c"} , 
        {id:Date.now() + 8, name:"java"} , 
        {id:Date.now()+9, name:"dart"} , 
        {id:Date.now()+10, name:"lang1"} , 
        {id:Date.now()+11, name:"lang2"}
    ],
    filterTags:[],
    filterSearchValue:{
        value:"",
        isValid:true,
        isTouched:false
    }
}

