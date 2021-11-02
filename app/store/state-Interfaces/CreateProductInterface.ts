export interface CreateProductInterface {
    name: string;
    steps:{
        1:{
            name: string;
        },
        2:{

        }
        3:{

        }
        4:{

        }
        5:{

        }
    }    
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