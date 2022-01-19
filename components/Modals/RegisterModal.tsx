import React, { FormEvent, ReactElement, useEffect, useState } from 'react';

import {
    changeModalAction,
    register_errors,
    register_form,
    register_Form_OnChange,
    user_modals,
} from '../../app/feature/User.slice';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import * as authThunk from '../../app/thunks/AuthThunk';
import { ModalFORM_STY } from '../../styles/components/styled-blocks/Modal_Style/ModalCont.style';
import * as Form_STY from '../../styles/components/styled-elements/Form.style';

interface Props {
}

function RegisterModal({ }: Props): ReactElement {
    const dispatch = useAppDispatch()
    const registerErrors = useAppSelector(register_errors)
    const allModals = useAppSelector(user_modals)
    const registerForm = useAppSelector(register_form)


    const formSubmit = (e: FormEvent) => {
        e.preventDefault()
        try {
            dispatch(authThunk.userRegister(registerForm))
        } catch (error) {
        }
    }


    return (
        <ModalFORM_STY onSubmit={formSubmit} >
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'flex-end', marginTop: "0px", marginBottom: "10px" }}>
                <Form_STY.F_CloseButton_STY type="button" onClick={() => dispatch(changeModalAction('register'))} >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
                </Form_STY.F_CloseButton_STY>
            </div>

            <Form_STY.F_Title_STY>Register</Form_STY.F_Title_STY>


            <Form_STY.InputGroup_STY>
                <Form_STY.Label_STY htmlFor="username">Username</Form_STY.Label_STY>
                <Form_STY.Input_STY error={registerErrors.name} name="name" value={registerForm.name} onChange={(e) => dispatch(register_Form_OnChange({ name: e.target.name, value: e.target.value }))} />
                <Form_STY.Error_STY error={registerErrors.name} >{registerErrors.name && registerErrors.name.map((error, index) => <span key={index}> {error}</span>)}</Form_STY.Error_STY>
            </Form_STY.InputGroup_STY>

            <Form_STY.InputGroup_STY>
                <Form_STY.Label_STY htmlFor="">Email</Form_STY.Label_STY >
                <Form_STY.Input_STY error={registerErrors.email} name="email" value={registerForm.email} onChange={(e) => dispatch(register_Form_OnChange({ name: e.target.name, value: e.target.value }))} />
                <Form_STY.Error_STY error={registerErrors.email}>{registerErrors.email && registerErrors.email.map((error, index) => <span key={index}>{error}</span>)}</Form_STY.Error_STY>
            </Form_STY.InputGroup_STY>

            <Form_STY.InputGroup_STY>
                <Form_STY.Label_STY htmlFor="password">Password</Form_STY.Label_STY >
                <Form_STY.Input_STY error={registerErrors.password} name="password" value={registerForm.password} onChange={(e) => dispatch(register_Form_OnChange({ name: e.target.name, value: e.target.value }))} />
                <Form_STY.Error_STY error={registerErrors.password}>{registerErrors.password && registerErrors.password.map((error, index) => <span key={index}>{error}</span>)}</Form_STY.Error_STY>
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
