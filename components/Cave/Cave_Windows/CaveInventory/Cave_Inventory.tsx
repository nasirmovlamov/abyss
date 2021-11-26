import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useScrollYPosition } from 'react-use-scroll-position'
import { cave_actions, cave_tabs } from '../../../../app/feature/CaveFeatures/CaveTabs.slice'
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks'
import { CaveInventoryBlocks_Sty, CaveInventoryDefaultBlock_Sty } from '../../../../styles/components/styled-elements/Cave_Style/CaveInventory/CaveInventory.style'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { cave_side_data } from '../../../../app/feature/CaveFeatures/CaveSide.slice'
import { inventoryTabs } from '../../../../app/store/states/Cave_States/CaveTabs.state'

interface Props {
    
}

const Cave_Inventory = (props: Props) => {
    const [inViewRefSavedBlock, inViewSavedBlock] = useInView()
    const [inViewRefCreatedBlock, inViewCreatedBlock] = useInView()
    const [inViewRefPlaylistBlock, inViewPlaylistBlock] = useInView()
    const [inViewRefHistoryBlock, inViewHistoryBlock] = useInView()

    const caveSideData = useAppSelector(cave_side_data)
    const dispatch = useAppDispatch()
    const scrollY = useScrollYPosition();

    const caveTabs = useAppSelector(cave_tabs)
    const caveInventoryTabs = caveTabs['inventory']
    const activeTab = caveInventoryTabs.filter(tab => tab.active)[0]

    
    const savedTab= inventoryTabs.filter(tab => tab.name === 'saved')[0]
    const createdTab= inventoryTabs.filter(tab => tab.name === 'created')[0]
    const playlistTab= inventoryTabs.filter(tab => tab.name === 'playlist')[0]
    const historyTab= inventoryTabs.filter(tab => tab.name === 'history')[0]
    
    // const changeActiveTab = async (tab: any) => {
    //     await dispatch(cave_actions.selectTab({tab:tab , window:caveSideData.selectedWindow}))
    // }

    // useEffect(() => {
    //     if(inViewSavedBlock){
    //         changeActiveTab(savedTab)
    //     }
    //     if(inViewCreatedBlock){
    //         changeActiveTab(createdTab)
    //     }
    //     if(inViewPlaylistBlock){
    //         changeActiveTab(playlistTab)
    //     }
    //     if(inViewHistoryBlock){
    //         changeActiveTab(historyTab)
    //     }
    // }, [inViewSavedBlock , inViewCreatedBlock , inViewPlaylistBlock , inViewHistoryBlock])

   

    return (
        <CaveInventoryBlocks_Sty>
            <CaveInventoryDefaultBlock_Sty ref={inViewRefSavedBlock}    id='#savedBlock'>
                Saved Block
            </CaveInventoryDefaultBlock_Sty>  
           
            <CaveInventoryDefaultBlock_Sty ref={inViewRefCreatedBlock}  id='#createdBlock'>
                Created Block
            </CaveInventoryDefaultBlock_Sty>  
           
            <CaveInventoryDefaultBlock_Sty ref={inViewRefPlaylistBlock} id='#playlistBlock'>
                Playlist Block
            </CaveInventoryDefaultBlock_Sty>  
           
            <CaveInventoryDefaultBlock_Sty ref={inViewRefHistoryBlock}  id='#historyBlock'>
                History Block
            </CaveInventoryDefaultBlock_Sty>  
        </CaveInventoryBlocks_Sty>
    )
}

export default Cave_Inventory
