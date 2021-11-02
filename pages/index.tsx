import React, { ReactElement, useEffect } from 'react'
import { accessToken } from '../helpers/token/TokenHandle'
import { getCookie } from '../logic/CookieFunctions'

interface Props {
    
}

function Index({}: Props): ReactElement {
    useEffect(() => {
        console.log(getCookie('token'))
    }, [getCookie('token')])
    return (
        <div>
            <button onClick={() => console.log(getCookie('token'))}>show token</button>
            Index
        </div>
    )
}

export default Index
