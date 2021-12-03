export interface CreateThread_Interface {
    threadType: 'question' | 'discussion' | 'request' | 'not-selected';
    validation:{
        1:{
            isValid: 'valid' | 'not-valid' | 'not-selected';
            message: string;
        },
        2:{
            isValid: 'valid' | 'not-valid' | 'not-selected';
            message: string;
        },
        3:{
            isValid: 'valid' | 'not-valid' | 'not-selected';
            message: string;
        },

    }
    currentStage:1 | 2 | 3 ;
}