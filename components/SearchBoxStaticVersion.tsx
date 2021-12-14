import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { useScrollDirection } from 'react-use-scroll-direction'
import { changeModalAction } from '../app/feature/User.slice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { forumWordRegex, storeWordRegex } from '../logic/regex/NavbarRegex'
import { MainPartOfPageStyle, SidePartOfPageStyle } from '../styles/pages/Page.styled'
import { useScrollYPosition } from 'react-use-scroll-position';
import { forumSearch, forumSearchInfinity, storeSearch, storeSearchInfinity } from '../app/thunks/SearchBoxThunks'
import {  forum_search_data,  getCachedSearchBoxData, searchValueOnChange, resetSendedQuery, search_query, search_data, changeSearchVisibilty } from '../app/feature/SearchBox.slice'
import { getFiltersFromCache } from '../app/feature/PageFilters.slice'
import { createProductThunk } from '../app/thunks/CreateProductThunks'
import { getAccessToken } from '../helpers/token/TokenHandle'
import { getCookie } from '../logic/CookieFunctions'
import * as SearchForStaticVersion_STY from '../styles/components/styled-blocks/SearchBoxStatic.style'


interface Props {
    
}

function SearchBoxStaticVersion({}: Props): ReactElement {
    const router = useRouter()
    const [pagePath, setpagePath] = useState("")
    const dispatch = useAppDispatch()
    const searchData = useAppSelector(search_data)











    const {isSearchVisible} = searchData

    const [boxFocused, setboxFocused] = useState(false)
    const [thunkHovered, setthunkHovered] = useState(false)
    const searchBoxRef = useRef<HTMLDivElement>(null)
    const searchContRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)
    const searchNavRef = useRef<HTMLDivElement>(null)
    const scrollY = useScrollYPosition();
    const forumSearchData = useAppSelector(forum_search_data)
    const focusSearchHandle= (e:any) => {
        setboxFocused(true)
        e.target.select()
    }
    const {searchOptions} = forumSearchData
    const forumSearchOptions = searchOptions

    const [scrollSearchBox, setscrollSearchBox] = useState<number>(0)
    const [scrollYInside, setscrollYInside] = useState(0)

    const searchQuery = useAppSelector(search_query)
    const [searchValue, setSearchValue] = useState("")

    // const [searchValue, setSearchValue] = useState("")

    const changeSearchValue = (e:string) => {
        dispatch(searchValueOnChange(e))
    }

    const { isScrollingUp, isScrollingDown } = useScrollDirection()

    

    const pagePathDetector = (pathname:string) => {
        if(pathname === "/")
        {   
            return "Home"
        }
        else if(forumWordRegex.test(pathname)) 
        {
            return "Library"
        }
        else if(storeWordRegex.test(pathname))
        {
            return "Store"
        }
        else 
        {
            return ""
        }
    }

    



    const handleAddClick = () => {
        if(forumWordRegex.test(router.asPath))
        {
            dispatch(changeModalAction("questionCreate"))
        } 
        else if(storeWordRegex.test(router.asPath))
        {
            dispatch(changeModalAction("productCreate"))
        }
        else 
        {}
    }
    
    

    const searchHandleWithEnter = (key:number) => {
        if(key === 13)
        {
            if(router.pathname !== '/forum' && router.pathname !== '/store'){
                router.push('/forum')
            }
            if(forumSearchOptions.sendedQuery !== searchQuery){
                if(router.pathname === '/forum'){
                    dispatch(forumSearchInfinity({query:searchQuery , from:0}))
                }
                if(router.pathname === '/store'){
                    dispatch(storeSearchInfinity({query:searchQuery , from:0}))
                }
            }
        }
    }

    const searchHandleWithSubmit = () => {
        if(searchQuery !== "")
        {
            if(forumSearchOptions.sendedQuery !== searchQuery){
                if(router.pathname !== '/forum'){
                    dispatch(forumSearchInfinity({query:searchQuery , from:0}))
                }
                if(router.pathname !== '/store'){
                    dispatch(storeSearchInfinity({query:searchQuery , from:0}))
                }
            }
        }
    }

    
    const searchScrollControl = async (router:any) => {
            if(isScrollingDown && boxFocused)
              dispatch(changeSearchVisibilty('not-visible'))
    }

    const thunkHasHovered = async (router:any) => {
        // searchContRef.current!.setAttribute("style", `top: 60px;`) 
        dispatch(changeSearchVisibilty('not-visible'))
    }

    useEffect( () => {
        if(isScrollingDown){
            searchScrollControl(router.asPath)
        }
        
    }, [isScrollingDown,  router.asPath , scrollY])

    


    useEffect(() => {
        if(router.isReady)
        {
           
            setpagePath(pagePathDetector(router.asPath))
            if(router.asPath !== '/')
            {
                
                // searchBoxRef.current!.setAttribute("style" , "position:absolute;")
                // searchInputRef.current!.focus()
                dispatch(getFiltersFromCache(null))
                if(searchQuery === ""){
                    dispatch(getCachedSearchBoxData({page:router.pathname}))
                    dispatch(resetSendedQuery(null))
                    if(router.pathname === '/forum'){
                        if(searchData.searchBoxData.forum.fromNumber === 0){
                            dispatch(forumSearchInfinity({query:getCookie("searchValue") , from:0}))
                        }
                    }
                    else if(router.pathname === '/store'){  
                        if(searchData.searchBoxData.store.fromNumber === 0){
                            dispatch(storeSearchInfinity({query:getCookie("searchValue") , from:0}))
                        }
                    }else{}
                }else{
                    if(router.pathname === '/forum'){
                        if(searchData.searchBoxData.forum.fromNumber === 0){
                            dispatch(forumSearchInfinity({query:searchQuery , from:0}))
                        }
                    }
                    else if(router.pathname === '/store'){   
                        if(searchData.searchBoxData.store.fromNumber === 0){
                            dispatch(storeSearchInfinity({query:searchQuery , from:0}))
                        }
                    }else{}
                }
            }
        }
    }, [router ])

    
    return (
        <>
            <SearchForStaticVersion_STY.SearchBoxThunkAndCont_STY scrollFromTop={scrollY} boxFocused={boxFocused} thunkHovered={thunkHovered}
            onMouseEnter={() => setthunkHovered(true)} 
            onMouseLeave={() => setthunkHovered(false)} 
            >
                <SearchForStaticVersion_STY.SearchBox_STY  
                    onMouseLeave={() => (!boxFocused && scrollY > 0) ? dispatch(changeSearchVisibilty('not-visible')) : null} 
                    > 
                    {router.asPath !=='/' &&  <SearchForStaticVersion_STY.SearchBoxPage_STY>{pagePath}</SearchForStaticVersion_STY.SearchBoxPage_STY>}
                    <SearchForStaticVersion_STY.SearchCont_STY path={router.asPath}>
                        <SearchForStaticVersion_STY.SearchButtonLupa_STY onClick={searchHandleWithSubmit}><FontAwesomeIcon  icon={faSearch}/></SearchForStaticVersion_STY.SearchButtonLupa_STY>
                        <SearchForStaticVersion_STY.SearchInput_STY onFocus={focusSearchHandle} onBlur={() => setboxFocused(false)}  path={router.asPath} onKeyDown={(e:any) => searchHandleWithEnter(e.keyCode)} value={searchQuery}  onChange={(e:any) => changeSearchValue(e.target.value)}   placeholder="Search..." ref={searchInputRef}   type="text" /> 
                        {router.asPath !=='/' && <SearchForStaticVersion_STY.SearchNav_STY  path={router.asPath} ref={searchNavRef}>
                            {/* <SearchNavQuery>
                                <FontAwesomeIcon  icon={faSearch}/>
                                <span>react</span>
                            </SearchNavQuery>
                            <SearchNavQuery>
                                <FontAwesomeIcon  icon={faSearch}/>
                                <span>react</span>
                            </SearchNavQuery> */}
                        </SearchForStaticVersion_STY.SearchNav_STY>}
                        <SearchForStaticVersion_STY.AddQuesitionCont_STY onClick={handleAddClick}>ADD</SearchForStaticVersion_STY.AddQuesitionCont_STY>
                    </SearchForStaticVersion_STY.SearchCont_STY>
                </SearchForStaticVersion_STY.SearchBox_STY>

                {(pagePath !== "Home") && <SearchForStaticVersion_STY.SearchBoxThunk_STY thunkHovered={thunkHovered}  boxFocused={boxFocused} scrollFromTop={scrollY}  isBackVisible={searchData.thunkBackground === 'visible'}  
                
                
                ><div>	• 	•	• </div></SearchForStaticVersion_STY.SearchBoxThunk_STY>}
            </SearchForStaticVersion_STY.SearchBoxThunkAndCont_STY>
        </>
    )
}

export default SearchBoxStaticVersion