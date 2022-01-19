import React, { Component, useEffect, useState } from 'react'

import SearchBoxStaticVersion from '../../../components/SearchBoxStaticVersion'
import StoreLayout from '../../../components/Store/StoreLayout'
import StoreValidate from '../../../components/Store/StoreValidate'

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
