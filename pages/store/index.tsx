import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import BeatLoader from 'react-spinners/BeatLoader';

import MainPartOfPage from '../../app/components/layouts/PageMain.layout';
import PageSideLayout from '../../app/components/layouts/PageSide.layout';
import ChatBox from '../../app/components/modules/ChatBox';
import SearchBoxStaticVersion from '../../app/components/modules/SearchBoxStaticVersion';
import ListingStoreProduct from '../../app/components/templates/ListingStoreProduct';
import PageTabs from '../../app/components/ui/tabs/ForumPageTabs';
import { is_chatbox_opened } from '../../app/store/slices/ChatBox.slice';
import { search_query, store_search_data } from '../../app/store/slices/SearchBox.slice';
import { useAppDispatch, useAppSelector } from '../../app/store/states/store.hooks';
import { PageDefaultStyle } from '../../app/styles/pages/Page.styled';
import { StorePage } from '../../app/styles/pages/Pages.style';

interface Props { }

function Store({ }: Props): ReactElement {
  const [inViewRefLoaderDown, inViewLoaderDown] = useInView()
  const dispatch = useAppDispatch()
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
  }, [inViewLoaderDown])

  return (
    <PageDefaultStyle>
      <PageSideLayout side="left">test</PageSideLayout>

      <MainPartOfPage>
        <StorePage>
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
        </StorePage>
      </MainPartOfPage>

      <PageSideLayout side="right">{<>{isChatBoxOpened && <ChatBox />}</>}</PageSideLayout>
    </PageDefaultStyle>
  )
}

export default Store
