import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useScrollDirection } from 'react-use-scroll-direction';
import { useScrollYPosition } from 'react-use-scroll-position';

import { forumWordRegex, storeWordRegex } from '../../helpers/functions/regex/NavbarRegex';
import { getFiltersFromCache } from '../../store/slices/PageFilters.slice';
import {
  changeSearchVisibilty,
  forum_search_data,
  getCachedSearchBoxData,
  resetSendedQuery,
  search_data,
  search_query,
  searchValueOnChange,
} from '../../store/slices/SearchBox.slice';
import { changeModalAction } from '../../store/slices/User.slice';
import { useAppDispatch, useAppSelector } from '../../store/states/store.hooks';
import * as SearchForHome_STY from '../../styles/styled-components/base/modules/SearchBoxHome.style';

const SearchBoxHome = () => {
  const router = useRouter()
  const [pagePath, setpagePath] = useState('')
  const dispatch = useAppDispatch()
  const searchData = useAppSelector(search_data)

  const [boxFocused, setboxFocused] = useState(false)
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

  const searchQuery = useAppSelector(search_query)

  const changeSearchValue = (e: string) => {
    dispatch(searchValueOnChange(e))
  }

  const { isScrollingUp, isScrollingDown } = useScrollDirection()

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
      if (forumSearchOptions.sendedQuery !== searchQuery) {
        if (router.pathname === '/forum') {
          // dispatch(forumSearchInfinity({query:searchQuery , from:0}))
        }
        if (router.pathname === '/store') {
          // dispatch(storeSearchInfinity({query:searchQuery , from:0}))
        }
      }
    }
  }

  const searchHandleWithSubmit = () => {
    if (searchQuery !== '') {
      if (forumSearchOptions.sendedQuery !== searchQuery) {
        if (router.pathname !== '/forum') {
          // dispatch(forumSearchInfinity({query:searchQuery , from:0}))
        }
        if (router.pathname !== '/store') {
          // dispatch(storeSearchInfinity({query:searchQuery , from:0}))
        }
      }
    }
  }

  const searchScrollControl = async (router: any) => {
    if (isScrollingDown && !boxFocused) dispatch(changeSearchVisibilty('not-visible'))
  }

  const thunkHasHovered = async (router: any) => {
    // searchContRef.current!.setAttribute("style", `top: 60px;`)
    dispatch(changeSearchVisibilty('not-visible'))
  }

  useEffect(() => {
    if (isScrollingDown) {
      searchScrollControl(router.asPath)
    }
  }, [isScrollingDown, router.asPath, scrollY])

  useEffect(() => {
    if (scrollY === 0) {
      dispatch(changeSearchVisibilty('visible'))
    }
  }, [scrollY])

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

  return (
    <SearchForHome_STY.SearchBoxThunkAndCont_STY>
      <SearchForHome_STY.SearchBox_STY
        onMouseLeave={() =>
          !boxFocused && scrollY > 0 ? dispatch(changeSearchVisibilty('not-visible')) : null
        }
      >
        {router.asPath !== '/' && (
          <SearchForHome_STY.SearchBoxPage_STY>{pagePath}</SearchForHome_STY.SearchBoxPage_STY>
        )}
        <SearchForHome_STY.SearchCont_STY path={router.asPath}>
          <SearchForHome_STY.SearchButtonLupa_STY onClick={searchHandleWithSubmit}>
            <FontAwesomeIcon icon={faSearch} />
          </SearchForHome_STY.SearchButtonLupa_STY>
          <SearchForHome_STY.SearchInput_STY
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
            <SearchForHome_STY.SearchNav_STY
              path={router.asPath}
              ref={searchNavRef}
            ></SearchForHome_STY.SearchNav_STY>
          )}
        </SearchForHome_STY.SearchCont_STY>
        {pagePath !== 'Home' && (
          <SearchForHome_STY.AddQuesitionCont_STY onClick={handleAddClick}>
            ADD
          </SearchForHome_STY.AddQuesitionCont_STY>
        )}
      </SearchForHome_STY.SearchBox_STY>
    </SearchForHome_STY.SearchBoxThunkAndCont_STY>
  )
}

export default SearchBoxHome
