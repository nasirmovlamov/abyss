import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { changeProductTabActiveWithoutScroll, store_tabs } from '../../app/feature/PageTabs.slice'
import { single_product_data } from '../../app/feature/SingleProduct.slice'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import {useRouter}  from 'next/router'
import { getSingleProduct } from '../../app/thunks/SingleProductThunk'
import { autoSuccessToaster } from '../Notify/AutoSuccessToast'
import { ClipBody, ClipsCont, ClipTitle, Flexer, LabelCont, LabelContent, LabelKey, MainClip, ProductTag, SideClip, SideClips, StoreForumBody, StoreForumCont, StoreForumTitle, StorePage, StoreStatistics_STY, StoreTop, StoreTopAvatar, StoreTopCodeLines, StoreTopContent, StoreTopImg, StoreTopImgCont, StoreTopRatingCont, StoreTopRatingStars, StoreTopTags, StoreTopTitle } from '../../styles/pages/Store.styled'
import SearchBoxStaticVersion from '../SearchBoxStaticVersion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import SinglePageTabs from '../SinglePageTabs'
import { DetailsCont_STY } from '../../styles/components/styled-blocks/CreateQuestionModal.style'
import { CodeMirror_ReadOnly_STY } from '../../styles/components/styled-blocks/CreateProduct_Style/Steps/ProductCreate_Step1.style'
import HTMLReactParser from 'html-react-parser'
import CodeMirror from '@uiw/react-codemirror';
import axios from 'axios'
import { BASE_API_INSTANCE } from '../../helpers/api/BaseInstance'
import Image from 'next/image'
import mainLogo from '../../public/main-logo.svg'
import { faStar } from '@fortawesome/free-solid-svg-icons'

interface Props {
    
}

const StoreProductForSubscribed = (props: Props) => {
    const router = useRouter()
    const [inViewRefCodeBlock, inViewCodeBlock] = useInView()
    const [formQuestionsAPI, setformQuestionsAPI] = useState([])
    const dispatch = useAppDispatch() 
    const storeTabs = useAppSelector(store_tabs)
    const singleProductData = useAppSelector(single_product_data)
    const activeStoreTab = storeTabs.filter(tab => tab.isActive)[0]
    const [mainClip, setmainClip] = useState('')

    const getQuestions = async () => {
        try {
            const response = await axios.get("https://610685e81f34870017437966.mockapi.io/forum")
            setformQuestionsAPI(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    

    useEffect(() => {
        if(singleProductData.data !== null) {
            JSON.parse(singleProductData.data.description).details_data['sections_product'][3]['isClips']['clips'].length > 0 &&  setmainClip(JSON.parse(singleProductData.data.description).details_data['sections_product'][3]['isClips']['clips'][0].src)
        }
    }, [singleProductData.data])

    
    

    const addcave = async () => {
        try {
            const resp = await BASE_API_INSTANCE.post(`/profile/cave/${singleProductData.data.id}/create` )
            autoSuccessToaster(resp.data.message)
        } catch (error:any) {
            // autoErrorToaster(error)
        }
    }

    const mainClipChanger = (src: any) => {
        setmainClip(src)
    }
    
    return (
        <DetailsCont_STY >   
            {
                <LabelCont id={storeTabs[0].tabName}>
                    <CodeMirror_ReadOnly_STY>
                        <CodeMirror
                            value={singleProductData.code}
                            theme="dark"
                            editable={false}
                        />    
                    </CodeMirror_ReadOnly_STY>
                    <LabelContent></LabelContent>
                </LabelCont>
            }

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
            {
                JSON.parse(singleProductData.data.description).details_data['sections_product'][3]['isClips']['clips'].length > 0 &&
                <ClipsCont id={storeTabs[3].tabName}>
                    <ClipTitle>Clips</ClipTitle>
                    <ClipBody>
                        <MainClip><img  src={mainClip} alt='main-image'/></MainClip>
                        <SideClips>
                            {
                                (JSON.parse(singleProductData.data.description).details_data['sections_product'][3]['isClips']['clips'].map((item:any, index:any) => 
                                    <SideClip key={item.id} onClick={() => mainClipChanger(item.src)} >
                                        <img src={item.src} alt="side-image"/>
                                    </SideClip> 
                                ))
                            }
                        </SideClips>
                    </ClipBody>
                </ClipsCont>
            }
            {/* <StoreDiscussionCont id={storeTabs[2].tabName}>
                <StoreDiscussionTitle>Discussion  </StoreDiscussionTitle>
                <StoreDiscussionBody>
                    {formQuestionsAPI.map((element , index) => <FormQuestion key={index} data={element}/>)} 
                </StoreDiscussionBody>
            </StoreDiscussionCont> */}

            <StoreForumCont id={storeTabs[2].tabName}>
                <StoreForumTitle>Forum</StoreForumTitle>
                <StoreForumBody>
                    {/* {formQuestionsAPI.map((element , index) => <FormQuestion key={index} data={element}/>)}  */}
                </StoreForumBody>
            </StoreForumCont>
        </DetailsCont_STY>
    )
}

export default StoreProductForSubscribed
