import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { useScrollDirection } from 'react-use-scroll-direction';
import { useScrollYPosition } from 'react-use-scroll-position';

import { getFiltersFromCache } from '../app/feature/PageFilters.slice';
import {
    blurSearchBox,
    focusSearchBox,
    forum_search_data,
    getCachedSearchBoxData,
    hoverSearchBox,
    hoverSearchNav,
    resetSendedQuery,
    search_data,
    search_query,
    searchValueOnChange,
    unhoverSearchNav,
} from '../app/feature/SearchBox.slice';
import { changeModalAction } from '../app/feature/User.slice';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { forumSearchInfinity, storeSearchInfinity, unHoverSearchAsync } from '../app/thunks/SearchBoxThunks';
import { getCookie } from '../logic/CookieFunctions';
import { forumWordRegex, storeWordRegex } from '../logic/regex/NavbarRegex';
import * as SearchForStaticVersion_STY from '../styles/components/styled-blocks/SearchBoxStatic.style';


interface Props {

}

function SearchBoxStaticVersion({ }: Props): ReactElement {
    const router = useRouter()
    const [pagePath, setpagePath] = useState("")
    const dispatch = useAppDispatch()
    const searchData = useAppSelector(search_data)











    const { isSearchVisible, isFocused, isHovered } = searchData
    const searchBoxRef = useRef<HTMLDivElement>(null)
    const searchContRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)
    const scrollY = useScrollYPosition()
    const forumSearchData = useAppSelector(forum_search_data)
    const focusSearchHandle = (e: any) => {
        dispatch(focusSearchBox(null))
        e.target.select()
    }
    const { searchOptions } = forumSearchData
    const forumSearchOptions = searchOptions

    const [scrollSearchBox, setscrollSearchBox] = useState<number>(0)
    const [scrollYInside, setscrollYInside] = useState(0)

    const searchQuery = useAppSelector(search_query)
    const [searchValue, setSearchValue] = useState("")
    // const [searchValue, setSearchValue] = useState("")

    const changeSearchValue = (e: string) => {
        dispatch(searchValueOnChange(e))
    }

    const { isScrollingUp, isScrollingDown } = useScrollDirection()



    const pagePathDetector = (pathname: string) => {
        if (pathname === "/") {
            return "Home"
        }
        else if (forumWordRegex.test(pathname)) {
            return "Library"
        }
        else if (storeWordRegex.test(pathname)) {
            return "Store"
        }
        else {
            return ""
        }
    }





    const handleAddClick = () => {
        if (forumWordRegex.test(router.asPath)) {
            dispatch(changeModalAction("questionCreate"))
        }
        else if (storeWordRegex.test(router.asPath)) {
            dispatch(changeModalAction("productCreate"))
        }
        else { }
    }



    const searchHandleWithEnter = (key: number) => {
        if (key === 13) {
            window.scrollTo({
                top: 0,
            })
            if (router.pathname !== '/forum' && router.pathname !== '/store') {
                router.push('/forum')
            }
            if (forumSearchOptions.sendedQuery !== searchQuery) {
                if (router.pathname === '/forum') {
                    dispatch(forumSearchInfinity({ query: searchQuery, from: 0, forumType: searchData.searchBoxData.forum.searchOptions.forumType, filterTags: searchData.filters, excludedFilters: searchData.exculudedFilters }))

                }
                if (router.pathname === '/store') {
                    dispatch(storeSearchInfinity({ query: searchQuery, from: 0, storeType: searchData.searchBoxData.store.searchOptions.storeType, filterTags: searchData.filters, excludedFilters: searchData.exculudedFilters }))
                }
            }
        }
    }

    const searchHandleWithSubmit = () => {
        if (searchQuery !== "") {
            window.scrollTo({
                top: 0,
            })
            if (forumSearchOptions.sendedQuery !== searchQuery) {
                if (router.pathname !== '/forum') {
                    dispatch(forumSearchInfinity({ query: searchQuery, from: 0, forumType: searchData.searchBoxData.forum.searchOptions.forumType, filterTags: searchData.filters, excludedFilters: searchData.exculudedFilters }))

                }
                if (router.pathname !== '/store') {
                    dispatch(storeSearchInfinity({ query: searchQuery, from: 0, storeType: searchData.searchBoxData.store.searchOptions.storeType, filterTags: searchData.filters, excludedFilters: searchData.exculudedFilters }))
                }
            }
        }
    }


    // const searchScrollControl = async (router:any) => {
    //         if(isScrollingDown && isFocused)
    //           dispatch(changeSearchVisibilty('not-visible'))
    // }

    // const thunkHasHovered = async (router:any) => {
    //     // searchContRef.current!.setAttribute("style", `top: 60px;`) 
    //     dispatch(changeSearchVisibilty('not-visible'))
    // }

    // useEffect( () => {
    //     if(isScrollingDown){
    //         searchScrollControl(router.asPath)
    //     }
    // }, [isScrollingDown,  router.asPath , scrollY])




    useEffect(() => {
        if (router.isReady) {

            setpagePath(pagePathDetector(router.asPath))
            if (router.asPath !== '/') {

                // searchBoxRef.current!.setAttribute("style" , "position:absolute;")
                // searchInputRef.current!.focus()
                dispatch(getFiltersFromCache(null))
                if (searchQuery === "") {
                    dispatch(getCachedSearchBoxData({ page: router.pathname }))
                    dispatch(resetSendedQuery(null))
                    if (router.pathname === '/forum') {
                        if (searchData.searchBoxData.forum.fromNumber === 0) {
                            dispatch(forumSearchInfinity({ query: getCookie("searchValue"), from: 0, forumType: searchData.searchBoxData.forum.searchOptions.forumType, filterTags: searchData.filters, excludedFilters: searchData.exculudedFilters }))
                        }
                    }
                    else if (router.pathname === '/store') {
                        if (searchData.searchBoxData.store.fromNumber === 0) {
                            dispatch(storeSearchInfinity({ query: getCookie("searchValue"), from: 0, storeType: searchData.searchBoxData.store.searchOptions.storeType, filterTags: searchData.filters, excludedFilters: searchData.exculudedFilters }))
                        }
                    } else { }
                } else {
                    if (router.pathname === '/forum') {
                        if (searchData.searchBoxData.forum.fromNumber === 0) {
                            dispatch(forumSearchInfinity({ query: searchQuery, from: 0, forumType: searchData.searchBoxData.forum.searchOptions.forumType, filterTags: searchData.filters, excludedFilters: searchData.exculudedFilters }))

                        }
                    }
                    else if (router.pathname === '/store') {
                        if (searchData.searchBoxData.store.fromNumber === 0) {
                            dispatch(storeSearchInfinity({ query: searchQuery, from: 0, storeType: searchData.searchBoxData.store.searchOptions.storeType, filterTags: searchData.filters, excludedFilters: searchData.exculudedFilters }))
                        }
                    } else { }
                }
            }
        }
    }, [router])


    const unHoverSearchBox = () => {
        dispatch(unHoverSearchAsync(null))
    }

    const dammyDataForSearch = [
        'how to javascript test 1',
        'how to javascript test 2',
        'how to javascript test 3',
        'how to javascript test 4',
        'how to react test 1',
        'how to react test 2',
        'how to react test 3',
        'how to react test 4',
        'how to php test 1',
        'how to php test 2',
        'how to php test 3',
        'how to php test 4',
        'how to nextjs test 1',
        'how to nextjs test 2',
        'how to how to test 3',
        'how to how to test 4',
        'how to react test 2',
        'how to nextjs test 1',
        'php test 3',
        'javascript test 1',
        'javascript test 2',
        'javascript test 3',
        'javascript test 4',
        'react test 1',
        'react test 2',
        'react test 3',
        'react test 4',
        'php test 1',
        'php test 2',
        'php test 3',
        'php test 4',
        'nextjs test 1',
        'nextjs test 2',
        'test 3',
        'test 4',
        'react test 2',
        'nextjs test 1',
        'php test 3',

    ]

    const isStartWithQueryRegex = new RegExp(`^${searchData.search_query}`)

    const searchNavClick = (item: any) => {
        window.scrollTo({
            top: 0,
        })
        dispatch(searchValueOnChange(item))
        if (router.pathname === '/forum') {
            dispatch(forumSearchInfinity({ query: item, from: 0, forumType: searchData.searchBoxData.forum.searchOptions.forumType, filterTags: searchData.filters, excludedFilters: searchData.exculudedFilters }))
            return
        }
        if (router.pathname === '/store') {
            dispatch(storeSearchInfinity({ query: item, from: 0, storeType: searchData.searchBoxData.store.searchOptions.storeType, filterTags: searchData.filters, excludedFilters: searchData.exculudedFilters }))
            return
        }
    }

    return (
        <>
            <SearchForStaticVersion_STY.SearchBoxThunkAndCont_STY
                scrollFromTop={scrollY}
                boxFocused={isFocused}
                thunkHovered={isHovered}
                onMouseEnter={() => dispatch(hoverSearchBox(null))}
                onMouseLeave={unHoverSearchBox}
            >
                <SearchForStaticVersion_STY.SearchBox_STY>
                    {router.asPath !== '/' && <SearchForStaticVersion_STY.SearchBoxPage_STY>{pagePath}</SearchForStaticVersion_STY.SearchBoxPage_STY>}
                    <SearchForStaticVersion_STY.SearchCont_STY path={router.asPath}>
                        <SearchForStaticVersion_STY.SearchButtonLupa_STY onClick={searchHandleWithSubmit}><FontAwesomeIcon icon={faSearch} /></SearchForStaticVersion_STY.SearchButtonLupa_STY>
                        <SearchForStaticVersion_STY.SearchInput_STY
                            onFocus={focusSearchHandle}
                            onBlur={() => dispatch(blurSearchBox(null))}
                            path={router.asPath}
                            onKeyDown={(e: any) => searchHandleWithEnter(e.keyCode)}
                            value={searchQuery}
                            onChange={(e: any) => changeSearchValue(e.target.value)}
                            placeholder="Search..."
                            ref={searchInputRef}
                            type="text"
                        />
                        {(router.asPath !== '/' && searchData.isFocused && searchData.search_query.length > 0) &&
                            <SearchForStaticVersion_STY.SearchNav_STY
                                onMouseEnter={() => dispatch(hoverSearchNav(null))}
                                onMouseLeave={() => dispatch(unhoverSearchNav(null))}
                                path={router.asPath} >

                                {
                                    dammyDataForSearch.map((item: string, index: number) =>
                                        isStartWithQueryRegex.test(item) &&
                                        <SearchForStaticVersion_STY.SearchNavQuery_STY onClick={() => searchNavClick(item)}>
                                            <FontAwesomeIcon icon={faSearch} />
                                            <p><span>{searchData.search_query}</span>{item.replace(searchData.search_query, "")}</p>
                                        </SearchForStaticVersion_STY.SearchNavQuery_STY>
                                    )
                                }

                            </SearchForStaticVersion_STY.SearchNav_STY>}
                        <SearchForStaticVersion_STY.AddQuesitionCont_STY onClick={handleAddClick}>ADD</SearchForStaticVersion_STY.AddQuesitionCont_STY>
                    </SearchForStaticVersion_STY.SearchCont_STY>
                </SearchForStaticVersion_STY.SearchBox_STY>
                {(pagePath !== "Home") &&
                    <SearchForStaticVersion_STY.SearchBoxThunk_STY
                        thunkHovered={isHovered}
                        boxFocused={isFocused}
                        scrollFromTop={scrollY}
                        isBackVisible={searchData.thunkBackground === 'visible'}
                    >
                        <div>	• 	•	• </div>
                    </SearchForStaticVersion_STY.SearchBoxThunk_STY>}

            </SearchForStaticVersion_STY.SearchBoxThunkAndCont_STY>
            {/* {(pagePath !== "Home") && <SearchBoxThunk_STY2  thunkHovered={isHovered} ></SearchBoxThunk_STY2>} */}
        </>
    )
}

export default SearchBoxStaticVersion
