export interface CreateThread_Interface {
    threadType: 'question' | 'discussion' | 'request' | 'not-selected';
    currentStage:number;
    validation:{[key:number]:{
            isValid: 'valid' | 'not-valid' | 'not-selected';
            message: string;
        } }
    
}