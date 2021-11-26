import React from 'react'
import { cave_side_data } from '../../../app/feature/CaveFeatures/CaveSide.slice'
import { useAppSelector } from '../../../app/store/hooks'
import Cave_Tabs from '../Cave_Tabs/Cave_Tabs'
import { cave_windows } from './Cave.windows'

interface Props {
    
}



const CaveWindowRouter = (props: Props) => {
    const caveSideTabs = useAppSelector(cave_side_data)
    return (
        <>
            <Cave_Tabs/>
            {cave_windows[caveSideTabs.selectedWindow]}
        </>
    )
}

export default CaveWindowRouter
