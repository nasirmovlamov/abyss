import { Form } from 'app/interfaces';
import { authLogin } from 'app/store/slices/auth.slice';
import { changeModalAction } from 'app/store/slices/User.slice';
import { useAppDispatch, useAppSelector } from 'app/store/states/store.hooks';
import * as Form_STY from 'app/styles/styled-components/base/elements/Form.style';
import { ModalFORM_STY } from 'app/styles/styled-components/base/modules/Modal_Style/ModalCont.style';
import Utils from 'app/utils';
import { FormEvent, useEffect, useState } from 'react';

const LoginModal = () => {
  const dispatch = useAppDispatch()
  const authState = useAppSelector((state) => state.auth)
  const [loginForm, setLoginForm] = useState<Form>({
    controls: {
      email: {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email',
        validation: {
          required: true,
          email: true,
        },
        value: '',
        valid: false,
        touched: false,
        error: '',
      },
      password: {
        name: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your password',
        validation: {
          required: true,
          min: 6,
        },
        value: '',
        valid: false,
        touched: false,
        error: '',
      },
    },
    valid: false,
    error: '',
  })
  const [serverErrors, setServerErrors] = useState<string[]>([])
  const { errorMsg, errors } = authState

  // Handle errors
  useEffect(() => {
    if (errorMsg) setLoginForm({ ...loginForm, error: errorMsg })

    // Convert errors object to array
    const errorsArray: string[] = []
    if (errors) {
      for (let key in errors) {
        errors[key].forEach((error: string) => errorsArray.push(error))
      }
    }
    setServerErrors(errorsArray)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMsg, errors])

  // Handle form submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (loginForm.valid) {
      dispatch(
        authLogin({
          email: loginForm.controls.email.value,
          password: loginForm.controls.password.value,
        }),
      )
    }
  }

  // Handle value change of a control
  const onValueChange = (itemId: string, value: string) => {
    const { updatedForm, formValid } = Utils.valueChangedHandler(loginForm.controls, itemId, value)

    setLoginForm({ ...loginForm, controls: updatedForm, valid: formValid })
  }

  return (
    <ModalFORM_STY>
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

      <span style={{ color: 'red', marginBottom: 8 }}>{errorMsg}</span>

      <div style={{ color: 'red', marginBottom: 20 }}>
        {serverErrors.map((error: string, index: number) => (
          <div style={{ marginBottom: 4 }} key={index}>
            {error}
          </div>
        ))}
      </div>

      {Utils.formToArray(loginForm).map((item) => (
        <Form_STY.InputGroup_STY style={{ marginBottom: 24 }} key={item.config.name}>
          <Form_STY.Label_STY htmlFor={item.id}>{item.config.label}</Form_STY.Label_STY>
          <Form_STY.Input_STY
            error={item.config.touched && !item.config.valid}
            type={item.config.type}
            name={item.config.name}
            placeholder={item.config.placeholder}
            id={item.id}
            value={item.config.value}
            onChange={(e) => onValueChange(item.config.name, e.target.value)}
          />

          <Form_STY.Error_STY error={item.config.touched && !item.config.valid}>
            <span>{item.config.error}</span>
          </Form_STY.Error_STY>
        </Form_STY.InputGroup_STY>
      ))}

      <Form_STY.F_ButtonCont_STY>
        <Form_STY.F_Button_STY disabled={!loginForm.valid} onClick={handleSubmit}>
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
          Forget Password ?
        </Form_STY.F_ForgetPass_STY>
      </Form_STY.F_FlexerEnd_STY>
    </ModalFORM_STY>
  )
}

export default LoginModal
