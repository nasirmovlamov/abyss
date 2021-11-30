import axios from 'axios'
import React, { ReactElement, useEffect, useState } from 'react'
import ListingStoreProduct from '../../components/ListingStoreProduct'
import PageTabs from '../../components/StorePageTabs'
import { StorePage } from '../../styles/pages/Pages.style'
import { PageDefaultStyle } from '../../styles/pages/Page.styled'
import SidePartOfPage from '../../components/SidePartOfPage'
import MainPartOfPage from '../../components/MainPartOfPage'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { is_chatbox_opened } from '../../app/feature/ChatBox.slice'
import ChatBox from '../../components/ChatBox'
import { useInView } from 'react-intersection-observer'
import { forumSearchInfinity, storeSearchInfinity } from '../../app/thunks/SearchBoxThunks'
import { search_query, store_search_data } from '../../app/feature/SearchBox.slice'
import FormQuestionSkeleton from '../../components/Skeletons/ForumQuestionSkeleton'

interface Props {
    
}

function Store({}: Props): ReactElement {
    const [inViewRefLoaderDown, inViewLoaderDown] = useInView()
    const dispatch = useAppDispatch()
    const storeSearchData = useAppSelector(store_search_data)
    const searchQuery = useAppSelector(search_query)
    
    const [storeListingProducts, setstoreListingProducts] = useState([])
    const isChatBoxOpened = useAppSelector(is_chatbox_opened)

    const getStoreProducts = async () => {
        try {
            const response = await axios.get("https://610685e81f34870017437966.mockapi.io/store")
            setstoreListingProducts(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(() => {
        if(inViewLoaderDown){
            const data = {query:searchQuery , from:storeSearchData.fromNumber} 
            dispatch(storeSearchInfinity(data))
        }
    }, [inViewLoaderDown])
    

    return (
        <PageDefaultStyle>
            <SidePartOfPage side="left">
                
            </SidePartOfPage>

            <MainPartOfPage>
                <StorePage>
                    <PageTabs/>  
                    {
                        storeSearchData.status === "loaded" && 
                        storeSearchData.data.map((element , index) => <ListingStoreProduct  key={index} data={element}/>)
                    } 
                    
                    {storeSearchData.status === "loading" && 
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

                    {storeSearchData.status === "error" && <div>Error ...</div>} 
                    {storeSearchData.data.length !== storeSearchData.results_number ?

                        (
                            storeSearchData.results_number > 0  ?
                            <div ref={inViewRefLoaderDown} style={{width:"100%" , display:"flex", flexDirection:"column", rowGap:"10px"}}>
                                    <FormQuestionSkeleton/>
                            </div>
                            :
                            <div>
                                No records found
                            </div>
                        )
                        :
                        <></>
                    }
                </StorePage>
            </MainPartOfPage>

            <SidePartOfPage side="right">
                {
                    <> 
                        {isChatBoxOpened  && <ChatBox/>}
                    </>
                }
            </SidePartOfPage>
        </PageDefaultStyle>


        
    )
}

export default Store
