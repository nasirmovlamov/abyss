import React, { ReactElement, useEffect, useState } from 'react';

import { selectSortSearchOption, selectTypeSearchOption, store_search_data } from '../../../store/slices/SearchBox.slice';
import { useAppDispatch, useAppSelector } from '../../../store/states/store.hooks';
import * as PAGE_STY from '../../../styles/styled-components/base/modules/PageTabs.style';

interface Props {}

function PageTabs({}: Props): ReactElement {
  const dispatch = useAppDispatch()
  const storeSearchData = useAppSelector(store_search_data)

  const searchTypes = ['All', 'Free', 'Paid']
  const searchSorts = ['Best', 'New', 'Top']
  const { searchOptions } = storeSearchData
  const { storeSort, storeType } = searchOptions

  const selectType = (type: string) => {
    dispatch(selectTypeSearchOption({ type: type, page: 'store' }))
  }
  const selectSort = (sort: string) => {
    dispatch(selectSortSearchOption({ sort: sort, page: 'store' }))
  }

  return (
    <PAGE_STY.TabsContainer_STY>
      <PAGE_STY.Tabs_STY>
        <PAGE_STY.TabButtonsCont_STY>
          <PAGE_STY.TabButton_STY
            onClick={() => selectType(searchTypes[0])}
            id="tab1"
            tabFocus={storeType.includes(searchTypes[0])}
            name="tab"
          >
            <PAGE_STY.TabText_STY>{searchTypes[0]}</PAGE_STY.TabText_STY>
            {/* <Line/>      */}
          </PAGE_STY.TabButton_STY>

          <PAGE_STY.TabButtonSeperator_STY />

          <PAGE_STY.TabButton_STY
            onClick={() => selectType(searchTypes[1])}
            id="tab2"
            tabFocus={storeType.includes(searchTypes[1])}
            name="tab"
          >
            <PAGE_STY.TabText_STY style={{}}>{searchTypes[1]}</PAGE_STY.TabText_STY>
            {/* <Line/>         */}
          </PAGE_STY.TabButton_STY>

          <PAGE_STY.TabButtonSeperator_STY />

          <PAGE_STY.TabButton_STY
            onClick={() => selectType(searchTypes[2])}
            id="tab3"
            tabFocus={storeType.includes(searchTypes[2])}
            name="tab"
          >
            <PAGE_STY.TabText_STY style={{}}>{searchTypes[2]}</PAGE_STY.TabText_STY>
            {/* <Line  />    */}
          </PAGE_STY.TabButton_STY>
        </PAGE_STY.TabButtonsCont_STY>
      </PAGE_STY.Tabs_STY>

      <PAGE_STY.TabTagsAndResults_STY>
        <PAGE_STY.TabResults_STY>{storeSearchData.results_number} results </PAGE_STY.TabResults_STY>

        <PAGE_STY.TabTagsCont_STY>
          <PAGE_STY.TabTags_STY
            name="tag"
            tagFocus={storeSort.includes(searchSorts[0])}
            onClick={() => selectSort(searchSorts[0])}
          >
            {searchSorts[0]}
          </PAGE_STY.TabTags_STY>
          <PAGE_STY.TabTags_STY
            name="tag"
            tagFocus={storeSort.includes(searchSorts[1])}
            onClick={() => selectSort(searchSorts[1])}
          >
            {searchSorts[1]}
          </PAGE_STY.TabTags_STY>
          <PAGE_STY.TabTags_STY
            name="tag"
            tagFocus={storeSort.includes(searchSorts[2])}
            onClick={() => selectSort(searchSorts[2])}
          >
            {searchSorts[2]}
          </PAGE_STY.TabTags_STY>
        </PAGE_STY.TabTagsCont_STY>
      </PAGE_STY.TabTagsAndResults_STY>
    </PAGE_STY.TabsContainer_STY>
  )
}

export default PageTabs
