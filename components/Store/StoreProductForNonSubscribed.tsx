import axios from 'axios';
import HTMLReactParser from 'html-react-parser';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { changeProductTabActiveWithoutScroll, store_tabs } from '../../app/feature/PageTabs.slice';
import { single_product_data } from '../../app/feature/SingleProduct.slice';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { BASE_API_INSTANCE } from '../../helpers/api/BaseInstance';
import blurredEditor from '../../public/blurred_editor.jpg';
import {
    CodeMirror_ReadOnly_STY,
} from '../../styles/components/styled-blocks/CreateProduct_Style/Steps/ProductCreate_Step1.style';
import { BlurredEditor, DetailsCont_STY } from '../../styles/components/styled-blocks/CreateQuestionModal.style';
import {
    ClipBody,
    ClipsCont,
    ClipTitle,
    LabelCont,
    LabelContent,
    LabelKey,
    MainClip,
    SideClip,
    SideClips,
    StoreForumBody,
    StoreForumCont,
    StoreForumTitle,
} from '../../styles/pages/Store.styled';
import { autoSuccessToaster } from '../Notify/AutoSuccessToast';

interface Props {

}

const StoreProductForNonSubscribed = (props: Props) => {
    const router = useRouter()
    const [inViewRefCodeBlock, inViewCodeBlock] = useInView()
    const [formQuestionsAPI, setformQuestionsAPI] = useState([])
    const dispatch = useAppDispatch()
    const storeTabs = useAppSelector(store_tabs)
    const singleProductData = useAppSelector(single_product_data)

    const activeStoreTab = storeTabs.filter(tab => tab.isActive)[0]
    const [mainClip, setmainClip] = useState('')

    useEffect(() => {
        dispatch(changeProductTabActiveWithoutScroll({ id: 3 }))
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
        JSON.parse(singleProductData.data.description).details_data['sections_product'][3]['isClips']['clips'].length > 0 && setmainClip(JSON.parse(singleProductData.data.description).details_data['sections_product'][3]['isClips']['clips'][0].src)
    }, [])



    const addcave = async () => {
        try {
            const resp = await BASE_API_INSTANCE.post(`/profile/cave/${singleProductData.data.id}/create`)
            autoSuccessToaster(resp.data.message)
        } catch (error: any) {
            // autoErrorToaster(error)
        }
    }

    const mainClipChanger = (src: any) => {
        setmainClip(src)
    }

    return (
        <>
            {console.log(JSON.parse(singleProductData.data.description))}

            {
                activeStoreTab.id === 2 &&
                <DetailsCont_STY ref={inViewRefCodeBlock} key={'details1'}>
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
                <DetailsCont_STY key={'details2'}>


                    <LabelCont id={storeTabs[1].tabName} key={JSON.parse(singleProductData.data.description).details_data.sections_product[0].id}>
                        <LabelKey>Description</LabelKey>
                        <LabelContent>{HTMLReactParser(JSON.parse(singleProductData.data.description).details_data.sections_product[0].label_value)}</LabelContent>
                    </LabelCont>

                    <LabelCont key={JSON.parse(singleProductData.data.description).details_data.sections_product[1].id}>
                        <LabelKey>Applicability</LabelKey>
                        <LabelContent>{HTMLReactParser(JSON.parse(singleProductData.data.description).details_data.sections_product[1].label_value)}</LabelContent>
                    </LabelCont>

                    <LabelCont key={JSON.parse(singleProductData.data.description).details_data.sections_product[2].id}>
                        <LabelKey>Problem Formulation</LabelKey>
                        <LabelContent>{HTMLReactParser(JSON.parse(singleProductData.data.description).details_data.sections_product[2].label_value)}</LabelContent>
                    </LabelCont>


                    {
                        JSON.parse(singleProductData.data.description).details_data['sections_product'][3]['isClips']['clips'].length > 0 &&
                        <ClipsCont key={storeTabs[3].tabName} id={storeTabs[3].tabName}>
                            <ClipTitle>Clips</ClipTitle>
                            <ClipBody>
                                <MainClip><img src={mainClip} alt='main-image' /></MainClip>
                                <SideClips>
                                    {
                                        JSON.parse(singleProductData.data.description).details_data['sections_product'][3]['isClips']['clips'].length > 0 &&
                                        (JSON.parse(singleProductData.data.description).details_data['sections_product'][3]['isClips']['clips'].map((item: any, index: any) =>
                                            <SideClip key={item.id} onClick={() => mainClipChanger(item.src)} >
                                                <img src={item.src} alt="side-image" />
                                            </SideClip>
                                        ))
                                    }
                                </SideClips>
                            </ClipBody>
                        </ClipsCont>}

                    {
                        JSON.parse(singleProductData.data.description).details_data.sections_product.map((section: any, index: number) =>
                            index >= 4 &&
                            <LabelCont>
                                <LabelKey>{JSON.parse(singleProductData.data.description).details_data.sections_product[index].label_key}</LabelKey>
                                <LabelContent>{HTMLReactParser(JSON.parse(singleProductData.data.description).details_data.sections_product[index].label_value)}</LabelContent>
                            </LabelCont>
                        )
                    }

                    {/* <StoreDiscussionCont id={storeTabs[2].tabName}>
                        <StoreDiscussionTitle>Discussion  </StoreDiscussionTitle>
                        <StoreDiscussionBody>
                            {formQuestionsAPI.map((element , index) => <FormQuestion key={index} data={element}/>)} 
                        </StoreDiscussionBody>
                    </StoreDiscussionCont> */}

                    <StoreForumCont id={storeTabs[2].tabName}>
                        <StoreForumTitle>Discussion</StoreForumTitle>
                        <StoreForumBody>
                            {/* {formQuestionsAPI.map((element , index) => <FormQuestion key={index} data={element}/>)}  */}
                        </StoreForumBody>
                    </StoreForumCont>


                    <StoreForumCont id={storeTabs[2].tabName}>
                        <StoreForumTitle>Forum</StoreForumTitle>
                        <StoreForumBody>
                        </StoreForumBody>
                    </StoreForumCont>
                </DetailsCont_STY>
            }
        </>
    )
}

export default StoreProductForNonSubscribed
