import React, { FormEvent, ReactElement, useEffect, useState } from 'react'
import * as authThunk from '../../app/thunks/AuthThunk'
import { useAppSelector, useAppDispatch } from '../../app/store/hooks';
import axios from 'axios';
import { changeModalAction, register_errors,  register_form, register_Form_OnChange, user_modals } from '../../app/feature/User.slice';

interface Props {
}

function RegisterModal({}: Props):ReactElement {
    const dispatch = useAppDispatch();
    const registerErrors = useAppSelector(register_errors);
    const allModals = useAppSelector(user_modals)
    const registerForm = useAppSelector(register_form)
    

    const formSubmit = (e:FormEvent) => {
        e.preventDefault()
        try {
            dispatch(authThunk.userRegister(registerForm))
        } catch (error) {
        }
    }


    return (
        <div style={{width:"100vw", height:"100vh" , display: 'flex', justifyContent: 'center', alignItems: 'center', position:'absolute', background:"rgba(0,0,0,0.5)", left:0,top:0,zIndex:5}}>
            <form style={{background:"rgba(255,255,255,0.7)" , padding:"25px", borderRadius:"20px"}} onSubmit={formSubmit} >
                <div style={{display:'flex',flexDirection:"column",alignItems:'flex-end',marginTop:"0px",marginBottom:"10px"}}>
                    <button onClick={() => dispatch(changeModalAction('register'))} type="button" style={{background:"none",border:"none",cursor:"pointer"}}>X</button>
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <h2>Register </h2>
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <label style={{width:"150px",marginBottom:"10px",alignSelf:"flex-start"}} htmlFor="">username</label>
                    <input name="name" value={registerForm.name} onChange={(e)=> dispatch(register_Form_OnChange({name:e.target.name , value:e.target.value}))}  />
                    { registerErrors.name !== undefined && registerErrors.name.map((error , index) => <label style={{color:"red", fontSize:"12px",marginTop:"10px",marginBottom:"10px"}} key={index}>{error}</label>)}
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}> 
                    <label style={{width:"150px",marginBottom:"10px",alignSelf:"flex-start"}} htmlFor="">email</label>
                    <input name="email" value={registerForm.email} onChange={(e)=> dispatch(register_Form_OnChange({name:e.target.name , value:e.target.value}))} />
                    { registerErrors.email !== undefined &&  registerErrors.email.map((error , index) => <label style={{color:"red", fontSize:"12px",marginTop:"10px",marginBottom:"10px"}} key={index}>{error}</label>)}
                </div>
                <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"20px",marginBottom:"10px"}}>
                    <label style={{width:"150px",marginBottom:"10px",alignSelf:"flex-start"}} htmlFor="">password</label>
                    <input name="password" value={registerForm.password} onChange={(e)=> dispatch(register_Form_OnChange({name:e.target.name , value:e.target.value}))} />
                    { registerErrors.password !== undefined &&  registerErrors.password.map((error , index) => <label style={{color:"red", fontSize:"12px",marginTop:"10px",marginBottom:"10px"}} key={index}>{error}</label>)}
                </div>
                <div style={{width:"100%", display:'flex',justifyContent:'center',marginTop:"20px"}}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterModal
