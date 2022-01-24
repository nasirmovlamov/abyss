import { cave_side_data } from 'app/store/slices/CaveFeatures/CaveSide.slice';
import { cave_actions, cave_tabs } from 'app/store/slices/CaveFeatures/CaveTabs.slice';
import { libraryTabs } from 'app/store/states/states/Cave_States/CaveTabs.state';
import { useAppDispatch, useAppSelector } from 'app/store/states/store.hooks';
import {
  CaveLibraryBlocks_Sty,
  CaveLibraryDefaultBlock_Sty,
} from 'app/styles/styled-components/ui/modules/Cave_Style/CaveLibrary/CaveLibrary.style';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { scroller } from 'react-scroll';
import { useScrollYPosition } from 'react-use-scroll-position';

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
