import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { useScrollDirection } from 'react-use-scroll-direction';
import { useScrollYPosition } from 'react-use-scroll-position';

import { forumWordRegex, storeWordRegex } from '../../helpers/functions/regex/NavbarRegex';
import { getFiltersFromCache } from '../../store/slices/PageFilters.slice';
import {
  changeSearchVisibilty,
  forum_search_data,
  getCachedSearchBoxData,
  hoverSearchNav,
  resetSendedQuery,
  search_data,
  search_query,
  searchValueOnChange,
  unhoverSearchNav,
} from '../../store/slices/SearchBox.slice';
import { changeModalAction } from '../../store/slices/User.slice';
import { useAppDispatch, useAppSelector } from '../../store/states/store.hooks';
import { forumSearchInfinity, storeSearchInfinity } from '../../store/thunks/SearchBox.thunk';
import {
  AddQuesitionCont_STY,
  SearchBox_STY,
  SearchBoxContainer_STY,
  SearchBoxPage_STY,
  SearchBoxThunk_STY,
  SearchBoxThunkAndCont_STY,
  SearchButtonLupa_STY,
  SearchCont_STY,
  SearchInput_STY,
  SearchNav_STY,
} from '../../styles/styled-components/base/modules/SearchBox.style';

interface Props {}

function SearchBox({}: Props): ReactElement {
  const router = useRouter()
  const [pagePath, setpagePath] = useState('')
  const dispatch = useAppDispatch()
  const searchData = useAppSelector(search_data)

  const { isSearchVisible } = searchData

  const [boxFocused, setboxFocused] = useState(false)
  const searchBoxRef = useRef<HTMLDivElement>(null)
  const searchContRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchNavRef = useRef<HTMLDivElement>(null)
  const scrollY = useScrollYPosition()
  const forumSearchData = useAppSelector(forum_search_data)
  const focusSearchHandle = (e: any) => {
    setboxFocused(true)
    e.target.select()
  }
  const { searchOptions } = forumSearchData
  const forumSearchOptions = searchOptions

  const [scrollYInside, setscrollYInside] = useState(0)

  const searchQuery = useAppSelector(search_query)
  const [searchValue, setSearchValue] = useState('')

  // const [searchValue, setSearchValue] = useState("")

  const changeSearchValue = (e: string) => {
    dispatch(searchValueOnChange(e))
  }

  const { isScrollingUp, isScrollingDown } = useScrollDirection()

  const searchSizechange = (event: string) => {
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

  const pagePathDetector = (pathname: string) => {
    if (pathname === '/') {
      return 'Home'
    } else if (forumWordRegex.test(pathname)) {
      return 'Library'
    } else if (storeWordRegex.test(pathname)) {
      return 'Store'
    } else {
      return ''
    }
  }

  const SearchContDesign = {
    paddingBottom: pagePath === 'Home' ? '0vh' : '0vh',
    height: pagePath === 'Home' ? 'auto' : '',
    // position: pagePath === "Home" ? "relative" : "",
  }

  const handleAddClick = () => {
    if (forumWordRegex.test(router.asPath)) {
      dispatch(changeModalAction('questionCreate'))
    } else if (storeWordRegex.test(router.asPath)) {
      dispatch(changeModalAction('productCreate'))
    } else {
    }
  }

  const searchHandleWithEnter = (key: number) => {
    if (key === 13) {
      if (router.pathname !== '/forum' && router.pathname !== '/store') {
        router.push('/forum')
      }
      window.scrollTo({
        top: 0,
      })
      if (forumSearchOptions.sendedQuery !== searchQuery) {
        if (router.pathname === '/forum') {
          dispatch(
            forumSearchInfinity({
              query: searchQuery,
              from: 0,
              forumType: searchData.searchBoxData.forum.searchOptions.forumType,
              filterTags: searchData.filters,
              excludedFilters: searchData.exculudedFilters,
            }),
          )
        }
        if (router.pathname === '/store') {
          dispatch(
            storeSearchInfinity({
              query: searchQuery,
              from: 0,
              storeType: searchData.searchBoxData.store.searchOptions.storeType,
              filterTags: searchData.filters,
              excludedFilters: searchData.exculudedFilters,
            }),
          )
        }
      }
    }
  }

  const searchHandleWithSubmit = () => {
    if (searchQuery !== '') {
      window.scrollTo({
        top: 0,
      })
      if (forumSearchOptions.sendedQuery !== searchQuery) {
        if (router.pathname !== '/forum') {
          dispatch(
            forumSearchInfinity({
              query: searchQuery,
              from: 0,
              forumType: searchData.searchBoxData.forum.searchOptions.forumType,
              filterTags: searchData.filters,
              excludedFilters: searchData.exculudedFilters,
            }),
          )
        }
        if (router.pathname !== '/store') {
          dispatch(
            storeSearchInfinity({
              query: searchQuery,
              from: 0,
              storeType: searchData.searchBoxData.store.searchOptions.storeType,
              filterTags: searchData.filters,
              excludedFilters: searchData.exculudedFilters,
            }),
          )
        }
      }
    }
  }

  const searchScrollControl = async () => {
    if (isScrollingDown && !boxFocused) {
      if (router.pathname !== '/cave') {
        dispatch(changeSearchVisibilty('not-visible'))
      }
    }
  }

  const thunkHasHovered = async (router: any) => {
    // searchContRef.current!.setAttribute("style", `top: 60px;`)
    dispatch(changeSearchVisibilty('not-visible'))
  }

  useEffect(() => {
    if (isScrollingDown) {
      searchScrollControl()
    }
  }, [isScrollingDown, router.asPath, scrollY])

  useEffect(() => {
    if (router.isReady) {
      setpagePath(pagePathDetector(router.asPath))
      if (router.asPath !== '/') {
        // searchBoxRef.current!.setAttribute("style" , "position:absolute;")
        // searchInputRef.current!.focus()
        dispatch(getFiltersFromCache(null))
        if (searchQuery === '') {
          dispatch(getCachedSearchBoxData({ page: router.pathname }))
          dispatch(resetSendedQuery(null))
          if (router.pathname === '/forum') {
            if (searchData.searchBoxData.forum.fromNumber === 0) {
              // dispatch(forumSearchInfinity({query:getCookie("searchValue") , from:0}))
            }
          } else if (router.pathname === '/store') {
            if (searchData.searchBoxData.store.fromNumber === 0) {
              // dispatch(storeSearchInfinity({query:getCookie("searchValue") , from:0}))
            }
          } else {
          }
        } else {
          if (router.pathname === '/forum') {
            if (searchData.searchBoxData.forum.fromNumber === 0) {
              // dispatch(forumSearchInfinity({query:searchQuery , from:0}))
            }
          } else if (router.pathname === '/store') {
            if (searchData.searchBoxData.store.fromNumber === 0) {
              // dispatch(storeSearchInfinity({query:searchQuery , from:0}))
            }
          } else {
          }
        }
      }
    }
  }, [router])

  useEffect(() => {
    if (scrollY < 600) {
      if (router.pathname !== '/cave') {
        dispatch(changeSearchVisibilty('not-visible'))
      }
    }
  }, [scrollY])

  return (
    <>
      <SearchBoxContainer_STY ref={searchContRef} path={router.asPath} style={SearchContDesign}>
        <SearchBoxThunkAndCont_STY
          scrollFromTop={scrollY}
          ref={searchBoxRef}
          direction={isSearchVisible}
        >
          <SearchBox_STY
            onMouseLeave={() =>
              !boxFocused && scrollY > 0 ? dispatch(changeSearchVisibilty('not-visible')) : null
            }
            path={router.asPath}
            direction={isSearchVisible}
          >
            {router.asPath !== '/' && <SearchBoxPage_STY>{pagePath}</SearchBoxPage_STY>}
            <SearchCont_STY path={router.asPath}>
              <SearchButtonLupa_STY onClick={searchHandleWithSubmit}>
                <FontAwesomeIcon icon={faSearch} />
              </SearchButtonLupa_STY>
              <SearchInput_STY
                onFocus={focusSearchHandle}
                onBlur={() => setboxFocused(false)}
                path={router.asPath}
                onKeyDown={(e: any) => searchHandleWithEnter(e.keyCode)}
                value={searchQuery}
                onChange={(e: any) => changeSearchValue(e.target.value)}
                placeholder="Search..."
                ref={searchInputRef}
                type="text"
              />
              {router.asPath !== '/' && (
                <SearchNav_STY
                  onMouseEnter={() => dispatch(hoverSearchNav(null))}
                  onMouseLeave={() => dispatch(unhoverSearchNav(null))}
                  path={router.asPath}
                  ref={searchNavRef}
                >
                  {/* <SearchNavQuery>
                                    <FontAwesomeIcon  icon={faSearch}/>
                                    <span>react</span>
                                </SearchNavQuery>
                                <SearchNavQuery>
                                    <FontAwesomeIcon  icon={faSearch}/>
                                    <span>react</span>
                                </SearchNavQuery> */}
                </SearchNav_STY>
              )}
            </SearchCont_STY>
            {pagePath !== 'Home' && (
              <AddQuesitionCont_STY onClick={handleAddClick}>ADD</AddQuesitionCont_STY>
            )}
          </SearchBox_STY>

          {pagePath !== 'Home' && (
            <SearchBoxThunk_STY
              scrollFromTop={scrollY}
              isBackVisible={searchData.thunkBackground === 'visible'}
              onMouseMove={() => dispatch(changeSearchVisibilty('visible'))}
              direction={isSearchVisible}
            >
              <div> • • • </div>
            </SearchBoxThunk_STY>
          )}
        </SearchBoxThunkAndCont_STY>
      </SearchBoxContainer_STY>
    </>
  )
}

export default SearchBox
