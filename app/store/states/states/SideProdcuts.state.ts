import { SIDEPRODUCT_INTERFACE } from '../interfaces/SideProducts.interface';

export const SIDEPRODUCT_STATE: SIDEPRODUCT_INTERFACE = {
  selectedID: null,
  page: 1,
  lastPage: 0,
  totalNumber: 0,
  allDataLoaded: false,
  distanceFromTop: 0,
  products: [],
  status: 'loaded',
  skeletonLoader: 'loading',
}
