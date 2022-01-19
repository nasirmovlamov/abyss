import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { is_logged } from '../../app/feature/User.slice';
import { useAppSelector } from '../../app/store/hooks';
import StoreMiddlePartLayout from './StoreMiddlePartLayout';
import StoreProductForNonSubscribed from './StoreProductForNonSubscribed';
import StoreProductForSubscribed from './StoreProductForSubscribed';

interface Props {

}

const StoreValidate = (props: Props) => {
  const router = useRouter()
  const isLogged = useAppSelector(is_logged)

  if (isLogged) {
    return (
      <StoreMiddlePartLayout>
        <StoreProductForSubscribed />
      </StoreMiddlePartLayout>
    )
  }

  return (
    <StoreMiddlePartLayout>
      <StoreProductForNonSubscribed />
    </StoreMiddlePartLayout>
  )
}

export default StoreValidate
