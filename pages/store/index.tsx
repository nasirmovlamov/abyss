import React, { ReactElement, useEffect, useState } from 'react'
import { search_query, store_search_data } from '../../app/feature/SearchBox.slice'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'

import BeatLoader from 'react-spinners/BeatLoader'
import ChatBox from '../../components/ChatBox'
import ListingStoreProduct from '../../components/ListingStoreProduct'
import MainPartOfPage from '../../components/MainPartOfPage'
import { PageDefaultStyle } from '../../styles/pages/Page.styled'
import PageTabs from '../../components/StorePageTabs'
import SearchBoxStaticVersion from '../../components/SearchBoxStaticVersion'
import SidePartOfPage from '../../components/SidePartOfPage'
import { StorePage } from '../../styles/pages/Pages.style'
import axios from 'axios'
import { is_chatbox_opened } from '../../app/feature/ChatBox.slice'
import { useInView } from 'react-intersection-observer'

interface Props {}

function Store({}: Props): ReactElement {
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
      <SidePartOfPage side="left"></SidePartOfPage>

      <MainPartOfPage>
        <StorePage>
          <SearchBoxStaticVersion />

          <PageTabs />
          {storeSearchData.data.map((element, index) => (
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

      <SidePartOfPage side="right">{<>{isChatBoxOpened && <ChatBox />}</>}</SidePartOfPage>
    </PageDefaultStyle>
  )
}

export default Store
