import axios from 'axios'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useState } from 'react'
import FormQuestion from '../../components/ForumQuestion'
import PageTabs from '../../components/ForumPageTabs'
import { ForumPage } from '../../styles/pages/Pages.style'
import MainPartOfPage from '../../components/MainPartOfPage'
import SidePartOfPage from '../../components/SidePartOfPage'
import { PageDefaultStyle } from '../../styles/pages/Page.styled'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { is_chatbox_opened } from '../../app/feature/ChatBox.slice'
import ChatBox from '../../components/ChatBox'
import PageFilters from '../../components/PageFilters'
import CommentModal from '../../components/CommentsTab'
import { forum_search_data, search_query } from '../../app/feature/SearchBox.slice'
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
    const forumSearchData = useAppSelector(forum_search_data)
    const searchQuery  = useAppSelector(search_query)
    const router = useRouter()
    const isChatBoxOpened = useAppSelector(is_chatbox_opened)
    const a = [1,2,3,4]
    


    useEffect(() => {
        if(inViewLoaderDown){
            const data = {query:searchQuery , from:forumSearchData.fromNumber} 
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
                        forumSearchData.status === "loaded" && 
                        forumSearchData.data.map((element , index) => <FormQuestion  key={index} data={element}/>)
                    } 
                    
                    {forumSearchData.status === "loading" && 
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

                    {forumSearchData.status === "error" && <div>Error ...</div>} 

                    {forumSearchData.results_number >0 ?
                        <div ref={inViewRefLoaderDown} style={{width:"100%" , display:"flex", flexDirection:"column", rowGap:"10px"}}>
                                <FormQuestionSkeleton/>
                        </div>
                        :
                        <div>
                            No records found
                        </div>
                    }
                    

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