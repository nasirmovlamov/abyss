import React from 'react'
import { CaveSidebar_Sty, CaveSide_section_Sty } from '../../styles/components/styled-elements/Cave_Style/CaveSidebar.style'

interface Props {
    
}

const CaveSidebar = (props: Props) => {
    return (
        <CaveSidebar_Sty>
            <CaveSide_section_Sty>Profile</CaveSide_section_Sty>
            <CaveSide_section_Sty>Inventory</CaveSide_section_Sty>
            <CaveSide_section_Sty>Library</CaveSide_section_Sty>
            <CaveSide_section_Sty>Notes</CaveSide_section_Sty>
            <CaveSide_section_Sty>My Shop</CaveSide_section_Sty>
            <CaveSide_section_Sty>Guide</CaveSide_section_Sty>
        </CaveSidebar_Sty>
    )
}

export default CaveSidebar
