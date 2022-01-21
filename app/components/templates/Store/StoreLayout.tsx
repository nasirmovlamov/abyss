import { useRouter } from 'next/router';
import { FC, useLayoutEffect } from 'react';

import { inChangePositionOfFilters, outChangePositionOfFilters } from '../../../store/slices/PageFilters.slice';
import { changeProductTabActiveWithoutScroll } from '../../../store/slices/PageTabs.slice';
import { goProductPage, single_product_data } from '../../../store/slices/SingleProduct.slice';
import { is_logged } from '../../../store/slices/User.slice';
import { useAppDispatch, useAppSelector } from '../../../store/states/store.hooks';
import { getSingleProduct } from '../../../store/thunks/SingleProduct.thunk';
import { PageDefaultStyle } from '../../../styles/pages/Page.styled';
import MainPartOfPage from '../../layouts/PageMain.layout';
import PageSideLayout from '../../layouts/PageSide.layout';


interface Props { }

const StoreLayout: FC<Props> = ({ children, ...props }) => {
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

  return (
    <PageDefaultStyle>
      <PageSideLayout
        onMouseEnter={hoverSideLeft}
        onMouseLeave={hoverSideRight}
        side={'left'}
      >test</PageSideLayout>

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
    </PageDefaultStyle>
  )
}

export default StoreLayout