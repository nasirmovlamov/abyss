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

interface Props {
    
}

function Forum({}: Props): ReactElement {
    const router = useRouter()
    const [formQuestionsAPI, setformQuestionsAPI] = useState([])
    const isChatBoxOpened = useAppSelector(is_chatbox_opened)

    const getQuestions = async () => {
        try {
            const response = await axios.get("https://610685e81f34870017437966.mockapi.io/forum")
            setformQuestionsAPI(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getQuestions()
        }, 500); 
    }, [])
    
    return (
        <PageDefaultStyle>
            <SidePartOfPage side={"left"}>
            </SidePartOfPage>
            
            <MainPartOfPage>
                <ForumPage>
                    <PageTabs/>  
                    {formQuestionsAPI.map((element , index) => <FormQuestion key={index} data={element}/>)} 
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
