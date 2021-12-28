import React, { ReactElement, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { changeForumTabActive,  changeProductTabActive,  page_tabs } from '../app/feature/PageTabs.slice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { forumWordRegex, storeWordRegex } from '../logic/regex/NavbarRegex'
import * as SinglePageTabs_STY from '../styles/components/styled-blocks/SinglePageTabs.styled'
import NavLink from './NavLink'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { changeThunkBackVisibilty, search_data } from '../app/feature/SearchBox.slice'
import { useScrollYPosition } from 'react-use-scroll-position'
import { useScrollDirection } from 'react-use-scroll-direction'


interface Props {

}

function SinglePageTabs({}: Props): ReactElement {
    const searchData = useAppSelector(search_data)
    const pageTabs = useAppSelector(page_tabs);
    const router = useRouter()
    const pageTabsContRef = useRef<HTMLDivElement>(null)
    const pageTabsContBGRef = useRef<HTMLDivElement>(null)
    const scrollY = useScrollYPosition()
    const dispatch = useAppDispatch()
    const {isScrollingUp}  = useScrollDirection()
    const scrollDirection  = useScrollDirection()
    const [distanceFromTop, setdistanceFromTop] = useState<number>()
    const [initialdistanceFromTop, setinitialdistanceFromTop] = useState<number>()
    const [scrollUp, setscrollUp] = useState(false)


    // Dive deep into the abyss 
    //Explore unknown


    useEffect(() => {
        if(router.isReady){
            if(pageTabsContRef.current!.getBoundingClientRect().top <= 84 && searchData.thunkBackground === 'not-visible'){
                dispatch(changeThunkBackVisibilty('visible'))
            }else if(pageTabsContRef.current!.getBoundingClientRect().top > 84 && searchData.thunkBackground === 'visible') {
                dispatch(changeThunkBackVisibilty('not-visible'))
            }
        }
    }, [scrollY , router])
        
    useLayoutEffect(() => {
        getDistanceFromParent()
        if(scrollDirection.isScrolling){
            if(isScrollingUp){
                setscrollUp(isScrollingUp)
            }else{
                setscrollUp(isScrollingUp)
            }
        }
    }, [scrollY])

    useLayoutEffect(() => {
        getinitialDistanceFromParent()
    }, [])

    const getDistanceFromParent = () => {
        // Our element
        let elem:any = pageTabsContBGRef.current!

        // Set our distance placeholder
        let distance = 0;

        // Loop up the dom
        do {
            // Increase our distance counter
            distance += elem.offsetTop;
            // Set the element to it's parent
            elem = elem.offsetParent;
        } while (elem);
        setdistanceFromTop(distance)
    }
    const getinitialDistanceFromParent = () => {
        // Our element
        let elem:any = pageTabsContBGRef.current!

        // Set our distance placeholder
        let distance = 0;

        // Loop up the dom
        do {
            // Increase our distance counter
            distance += elem.offsetTop;
            // Set the element to it's parent
            elem = elem.offsetParent;
        } while (elem);
        setinitialdistanceFromTop(distance)
    }

    return (
        <SinglePageTabs_STY.SingleTabsContForBG 
        ref={pageTabsContBGRef} 
        >   

            <SinglePageTabs_STY.SingleTabsContainer 
                isSearchBarVisible={searchData.isSearchVisible}
                scrollFromTop={pageTabsContRef.current !== null ? pageTabsContRef.current!.getBoundingClientRect().top : 0} 
                isSearchFocused={searchData.isFocused}
                isSearchHovered={searchData.isHovered}
                initialdistanceFromTop={initialdistanceFromTop}
                distanceFromTop={distanceFromTop}
                isScrollingUp={scrollUp}
                ref={pageTabsContRef} 
                >
                    {console.log(distanceFromTop)}
                    {console.log(initialdistanceFromTop)}
                    {console.log(scrollUp)}
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
                                    <SinglePageTabs_STY.SingleTabButton   key={tabs.id}  onClick={() => dispatch(changeProductTabActive(tabs))} tabActive={tabs.isActive}>
                                            <SinglePageTabs_STY.SingleTabText  >{tabs.tabName}</SinglePageTabs_STY.SingleTabText> 
                                    </SinglePageTabs_STY.SingleTabButton>    
                                    {(index+1) < pageTabs.productTabs.length &&  <SinglePageTabs_STY.TabButtonSeperator_STY key={(index + 100)} />   } 
                                </>
                            )
                        )
                    }
                </SinglePageTabs_STY.SingleTabs>
            </SinglePageTabs_STY.SingleTabsContainer>  
        </SinglePageTabs_STY.SingleTabsContForBG>
    )
}

export default SinglePageTabs
