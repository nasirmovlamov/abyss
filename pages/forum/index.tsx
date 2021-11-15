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
import { useAppSelector } from '../../app/store/hooks'
import { is_chatbox_opened } from '../../app/feature/ChatBoxSlice'
import ChatBox from '../../components/ChatBox'
import PageFilters from '../../components/PageFilters'
import CommentModal from '../../components/CommentsTab'
import { forum_data_status, forum_search_data } from '../../app/feature/SearchBoxSlice'
import FormQuestionSkeleton from '../../components/Skeletons/ForumQuestionSkeleton'
import { encryptData , decryptData } from '../../logic/Cryption'

interface Props {
    
}

function Forum({}: Props): ReactElement {
    const router = useRouter()
    const isChatBoxOpened = useAppSelector(is_chatbox_opened)
    const forumSearchData = useAppSelector(forum_search_data)
    const forumSearchStatus = useAppSelector(forum_data_status)
    
    
    return (
        <PageDefaultStyle>
            <SidePartOfPage side={"left"}>
            </SidePartOfPage>
            
           


            <MainPartOfPage>
                <ForumPage>
                    
                    <PageTabs/>  
                    {`${encryptData("salam")}`}
                    {`${decryptData(encryptData("salam"))}`}`
                    {forumSearchStatus === "loaded" && forumSearchData.map((element , index) => <FormQuestion  key={index} data={element}/>)} 
                    {forumSearchStatus === "loading" && 
                        <div style={{width:"100%" , display:"flex", flexDirection:"column", rowGap:"10px"}}>
                            <FormQuestionSkeleton/>
                            <FormQuestionSkeleton/>
                            <FormQuestionSkeleton/>
                        </div>
                    } 
                    {forumSearchStatus === "error" && <div>Error ...</div>} 
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