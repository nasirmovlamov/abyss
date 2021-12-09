import React, { Component, useState , useEffect } from 'react'
import axios from 'axios'
import { faChartPie, faDollarSign, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PageTabs from '../../../components/ForumPageTabs'
import MainPartOfPage from '../../../components/MainPartOfPage'
import PageFilters from '../../../components/PageFilters'
import SidePartOfPage from '../../../components/SidePartOfPage'
import SinglePageTabs from '../../../components/SinglePageTabs'
import StarCountShow from '../../../components/StarCountShow'
import { DetailsCont_STY, LabelCont } from '../../../styles/components/styled-blocks/CreateQuestionModal.style'
import { ProductTag } from '../../../styles/components/styled-blocks/ListingStoreProduct.styled'
import { ForumPage, StorePage } from '../../../styles/pages/Pages.style'
import { PageDefaultStyle } from '../../../styles/pages/Page.styled'
import {  SingleProductMiddle_STY } from '../../../styles/pages/SingleQuestionPage.styled'
import clip1 from '../../../public/clip1.png'
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
    StoreStatistics_STY, 
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
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { changeModalAction } from '../../../app/feature/User.slice'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import mainLogo from '../../../public/main-logo.svg'
import { changeProductTabActive, store_tabs } from '../../../app/feature/PageTabs.slice'
import { useInView } from 'react-intersection-observer'
import { scroller } from 'react-scroll'


interface Props {
    
}


const SingleProductPage = (props: Props) => {
    const [inViewRefCodeBlock, inViewCodeBlock] = useInView()

    const [formQuestionsAPI, setformQuestionsAPI] = useState([])
    const dispatch = useAppDispatch() 
    const storeTabs = useAppSelector(store_tabs)
    const activeStoreTab = storeTabs.filter(tab => tab.isActive)[0]

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

    useEffect(() => {
        if(activeStoreTab.id === 2){
            scroller.scrollTo(`${activeStoreTab.tabName}` , {
                duration: 500,
                delay: 0,
                smooth: 'easeInOutQuart',
                offset: -450,
            })
        }
    }, [activeStoreTab.id])

    return (
        <PageDefaultStyle>
            {console.log(storeTabs)}
            <SidePartOfPage side={"left"}>
                
            </SidePartOfPage>

            <MainPartOfPage>
                <StorePage>
                    <StoreStatistics_STY>
                        <div className="element">
                            <p className="element-title">1.3K RATINGS</p>
                            <p className="element-value">4.7</p>
                            <p className="element-subtitle"><StarCountShow count={4.5}/></p>
                        </div>

                        <div className="element">
                            <p className="element-title">LANGUAGE</p>
                            <p className="element-value"><FontAwesomeIcon icon={faPython}/></p>
                            <p className="element-subtitle">Python</p>
                        </div>

                        <div className="element">
                            <p className="element-title">Chart</p>
                            <p className="element-value">N17</p>
                            <p className="element-subtitle">controller functions</p>
                        </div>

                        <div className="element">
                            <p className="element-title">TOTAL</p>
                            <p className="element-value">31.8K</p>
                            <p className="element-subtitle">views</p>
                        </div>

                        <div className="element">
                            <p className="element-title">PREFORMANCE</p>
                            <p className="element-value">7/10</p>
                            <p className="element-subtitle">abyss score</p>
                        </div>
                    </StoreStatistics_STY>

                    <StoreTop>
                        <Flexer>
                            <div>

                                <StoreTopImgCont>
                                    <StoreTopImg>
                                        <StoreTopAvatar>
                                            <Image width='32' height='32' src={mainLogo}/>
                                        </StoreTopAvatar>
                                    </StoreTopImg>
                                </StoreTopImgCont>

                                <StoreTopCodeLines>
                                    <p>Abyss Store Name</p>
                                    <p>Abyss User Name</p>
                                </StoreTopCodeLines>
                            </div>


                            <StoreTopContent>
                                <StoreTopTitle>How to disable text selection highlightining with css for all browsers</StoreTopTitle>
                                <StoreTopRatingCont>
                                    <StoreTopRatingStars><FontAwesomeIcon icon={faStar} /> <p>1</p></StoreTopRatingStars>
                                    <a href="">see Reviews</a>
                                    <StoreTopRatingStars><span>17.3K</span> <span>views</span></StoreTopRatingStars>

                                </StoreTopRatingCont>
                                {/* <StoreTopPrice>2.89$</StoreTopPrice> */}
                                {/* <button onClick={() => dispatch(changeModalAction("iterationCreate"))}> add iteration </button> */}
                                <StoreTopTags>
                                    <ProductTag>css</ProductTag>
                                    <ProductTag>cross-browser</ProductTag>
                                    <ProductTag>highlight</ProductTag>
                                    <ProductTag>text-selection</ProductTag>
                                </StoreTopTags>
                            </StoreTopContent>

                        </Flexer>
                            <div className='add-cave-cont'>
                                <button className='add-cave-btn'>+ Cave</button>
                            </div>    
                        
                        
                    </StoreTop>

                    <SinglePageTabs/>


                    {
                        activeStoreTab.id === 2 &&
                        <DetailsCont_STY ref={inViewRefCodeBlock} id={storeTabs[0].tabName}>   
                            <LabelCont>
                                <LabelKey>Code</LabelKey>
                                <LabelContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. a Aliquam erat volutpat. Donec placerat nisl</LabelContent>
                            </LabelCont>
                        </DetailsCont_STY>
                    }

                    {    
                        activeStoreTab.id !== 2 &&
                        <DetailsCont_STY >   
                            <LabelCont id={storeTabs[1].tabName}>
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


                            <ClipsCont id={storeTabs[3].tabName}>
                                <ClipTitle>Clips</ClipTitle>
                                <ClipBody>
                                    <MainClip><Image src={clip1} /></MainClip>
                                    <SideClips>
                                        <SideClip><Image src={clip1} /></SideClip>
                                        <SideClip><Image src={clip1} /></SideClip>
                                        <SideClip><Image src={clip1} /></SideClip>
                                    </SideClips>
                                </ClipBody>
                            </ClipsCont>
                            
                            {/* <StoreDiscussionCont id={storeTabs[2].tabName}>
                                <StoreDiscussionTitle>Discussion  </StoreDiscussionTitle>
                                <StoreDiscussionBody>
                                    {formQuestionsAPI.map((element , index) => <FormQuestion key={index} data={element}/>)} 
                                </StoreDiscussionBody>
                            </StoreDiscussionCont> */}

                            <StoreForumCont >
                                <StoreForumTitle>Forum</StoreForumTitle>
                                <StoreForumBody>
                                    {formQuestionsAPI.map((element , index) => <FormQuestion key={index} data={element}/>)} 
                                </StoreForumBody>
                            </StoreForumCont>
                        </DetailsCont_STY>
                    }
                </StorePage>
            </MainPartOfPage>

            <SidePartOfPage side={"right"}>
                
            </SidePartOfPage>
        </PageDefaultStyle>
    )
}

export default SingleProductPage


