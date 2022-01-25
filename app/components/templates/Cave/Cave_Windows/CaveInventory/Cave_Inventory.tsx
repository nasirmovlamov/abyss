import AnswerSkeleton from 'app/components/ui/skeletons/AnswerSkeleton';
import { BASE_API_INSTANCE } from 'app/helpers/api/BaseInstance';
import { cave_side_data } from 'app/store/slices/CaveFeatures/CaveSide.slice';
import { cave_actions, cave_tabs } from 'app/store/slices/CaveFeatures/CaveTabs.slice';
import { useAppDispatch, useAppSelector } from 'app/store/states/store.hooks';
import {
  CaveInventoryBlocks_Sty,
  CaveInventoryDefaultBlock_Sty,
} from 'app/styles/styled-components/base/modules/Cave_Style/CaveInventory/CaveInventory.style';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { scroller } from 'react-scroll';

import CaveProduct from '../../CaveProduct';

const Cave_Inventory = () => {
  const [inViewRefInventoryLoaderBlock, inViewInventoryLoaderBlock] = useInView()
  const [inViewRefInventorySavedBlock, inViewInventorySavedBlock] = useInView()

  const [inventoryLastPage, setinventoryLastPage] = useState<any>(0)
  const [inventoryCurrentPage, setinventoryCurrentPage] = useState<any>(1)
  const [inventoryData, setinventoryData] = useState<any>([])
  const [inventoryStatus, setinventoryStatus] = useState<any>('pending')

  const caveSideData = useAppSelector(cave_side_data)
  const dispatch = useAppDispatch()

  const caveTabs = useAppSelector(cave_tabs)
  const caveInventoryTabs = caveTabs['inventory']
  const activeTab = caveInventoryTabs.filter((tab: any) => tab.active)[0]

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
      <CaveInventoryDefaultBlock_Sty ref={inViewRefInventorySavedBlock} id="#inventorysavedBlock">
        {inventoryData.map((item: any, index: number) => (
          <CaveProduct data={item} key={index} />
        ))}

        {inventoryStatus === 'pending' && (
          <div ref={inViewRefInventoryLoaderBlock}>
            <AnswerSkeleton />
          </div>
        )}
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
