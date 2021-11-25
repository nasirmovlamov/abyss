import React from 'react'
import Cave_Tabs from '../Cave_Tabs/Cave_Tabs'
import { cave_windows } from './Cave.windows'

interface Props {
    
}



const CaveWindowRouter = (props: Props) => {


    return (
        <>
            <Cave_Tabs/>
            {cave_windows['profile']}
        </>
    )
}

export default CaveWindowRouter
