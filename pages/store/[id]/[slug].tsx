import React, { Component, useState , useEffect } from 'react'
import axios from 'axios'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PageTabs from '../../../components/ForumPageTabs'
import MainPartOfPage from '../../../components/MainPartOfPage'
import PageFilters from '../../../components/PageFilters'
import SidePartOfPage from '../../../components/SidePartOfPage'
import SinglePageTabs from '../../../components/SinglePageTabs'
import StarCountShow from '../../../components/StarCountShow'
import { LabelCont } from '../../../styles/components/styled-elements/CreateQuestionModal.style'
import { ProductTag } from '../../../styles/components/styled-elements/ListingStoreProduct.styled'
import { ForumPage, StorePage } from '../../../styles/pages/Pages.style'
import { PageDefaultStyle } from '../../../styles/pages/Page.styled'
import {  SingleProductMiddle_STY } from '../../../styles/pages/SingleQuestionPage.styled'
import { 
    ClipBody, 
    ClipsCont, 
    ClipTitle, 
    Flexer, 
    LabelContent, 
    LabelKey, 
    MainClip, 
    SideClip,
    SideClips, 
    StoreDiscussionBody, 
    StoreDiscussionCont, 
    StoreDiscussionTitle, 
    StoreForumBody, 
    StoreForumCont, 
    StoreForumTitle, 
    StoreTop, 
    StoreTopAvatar, 
    StoreTopCodeLines, 
    StoreTopContent, 
    StoreTopImg, 
    StoreTopImgCont, 
    StoreTopPrice, 
    StoreTopRatingBought, 
    StoreTopRatingCont, 
    StoreTopRatingStars, 
    StoreTopTags, 
    StoreTopTitle 
} from '../../../styles/pages/Store.styled'
import FormQuestion from '../../../components/ForumQuestion'
import { useAppDispatch } from '../../../app/store/hooks'
import { changeModalAction } from '../../../app/feature/User.slice'



interface Props {
    
}


const SingleProductPage = (props: Props) => {
    const [formQuestionsAPI, setformQuestionsAPI] = useState([])
    const dispatch = useAppDispatch() 
    
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
                <StorePage>
                    <StoreTop>
                        <Flexer>
                            <StoreTopImgCont>
                                <StoreTopImg>
                                    <StoreTopAvatar></StoreTopAvatar>
                                    <StoreTopCodeLines>
                                        <p>Python</p>
                                        <p>17 lines</p>
                                    </StoreTopCodeLines>


                                </StoreTopImg>
                                
                            </StoreTopImgCont>




                            <StoreTopContent>
                                <StoreTopTitle>Sorting dates of dd/mm/yyyy</StoreTopTitle>
                                <StoreTopRatingCont>
                                    <StoreTopRatingStars><StarCountShow count={5.3}/> 621</StoreTopRatingStars>
                                    <StoreTopRatingBought><FontAwesomeIcon icon={faDollarSign} /> 381</StoreTopRatingBought>
                                </StoreTopRatingCont>
                                <StoreTopPrice>2.89$</StoreTopPrice>
                                <button onClick={() => dispatch(changeModalAction("iterationCreate"))}> add iteration </button>
                            </StoreTopContent>
                        </Flexer>
                        
                        <StoreTopTags>
                            <ProductTag>css</ProductTag>
                            <ProductTag>cross-browser</ProductTag>
                            <ProductTag>highlight</ProductTag>
                            <ProductTag>text-selection</ProductTag>
                        </StoreTopTags>
                    </StoreTop>

                    <SinglePageTabs/>



                    <LabelCont>
                        <LabelKey>Description</LabelKey>
                        <LabelContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. a Aliquam erat volutpat. Donec placerat nisl</LabelContent>
                    </LabelCont>

                    <LabelCont>
                        <LabelKey>Applicability</LabelKey>
                        <LabelContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. a Aliquam erat volutpat. Donec placerat nisl</LabelContent>
                    </LabelCont>

                    <LabelCont>
                        <LabelKey>Requirements</LabelKey>
                        <LabelContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. a Aliquam erat volutpat. Donec placerat nisl</LabelContent>
                    </LabelCont>

                    <LabelCont>
                        <LabelKey>Growth Capabilities</LabelKey>
                        <LabelContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. a Aliquam erat volutpat. Donec placerat nisl</LabelContent>
                    </LabelCont>


                    <ClipsCont id={'clipCont'}>
                        <ClipTitle>Clips</ClipTitle>
                        <ClipBody>
                            <MainClip></MainClip>
                            <SideClips>
                                <SideClip></SideClip>
                                <SideClip></SideClip>
                                <SideClip></SideClip>
                            </SideClips>
                        </ClipBody>
                    </ClipsCont>
                    
                    <StoreDiscussionCont>
                        <StoreDiscussionTitle>Discussion  <button  onClick={() => dispatch(changeModalAction("discussionCreate"))}>create discussion</button></StoreDiscussionTitle>
                        <StoreDiscussionBody>
                            {formQuestionsAPI.map((element , index) => <FormQuestion key={index} data={element}/>)} 
                        </StoreDiscussionBody>
                    </StoreDiscussionCont>

                    <StoreForumCont id={'forumCont'}>
                        <StoreForumTitle>Forum</StoreForumTitle>
                        <StoreForumBody>
                            {formQuestionsAPI.map((element , index) => <FormQuestion key={index} data={element}/>)} 
                        </StoreForumBody>
                    </StoreForumCont>

                </StorePage>
            </MainPartOfPage>

            <SidePartOfPage side={"right"}>
                
            </SidePartOfPage>
        </PageDefaultStyle>
    )
}

export default SingleProductPage


