import { faShopify } from '@fortawesome/free-brands-svg-icons'
import { faBookReader, faBox, faInfoCircle, faShoppingBag, faSignOutAlt, faStickyNote, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { cave_main_data } from '../../app/feature/CaveFeatures/Cave.slice'
import { caveSideActions, cave_side_data } from '../../app/feature/CaveFeatures/CaveSide.slice'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { userLogout } from '../../app/thunks/AuthThunk'
import { selectAsyncCaveWindow } from '../../app/thunks/Cave/Cave.thunk'
import { getAccessToken } from '../../helpers/token/TokenHandle'
import { CaveSidebar_Sty, CaveSide_section_Sty } from '../../styles/components/styled-blocks/Cave_Style/CaveSidebar.style'

interface Props {
    
}

const CaveSidebar = (props: Props) => {
    const dispatch = useAppDispatch()
    const caveSideData = useAppSelector(cave_side_data)
   
    const selectWindow = (page_window: any) => {
        dispatch(selectAsyncCaveWindow(page_window))
        window.scrollTo(0, 0)
    }

    const logout = () => {
        dispatch(userLogout())
    }

    return (
        <CaveSidebar_Sty>
            <CaveSide_section_Sty selected={caveSideData.selectedWindow === "profile"}  onClick={() => selectWindow("profile")}> <FontAwesomeIcon icon={faUser}/> <span>Profile</span> </CaveSide_section_Sty>
            <CaveSide_section_Sty selected={caveSideData.selectedWindow === "inventory"}  onClick={() => selectWindow("inventory")}><FontAwesomeIcon icon={faBox}/> <p> Inventory</p></CaveSide_section_Sty>
            <CaveSide_section_Sty selected={caveSideData.selectedWindow === "library"}  onClick={() => selectWindow("library")}><FontAwesomeIcon icon={faBookReader}/> <p>Library</p> </CaveSide_section_Sty>
            <CaveSide_section_Sty selected={caveSideData.selectedWindow === "notes"}  onClick={() => selectWindow("notes")}><FontAwesomeIcon icon={faStickyNote}/> <p>Notes</p> </CaveSide_section_Sty>
            <CaveSide_section_Sty selected={caveSideData.selectedWindow === "guide"}  onClick={() => selectWindow("guide")}><FontAwesomeIcon icon={faInfoCircle}/> <p> Guide</p></CaveSide_section_Sty>

            <CaveSide_section_Sty selected={caveSideData.selectedWindow === "shop"}  onClick={() => selectWindow("shop")}><FontAwesomeIcon icon={faShoppingBag}/> <p> My Shop</p></CaveSide_section_Sty>
            <CaveSide_section_Sty selected={false}  onClick={logout}><FontAwesomeIcon icon={faSignOutAlt}/> <p> Logout</p></CaveSide_section_Sty>
        </CaveSidebar_Sty>
    )
}

export default CaveSidebar
