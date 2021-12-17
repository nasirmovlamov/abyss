export interface CreateProductInterface {
    current_step:1 | 2 | 3 | 4 | 5,
    name: string;
    product_created:{
        isPlagiat: "not-checked" | "valid"  | "not-valid" | "changed" ,
        plagirismLoading: "loading" | "valid" | "not-checked" | "not-valid",
        status:'created' | 'failed' | 'pending' | 'not-created'
        id:number | null,
        sendend_source_code:string
    },
    steps:{
        1:{
            id:number
            step_name:string
            step_active:boolean            
            source_code:string
            lang_type:string
            validated:'not-checked' | 'valid' | 'not-valid' | 'loading' | 'failed' ,
            validators:{
                isCodeFilled:{
                    valid:boolean,
                    message:string
                },
                isPlagirismChecked:{
                    valid:boolean,
                    code_accepted:'not-checked' | 'loading' | 'failed' | 'success' ,
                    message:string,
                }
            }
        },
        2:{
            id:number
            step_name:string
            step_active:boolean  
            validated: 'not-checked' | 'valid' | 'not-valid' | 'loading' | 'failed',
            details_data:{
                product_name:string,
                product_tags:{id:number , value:string}[],
                sections_product:SectionOfProduct[]

            },
            validators:{
                isNameFilled:{
                    valid:boolean,
                    message:string
                },
                isTagsFilled:{
                    valid:boolean,
                    message:string
                },
                isDescriptionFilled:{
                    valid:boolean,
                    isCharacterMoreThan50:boolean
                    message:string
                },
                isApplicabilityFilled:{
                    valid:boolean,
                    isCharacterMoreThan50:boolean
                    message:string
                },
                isProblemFormulationFilled:{
                    valid:boolean,
                    isCharacterMoreThan50:boolean
                    message:string
                },
                
            }
        }
        3:{
            id:number
            step_name:string
            step_active:boolean 
            validated:'not-checked' | 'valid' | 'not-valid' | 'loading' | 'failed',
            iterations_of_product:{
                id:number,
                iteration_code:string,
                iteration_note: string,
                iteration_name: string,
                validators:{
                    isCodeFilled:{
                        valid:boolean,
                        message:"Please enter code of iteration"
                    },
                    isNoteFilled:{
                        valid:boolean,
                        message:"Please enter note of iteration"
                    },
                    isNameFilled:{
                        valid:boolean,
                        message:"Please enter name of iteration"
                    },
                    areAllFilled:{
                        valid:'empty' | 'filled'| 'failed' ,
                    }
                }
            }[],
        }
        4:{
            id:number
            step_name:string
            step_active:boolean     
            validated:'not-checked' | 'valid' | 'not-valid' | 'loading' | 'failed',
            infoValidators:{
                messagesWithRef:{id:number,ref:number ,message:string}[]
            }
        }
        5:{
            id:number
            step_name:string
            step_active:boolean    
            validated:'not-checked' | 'valid' | 'not-valid' | 'loading' | 'failed',
            payment_type:'free' | 'paid' | 'not-selected',
            visibility_type:'private' | 'public' | 'not-selected',
            tier_type: 1 | 2 | 3 | 'not-selected' , 
            validators:{
                isPriceTypeSelected:{
                    valid:boolean,
                    message:string
                },
                isPaidTypeSelected:{
                    valid:boolean,
                    message:string
                }
                isVisibilityTypeSelected:{
                    valid:boolean,
                    message:string
                }

            }
        }
        
    }    
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


