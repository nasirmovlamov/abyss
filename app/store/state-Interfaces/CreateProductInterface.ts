export interface CreateProductInterface {
    sections_product:SectionOfProduct[]
}

export interface SectionOfProduct {
    id:number
    isEditor:boolean
    isClips:{ 
        status:boolean
        clips:CLIP_INTERFACE[] 
    } 
    label_key: string
    label_value: string
    
}


interface CLIP_INTERFACE {
    id:number
    src:string
    alt:string
}