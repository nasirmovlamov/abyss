import axios from 'axios'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useState } from 'react'
import FormQuestion from '../../components/ForumQuestion'
import PageTabs from '../../components/PageTabs'
import { TabButton, Tabs, TabsContainer, TabTags, TabTagsCont } from '../../styles/components/styled-elements/PageTabs.style'
import { ForumPage } from '../../styles/global/styled-utils/styling-elements/Pages.style'

interface Props {
    
}

function Forum({}: Props): ReactElement {
    const router = useRouter()
    const [formQuestionsAPI, setformQuestionsAPI] = useState([])

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
        <ForumPage>
            <PageTabs/>  
            {formQuestionsAPI.map((element , index) => <FormQuestion key={index} data={element}/>)} 
        </ForumPage>
    )
}

export default Forum
