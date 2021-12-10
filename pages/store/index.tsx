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
import BeatLoader from "react-spinners/BeatLoader";

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
                        storeSearchData.data.map((element , index) => <ListingStoreProduct  key={index} data={element}/>)
                    } 

                    {
                        storeSearchData.status === "loaded" && 
                        (
                            storeSearchData.results_number > storeSearchData.data.length &&
                            <div  ref={inViewRefLoaderDown} style={{width:"100%" , display:"flex",alignItems:'center', flexDirection:"column", rowGap:"10px", marginTop:"50px"}}>
                                <BeatLoader color={'#b4b5b7'} loading={storeSearchData.status === "loaded"}  size={10} />
                            </div>  
                        )
                    } 

                    {storeSearchData.status === "error" && <div>Error ...</div>} 
                    
                    {
                       storeSearchData.status === "loaded" &&
                       <div style={{color:"gray", fontSize:"20px" , }}>
                           No more records found
                       </div>
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
