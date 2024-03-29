import { changeModalAction, register_errors, register_form, register_Form_OnChange } from 'app/store/slices/User.slice';
import { useAppDispatch, useAppSelector } from 'app/store/states/store.hooks';
import { userRegister } from 'app/store/thunks/User.thunk';
import * as Form_STY from 'app/styles/styled-components/base/elements/Form.style';
import { ModalFORM_STY } from 'app/styles/styled-components/base/modules/Modal_Style/ModalCont.style';
import { FormEvent, ReactElement } from 'react';

const RegisterModal = () => {
  const dispatch = useAppDispatch()
  const registerErrors = useAppSelector(register_errors)
  const registerForm = useAppSelector(register_form)

  const formSubmit = (e: FormEvent) => {
    e.preventDefault()
    try {
      dispatch(userRegister(registerForm))
    } catch (error) {}
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
          onClick={() => dispatch(changeModalAction('register'))}
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

      <Form_STY.F_Title_STY>Register</Form_STY.F_Title_STY>

      <Form_STY.InputGroup_STY>
        <Form_STY.Label_STY htmlFor="username">Username</Form_STY.Label_STY>
        <Form_STY.Input_STY
          error={registerErrors.name}
          name="name"
          value={registerForm.name}
          onChange={(e) =>
            dispatch(register_Form_OnChange({ name: e.target.name, value: e.target.value }))
          }
        />
        <Form_STY.Error_STY error={registerErrors.name}>
          {registerErrors.name &&
            registerErrors.name.map((error: any, index: any) => <span key={index}> {error}</span>)}
        </Form_STY.Error_STY>
      </Form_STY.InputGroup_STY>

      <Form_STY.InputGroup_STY>
        <Form_STY.Label_STY htmlFor="">Email</Form_STY.Label_STY>
        <Form_STY.Input_STY
          error={registerErrors.email}
          name="email"
          value={registerForm.email}
          onChange={(e) =>
            dispatch(register_Form_OnChange({ name: e.target.name, value: e.target.value }))
          }
        />
        <Form_STY.Error_STY error={registerErrors.email}>
          {registerErrors.email &&
            registerErrors.email.map((error: any, index: any) => <span key={index}>{error}</span>)}
        </Form_STY.Error_STY>
      </Form_STY.InputGroup_STY>

      <Form_STY.InputGroup_STY>
        <Form_STY.Label_STY htmlFor="password">Password</Form_STY.Label_STY>
        <Form_STY.Input_STY
          error={registerErrors.password}
          name="password"
          value={registerForm.password}
          onChange={(e) =>
            dispatch(register_Form_OnChange({ name: e.target.name, value: e.target.value }))
          }
        />
        <Form_STY.Error_STY error={registerErrors.password}>
          {registerErrors.password &&
            registerErrors.password.map((error: any, index: any) => (
              <span key={index}>{error}</span>
            ))}
        </Form_STY.Error_STY>
      </Form_STY.InputGroup_STY>

      <Form_STY.F_ButtonCont_STY>
        <Form_STY.F_Button_STY type="submit">
          <span>Submit</span>
        </Form_STY.F_Button_STY>

        <Form_STY.F_Button_STY onClick={() => dispatch(changeModalAction('login'))}>
          <span>Go Back</span>
        </Form_STY.F_Button_STY>
      </Form_STY.F_ButtonCont_STY>
    </ModalFORM_STY>
  )
}

export default RegisterModal
