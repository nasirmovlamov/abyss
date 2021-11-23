import axios from 'axios'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useState } from 'react'
import FormQuestion from '../../components/ForumQuestion'
import PageTabs from '../../components/ForumPageTabs'
import { TabButton, Tabs, TabsContainer, TabTags, TabTagsCont } from '../../styles/components/styled-elements/PageTabs.style'
import { ForumPage } from '../../styles/global/styled-utils/styling-elements/Pages.style'
import MainPartOfPage from '../../components/MainPartOfPage'
import SidePartOfPage from '../../components/SidePartOfPage'
import { PageDefaultStyle } from '../../styles/pages/Page.styled'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { is_chatbox_opened } from '../../app/feature/ChatBox.slice'
import ChatBox from '../../components/ChatBox'
import PageFilters from '../../components/PageFilters'
import CommentModal from '../../components/CommentsTab'
import { forum_data_status, forum_search_data, forum_search_from_value, forum_search_value } from '../../app/feature/SearchBox.slice'
import FormQuestionSkeleton from '../../components/Skeletons/ForumQuestionSkeleton'
import { encryptData , decryptData } from '../../logic/Cryption'
import { useInView } from 'react-intersection-observer'
import { dispatch } from 'react-hot-toast/dist/core/store'
import { forumSearch, forumSearchInfinity } from '../../app/thunks/SearchBoxThunks'
import { getCookie } from '../../logic/CookieFunctions'

interface Props {
    
}

function Forum({}: Props): ReactElement {
    const [inViewRefLoaderDown, inViewLoaderDown] = useInView()
    const dispatch = useAppDispatch()
    const forumSearchValue = useAppSelector(forum_search_value)
    const forumSearchFromValue = useAppSelector(forum_search_from_value)
    const router = useRouter()
    const isChatBoxOpened = useAppSelector(is_chatbox_opened)
    const forumSearchData = useAppSelector(forum_search_data)
    const forumSearchStatus = useAppSelector(forum_data_status)
    const a = [1,2,3,4]
    


    useEffect(() => {
        if(inViewLoaderDown){
            const data = {query:forumSearchValue , from:forumSearchFromValue} 
            dispatch(forumSearchInfinity(data))
        }
    }, [inViewLoaderDown])
    
   

    return (
        <PageDefaultStyle>
            <SidePartOfPage side={"left"}>
            </SidePartOfPage>
            
           


            <MainPartOfPage>
                <ForumPage>
                    
                    <PageTabs/>  
                    {
                        forumSearchStatus === "loaded" && 
                        forumSearchData.map((element , index) => <FormQuestion  key={index} data={element}/>)
                    } 
                    
                    {forumSearchStatus === "loading" && 
                        <div style={{width:"100%" , display:"flex", flexDirection:"column", rowGap:"10px"}}>
                            <FormQuestionSkeleton/>
                            <FormQuestionSkeleton/>
                            <FormQuestionSkeleton/>
                            <FormQuestionSkeleton/>
                            <FormQuestionSkeleton/>
                            <FormQuestionSkeleton/>
                            <FormQuestionSkeleton/>
                            <FormQuestionSkeleton/>
                            <FormQuestionSkeleton/>
                            <FormQuestionSkeleton/>
                            <FormQuestionSkeleton/>
                        </div>
                    } 

                    {forumSearchStatus === "error" && <div>Error ...</div>} 

                    <div ref={inViewRefLoaderDown} style={{width:"100%" , display:"flex", flexDirection:"column", rowGap:"10px"}}>
                            <FormQuestionSkeleton/>
                    </div>

                </ForumPage>
            </MainPartOfPage>


            <SidePartOfPage side={"right"}>
                {
                    <>
                        {isChatBoxOpened  && <ChatBox/>}
                    </>
                }
            </SidePartOfPage>
        </PageDefaultStyle>
    )
}

export default Forum