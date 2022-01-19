import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useLayoutEffect, useState } from 'react';
import { dispatch } from 'react-hot-toast/dist/core/store';
import { useInView } from 'react-intersection-observer';
import BeatLoader from 'react-spinners/BeatLoader';
import { useScrollYPosition } from 'react-use-scroll-position';

import { is_chatbox_opened } from '../../app/feature/ChatBox.slice';
import { changePositionOfFilters, stay_in_focus } from '../../app/feature/PageFilters.slice';
import { forum_search_data, search_data, search_query, setScrollPositionYForum } from '../../app/feature/SearchBox.slice';
import { side_product_data } from '../../app/feature/SideProducts.slice';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { forumSearchInfinity } from '../../app/thunks/SearchBoxThunks';
import PageTabs from '../../components/ForumPageTabs';
import FormQuestion from '../../components/ForumQuestion';
import MainPartOfPage from '../../components/MainPartOfPage';
import SearchBoxStaticVersion from '../../components/SearchBoxStaticVersion';
import SidePartOfPage from '../../components/SidePartOfPage';
import SideProductCont from '../../components/SideProductCont';
import { PageDefaultStyle } from '../../styles/pages/Page.styled';
import { ForumPage } from '../../styles/pages/Pages.style';

interface Props {

}

function Forum({ }: Props): ReactElement {
    const [inViewRefLoaderDown, inViewLoaderDown] = useInView()
    const sideProductContData = useAppSelector(side_product_data)
    const scrollY = useScrollYPosition()
    const dispatch = useAppDispatch()
    const forumSearchData = useAppSelector(forum_search_data)
    const searchQuery = useAppSelector(search_query)
    const router = useRouter()
    const isChatBoxOpened = useAppSelector(is_chatbox_opened)
    const a = [1, 2, 3, 4]
    const stayInFocus = useAppSelector(stay_in_focus)
    const searchData = useAppSelector(search_data)

    const scrollToY = () => {
        window.scrollTo({
            top: forumSearchData.scrollY,
        })
    }


    useEffect(() => {
        scrollToY()
    }, [])

    useEffect(() => {
        if (inViewLoaderDown) {
            const data = {
                query: searchQuery,
                from: forumSearchData.fromNumber,
                forumType: forumSearchData.searchOptions.forumType,
                filterTags: searchData.filters,
                excludedFilters: searchData.exculudedFilters
            }
            dispatch(forumSearchInfinity(data))
        }
    }, [inViewLoaderDown])


    useLayoutEffect(() => {
        if (forumSearchData.searchOptions.forumSort !== "" && forumSearchData.searchOptions.forumType !== "") {
            dispatch(forumSearchInfinity({
                query: searchQuery,
                from: 0,
                forumType: forumSearchData.searchOptions.forumType,
                filterTags: searchData.filters,
                excludedFilters: searchData.exculudedFilters
            }))
        }
    }, [forumSearchData.searchOptions.forumSort, forumSearchData.searchOptions.forumType, searchData.filters])

    useEffect(() => {
        dispatch(setScrollPositionYForum(scrollY))
    }, [scrollY])


    const handleMouseOver = () => {
        if (!stayInFocus) {
            dispatch(changePositionOfFilters(false))
        }
    }

    const handleMouseLeave = () => {
        if (!stayInFocus) {
            dispatch(changePositionOfFilters(true))
        }
    }


    return (
        <PageDefaultStyle>
            <SidePartOfPage onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} side={"left"}>
            </SidePartOfPage>




            <MainPartOfPage>
                <ForumPage>
                    <SearchBoxStaticVersion />
                    <PageTabs />
                    {
                        forumSearchData.initialLoader
                            ?
                            <>
                                <BeatLoader color={'#b4b5b7'} loading={forumSearchData.initialLoader} size={10} />
                            </>
                            :
                            <>
                                {
                                    forumSearchData.data.map((element, index) => <FormQuestion key={index} data={element} />)
                                }


                                {
                                    !forumSearchData.allDataLoaded &&
                                    (
                                        forumSearchData.results_number > forumSearchData.data.length &&
                                        <div ref={inViewRefLoaderDown} style={{ width: "100%", display: "flex", alignItems: 'center', flexDirection: "column", rowGap: "10px", marginTop: "50px" }}>
                                            <BeatLoader color={'#b4b5b7'} loading={!forumSearchData.initialLoader} size={20} />
                                        </div>
                                    )
                                }

                                {forumSearchData.status === "error" && <div>Error ...</div>}

                                {
                                    forumSearchData.allDataLoaded &&
                                    <div style={{ color: "gray", fontSize: "20px", }}>
                                        No more records found
                                    </div>
                                }
                            </>
                    }

                </ForumPage>
            </MainPartOfPage>


            <SidePartOfPage side={"right"}>

                {
                    (sideProductContData.status === "loaded" && sideProductContData.selectedID !== null && sideProductContData.products.length > 0)
                    &&
                    <SideProductCont />
                }



                {/* {
                    <>
                        {isChatBoxOpened  && <ChatBox/>}
                    </>
                } */}
            </SidePartOfPage>
        </PageDefaultStyle>
    )
}

export default Forum