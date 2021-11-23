import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useState } from 'react'
import { changeForumTabActive,  page_tabs } from '../app/feature/PageTabs.slice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { forumWordRegex, storeWordRegex } from '../logic/regex/NavbarRegex'
import { SingleLine,  SingleTabButton, SingleTabs, SingleTabsContainer, SingleTabTags, SingleTabTagsCont, SingleTabText } from '../styles/components/styled-elements/SinglePageTabs.styled'
import NavLink from './NavLink'


interface Props {

}

function SinglePageTabs({}: Props): ReactElement {
    
    const pageTabs = useAppSelector(page_tabs);
    const router = useRouter()


    return (
        <SingleTabsContainer>
            <SingleTabs>
                {   
                    (
                        forumWordRegex.test(router.pathname)
                        &&
                        pageTabs.forumTabs.map( 
                            (tabs)=>
                            <NavLink key={tabs.id} href={`#${tabs.link}`}>
                                <SingleTabButton tabActive={tabs.isActive}>
                                    <SingleTabText  >{tabs.tabName}</SingleTabText> 
                                    <SingleLine />    
                                </SingleTabButton>    
                            </NavLink>
                        )
                    )
                    ||

                    (
                        storeWordRegex.test(router.pathname)
                        &&
                        pageTabs.productTabs.map
                        ( (tabs)=>
                            <NavLink key={tabs.id} href={`#${tabs.link}`}>
                                <SingleTabButton tabActive={tabs.isActive}>
                                    <SingleTabText  >{tabs.tabName}</SingleTabText> 
                                    <SingleLine />    
                                </SingleTabButton>    
                            </NavLink>
                        )
                    )
                }
            </SingleTabs>
        </SingleTabsContainer>  
    )
}

export default SinglePageTabs
