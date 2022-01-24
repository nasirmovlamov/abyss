import React, { ReactElement, useEffect, useLayoutEffect, useState } from 'react';
import { changePositionOfFilters, stay_in_focus } from '../../app/store/slices/PageFilters.slice';
import {
  forum_search_data,
  search_data,
  search_query,
  setScrollPositionYForum,
} from '../../app/store/slices/SearchBox.slice';
import { useAppDispatch, useAppSelector } from '../../app/store/states/store.hooks';

import { BeatLoader } from 'react-spinners';
import { ForumPage } from '../../app/styles/pages/Pages.style';
import ForumQuestion from '../../app/components/ui/elements/ForumQuestion';
import MainPartOfPage from '../../app/components/layouts/PageMain.layout';
import { PageDefaultStyle } from '../../app/styles/pages/Page.styled';
import PageSideLayout from '../../app/components/layouts/PageSide.layout';
import PageTabs from '../../app/components/ui/tabs/ForumPageTabs';
import SearchBoxStaticVersion from '../../app/components/modules/SearchBoxStaticVersion';
import SideProductCont from '../../app/components/ui/elements/SideProductCont';
import { forumSearchInfinity } from '../../app/store/thunks/SearchBox.thunk';
import { is_chatbox_opened } from '../../app/store/slices/ChatBox.slice';
import { side_product_data } from '../../app/store/slices/SideProducts.slice';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';
import { useScrollYPosition } from 'react-use-scroll-position';

interface Props { }

function Forum({ }: Props): ReactElement {
  const [inViewRefLoaderDown, inViewLoaderDown] = useInView()
  const sideProductContData = useAppSelector(side_product_data)
  const scrollY = useScrollYPosition()
  const dispatch = useAppDispatch()
  const forumSearchData = useAppSelector(forum_search_data)
  const searchQuery = useAppSelector(search_query)
  const router = useRouter()
  const isChatBoxOpened = useAppSelector(is_chatbox_opened)
  const stayInFocus = useAppSelector(stay_in_focus)
  const searchData = useAppSelector(search_data)

  const scrollToY = () => {
    window.scrollTo({
      top: forumSearchData.scrollY,
    })
  }

  useEffect(() => {
    scrollToY()
  }, [])

  useEffect(() => {
    if (inViewLoaderDown) {
      const data = {
        query: searchQuery,
        from: forumSearchData.fromNumber,
        forumType: forumSearchData.searchOptions.forumType,
        filterTags: searchData.filters,
        excludedFilters: searchData.exculudedFilters,
      }
      dispatch(forumSearchInfinity(data))
    }
  }, [inViewLoaderDown])

  useLayoutEffect(() => {
    if (
      forumSearchData.searchOptions.forumSort !== '' &&
      forumSearchData.searchOptions.forumType !== ''
    ) {
      dispatch(
        forumSearchInfinity({
          query: searchQuery,
          from: 0,
          forumType: forumSearchData.searchOptions.forumType,
          filterTags: searchData.filters,
          excludedFilters: searchData.exculudedFilters,
        }),
      )
    }
  }, [
    forumSearchData.searchOptions.forumSort,
    forumSearchData.searchOptions.forumType,
    searchData.filters,
  ])

  useEffect(() => {
    dispatch(setScrollPositionYForum(scrollY))
  }, [scrollY])

  const handleMouseOver = () => {
    if (!stayInFocus) {
      dispatch(changePositionOfFilters(false))
    }
  }

  const handleMouseLeave = () => {
    if (!stayInFocus) {
      dispatch(changePositionOfFilters(true))
    }
  }

  return (
    <PageDefaultStyle>
      <PageSideLayout
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        side={'left'}
      >test</PageSideLayout>

      <MainPartOfPage>
        <ForumPage>
          <SearchBoxStaticVersion />
          <PageTabs />
          {forumSearchData.initialLoader ? (
            <>
              <BeatLoader color={'#b4b5b7'} loading={forumSearchData.initialLoader} size={10} />
            </>
          ) : (
            <>
              {forumSearchData.data.map((element: any, index: number) => (
                <ForumQuestion key={index} data={element} />
              ))}

              {!forumSearchData.allDataLoaded &&
                forumSearchData.results_number > forumSearchData.data.length && (
                  <div
                    ref={inViewRefLoaderDown}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                      rowGap: '10px',
                      marginTop: '50px',
                    }}
                  >
                    <BeatLoader
                      color={'#b4b5b7'}
                      loading={!forumSearchData.initialLoader}
                      size={20}
                    />
                  </div>
                )}

              {forumSearchData.status === 'error' && <div>Error ...</div>}

              {forumSearchData.allDataLoaded && (
                <div style={{ color: 'gray', fontSize: '20px' }}>No more records found</div>
              )}
            </>
          )}
        </ForumPage>
      </MainPartOfPage>

      <PageSideLayout side={'right'}>
        {sideProductContData.status === 'loaded' &&
          sideProductContData.selectedID !== null &&
          sideProductContData.products.length > 0 && <SideProductCont />}

        {/* {
                    <>
                        {isChatBoxOpened  && <ChatBox/>}
                    </>
                } */}
      </PageSideLayout>
    </PageDefaultStyle>
  )
}

export default Forum
