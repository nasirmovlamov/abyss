export interface CreateQuestionInterface {
    questionTitle: string;
    linkedProducts: {id:number}[];
    mentionedUsers: {id:number}[];
    tags:any[],
    tagValue:string,
    questionValue:string
    validation_check:'not-checked' | 'valid' | 'not-valid',
    validations: {
        questionTitle: {
            isValid: boolean,
            message: string
        },
        tags: {
            isValid: boolean,
            message: string
        },
        tagValue: {
            isValid: boolean,
            message: string
        },
        questionValue: {
            isValid: boolean,
            message: string
        }
    }
        
}