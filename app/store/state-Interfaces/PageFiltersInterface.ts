export interface PAGE_FILTERS_INTERFACE {
    isShown:boolean
    stayInFocus:boolean
    filterSearch: filterTag[]
    filterTags: filterTag[]
    filterSearchValue: filterSearchValue
}

interface filterTag {
    id:number,
    name:string,
} 


interface filterSearchValue {
    value:"",
    isValid:boolean,
    isTouched:boolean
} 