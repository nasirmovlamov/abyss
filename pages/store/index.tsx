import axios from 'axios'
import React, { ReactElement, useEffect, useState } from 'react'
import ListingStoreProduct from '../../components/ListingStoreProduct'
import PageTabs from '../../components/ForumPageTabs'
import { StorePage } from '../../styles/global/styled-utils/styling-elements/Pages.style'
import { PageDefaultStyle } from '../../styles/pages/Page.styled'
import SidePartOfPage from '../../components/SidePartOfPage'
import MainPartOfPage from '../../components/MainPartOfPage'
import { useAppSelector } from '../../app/store/hooks'
import { is_chatbox_opened } from '../../app/feature/ChatBox.slice'
import ChatBox from '../../components/ChatBox'

interface Props {
    
}

function Store({}: Props): ReactElement {
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
        setTimeout(() => {
            getStoreProducts()
        }, 1000);
    }, [])

    return (
        <PageDefaultStyle>
            <SidePartOfPage side="left">
                
            </SidePartOfPage>

            <MainPartOfPage>
                <StorePage>
                    <PageTabs/>  
                    {storeListingProducts.map((element , index)=> <ListingStoreProduct key={index} data={element}/>)} 
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
