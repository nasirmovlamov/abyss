import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { useScrollDirection } from 'react-use-scroll-direction'
import { changeModalAction } from '../app/feature/User.slice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { forumWordRegex, storeWordRegex } from '../logic/regex/NavbarRegex'
import { AddQuesitionCont, SearchBoxContainer , SearchBoxPage, SearchBoxStyle, SearchBoxThunk, SearchBoxThunkAndCont, SearchButtonLupa, SearchCont, SearchInput, SearchNav, SearchNavQuery} from '../styles/components/styled-elements/SearchBox.style'
import { MainPartOfPageStyle, SidePartOfPageStyle } from '../styles/pages/Page.styled'
import { useScrollYPosition } from 'react-use-scroll-position';
import { forumSearch } from '../app/thunks/SearchBoxThunks'
import {  forum_search_options, forum_search_value, getCachedSearchBoxData, onForumSearchValue, resetSendedQuery } from '../app/feature/SearchBox.slice'
import { getFiltersFromCache } from '../app/feature/PageFilters.slice'
import { createProductThunk } from '../app/thunks/CreateProductThunks'
import { getAccessToken } from '../helpers/token/TokenHandle'
import { getCookie } from '../logic/CookieFunctions'


interface Props {
    
}

function SearchBox({}: Props): ReactElement {
    const router = useRouter()
    const [pagePath, setpagePath] = useState("")
    const searchBoxRef = useRef<HTMLDivElement>(null)
    const searchContRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)
    const searchNavRef = useRef<HTMLDivElement>(null)
    const dispatch = useAppDispatch()
    const scrollY = useScrollYPosition();
    const forumSearchOptions = useAppSelector(forum_search_options)

    const [scrollSearchBox, setscrollSearchBox] = useState<number>(0)
    const [scrollYInside, setscrollYInside] = useState(0)

    const searchBoxValue = useAppSelector(forum_search_value)
    const [searchValue, setSearchValue] = useState("")

    // const [searchValue, setSearchValue] = useState("")

    const changeSearchValue = (e:string) => {
        dispatch(onForumSearchValue(e))
        // setSearchValue(e)
        // searchNavRef.current!.style.top = (router.asPath === "/" ? `65px` : "51px")
        // if(router.pathname === '/')
        // {
        //     searchNavRef.current!.style.top = `66px`
        // }
    }

    const [direction, setDirection] = useState('visible')
    const { isScrollingUp, isScrollingDown } = useScrollDirection()

    const searchSizechange = (event:string) => {
        if(router.pathname === '/')
        {

            if(event === 'focus')
            {
                searchContRef.current!.style.paddingTop = `1vh`
                searchNavRef.current!.style.top = `65px`
                return 0
            }
            if(event === 'blur')
            {
                searchContRef.current!.style.paddingTop = `20vh`
                searchNavRef.current!.style.top = `0px`
            }
        }
       
        if(event === 'blur')
        {
            searchNavRef.current!.style.top = `0px`
            return 0
        }

    } 

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

    const SearchContDesign = {
        paddingTop: pagePath === "Home" ? "20vh" : "0vh",
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
            if(router.pathname !== '/forum'){
                router.push('/forum')
            }
            if(forumSearchOptions.sendedQuery !== forumSearchOptions.searchValue){
                dispatch(forumSearch(searchBoxValue))
            }
        }
    }

    const searchHandleWithSubmit = () => {
        if(searchBoxValue !== "")
        {
            if(forumSearchOptions.sendedQuery !== forumSearchOptions.searchValue){
                dispatch(forumSearch(searchBoxValue))
            }
        }
    }

    
    const searchScrollControl = async (router:any) => {
        if(router.asPath !== '/')
        {
            isScrollingDown && searchBoxRef.current!.setAttribute("style", `position: sticky;top:10px;`) 
            // console.log(searchContRef.current!.style.position)
        }   
    }

    const thunkHasHovered = async (router:any) => {
        searchContRef.current!.setAttribute("style", `top: 60px;`) 
    }

    useEffect( () => {
        searchScrollControl(router.asPath)
    }, [isScrollingDown,  router.asPath , scrollY])


    useEffect(() => {
        if(router.isReady)
        {
            setpagePath(pagePathDetector(router.asPath))
            if(router.asPath !== '/')
            {
                // searchBoxRef.current!.setAttribute("style" , "position:absolute;")
                searchInputRef.current!.focus()
                dispatch(getFiltersFromCache(null))
                if(forumSearchOptions.searchValue === ""){
                    dispatch(getCachedSearchBoxData(null))
                    dispatch(resetSendedQuery(null))
                    dispatch(forumSearch(getCookie('ForumSearchValue')))
                }
            }
        }
    }, [router])

    
    return (
        
        <SearchBoxContainer scrollTopValue={scrollSearchBox} ref={searchContRef} path={router.asPath} style={SearchContDesign}>
                <SearchBoxThunkAndCont  ref={searchBoxRef} direction={direction}>
                    <SearchBoxStyle path={router.asPath} direction={direction} > 
                        <SearchBoxPage>{pagePath}</SearchBoxPage>
                        <SearchCont>
                            <SearchButtonLupa onClick={searchHandleWithSubmit}><FontAwesomeIcon  icon={faSearch}/></SearchButtonLupa>
                            <SearchInput onKeyDown={(e:any) => searchHandleWithEnter(e.keyCode)} value={searchBoxValue}  onChange={(e:any) => changeSearchValue(e.target.value)}  path={router.asPath} placeholder="Search..." ref={searchInputRef} onFocus={() => searchSizechange('focus')} onBlur={() => searchSizechange('blur')}  type="text" /> 
                            <SearchNav  path={router.asPath} ref={searchNavRef}>
                                {/* <SearchNavQuery>
                                    <FontAwesomeIcon  icon={faSearch}/>
                                    <span>react</span>
                                </SearchNavQuery>
                                <SearchNavQuery>
                                    <FontAwesomeIcon  icon={faSearch}/>
                                    <span>react</span>
                                </SearchNavQuery> */}
                            </SearchNav>
                        </SearchCont>
                        {pagePath !== "Home" && <AddQuesitionCont onClick={handleAddClick}>ADD</AddQuesitionCont>}
                    </SearchBoxStyle>
                    {(pagePath !== "Home") && <SearchBoxThunk onMouseMove={()=>setDirection("visible")} direction={direction} >	• 	•	•</SearchBoxThunk>}
                </SearchBoxThunkAndCont>
        </SearchBoxContainer>
    )
}

export default SearchBox
