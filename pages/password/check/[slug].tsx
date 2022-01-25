import { useChangePass } from 'app/hooks/useChangePass.hook';
import {
  change_password_data,
  form_change_password_data,
  user_data,
  user_forget_pass_check_token,
} from 'app/store/slices/User.slice';
import { useAppDispatch, useAppSelector } from 'app/store/states/store.hooks';
import { checkForgetPasswordTokenThunk } from 'app/store/thunks/User.thunk';
import * as ChangePassSTY from 'app/styles/styled-components/base/modules/ForgetPassword.style';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

interface Props {}

const ForgotPassChange = (props: Props) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const userForgetPassCheckToken: { status: string; message: string; errors: any } = useAppSelector(
    user_forget_pass_check_token,
  )
  const { changePass, change_pass_onChange, change_pass_onBlur } = useChangePass({
    status: userForgetPassCheckToken.status,
    errors: userForgetPassCheckToken.errors,
  })
  const changePasswordData = useAppSelector(change_password_data)
  const formChangePasswordData = useAppSelector(form_change_password_data)
  const userData = useAppSelector(user_data)

  useEffect(() => {
    if (router.isReady) {
      dispatch(checkForgetPasswordTokenThunk(router.asPath))
    }
  }, [router])

  const { errors, message } = userForgetPassCheckToken

  const goHome = () => {
    router.push('/')
  }

  if (userForgetPassCheckToken.status === 'pending') {
    return (
      <div
        style={{
          paddingTop: '25px',
          rowGap: '10px',
          width: '100%',
          height: '200px',
          backgroundColor: 'black',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          marginTop: '50px',
          marginBottom: '50px',
          flexDirection: 'column',
        }}
      >
        <h1 style={{ color: 'white', fontSize: '45px', padding: '40px' }}> LOADING </h1>
      </div>
    )
  } else if (userForgetPassCheckToken.status === 'failed') {
    return (
      <div
        style={{
          paddingTop: '25px',
          rowGap: '10px',
          width: '100%',
          height: '200px',
          backgroundColor: 'black',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          marginTop: '50px',
          marginBottom: '50px',
          flexDirection: 'column',
        }}
      >
        <p>
          {Object.keys(errors).map((key: any) => (
            <p style={{ textAlign: 'center', color: 'red', fontSize: '25px' }} key={key}>
              {errors[key]}
            </p>
          ))}
          <p style={{ textAlign: 'center', color: 'red', fontSize: '25px' }} key={'message'}>
            {message}
          </p>
        </p>
        <button style={{}} onClick={goHome}>
          Go back to homepage
        </button>
      </div>
    )
  } else if (userForgetPassCheckToken.status === 'success') {
    return (
      <div
        style={{
          paddingTop: '25px',
          paddingBottom: '25px',
          rowGap: '10px',
          width: '100%',
          height: 'auto',
          backgroundColor: 'black',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          marginTop: '50px',
          marginBottom: '50px',
          flexDirection: 'column',
        }}
      >
        <p style={{ fontSize: '25px', color: 'green' }}>{message}</p>
        {changePasswordData.status === 'success' && (
          <div>
            <h1>Your password has been changed.</h1>
            <button onClick={goHome}>Go back to homepage</button>
          </div>
        )}
        {changePasswordData.status === 'pending' && (
          <ChangePassSTY.ForgetPassForm action="" onSubmit={changePass}>
            <h1>Enter new Password</h1>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={formChangePasswordData.data.password}
                onChange={change_pass_onChange}
                onBlur={change_pass_onBlur}
              />
              <span style={{ color: 'red' }}>
                {formChangePasswordData.errors.password.errorMessage}
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="password_confirmation">Confirm Password</label>
              <input
                type="password"
                name="password_confirmation"
                value={formChangePasswordData.data.password_confirmation}
                onChange={change_pass_onChange}
                onBlur={change_pass_onBlur}
              />
              <span style={{ color: 'red' }}>
                {formChangePasswordData.errors.password_confirmation.errorMessage}
              </span>
            </div>

            <div className="backend-errors">
              {changePasswordData.errors &&
                Object.keys(changePasswordData.errors).map((key: any) => (
                  <p key={key} style={{ color: 'red' }}>
                    {changePasswordData.errors[key]}
                  </p>
                ))}
            </div>

            <button type="submit" disabled={!formChangePasswordData.isValid}>
              submit
            </button>
          </ChangePassSTY.ForgetPassForm>
        )}
        <p style={{ color: 'green' }}>{changePasswordData.message}</p>
      </div>
    )
  } else {
    return <>Ups, something went wrong...</>
  }
  return <></>
}

export default ForgotPassChange
