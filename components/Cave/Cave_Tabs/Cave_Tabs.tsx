import React from 'react'
import {  cave_actions, cave_profile_tabs } from '../../../app/feature/CaveFeatures/CaveTabs.slice'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { Cave_Tabs_Sty, Cave_Tab_Sty , 
    Cave_Tabs_Cont_Sty,
    CaveLeftCorner,
    CaveRightCorner,
    CaveRightCornerForHover,
    CaveLeftCornerForHover, 
    Cave_Tab_Seperator_Sty
} from '../../../styles/components/styled-elements/Cave_Style/Cave_Tabs.style'
import caveTabCornerNotHoveredSvg from '../../../public/caveTabCornerNotHovered.svg'
import caveTabCornerHovered from '../../../public/caveTabCornerHovered.svg'
import Image from 'next/image'

interface Props {
    
}

const Cave_Tabs = (props: Props) => {
    const caveProfileTabs = useAppSelector(cave_profile_tabs)
    const dispatch = useAppDispatch()

    const changeActiveTab   = (tab: any) => {
        dispatch(cave_actions.selectTab(tab))
    }

    const hoverTab = (tab: any) => {
        dispatch(cave_actions.hoverTab(tab))
    }
    const unHoverTab = (tab: any) => {
        dispatch(cave_actions.unHoverTab(tab))
    }


    return (
        <Cave_Tabs_Sty>
            {/* <Cave_Tabs_Default_Color_Maker_Sty/> */}

            <Cave_Tabs_Cont_Sty>
                {
                    caveProfileTabs.map((tab, index) => 
                        <>
                            <Cave_Tab_Sty               
                                
                                key={tab.id} 
                                order={tab.id} 
                                active={tab.active}
                                onClick={() => changeActiveTab(tab)}
                                onMouseEnter={() => hoverTab(tab)}
                                onMouseLeave={() => unHoverTab(tab)}
                            >
                                <CaveLeftCorner tab={tab}>
                                    <Image width='25px' height='15px' src={caveTabCornerNotHoveredSvg} alt="caveLeftCornerSvg" /> 
                                </CaveLeftCorner>
                                <CaveLeftCornerForHover tab={tab}>
                                    <Image width='25px' height='15px' src={caveTabCornerHovered} alt="caveLeftCornerSvg" /> 
                                </CaveLeftCornerForHover>

                                {tab.text} 

                                <CaveRightCorner tab={tab}>
                                    <Image  width='25px' height='15px'  src={caveTabCornerNotHoveredSvg} alt="caveLeftCornerSvg" /> 
                                </CaveRightCorner>

                                <CaveRightCornerForHover  tab={tab}>
                                    <Image width='25px' height='15px' src={caveTabCornerHovered} alt="caveLeftCornerSvg" /> 
                                </CaveRightCornerForHover>

                            </Cave_Tab_Sty>
                            {
                                index < caveProfileTabs.length &&
                                <Cave_Tab_Seperator_Sty tab={tab} tabs={caveProfileTabs}/>
                            }
                        </>
                    )
                }

            </Cave_Tabs_Cont_Sty>


                
        </Cave_Tabs_Sty>
    )
}

export default Cave_Tabs
