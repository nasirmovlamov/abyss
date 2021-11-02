import { PAGE_FILTERS_INTERFACE } from "../state-Interfaces/PageFiltersInterface";

export const PAGE_FILTERS_STATE:PAGE_FILTERS_INTERFACE = {
    isShown:false,
    stayInFocus:false,
    filterSearch:[
        {id:1, name:"react"} , 
        {id:2, name:"css"} , 
        {id:3, name:"html"} , 
        {id:4, name:"javascript"} , 
        {id:5, name:"angular"} , 
        {id:6, name:"vue"},
        {id:7, name:"c++"} , 
        {id:8, name:"c"} , 
        {id:9, name:"java"} , 
        {id:10, name:"dart"} , 
        {id:11, name:"lang1"} , 
        {id:12, name:"lang2"}
    ],
    filterTags:[],
    filterSearchValue:{
        value:"",
        isValid:true,
        isTouched:false
    }
}

