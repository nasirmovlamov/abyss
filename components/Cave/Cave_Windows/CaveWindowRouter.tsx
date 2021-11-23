import React from 'react'
import { cave_windows } from './Cave.windows'

interface Props {
    
}



const CaveWindowRouter = (props: Props) => {


    return (
        <div>
            {cave_windows['profile']}
        </div>
    )
}

export default CaveWindowRouter
