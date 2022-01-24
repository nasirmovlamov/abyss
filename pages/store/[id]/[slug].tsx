import React, { Component, useEffect, useState } from 'react'

import SearchBoxStaticVersion from '../../../app/components/modules/SearchBoxStaticVersion';
import StoreLayout from '../../../app/components/templates/Store/StoreLayout';
import StoreValidate from '../../../app/components/templates/Store/StoreValidate';

interface Props {}

const SingleProductPage = (props: Props) => {
  return (
    <StoreLayout>
      <SearchBoxStaticVersion />
      <StoreValidate />
    </StoreLayout>
  )
}

export default SingleProductPage
