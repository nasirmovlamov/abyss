import { PAGE_FILTERS_INTERFACE } from '../state-Interfaces/PageFiltersInterface';

export const PAGE_FILTERS_STATE: PAGE_FILTERS_INTERFACE = {
  isShown: false,
  stayInFocus: false,
  filterSearch: {
    filters: [],
    searchStatus: 'idle',
  },
  filterTags: [],
  filterSearchValue: {
    value: '',
    isValid: true,
    isTouched: false,
    isDropHovered: false,
  },
}
