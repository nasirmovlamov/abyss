import { changeModalAction, login_errors, login_form, login_Form_OnChange, user_modals } from 'app/store/slices/User.slice';
import { useAppDispatch, useAppSelector } from 'app/store/states/store.hooks';
import { userLogin } from 'app/store/thunks/User.thunk';
import * as Form_STY from 'app/styles/styled-components/base/elements/Form.style';
import { ModalFORM_STY } from 'app/styles/styled-components/base/modules/Modal_Style/ModalCont.style';
import { FormEvent } from 'react';

const LoginModal = () => {
  const dispatch = useAppDispatch()
  const loginErrors = useAppSelector(login_errors)
  const allModals = useAppSelector(user_modals)
  const loginForm = useAppSelector(login_form)

  const formSubmit = async (e: FormEvent) => {
    e.preventDefault()
    dispatch(userLogin(loginForm))
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
        <Form_STY.F_CloseButton_STY
          type="button"
          onClick={() => dispatch(changeModalAction('login'))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </Form_STY.F_CloseButton_STY>
      </div>

      <Form_STY.F_Title_STY>Login</Form_STY.F_Title_STY>

      <Form_STY.InputGroup_STY>
        <Form_STY.Label_STY htmlFor="">Email</Form_STY.Label_STY>
        <Form_STY.Input_STY
          error={loginErrors.email ? true : false}
          type="email"
          name="email"
          value={loginForm.email}
          onChange={(e) =>
            dispatch(login_Form_OnChange({ name: e.target.name, value: e.target.value }))
          }
        />
        <Form_STY.Error_STY error={loginErrors.email ? true : false}>
          {loginErrors.email &&
            loginErrors.email.map((error: any, index: any) => <span key={index}>{error}</span>)}
        </Form_STY.Error_STY>
      </Form_STY.InputGroup_STY>

      <Form_STY.InputGroup_STY>
        <Form_STY.Label_STY htmlFor="password">Password</Form_STY.Label_STY>
        <Form_STY.Input_STY
          error={loginErrors.password ? true : false}
          type="password"
          name="password"
          value={loginForm.password}
          onChange={(e) =>
            dispatch(login_Form_OnChange({ name: e.target.name, value: e.target.value }))
          }
        />
        <Form_STY.Error_STY error={loginErrors.password ? true : false}>
          {loginErrors.password &&
            loginErrors.password.map((error: any, index: number) => (
              <span key={index}>{error}</span>
            ))}
        </Form_STY.Error_STY>
      </Form_STY.InputGroup_STY>

      <Form_STY.F_ButtonCont_STY>
        <Form_STY.F_Button_STY type="submit">
          <span>Submit</span>
        </Form_STY.F_Button_STY>

        <Form_STY.F_Button_STY onClick={() => dispatch(changeModalAction('register'))}>
          <span>Register</span>
        </Form_STY.F_Button_STY>
      </Form_STY.F_ButtonCont_STY>

      <Form_STY.F_FlexerEnd_STY>
        <Form_STY.F_ForgetPass_STY
          type="button"
          onClick={() => dispatch(changeModalAction('forgetPassword'))}
        >
          Forget Password ?{' '}
        </Form_STY.F_ForgetPass_STY>
      </Form_STY.F_FlexerEnd_STY>
    </ModalFORM_STY>
  )
}

export default LoginModal
