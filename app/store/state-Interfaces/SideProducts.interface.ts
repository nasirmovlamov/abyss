export interface SIDEPRODUCT_INTERFACE {
    selectedID: null | number,
    page: number,
    lastPage:number,
    allDataLoaded: boolean,
    totalNumber: number,
    distanceFromTop: number,
    products:any[],
    status:'loading' | 'loaded' | 'error'
    skeletonLoader:'loading' | 'loaded' | 'error'
}