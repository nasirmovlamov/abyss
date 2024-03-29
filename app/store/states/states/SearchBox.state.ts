import { SEARCHBOX_INTERFACE } from '../interfaces/SearchBox.interface';

export const SEARCHBOX_STATE: SEARCHBOX_INTERFACE = {
  isFocused: false,
  isHovered: false,
  isNavHovered: false,
  isHeaderHovered: false,
  isinWindow: false,
  page: '',
  search_query: '',
  isSearchVisible: 'visible',
  isFromHeaderToSearch: false,
  thunkBackground: 'not-visible',
  filters: [],
  exculudedFilters: [],
  searchBoxData: {
    forum: {
      data: [],
      results_number: 0,
      fromNumber: 0,
      allDataLoaded: false,
      initialLoader: true,
      infinityLoader: 'loading',
      status: 'loading',
      scrollY: 0,
      searchOptions: {
        sendedQuery: null,
        forumType: '',
        forumSort: '',
      },
    },
    store: {
      data: [],
      results_number: 0,
      fromNumber: 0,
      allDataLoaded: false,
      infinityLoader: 'loading',
      status: 'loading',
      scrollY: 0,
      searchOptions: {
        sendedQuery: null,
        storeType: '',
        storeSort: '',
      },
    },
  },
}
