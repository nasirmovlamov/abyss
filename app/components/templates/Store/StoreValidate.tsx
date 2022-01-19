import { useRouter } from 'next/router';

import { is_logged } from '../../../store/slices/User.slice';
import { useAppSelector } from '../../../store/states/store.hooks';
import StoreMiddlePartLayout from './StoreMiddlePartLayout';
import StoreProductForNonSubscribed from './StoreProductForNonSubscribed';
import StoreProductForSubscribed from './StoreProductForSubscribed';

interface Props { }

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
