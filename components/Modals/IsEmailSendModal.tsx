import React, { FormEvent,ReactElement, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/store/hooks';
import * as authThunk from '../../app/thunks/AuthThunk'
import { changeModalAction, forget_Password_Errors,  login_form, login_Form_OnChange, user_modals } from '../../app/feature/UserSlice';
interface Props {
}

function IsEmailSendModal({}: Props):ReactElement {
    const dispatch = useAppDispatch();
    const allModals = useAppSelector(user_modals)
    const loginForm = useAppSelector(login_form)
    const errors = useAppSelector(forget_Password_Errors);
    
    
    

    const formSubmit = async (e:FormEvent) => {
        e.preventDefault()
        // dispatch(authThunk.forgetPasswordThunk({email:loginForm.email}))
    }

    
    return (
        <div style={{width:"100vw", height:"100vh" ,  display: 'flex', justifyContent: 'center', alignItems: 'center', position:'absolute', background:"rgba(0,0,0,0.5)", left:0,top:0,zIndex:4}}>
            <form style={{background:"rgba(255,255,255,0.7)" , padding:"25px", borderRadius:"20px"}} onSubmit={formSubmit}>
                {/* <div style={{display:'flex',flexDirection:"column",alignItems:'flex-end',marginTop:"0px",marginBottom:"10px"}}>
                    <button type="button" onClick={() => dispatch(changeModalAction('forgetPassword'))} style={{background:"none",border:"none",cursor:"pointer"}}>X</button>
                </div> */}
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <h2>Email has been sent</h2>
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <label style={{width:"150px",marginBottom:"10px",alignSelf:"flex-start"}}  htmlFor="">email</label>
                    <input disabled={true} type="email" name="email" value={loginForm.email} onChange={(e)=>dispatch(login_Form_OnChange(e))}/>
                </div>
                <div style={{display:'flex',flexDirection:"column" , rowGap:"5px",marginTop:"20px",marginBottom:"10px"}}>
                    <button type="submit">Send Again</button>
                    <button type="button" onClick={() => dispatch(changeModalAction('forgetPassword'))}>Go back</button>
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    {/* {(errors !== null && errors !== undefined &&  errors.errors.email !== undefined) && <label>{errors.errors.email}</label>} */}
                </div>
            </form>
        </div>
    )
}

export default IsEmailSendModal
