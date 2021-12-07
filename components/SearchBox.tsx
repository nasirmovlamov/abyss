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
import { forumSearch, storeSearch } from '../app/thunks/SearchBoxThunks'
import {  forum_search_data,  getCachedSearchBoxData, searchValueOnChange, resetSendedQuery, search_query } from '../app/feature/SearchBox.slice'
import { getFiltersFromCache } from '../app/feature/PageFilters.slice'
import { createProductThunk } from '../app/thunks/CreateProductThunks'
import { getAccessToken } from '../helpers/token/TokenHandle'
import { getCookie } from '../logic/CookieFunctions'
import { 
    AddQuesitionCont_STY,
    SearchBoxContainer_STY, 
    SearchBoxPage_STY, 
    SearchBoxThunkAndCont_STY, 
    SearchBox_STY, 
    SearchButtonLupa_STY, 
    SearchCont_STY, 
    SearchInput_STY, 
    SearchNav_STY 
} from '../styles/components/styled-blocks/SearchBox.style'


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
    const forumSearchData = useAppSelector(forum_search_data)

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

    const [direction, setDirection] = useState('visible')
    const { isScrollingUp, isScrollingDown } = useScrollDirection()

    const searchSizechange = (event:string) => {
        // if(router.pathname === '/')
        // {

        //     if(event === 'focus')
        //     {
        //         searchContRef.current!.style.paddingTop = `1vh`
        //         searchNavRef.current!.style.top = `165px`
        //         return 0
        //     }
        //     if(event === 'blur')
        //     {
        //         searchContRef.current!.style.paddingTop = `20vh`
        //         searchNavRef.current!.style.top = `164px`
        //     }
        // }
       
        // if(event === 'blur')
        // {
        //     searchNavRef.current!.style.top = `0px`
        //     return 0
        // }

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
        paddingBottom: pagePath === "Home" ? "0vh" : "0vh",
        height: pagePath === "Home" ? "auto" : "",
        // position: pagePath === "Home" ? "relative" : "",
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
                    dispatch(forumSearch(searchQuery))
                }
                if(router.pathname === '/store'){
                    dispatch(storeSearch(searchQuery))
                }
            }
        }
    }

    const searchHandleWithSubmit = () => {
        if(searchQuery !== "")
        {
            if(forumSearchOptions.sendedQuery !== searchQuery){
                if(router.pathname !== '/forum'){
                    dispatch(forumSearch(searchQuery))
                }
                if(router.pathname !== '/store'){
                    dispatch(storeSearch(searchQuery))
                }
            }
        }
    }

    
    const searchScrollControl = async (router:any) => {
        if(router.asPath !== '/')
        {
            isScrollingDown && searchBoxRef.current!.setAttribute("style", `margin-top: 60px;`) 
            // console.log(searchContRef.current!.style.position)
        }   
    }

    const thunkHasHovered = async (router:any) => {
        searchContRef.current!.setAttribute("style", `top: 60px;`) 
    }

    useEffect( () => {
        if(isScrollingDown){
            searchScrollControl(router.asPath)
        }
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
                // dispatch(getFiltersFromCache(null))
                if(searchQuery === ""){
                    dispatch(getCachedSearchBoxData({page:router.pathname}))
                    dispatch(resetSendedQuery(null))
                    if(router.pathname === '/forum'){
                        dispatch(forumSearch(getCookie("searchValue")))
                    }
                    else if(router.pathname === '/store'){   
                        dispatch(storeSearch(getCookie("searchValue")))
                    }else{}
                }else{
                    if(router.pathname === '/forum'){
                        dispatch(forumSearch(searchQuery))
                    }
                    else if(router.pathname === '/store'){   
                        dispatch(storeSearch(searchQuery))
                    }else{}
                }
            }
        }
    }, [router ])

    
    return (
        
        <SearchBoxContainer_STY  scrollTopValue={scrollSearchBox} ref={searchContRef} path={router.asPath} style={SearchContDesign}>
                <SearchBoxThunkAndCont_STY  ref={searchBoxRef} direction={direction}>
                    <SearchBox_STY path={router.asPath} direction={direction} > 
                       {router.asPath !=='/' &&  <SearchBoxPage_STY>{pagePath}</SearchBoxPage_STY>}
                        <SearchCont_STY path={router.asPath}>
                            <SearchButtonLupa_STY onClick={searchHandleWithSubmit}><FontAwesomeIcon  icon={faSearch}/></SearchButtonLupa_STY>
                            <SearchInput_STY  path={router.asPath} onKeyDown={(e:any) => searchHandleWithEnter(e.keyCode)} value={searchQuery}  onChange={(e:any) => changeSearchValue(e.target.value)}   placeholder="Search..." ref={searchInputRef} onFocus={() => searchSizechange('focus')} onBlur={() => searchSizechange('blur')}  type="text" /> 
                            {router.asPath !=='/' && <SearchNav_STY  path={router.asPath} ref={searchNavRef}>
                                {/* <SearchNavQuery>
                                    <FontAwesomeIcon  icon={faSearch}/>
                                    <span>react</span>
                                </SearchNavQuery>
                                <SearchNavQuery>
                                    <FontAwesomeIcon  icon={faSearch}/>
                                    <span>react</span>
                                </SearchNavQuery> */}
                            </SearchNav_STY>}
                        </SearchCont_STY>
                        {pagePath !== "Home" && <AddQuesitionCont_STY onClick={handleAddClick}>ADD</AddQuesitionCont_STY>}
                    </SearchBox_STY>
                    {/* {(pagePath !== "Home") && <SearchBoxThunk onMouseMove={()=>setDirection("visible")} direction={direction} >	• 	•	•</SearchBoxThunk>} */}
                </SearchBoxThunkAndCont_STY>
                
        </SearchBoxContainer_STY>
    )
}

export default SearchBox
