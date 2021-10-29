export interface PAGE_FILTERS_INTERFACE {
    isShown:boolean
    stayInFocus:boolean
    filterSearch: filterTagInterFace[]
    filterTags: filterTagInterFace[]
    filterSearchValue: filterSearchValue
}

export interface filterTagInterFace {
    id:number,
    name:string,
} 


interface filterSearchValue {
    value:"",
    isValid:boolean,
    isTouched:boolean
} 