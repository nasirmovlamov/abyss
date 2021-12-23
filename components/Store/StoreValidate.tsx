import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { store_tabs } from '../../app/feature/PageTabs.slice'
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
import { DetailsCont_STY } from '../../styles/components/styled-blocks/CreateQuestionModal.style'
import { CodeMirror_ReadOnly_STY } from '../../styles/components/styled-blocks/CreateProduct_Style/Steps/ProductCreate_Step1.style'
import HTMLReactParser from 'html-react-parser'
import CodeMirror from '@uiw/react-codemirror';
import axios from 'axios'
import { BASE_API_INSTANCE } from '../../helpers/api/BaseInstance'
import Image from 'next/image'
import mainLogo from '../../public/main-logo.svg'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import StoreProductForNonSubscribed from './StoreProductForNonSubscribed'
import { is_logged, user_data } from '../../app/feature/User.slice'
import StoreProductForSubscribed from './StoreProductForSubscribed'
import StoreMiddlePartLayout from './StoreMiddlePartLayout'

interface Props {
    
}

const StoreValidate = (props: Props) => {
  const router = useRouter()
  const isLogged = useAppSelector(is_logged)

  if(isLogged)
  {
      return (
          <StoreMiddlePartLayout>
            <StoreProductForSubscribed />  
          </StoreMiddlePartLayout>
      )
  }
  
  return (
      <StoreMiddlePartLayout>
        <StoreProductForNonSubscribed />  
      </StoreMiddlePartLayout>
  )
}

export default StoreValidate
