import React, { ReactElement, useEffect } from 'react'
import { accessToken } from '../helpers/token/TokenHandle'
import { getCookie } from '../logic/CookieFunctions'

interface Props {
    
}

function Index({}: Props): ReactElement {
    
    return (
        <div>
            Hello
        </div>
    )
}

export default Index
