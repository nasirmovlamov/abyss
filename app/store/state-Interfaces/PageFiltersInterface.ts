export interface PAGE_FILTERS_INTERFACE {
    isShown:boolean
    stayInFocus:boolean
    filterSearch: {
        filters:filterTagInterFace[],
        searchStatus:'pending' |  'idle' | 'failed'
    }
    filterTags: filterTagInterFace[]
    filterSearchValue: filterSearchValue
}

export interface filterTagInterFace {
    id:number,
    name:string,
    created_at: string,
    updated_at: string
} 


interface filterSearchValue {
    value:"",
    isValid:boolean,
    isTouched:boolean
    isDropHovered:boolean
} 