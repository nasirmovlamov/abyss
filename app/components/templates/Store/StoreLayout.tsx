import { inChangePositionOfFilters, outChangePositionOfFilters } from 'app/store/slices/PageFilters.slice';
import { changeProductTabActiveWithoutScroll } from 'app/store/slices/PageTabs.slice';
import { goProductPage, single_product_data } from 'app/store/slices/SingleProduct.slice';
import { is_logged } from 'app/store/slices/User.slice';
import { useAppDispatch, useAppSelector } from 'app/store/states/store.hooks';
import { getSingleProduct } from 'app/store/thunks/SingleProduct.thunk';
import { MainLayoutStyle } from 'app/styles/styled-components/base/pages/Page.style';
import { useRouter } from 'next/router';
import { ReactNode, useLayoutEffect } from 'react';

import MainPartOfPage from '../../layouts/Main.layout';
import PageSideLayout from '../../layouts/PageSide.layout';

const StoreLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const singleProductData = useAppSelector(single_product_data)
  const dispatch = useAppDispatch()
  const isLogged = useAppSelector(is_logged)

  useLayoutEffect(() => {
    if (router.isReady) {
      if (singleProductData.data === null && singleProductData.status !== 'loading') {
        if (!isLogged) {
          dispatch(changeProductTabActiveWithoutScroll({ id: 3 }))
        } else {
          dispatch(changeProductTabActiveWithoutScroll({ id: 2 }))
        }
        dispatch(goProductPage({ id: router.query.id }))
        dispatch(getSingleProduct({ id: router.query.id, slug: router.query.slug }))
      }
    }
  }, [router])

  const hoverSideLeft = () => {
    dispatch(inChangePositionOfFilters(null))
  }

  const hoverSideRight = () => {
    dispatch(outChangePositionOfFilters(null))
  }

  const leftPart = <div>test</div>

  return (
    <MainLayoutStyle>
      <PageSideLayout onMouseEnter={hoverSideLeft} onMouseLeave={hoverSideRight} side={'left'}>
        test
      </PageSideLayout>

      <MainPartOfPage>
        {singleProductData.data !== null && <>{children}</>}
        {singleProductData.status === 'loading' && (
          <p style={{ fontSize: '30px', color: 'white', textAlign: 'center', padding: '30px' }}>
            LOADING ...
          </p>
        )}
        {singleProductData.status === 'error' && (
          <p style={{ fontSize: '30px', color: 'red', textAlign: 'center', padding: '30px' }}>
            ERROR ...
          </p>
        )}
        {singleProductData.data === null && <></>}
      </MainPartOfPage>

      <PageSideLayout side={'right'}>test</PageSideLayout>
    </MainLayoutStyle>
  )
}

export default StoreLayout
