import React, { FormEvent,ReactElement, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/store/hooks';
import * as authThunk from '../../app/thunks/AuthThunk'
import { changeModalAction, login_errors, login_form, login_Form_OnChange, user_modals } from '../../app/feature/User.slice';
interface Props {
}

function LoginModal({}: Props):ReactElement {
    const dispatch = useAppDispatch();
    const loginErrors = useAppSelector(login_errors);
    const allModals = useAppSelector(user_modals)
    const loginForm = useAppSelector(login_form)
    
    
    const formSubmit = async (e:FormEvent) => {
        e.preventDefault()
        dispatch(authThunk.userLogin(loginForm))
    }

    
    return (
            <form style={{background:"rgba(255,255,255,0.7)" , padding:"25px", borderRadius:"20px", pointerEvents:"all"}} onSubmit={formSubmit}>
                <div style={{display:'flex',flexDirection:"column",alignItems:'flex-end',marginTop:"0px",marginBottom:"10px"}}>
                    <button type="button" onClick={() => dispatch(changeModalAction('login'))} style={{background:"none",border:"none",cursor:"pointer"}}>X</button>
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <h2>Login</h2>
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <label style={{width:"150px",marginBottom:"10px",alignSelf:"flex-start"}}  htmlFor="">email</label>
                    <input type="email" name="email" value={loginForm.email} onChange={(e)=>dispatch(login_Form_OnChange({name:e.target.name , value:e.target.value}))}/>
                    {loginErrors.email !== undefined && loginErrors.email.map((error:any  , index:any ) => <label style={{color:"red", fontSize:"12px",marginTop:"10px",marginBottom:"10px"}} key={index}>{error}</label>)}
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <label style={{width:"150px",marginBottom:"10px",alignSelf:"flex-start"}}  htmlFor="">password</label>
                    <input type="password" name="password" value={loginForm.password} onChange={(e)=>dispatch(login_Form_OnChange({name:e.target.name , value:e.target.value}))}/>
                    {loginErrors.password !== undefined && loginErrors.password.map((error:any , index:number) => <label style={{color:"red", fontSize:"12px",marginTop:"10px",marginBottom:"10px"}} key={index}>{error}</label>)}
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"0px"}}>
                    <button type="submit">Submit</button>
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"5px",marginBottom:"10px"}}>
                    <button type="button" style={{color:"red", fontSize:"12px",marginTop:"5px",marginBottom:"5px"}} onClick={()=> dispatch(changeModalAction('forgetPassword'))}>Forget Password</button>
                </div>
            </form>
    )
}

export default LoginModal
