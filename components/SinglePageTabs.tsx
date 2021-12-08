import { Router, useRouter } from 'next/router'
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { changeForumTabActive,  page_tabs } from '../app/feature/PageTabs.slice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { forumWordRegex, storeWordRegex } from '../logic/regex/NavbarRegex'
import * as SinglePageTabs_STY from '../styles/components/styled-blocks/SinglePageTabs.styled'
import NavLink from './NavLink'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { changeThunkBackVisibilty, search_data } from '../app/feature/SearchBox.slice'
import { useScrollYPosition } from 'react-use-scroll-position'


interface Props {

}

function SinglePageTabs({}: Props): ReactElement {
    const searchData = useAppSelector(search_data)
    const pageTabs = useAppSelector(page_tabs);
    const router = useRouter()
    const pageTabsContRef = useRef<HTMLDivElement>(null)
    const scrollY = useScrollYPosition()
    const dispatch = useAppDispatch()


    // Dive deep into the abyss 
    //Explore unknown


    useEffect(() => {
        if(router.isReady){
            if(pageTabsContRef.current!.getBoundingClientRect().top <= 74 && searchData.thunkBackground === 'not-visible'){
                dispatch(changeThunkBackVisibilty('visible'))
            }else if(pageTabsContRef.current!.getBoundingClientRect().top > 74 && searchData.thunkBackground === 'visible') {
                dispatch(changeThunkBackVisibilty('not-visible'))
            }
        }
    }, [scrollY , router])
        

    return (
        <SinglePageTabs_STY.SingleTabsContainer ref={pageTabsContRef} isSearchBarVisible={searchData.isSearchVisible}>
            <SinglePageTabs_STY.SingleTabs>
                {   
                    (
                        forumWordRegex.test(router.pathname)
                        &&
                        pageTabs.forumTabs.map( 
                            (tabs , index)=>
                            <>
                                <Link key={tabs.id} to={`${tabs.link}`}>
                                    <SinglePageTabs_STY.SingleTabButton tabActive={tabs.isActive}>
                                        <SinglePageTabs_STY.SingleTabText  >{tabs.tabName}</SinglePageTabs_STY.SingleTabText> 
                                        {/* <SingleLine />     */}
                                    </SinglePageTabs_STY.SingleTabButton>    
                                </Link>
                                
                                { (index+1) < pageTabs.forumTabs.length && <SinglePageTabs_STY.TabButtonSeperator_STY />   }
                            </>
                        )
                    )
                    ||

                    (
                        storeWordRegex.test(router.pathname)
                        &&
                        pageTabs.productTabs.map
                        ( (tabs , index)=>
                            <>
                                <NavLink key={tabs.id} href={`#${tabs.link}`}>
                                    <SinglePageTabs_STY.SingleTabButton tabActive={tabs.isActive}>
                                        <SinglePageTabs_STY.SingleTabText  >{tabs.tabName}</SinglePageTabs_STY.SingleTabText> 
                                        {/* <SingleLine />     */}
                                    </SinglePageTabs_STY.SingleTabButton>    
                                </NavLink>
                                {(index+1) < pageTabs.productTabs.length &&  <SinglePageTabs_STY.TabButtonSeperator_STY />   }
                            </>
                        )
                    )
                }
            </SinglePageTabs_STY.SingleTabs>
        </SinglePageTabs_STY.SingleTabsContainer>  
    )
}

export default SinglePageTabs
