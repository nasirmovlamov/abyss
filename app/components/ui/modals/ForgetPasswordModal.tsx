import { FormEvent, ReactElement } from 'react'
import {
  changeModalAction,
  forget_Password_Errors,
  login_Form_OnChange,
  login_form,
  user_forget_pass,
  user_modals,
} from '../../../store/slices/User.slice'
import { useAppDispatch, useAppSelector } from '../../../store/states/store.hooks'

import { ModalFORM_STY } from '../../../styles/ui/modules/Modal_Style/ModalCont.style'

interface Props {}

function ForgetPasswordModal({}: Props): ReactElement {
  const dispatch = useAppDispatch()
  const allModals = useAppSelector(user_modals)
  const loginForm = useAppSelector(login_form)
  const forgetPassErrors = useAppSelector(forget_Password_Errors)
  const userForgetPass = useAppSelector(user_forget_pass)

  const formSubmit = async (e: FormEvent) => {
    e.preventDefault()
    dispatch(authThunk.forgetPasswordThunk(loginForm.email))
  }

  return (
    <ModalFORM_STY onSubmit={formSubmit}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          marginTop: '0px',
          marginBottom: '10px',
        }}
      >
        <button
          type="button"
          onClick={() => dispatch(changeModalAction('forgetPassword'))}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          X
        </button>
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
        <h2>Forget Password</h2>
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
          type="email"
          name="email"
          value={loginForm.email}
          onChange={(e) => dispatch(login_Form_OnChange(e.target))}
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
        <button type="submit">Send Code</button>
        <button type="button" onClick={() => dispatch(changeModalAction('login'))}>
          Go back
        </button>
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
        {userForgetPass &&
          Object.keys(userForgetPass.errors).map((key, index) => {
            return <p key={index}>{userForgetPass.errors[key]}</p>
          })}
      </div>
    </ModalFORM_STY>
  )
}

export default ForgetPasswordModal