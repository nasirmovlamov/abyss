/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks'
import { verifyEmail } from '../../../../app/thunks/AuthThunk'
import { BASE_API_INSTANCE } from '../../../../helpers/api/BaseInstance'
import { getAccessToken } from '../../../../helpers/token/TokenHandle'
import { BASE_API_URL } from '../../../../helpers/urls/BASE_URL'
import { white_1 } from '../../../../styles/global/styled-utils/settings/Colors'
import * as authThunk from '../../../../app/thunks/AuthThunk'
import { user_data, user_verify } from '../../../../app/feature/User.slice'

interface Props {

}

function EmailVerify({ }: Props): ReactElement {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const userVerify: any = useAppSelector(user_verify)
    const userData = useAppSelector(user_data)
    useEffect(() => {
        if (router.isReady) {
            dispatch(authThunk.verifyEmail(router.asPath))
        }
    }, [router])
    if (!userVerify) {
        return <></>
    }


    const { errors, message } = userVerify


    const goHome = () => {
        router.push("/")
    }

    if (userVerify.status === "pending") {
        return (
            <div style={{ paddingTop: '25px', rowGap: "10px", width: "100%", height: "200px", backgroundColor: "black", color: "white", display: "flex", alignItems: "center", marginTop: "50px", marginBottom: "50px", flexDirection: "column" }}>
                <h1 style={{ color: 'white', fontSize: "45px", padding: "40px" }}> LOADING </h1>
            </div>)
    }
    else if (userVerify.status === "failed") {
        return (
            <div style={{ paddingTop: '25px', rowGap: "10px", width: "100%", height: "200px", backgroundColor: "black", color: "white", display: "flex", alignItems: "center", marginTop: "50px", marginBottom: "50px", flexDirection: "column" }}>
                <p>
                    {Object.keys(errors).map((key: any) =>
                        <p style={{ textAlign: "center", color: "red", fontSize: "25px" }} key={key}>{errors[key]}</p>
                    )}
                    <p style={{ textAlign: "center", color: "red", fontSize: "25px" }} key={'message'}>{message}</p>
                </p>
                <button style={{}} onClick={goHome}>Go back to homepage</button>
            </div>
        )
    }
    else if (userVerify.status === "success") {
        return (
            <div style={{ paddingTop: '25px', rowGap: "10px", width: "100%", height: "200px", backgroundColor: "black", color: "white", display: "flex", alignItems: "center", marginTop: "50px", marginBottom: "50px", flexDirection: "column" }}>
                <p style={{ fontSize: '25px', color: "green" }}>
                    {message}
                </p>
                {userData?.isVerified}
                <button style={{}} onClick={goHome}>Go back to homepage</button>
            </div>
        )

    } else {
        return <>Ups, something went wrong...</>
    }
}

export default EmailVerify
