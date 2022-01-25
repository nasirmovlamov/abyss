import axios from 'axios';
import HTMLReactParser from 'html-react-parser';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { BASE_API_INSTANCE } from '../../../helpers/api/BaseInstance';
import { store_tabs } from '../../../store/slices/PageTabs.slice';
import { single_product_data } from '../../../store/slices/SingleProduct.slice';
import { useAppDispatch, useAppSelector } from '../../../store/states/store.hooks';
import {
  CodeMirror_ReadOnly_STY,
} from '../../../styles/styled-components/base/modules/CreateProduct_Style/Steps/ProductCreate_Step1.style';
import { DetailsCont_STY } from '../../../styles/styled-components/base/modules/CreateQuestionModal.style';
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
} from '../../../styles/styled-components/base/pages/Store.styled';
import { autoSuccessToaster } from '../../ui/toasters/AutoSuccessToast';

interface Props {}

const StoreProductForSubscribed = (props: Props) => {
  const router = useRouter()
  const [inViewRefCodeBlock, inViewCodeBlock] = useInView()
  const [formQuestionsAPI, setformQuestionsAPI] = useState([])
  const dispatch = useAppDispatch()
  const storeTabs = useAppSelector(store_tabs)
  const singleProductData = useAppSelector(single_product_data)
  const activeStoreTab = storeTabs.filter((tab) => tab.isActive)[0]
  const [mainClip, setmainClip] = useState('')

  const getQuestions = async () => {
    try {
      const response = await axios.get('https://610685e81f34870017437966.mockapi.io/forum')
      setformQuestionsAPI(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (singleProductData.data !== null) {
      JSON.parse(singleProductData.data.description).details_data['sections_product'][3]['isClips'][
        'clips'
      ].length > 0 &&
        setmainClip(
          JSON.parse(singleProductData.data.description).details_data['sections_product'][3][
            'isClips'
          ]['clips'][0].src,
        )
    }
  }, [singleProductData.data])

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
    <DetailsCont_STY>
      {
        <LabelCont id={storeTabs[0].tabName}>
          <CodeMirror_ReadOnly_STY>
            <CodeMirror value={singleProductData.code} theme="dark" editable={false} />
          </CodeMirror_ReadOnly_STY>
          <LabelContent></LabelContent>
        </LabelCont>
      }

      <LabelCont id={storeTabs[1].tabName}>
        <LabelKey>Description</LabelKey>
        <LabelContent>
          {HTMLReactParser(
            JSON.parse(singleProductData.data.description).details_data.sections_product[0]
              .label_value,
          )}
        </LabelContent>
      </LabelCont>

      <LabelCont>
        <LabelKey>Applicability</LabelKey>
        <LabelContent>
          {HTMLReactParser(
            JSON.parse(singleProductData.data.description).details_data.sections_product[1]
              .label_value,
          )}
        </LabelContent>
      </LabelCont>

      <LabelCont>
        <LabelKey>Problem Formulation</LabelKey>
        <LabelContent>
          {HTMLReactParser(
            JSON.parse(singleProductData.data.description).details_data.sections_product[2]
              .label_value,
          )}
        </LabelContent>
      </LabelCont>
      {JSON.parse(singleProductData.data.description).details_data['sections_product'][3][
        'isClips'
      ]['clips'].length > 0 && (
        <ClipsCont id={storeTabs[3].tabName}>
          <ClipTitle>Clips</ClipTitle>
          <ClipBody>
            <MainClip>
              <img src={mainClip} alt="main-image" />
            </MainClip>
            <SideClips>
              {JSON.parse(singleProductData.data.description).details_data['sections_product'][3][
                'isClips'
              ]['clips'].map((item: any, index: any) => (
                <SideClip key={item.id} onClick={() => mainClipChanger(item.src)}>
                  <img src={item.src} alt="side-image" />
                </SideClip>
              ))}
            </SideClips>
          </ClipBody>
        </ClipsCont>
      )}

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
