import ListingStoreProduct from 'app/components/templates/ListingStoreProduct';
import { productGet } from 'app/store/slices/product.slice';
import { useAppDispatch, useAppSelector } from 'app/store/states/store.hooks';
import { ContentBlock } from 'draft-js';
import { useEffect } from 'react';

interface ProductItemProps {
  id: number
}

const ProductItem = ({
  blockProps,
  block,
}: {
  blockProps: ProductItemProps
  block: ContentBlock
}) => {
  const dispatch = useAppDispatch()
  const productState = useAppSelector((state) => state.product)
  const { id } = blockProps

  useEffect(() => {
    dispatch(productGet(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return productState.currentItem ? (
    <ListingStoreProduct data={productState.currentItem} />
  ) : (
    block.getText()
  )
}

export default ProductItem
