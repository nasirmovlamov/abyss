import { authVerifyEmail } from 'app/store/slices/auth.slice';
import { useAppDispatch, useAppSelector } from 'app/store/states/store.hooks';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';

const EmailVerify = () => {
  const dispatch = useAppDispatch()
  const authState = useAppSelector((state) => state.auth)
  const router = useRouter()

  useEffect(() => {
    if (!authState.user?.isVerified) {
      dispatch(authVerifyEmail(router.asPath))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <></>
}

export default EmailVerify
