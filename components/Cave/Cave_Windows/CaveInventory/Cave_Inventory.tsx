import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useScrollYPosition } from 'react-use-scroll-position'
import { cave_actions, cave_tabs } from '../../../../app/feature/CaveFeatures/CaveTabs.slice'
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks'
import { CaveInventoryBlocks_Sty, CaveInventoryDefaultBlock_Sty } from '../../../../styles/components/styled-blocks/Cave_Style/CaveInventory/CaveInventory.style'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { cave_side_data } from '../../../../app/feature/CaveFeatures/CaveSide.slice'
import { inventoryTabs } from '../../../../app/store/states/Cave_States/CaveTabs.state'

interface Props {
    
}

const Cave_Inventory = (props: Props) => {
    const [inViewRefInventorySavedBlock, inViewInventorySavedBlock] = useInView()
    const [inViewRefInventoryCreatedBlock, inViewInventoryCreatedBlock] = useInView()
    const [inViewRefInventoryPlaylistBlock, inViewInventoryPlaylistBlock] = useInView()
    const [inViewRefInventoryHistoryBlock, inViewInventoryHistoryBlock] = useInView()

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
    
    const changeActiveTab = (tab: any) => {
        dispatch(cave_actions.selectTab({tab:tab , window:caveSideData.selectedWindow}))
    }

    useEffect(() => {
        scroller.scrollTo(`#${caveSideData.selectedWindow}${activeTab.name}Block`, {
            duration: 0,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -130
        })
    }, [])


    useEffect(() => {
        if(inViewInventorySavedBlock){
            changeActiveTab(savedTab)
        }
        if(inViewInventoryCreatedBlock){
            changeActiveTab(createdTab)
        }
        if(inViewInventoryPlaylistBlock){
            changeActiveTab(playlistTab)
        }
        if(inViewInventoryHistoryBlock){
            changeActiveTab(historyTab)
        }
    }, [scrollY])

    

   

    return (
        <CaveInventoryBlocks_Sty>
            <CaveInventoryDefaultBlock_Sty ref={inViewRefInventorySavedBlock}    id='#inventorysavedBlock'>
                Saved Block
            </CaveInventoryDefaultBlock_Sty>  
           
            <CaveInventoryDefaultBlock_Sty ref={inViewRefInventoryCreatedBlock}  id='#inventorycreatedBlock'>
                Created Block
            </CaveInventoryDefaultBlock_Sty>  
           
            <CaveInventoryDefaultBlock_Sty ref={inViewRefInventoryPlaylistBlock} id='#inventoryplaylistBlock'>
                Playlist Block
            </CaveInventoryDefaultBlock_Sty>  
           
            <CaveInventoryDefaultBlock_Sty ref={inViewRefInventoryHistoryBlock}  id='#inventoryhistoryBlock'>
                History Block
            </CaveInventoryDefaultBlock_Sty>  
        </CaveInventoryBlocks_Sty>
    )
}

export default Cave_Inventory
