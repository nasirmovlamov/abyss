import React from 'react'
import { caveSideActions } from '../../app/feature/CaveFeatures/CaveSide.slice'
import { useAppDispatch } from '../../app/store/hooks'
import { CaveSidebar_Sty, CaveSide_section_Sty } from '../../styles/components/styled-blocks/Cave_Style/CaveSidebar.style'

interface Props {
    
}

const CaveSidebar = (props: Props) => {
    const dispatch = useAppDispatch()

    const selectWindow = (window: any) => {
        dispatch(caveSideActions.selectWindow(window))
    }

    return (
        <CaveSidebar_Sty>
            <CaveSide_section_Sty  onClick={() => selectWindow("profile")}>Profile</CaveSide_section_Sty>
            <CaveSide_section_Sty  onClick={() => selectWindow("inventory")}>Inventory</CaveSide_section_Sty>
            <CaveSide_section_Sty  onClick={() => selectWindow("library")}>Library</CaveSide_section_Sty>
            <CaveSide_section_Sty  onClick={() => selectWindow("notes")}>Notes</CaveSide_section_Sty>
            <CaveSide_section_Sty  onClick={() => selectWindow("shop")}>My Shop</CaveSide_section_Sty>
            <CaveSide_section_Sty  onClick={() => selectWindow("guide")}>Guide</CaveSide_section_Sty>
        </CaveSidebar_Sty>
    )
}

export default CaveSidebar
