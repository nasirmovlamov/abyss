import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { scroller } from 'react-scroll';
import { useScrollYPosition } from 'react-use-scroll-position';

import { cave_side_data } from '../../../../app/feature/CaveFeatures/CaveSide.slice';
import { cave_actions, cave_tabs } from '../../../../app/feature/CaveFeatures/CaveTabs.slice';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import { inventoryTabs } from '../../../../app/store/states/Cave_States/CaveTabs.state';
import { BASE_API_INSTANCE } from '../../../../helpers/api/BaseInstance';
import {
    CaveInventoryBlocks_Sty,
    CaveInventoryDefaultBlock_Sty,
} from '../../../../styles/components/styled-blocks/Cave_Style/CaveInventory/CaveInventory.style';
import AnswerSkeleton from '../../../Skeletons/AnswerSkeleton';
import CaveProduct from '../../CaveProduct';

interface Props {

}

const Cave_Inventory = (props: Props) => {
    const [inViewRefInventoryLoaderBlock, inViewInventoryLoaderBlock] = useInView()
    const [inViewRefInventorySavedBlock, inViewInventorySavedBlock] = useInView()
    const [inViewRefInventoryCreatedBlock, inViewInventoryCreatedBlock] = useInView()
    const [inViewRefInventoryPlaylistBlock, inViewInventoryPlaylistBlock] = useInView()
    const [inViewRefInventoryHistoryBlock, inViewInventoryHistoryBlock] = useInView()


    const [inventoryLastPage, setinventoryLastPage] = useState<any>(0)
    const [inventoryCurrentPage, setinventoryCurrentPage] = useState<any>(1)
    const [inventoryData, setinventoryData] = useState<any>([])
    const [inventoryStatus, setinventoryStatus] = useState<any>('pending')
    // const [inventoryCurrentPage, setinventoryCurrentPage] = useState(0)

    const caveSideData = useAppSelector(cave_side_data)
    const dispatch = useAppDispatch()
    const scrollY = useScrollYPosition()

    const caveTabs = useAppSelector(cave_tabs)
    const caveInventoryTabs = caveTabs['inventory']
    const activeTab = caveInventoryTabs.filter(tab => tab.active)[0]


    const savedTab = inventoryTabs.filter(tab => tab.name === 'saved')[0]
    const createdTab = inventoryTabs.filter(tab => tab.name === 'created')[0]
    const playlistTab = inventoryTabs.filter(tab => tab.name === 'playlist')[0]
    const historyTab = inventoryTabs.filter(tab => tab.name === 'history')[0]

    const changeActiveTab = (tab: any) => {
        dispatch(cave_actions.selectTab({ tab: tab, window: caveSideData.selectedWindow }))
    }


    //#region ScrollSpy
    useEffect(() => {
        scroller.scrollTo(`#${caveSideData.selectedWindow}${activeTab.name}Block`, {
            duration: 0,
            delay: 0,
            smooth: 'easeInOutQuart',
            // offset: 130
        })
    }, [])


    // useEffect(() => {
    //     // if(inViewInventorySavedBlock){
    //     //     changeActiveTab(savedTab)
    //     // }
    //     // if(inViewInventoryCreatedBlock){
    //     //     changeActiveTab(createdTab)
    //     // }
    //     // if(inViewInventoryPlaylistBlock){
    //     //     changeActiveTab(playlistTab)
    //     // }
    //     // if(inViewInventoryHistoryBlock){
    //     //     changeActiveTab(historyTab)
    //     // }
    // }, [scrollY])
    //#endregion ScrollSpy
    const getInventoryData = async () => {
        try {
            if (inventoryStatus !== 'pending') {
                return false
            }
            const resp = await BASE_API_INSTANCE(`/profile/cave?page=${inventoryCurrentPage}`)
            setinventoryData([...inventoryData, ...resp.data.data])
            if (inventoryCurrentPage === 1) {
                setinventoryLastPage(resp.data.meta.last_page)
            } else {

            }
            setinventoryCurrentPage(inventoryCurrentPage + 1)
            if (resp.data.meta.current_page === resp.data.meta.last_page) {
                setinventoryStatus('loaded')
            }
        } catch (error) {
            setinventoryData([])
        }
    }

    useEffect(() => {
        if (inViewInventoryLoaderBlock) {
            getInventoryData()
        }
    })



    return (
        <CaveInventoryBlocks_Sty>
            <CaveInventoryDefaultBlock_Sty ref={inViewRefInventorySavedBlock} id='#inventorysavedBlock'>
                {inventoryData.map((item: any, index: number) => <CaveProduct data={item} key={index} />)}

                {
                    inventoryStatus === 'pending' &&
                    <div ref={inViewRefInventoryLoaderBlock}>
                        <AnswerSkeleton />
                    </div>
                }
            </CaveInventoryDefaultBlock_Sty>









            {/*  
                //#region
                    {/* <CaveInventoryDefaultBlock_Sty ref={inViewRefInventoryCreatedBlock}  id='#inventorycreatedBlock'>
                        Created Block
                    </CaveInventoryDefaultBlock_Sty>  
                
                    <CaveInventoryDefaultBlock_Sty ref={inViewRefInventoryPlaylistBlock} id='#inventoryplaylistBlock'>
                        Playlist Block
                    </CaveInventoryDefaultBlock_Sty>  
                
                    <CaveInventoryDefaultBlock_Sty ref={inViewRefInventoryHistoryBlock}  id='#inventoryhistoryBlock'>
                        History Block
                    </CaveInventoryDefaultBlock_Sty>  
                //#endregion
            */}

        </CaveInventoryBlocks_Sty>
    )
}

export default Cave_Inventory
