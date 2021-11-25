
export interface CaveTabsInterface  {
    [key:string]:CaveTabInterface[]
}

export interface CaveTabInterface
    {
        id:number,
        text:string,
        icon:string,
        link:string,
        active:boolean
        isLast:boolean
        isFirst:boolean
        hovered:boolean
    }