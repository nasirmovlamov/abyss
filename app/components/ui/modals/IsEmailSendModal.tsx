import { changeModalAction, login_form, login_Form_OnChange, user_forget_pass } from 'app/store/slices/User.slice';
import { useAppDispatch, useAppSelector } from 'app/store/states/store.hooks';
import { forgetPasswordThunk } from 'app/store/thunks/User.thunk';
import { ModalFORM_STY } from 'app/styles/styled-components/base/modules/Modal_Style/ModalCont.style';
import { FormEvent } from 'react';

const IsEmailSendModal = () => {
  const dispatch = useAppDispatch()
  const loginForm = useAppSelector(login_form)
  const userForgetPass = useAppSelector(user_forget_pass)

  const formSubmit = async (e: FormEvent) => {
    e.preventDefault()
    dispatch(forgetPasswordThunk(loginForm.email))
  }

  return (
    <ModalFORM_STY onSubmit={formSubmit}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px',
          marginBottom: '10px',
        }}
      >
        <h2>Email has been sent Successfully!</h2>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px',
          marginBottom: '10px',
        }}
      >
        <label style={{ width: '150px', marginBottom: '10px', alignSelf: 'flex-start' }} htmlFor="">
          email
        </label>
        <input
          disabled={true}
          type="email"
          name="email"
          value={loginForm.email}
          onChange={(e) => dispatch(login_Form_OnChange(e))}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '5px',
          marginTop: '20px',
          marginBottom: '10px',
        }}
      >
        <button type="submit">Send Again</button>
        <button type="button" onClick={() => dispatch(changeModalAction('forgetPassword'))}>
          Go back
        </button>
      </div>
      {userForgetPass.status === 'failed' && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '20px',
            marginBottom: '10px',
          }}
        >
          {userForgetPass &&
            userForgetPass.errors &&
            Object.keys(userForgetPass.errors).map((key, index) => (
              <p key={index}>{userForgetPass.errors[key]}</p>
            ))}
        </div>
      )}
      {userForgetPass.status !== 'pending' && (
        <p
          style={{
            color: userForgetPass.status === 'failed' ? 'red' : 'green',
            textAlign: 'center',
          }}
        >
          {userForgetPass.message}
        </p>
      )}
    </ModalFORM_STY>
  )
}

export default IsEmailSendModal
