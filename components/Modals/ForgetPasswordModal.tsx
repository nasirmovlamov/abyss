import React, { FormEvent,ReactElement, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/store/hooks';
import * as authThunk from '../../app/thunks/AuthThunk'
import { changeModalAction, forget_Password_Errors, login_form, login_Form_OnChange, user_modals } from '../../app/feature/User.slice';
import { ModalFORM_STY } from '../../styles/components/styled-blocks/Modal_Style/ModalCont.style';
interface Props {
}

function ForgetPasswordModal({}: Props):ReactElement {
    const dispatch = useAppDispatch();
    const allModals = useAppSelector(user_modals)
    const loginForm = useAppSelector(login_form)
    const forgetPassErrors = useAppSelector(forget_Password_Errors);
    
    
    

    const formSubmit = async (e:FormEvent) => {
        e.preventDefault()
        dispatch(authThunk.forgetPasswordThunk(loginForm.email))
    }

    
    return (
            <ModalFORM_STY onSubmit={formSubmit}>
                <div style={{display:'flex',flexDirection:"column",alignItems:'flex-end',marginTop:"0px",marginBottom:"10px"}}>
                    <button type="button" onClick={() => dispatch(changeModalAction('forgetPassword'))} style={{background:"none",border:"none",cursor:"pointer"}}>X</button>
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <h2>Forget Password</h2>
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <label style={{width:"150px",marginBottom:"10px",alignSelf:"flex-start"}}  htmlFor="">email</label>
                    <input type="email" name="email" value={loginForm.email} onChange={(e)=>dispatch(login_Form_OnChange(e))}/>
                </div>
                <div style={{display:'flex',flexDirection:"column" , rowGap:"5px",marginTop:"20px",marginBottom:"10px"}}>
                    <button type="submit">Send Code</button>
                    <button type="button" onClick={() => dispatch(changeModalAction('login'))}>Go back</button>
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                {(forgetPassErrors !== null && forgetPassErrors.attempt !== undefined) && <label>{forgetPassErrors.attempt}</label>}
                </div>
            </ModalFORM_STY>
    )
}

export default ForgetPasswordModal
