import { PAGE_FILTERS_INTERFACE } from "../state-Interfaces/PageFiltersInterface";

export const PAGE_FILTERS_STATE:PAGE_FILTERS_INTERFACE = {
    isShown:true,
    stayInFocus:false,
    filterSearch:[
        {id:1, name:"react"} , 
        {id:2, name:"css"} , 
        {id:3, name:"html"} , 
        {id:4, name:"javascript"} , 
        {id:5, name:"angular"} , 
        {id:6, name:"vue"},
        {id:6, name:"c++"} , 
        {id:7, name:"c"} , 
        {id:8, name:"java"} , 
        {id:9, name:"dart"} , 
        {id:10, name:"lang1"} , 
        {id:11, name:"lang2"}
    ],
    filterTags:[],
    filterSearchValue:{
        value:"",
        isValid:true,
        isTouched:false
    }
}

