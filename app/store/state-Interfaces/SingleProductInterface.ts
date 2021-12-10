export interface SingleProductInterface {
    selectedID: number | null,
    status: 'loading' | 'loaded' | 'error';
    data:any,
    code:any
}   