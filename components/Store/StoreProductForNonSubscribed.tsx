import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { changeProductTabActiveWithoutScroll, store_tabs } from '../../app/feature/PageTabs.slice'
import { single_product_data } from '../../app/feature/SingleProduct.slice'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { useSubscribe } from '../../hooks/useSubscribe'
import {useRouter}  from 'next/router'
import { getSingleProduct } from '../../app/thunks/SingleProductThunk'
import { autoSuccessToaster } from '../Notify/AutoSuccessToast'
import { ClipBody, ClipsCont, ClipTitle, Flexer, LabelCont, LabelContent, LabelKey, MainClip, ProductTag, SideClip, SideClips, StoreForumBody, StoreForumCont, StoreForumTitle, StorePage, StoreStatistics_STY, StoreTop, StoreTopAvatar, StoreTopCodeLines, StoreTopContent, StoreTopImg, StoreTopImgCont, StoreTopRatingCont, StoreTopRatingStars, StoreTopTags, StoreTopTitle } from '../../styles/pages/Store.styled'
import SearchBoxStaticVersion from '../SearchBoxStaticVersion'
import StarCountShow from '../StarCountShow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import SinglePageTabs from '../SinglePageTabs'
import { BlurredEditor, DetailsCont_STY } from '../../styles/components/styled-blocks/CreateQuestionModal.style'
import { CodeMirror_ReadOnly_STY } from '../../styles/components/styled-blocks/CreateProduct_Style/Steps/ProductCreate_Step1.style'
import HTMLReactParser from 'html-react-parser'
import CodeMirror from '@uiw/react-codemirror';
import axios from 'axios'
import { BASE_API_INSTANCE } from '../../helpers/api/BaseInstance'
import Image from 'next/image'
import mainLogo from '../../public/main-logo.svg'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import blurredEditor from '../../public/blurred_editor.jpg'

interface Props {
    
}

const StoreProductForNonSubscribed = (props: Props) => {
    const router = useRouter()
    const [loading , subscribe] = useSubscribe()
    const [inViewRefCodeBlock, inViewCodeBlock] = useInView()
    const [formQuestionsAPI, setformQuestionsAPI] = useState([])
    const dispatch = useAppDispatch() 
    const storeTabs = useAppSelector(store_tabs)
    const singleProductData = useAppSelector(single_product_data)
    
    const activeStoreTab = storeTabs.filter(tab => tab.isActive)[0]
    const [mainClip, setmainClip] = useState('')

    useEffect(() => {
        dispatch(changeProductTabActiveWithoutScroll({id:3}))
    }, [])


    const getQuestions = async () => {
        try {
            const response = await axios.get("https://610685e81f34870017437966.mockapi.io/forum")
            setformQuestionsAPI(response.data)
        } catch (error) {
            console.error(error)
        }
    }

   

    useEffect(() => {
        setmainClip(JSON.parse(singleProductData.data.description).details_data['sections_product'][3]['isClips']['clips'][0].src)
    }, [])

    

    const addcave = async () => {
        try {
            const resp = await BASE_API_INSTANCE.post(`/profile/cave/${singleProductData.data.id}/create` )
            autoSuccessToaster(resp.data.message)
        } catch (error:any) {
            console.log(error)
            // autoErrorToaster(error)
        }
    }

    const mainClipChanger = (src: any) => {
        setmainClip(src)
    }
    
    return (
        <StorePage>
                <SearchBoxStaticVersion/>
                    
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
                                    <p>{singleProductData.data.user.name}</p>
                                    <p>{singleProductData.data.user.email   }</p>
                                </StoreTopCodeLines>
                            </div>


                            <StoreTopContent>
                                <StoreTopTitle>{singleProductData.data.name}</StoreTopTitle>
                                <StoreTopRatingCont>
                                    <StoreTopRatingStars><FontAwesomeIcon icon={faStar} /> <p>1</p></StoreTopRatingStars>
                                    <a href="">see Reviews</a>
                                    <StoreTopRatingStars><span>17.3K</span> <span>views</span></StoreTopRatingStars>

                                </StoreTopRatingCont>
                                <StoreTopTags>
                                    {JSON.parse(singleProductData.data.description).details_data.product_tags.map((item:any, index:any) => 
                                        <ProductTag key={item.id}>{item.value}</ProductTag>
                                    )}
                                </StoreTopTags>
                            </StoreTopContent>

                        </Flexer>
                        <div className='add-cave-cont'>
                            <button onClick={addcave} className='add-cave-btn'>+ Cave</button>
                        </div>    
                        
                        
                    </StoreTop>

                    <SinglePageTabs/>

                    {
                        activeStoreTab.id === 2 &&
                        <DetailsCont_STY ref={inViewRefCodeBlock} id={storeTabs[0].tabName}>   
                            <LabelCont>
                                <CodeMirror_ReadOnly_STY>
                                    <BlurredEditor image={blurredEditor.src}>
                                        <p>Please subscribe to view content</p>
                                        <button>Subscribe for viewing content</button>
                                    </BlurredEditor>
                                </CodeMirror_ReadOnly_STY>
                                <LabelContent></LabelContent>
                            </LabelCont>
                        </DetailsCont_STY>
                    }

                    {    
                        activeStoreTab.id !== 2 &&
                        <DetailsCont_STY >   
                            

                            <LabelCont id={storeTabs[1].tabName}>
                                <LabelKey>Description</LabelKey>
                                <LabelContent>{HTMLReactParser(JSON.parse(singleProductData.data.description).details_data.sections_product[0].label_value)}</LabelContent>
                            </LabelCont>

                            <LabelCont>
                                <LabelKey>Applicability</LabelKey>
                                <LabelContent>{HTMLReactParser(JSON.parse(singleProductData.data.description).details_data.sections_product[1].label_value)}</LabelContent>
                            </LabelCont>

                            <LabelCont>
                                <LabelKey>Problem Formulation</LabelKey>
                                <LabelContent>{HTMLReactParser(JSON.parse(singleProductData.data.description).details_data.sections_product[2].label_value)}</LabelContent>
                            </LabelCont>

                            <ClipsCont id={storeTabs[3].tabName}>
                                <ClipTitle>Clips</ClipTitle>
                                <ClipBody>
                                    <MainClip><img  src={mainClip} alt='main-image'/></MainClip>
                                    <SideClips>
                                        <SideClip onClick={() =>mainClipChanger(JSON.parse(singleProductData.data.description).details_data['sections_product'][3]['isClips']['clips'][0].src)}><img src={JSON.parse(singleProductData.data.description).details_data['sections_product'][3]['isClips']['clips'][0].src} alt="side-image"/></SideClip>
                                        <SideClip onClick={() =>mainClipChanger(JSON.parse(singleProductData.data.description).details_data['sections_product'][3]['isClips']['clips'][1].src)}><img src={JSON.parse(singleProductData.data.description).details_data['sections_product'][3]['isClips']['clips'][1].src} alt="side-image"/></SideClip>
                                        <SideClip onClick={() =>mainClipChanger(JSON.parse(singleProductData.data.description).details_data['sections_product'][3]['isClips']['clips'][2].src)}><img  src={JSON.parse(singleProductData.data.description).details_data['sections_product'][3]['isClips']['clips'][2].src} alt="side-image"/></SideClip>
                                    </SideClips>
                                </ClipBody>
                            </ClipsCont>
                            
                            

                            <StoreForumCont id={storeTabs[2].tabName}>
                                <StoreForumTitle>Forum</StoreForumTitle>
                                <StoreForumBody>
                                </StoreForumBody>
                            </StoreForumCont>
                        </DetailsCont_STY>
                    }
            </StorePage>
    )
}

export default StoreProductForNonSubscribed
