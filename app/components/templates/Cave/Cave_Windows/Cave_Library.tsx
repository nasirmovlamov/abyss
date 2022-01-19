import {
  CaveLibraryBlocks_Sty,
  CaveLibraryDefaultBlock_Sty,
} from '../../../../styles/ui/modules/Cave_Style/CaveLibrary/CaveLibrary.style'
import React, { useEffect } from 'react'
import { cave_actions, cave_tabs } from '../../../app/feature/CaveFeatures/CaveTabs.slice'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'

import { cave_side_data } from '../../../app/feature/CaveFeatures/CaveSide.slice'
import { libraryTabs } from '../../../app/store/states/Cave_States/CaveTabs.state'
import { scroller } from 'react-scroll'
import { useInView } from 'react-intersection-observer'
import { useScrollYPosition } from 'react-use-scroll-position'

interface Props {}

const Cave_Library = (props: Props) => {
  const [inViewRefLibrarySavedBlock, inViewLibrarySavedBlock] = useInView()
  const [inViewRefLibraryCreatedBlock, inViewLibraryCreatedBlock] = useInView()
  const [inViewRefLibraryPlaylistBlock, inViewLibraryPlaylistBlock] = useInView()
  const [inViewRefLibraryHistoryBlock, inViewLibraryHistoryBlock] = useInView()

  const caveSideData = useAppSelector(cave_side_data)
  const dispatch = useAppDispatch()
  const scrollY = useScrollYPosition()

  const caveTabs = useAppSelector(cave_tabs)
  const caveLibraryTabs = caveTabs['library']
  const activeTab = caveLibraryTabs.filter((tab) => tab.active)[0]

  const savedTab = libraryTabs.filter((tab) => tab.name === 'saved')[0]
  const createdTab = libraryTabs.filter((tab) => tab.name === 'created')[0]
  const playlistTab = libraryTabs.filter((tab) => tab.name === 'playlist')[0]
  const historyTab = libraryTabs.filter((tab) => tab.name === 'history')[0]

  const changeActiveTab = async (tab: any) => {
    dispatch(cave_actions.selectTab({ tab: tab, window: caveSideData.selectedWindow }))
  }

  useEffect(() => {
    scroller.scrollTo(`#${caveSideData.selectedWindow}${activeTab.name}Block`, {
      duration: 0,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -130,
    })
  }, [])

  useEffect(() => {
    if (inViewLibrarySavedBlock) {
      changeActiveTab(savedTab)
    }
    if (inViewLibraryCreatedBlock) {
      changeActiveTab(createdTab)
    }
    if (inViewLibraryPlaylistBlock) {
      changeActiveTab(playlistTab)
    }
    if (inViewLibraryHistoryBlock) {
      changeActiveTab(historyTab)
    }
  }, [scrollY])

  return (
    <CaveLibraryBlocks_Sty>
      <CaveLibraryDefaultBlock_Sty ref={inViewRefLibrarySavedBlock} id="#librarysavedBlock">
        Saved Block
      </CaveLibraryDefaultBlock_Sty>

      <CaveLibraryDefaultBlock_Sty ref={inViewRefLibraryCreatedBlock} id="#librarycreatedBlock">
        Created Block
      </CaveLibraryDefaultBlock_Sty>

      <CaveLibraryDefaultBlock_Sty ref={inViewRefLibraryPlaylistBlock} id="#libraryplaylistBlock">
        Playlist Block
      </CaveLibraryDefaultBlock_Sty>

      <CaveLibraryDefaultBlock_Sty ref={inViewRefLibraryHistoryBlock} id="#libraryhistoryBlock">
        History Block
      </CaveLibraryDefaultBlock_Sty>
    </CaveLibraryBlocks_Sty>
  )
}

export default Cave_Library
