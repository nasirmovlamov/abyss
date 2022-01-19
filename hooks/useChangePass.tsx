import React, { FormEvent } from 'react'
import { change_password_data, form_change_password_data, form_change_password_onBlur, form_change_password_onChange, user_forget_pass_check_token } from '../app/feature/User.slice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { changePasswordThunk } from '../app/thunks/AuthThunk'
import { autoErrorToasterWithMessage } from '../components/Notify/AutoSuccessToast'

interface Props {
    status: string,
    errors: any
}

export const useChangePass = (props: Props) => {
    const { status, errors } = props
    const dispatch = useAppDispatch()
    const formChangePasswordData = useAppSelector(form_change_password_data)
    const check_pass_token_data = useAppSelector(user_forget_pass_check_token)



    const changePass = (e: FormEvent) => {
        e.preventDefault()
        if (!formChangePasswordData.isValid) {
            return autoErrorToasterWithMessage("Please fill all the fields correctly")
        }

        const form_data = new FormData()
        form_data.append('email', check_pass_token_data.data.email)
        form_data.append('token', check_pass_token_data.data.token)
        form_data.append('password', formChangePasswordData.data.password)
        form_data.append('password_confirmation', formChangePasswordData.data.password_confirmation)
        dispatch(changePasswordThunk(form_data))
    }


    const change_pass_onChange = (input: any) => {
        dispatch(form_change_password_onChange(input.target))
    }

    const change_pass_onBlur = (input: any) => {
        dispatch(form_change_password_onBlur(input.target))
    }




    if (status === "pending") {
        return { changePass: () => null, change_pass_onChange: () => null, change_pass_onBlur: () => null }
    } else if (status === "failed") {
        return { changePass: () => null, change_pass_onChange: () => null, change_pass_onBlur: () => null }
    }
    else {
        return ({ changePass, change_pass_onChange, change_pass_onBlur })
    }

}

