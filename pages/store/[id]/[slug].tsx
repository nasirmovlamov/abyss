import SearchBoxStaticVersion from 'app/components/modules/SearchBoxStaticVersion';
import StoreLayout from 'app/components/templates/Store/StoreLayout';
import StoreValidate from 'app/components/templates/Store/StoreValidate';
import React from 'react';

const SingleProductPage = () => {
  return (
    <StoreLayout>
      <SearchBoxStaticVersion />
      <StoreValidate />
    </StoreLayout>
  )
}

export default SingleProductPage
