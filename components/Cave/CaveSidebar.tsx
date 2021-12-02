import React from 'react'
import { cave_main_data } from '../../app/feature/CaveFeatures/Cave.slice'
import { caveSideActions, cave_side_data } from '../../app/feature/CaveFeatures/CaveSide.slice'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { selectAsyncCaveWindow } from '../../app/thunks/Cave/Cave.thunk'
import { CaveSidebar_Sty, CaveSide_section_Sty } from '../../styles/components/styled-blocks/Cave_Style/CaveSidebar.style'

interface Props {
    
}

const CaveSidebar = (props: Props) => {
    const dispatch = useAppDispatch()
    const caveSideData = useAppSelector(cave_side_data)

    const selectWindow = (window: any) => {
        dispatch(selectAsyncCaveWindow(window))
    }

    return (
        <CaveSidebar_Sty>
            <CaveSide_section_Sty selected={caveSideData.selectedWindow === "profile"}  onClick={() => selectWindow("profile")}>Profile</CaveSide_section_Sty>
            <CaveSide_section_Sty selected={caveSideData.selectedWindow === "inventory"}  onClick={() => selectWindow("inventory")}>Inventory</CaveSide_section_Sty>
            <CaveSide_section_Sty selected={caveSideData.selectedWindow === "library"}  onClick={() => selectWindow("library")}>Library</CaveSide_section_Sty>
            <CaveSide_section_Sty selected={caveSideData.selectedWindow === "notes"}  onClick={() => selectWindow("notes")}>Notes</CaveSide_section_Sty>
            <CaveSide_section_Sty selected={caveSideData.selectedWindow === "shop"}  onClick={() => selectWindow("shop")}>My Shop</CaveSide_section_Sty>
            <CaveSide_section_Sty selected={caveSideData.selectedWindow === "guide"}  onClick={() => selectWindow("guide")}>Guide</CaveSide_section_Sty>
        </CaveSidebar_Sty>
    )
}

export default CaveSidebar
