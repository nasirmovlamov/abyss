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
import { forum_search_data, search_query, setScrollPositionYForum,  } from '../../app/feature/SearchBox.slice'
import FormQuestionSkeleton from '../../components/Skeletons/ForumQuestionSkeleton'
import { encryptData , decryptData } from '../../logic/Cryption'
import { useInView } from 'react-intersection-observer'
import { dispatch } from 'react-hot-toast/dist/core/store'
import { forumSearch, forumSearchInfinity } from '../../app/thunks/SearchBoxThunks'
import { getCookie } from '../../logic/CookieFunctions'
import { side_product_data } from '../../app/feature/SideProducts.slice'
import ListingStoreProduct from '../../components/ListingStoreProduct'
import SideProduct from '../../components/SideProduct'
import SideProductCont from '../../components/SideProductCont'
import BeatLoader from "react-spinners/PacmanLoader";
import { useScrollYPosition } from 'react-use-scroll-position'
import { scroller } from 'react-scroll'
import { changePositionOfFilters, stay_in_focus } from '../../app/feature/PageFilters.slice'
import SearchBoxStaticVersion from '../../components/SearchBoxStaticVersion'
interface Props {
    
}

function Forum({}: Props): ReactElement {
    const [inViewRefLoaderDown, inViewLoaderDown] = useInView()
    const sideProductContData = useAppSelector(side_product_data)
    const scrollY = useScrollYPosition()
    const dispatch = useAppDispatch()
    const forumSearchData = useAppSelector(forum_search_data)
    const searchQuery  = useAppSelector(search_query)
    const router = useRouter()
    const isChatBoxOpened = useAppSelector(is_chatbox_opened)
    const a = [1,2,3,4]
    const stayInFocus = useAppSelector(stay_in_focus)
    
    const scrollToY = () => {
        window.scrollTo({
            top: forumSearchData.scrollY,
        })
    }


    useEffect(() => {
       scrollToY()
    }, [])

    useEffect(() => {
        if(inViewLoaderDown){
            const data = {query:searchQuery , from:forumSearchData.fromNumber} 
            dispatch(forumSearchInfinity(data))
        }
    }, [inViewLoaderDown])
    

    useEffect(() => {
        dispatch(setScrollPositionYForum(scrollY))
    }, [scrollY])

    
    const handleMouseOver = () => {
        if(!stayInFocus)
        {
            dispatch(changePositionOfFilters(false))
        }
    }

    const handleMouseLeave = () => {
        if(!stayInFocus)
        {
            dispatch(changePositionOfFilters(true))
        }
    }


    return (
        <PageDefaultStyle>
            <SidePartOfPage onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} side={"left"}>
            </SidePartOfPage>
            
           


        <MainPartOfPage>
                <ForumPage>
                    <SearchBoxStaticVersion/>
                    <PageTabs/> 
                    {
                        forumSearchData.initialLoader
                        ?
                        <>
                            <BeatLoader color={'#b4b5b7'} loading={forumSearchData.initialLoader}  size={10} />
                        </>
                        :
                        <>
                            {
                                forumSearchData.data.map((element , index) => <FormQuestion  key={index} data={element}/>)
                            } 


                            {
                                !forumSearchData.allDataLoaded  && 
                                (
                                    forumSearchData.results_number > forumSearchData.data.length &&
                                    <div  ref={inViewRefLoaderDown} style={{width:"100%" , display:"flex",alignItems:'center', flexDirection:"column", rowGap:"10px", marginTop:"50px"}}>
                                        <BeatLoader color={'#b4b5b7'} loading={!forumSearchData.initialLoader}  size={20} />
                                    </div>  
                                )
                            } 

                            {forumSearchData.status === "error" && <div>Error ...</div>} 
                            
                            {
                                forumSearchData.allDataLoaded &&
                                <div style={{color:"gray", fontSize:"20px" , }}>
                                    No more records found
                                </div>
                            }
                        </>
                    }

                </ForumPage>
            </MainPartOfPage>


            <SidePartOfPage side={"right"}>

                {
                    (sideProductContData.status === "loaded" && sideProductContData.selectedID !== null  && sideProductContData.products.length > 0)
                    &&
                    <SideProductCont/>
                } 



                {/* {
                    <>
                        {isChatBoxOpened  && <ChatBox/>}
                    </>
                } */}
            </SidePartOfPage>
        </PageDefaultStyle>
    )
}

export default Forum