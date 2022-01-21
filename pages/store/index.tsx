import ChatBox from 'app/components/modules/ChatBox';
import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import BeatLoader from 'react-spinners/BeatLoader';

import MainLayout from '../../app/components/layouts/Main.layout';
import SearchBoxStaticVersion from '../../app/components/modules/SearchBoxStaticVersion';
import ListingStoreProduct from '../../app/components/templates/ListingStoreProduct';
import PageTabs from '../../app/components/ui/tabs/ForumPageTabs';
import { is_chatbox_opened } from '../../app/store/slices/ChatBox.slice';
import { search_query, store_search_data } from '../../app/store/slices/SearchBox.slice';
import { useAppSelector } from '../../app/store/states/store.hooks';
import { StorePageStyle } from '../../app/styles/styled-components/pages/Pages.style';

function StorePage() {
  const [inViewRefLoaderDown, inViewLoaderDown] = useInView()
  const storeSearchData = useAppSelector(store_search_data)
  const searchQuery = useAppSelector(search_query)

  const [storeListingProducts, setstoreListingProducts] = useState([])
  const isChatBoxOpened = useAppSelector(is_chatbox_opened)

  const getStoreProducts = async () => {
    try {
      const response = await axios.get('https://610685e81f34870017437966.mockapi.io/store')
      setstoreListingProducts(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (inViewLoaderDown) {
      const data = { query: searchQuery, from: storeSearchData.fromNumber }
      // dispatch(storeSearchInfinity(data))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewLoaderDown])

  const leftPart = <p>Test</p>
  const rightPart = isChatBoxOpened && <ChatBox />

  return (
    <MainLayout left={leftPart} right={rightPart}>
      <StorePageStyle>
        <SearchBoxStaticVersion />

        <PageTabs />
        {storeSearchData.data.map((element: any, index: number) => (
          <ListingStoreProduct key={index} data={element} />
        ))}

        {storeSearchData.status === 'loaded' &&
          storeSearchData.results_number > storeSearchData.data.length && (
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
                loading={storeSearchData.status === 'loaded'}
                size={10}
              />
            </div>
          )}

        {storeSearchData.status === 'error' && <div>Error ...</div>}

        {storeSearchData.status === 'loaded' && (
          <div style={{ color: 'gray', fontSize: '20px' }}>No more records found</div>
        )}
      </StorePageStyle>
    </MainLayout>
  )
}

export default StorePage
