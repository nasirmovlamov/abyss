/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useState } from 'react'
import { BASE_API_INSTANCE } from '../../../../helpers/api/BaseInstance'
import { getAccessToken } from '../../../../helpers/token/TokenHandle'
import { BASE_API_URL } from '../../../../helpers/urls/BASE_URL'

interface Props {
    
}

function EMAIL_VERIFY({}: Props): ReactElement {
    const router = useRouter()
    const [status, setstatus] = useState<"idle" | "loading" | "error">("loading")
    const [errors, seterrors] = useState([])
    const [message, setmessage] = useState()

    const makeVerify = async () => {
        try {
            const resp = await BASE_API_INSTANCE.get(`${router.asPath}`)
            setmessage(resp.data)
            setstatus("idle")
        } catch (error:any) {
            setstatus("error")
            seterrors(error.response.data.errors)
        }
    }
    
    useEffect(() => {
        if(router.isReady)
        {
            makeVerify()
        }
    }, [router])

    if(status ==="loading")
    {
        return <div style={{width:"200px", height:"200px" , backgroundColor:"black", color:"white", display:"flex",justifyContent:"center", marginTop:"50px",marginBottom:"50px"}}>loading</div>
    }
    else if(status === "error")
    {
        return <div><p  style={{width:"200px", height:"200px" , backgroundColor:"black", color:"white", display:"flex",justifyContent:"center", marginTop:"50px",marginBottom:"50px"}}>{JSON.stringify(errors)}</p></div>
    }
    else 
    {
        return (
            <div style={{width:"200px", height:"200px" , backgroundColor:"black", color:"white", display:"flex",justifyContent:"center", marginTop:"50px",marginBottom:"50px"}}>{JSON.stringify(message)}</div>
        )   

    }
}

export default EMAIL_VERIFY
