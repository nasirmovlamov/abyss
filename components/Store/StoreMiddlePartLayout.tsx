import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { store_tabs } from '../../app/feature/PageTabs.slice';
import { single_product_data } from '../../app/feature/SingleProduct.slice';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { BASE_API_INSTANCE } from '../../helpers/api/BaseInstance';
import mainLogo from '../../public/main-logo.svg';
import {
    Flexer,
    ProductTag,
    StorePage,
    StoreStatistics_STY,
    StoreTop,
    StoreTopAvatar,
    StoreTopCodeLines,
    StoreTopContent,
    StoreTopImg,
    StoreTopImgCont,
    StoreTopRatingCont,
    StoreTopRatingStars,
    StoreTopTags,
    StoreTopTitle,
} from '../../styles/pages/Store.styled';
import { autoSuccessToaster } from '../Notify/AutoSuccessToast';
import SinglePageTabs from '../SinglePageTabs';
import StarCountShow from '../StarCountShow';

interface Props {

}

const StoreMiddlePartLayout: FC<Props> = ({ children, ...props }) => {

    const router = useRouter()
    const [inViewRefCodeBlock, inViewCodeBlock] = useInView()
    const [formQuestionsAPI, setformQuestionsAPI] = useState([])
    const dispatch = useAppDispatch()
    const storeTabs = useAppSelector(store_tabs)
    const singleProductData = useAppSelector(single_product_data)
    const { data } = singleProductData
    const activeStoreTab = storeTabs.filter(tab => tab.isActive)[0]

    const getQuestions = async () => {
        try {
            const response = await axios.get("https://610685e81f34870017437966.mockapi.io/forum")
            setformQuestionsAPI(response.data)
        } catch (error) {
            console.error(error)
        }
    }





    const addcave = async () => {
        try {
            const resp = await BASE_API_INSTANCE.post(`/profile/inventory/${singleProductData.data.id}/create`)
            autoSuccessToaster(resp.data.message)
        } catch (error: any) {
            // autoErrorToaster(error)
        }
    }


    const removeFromCave = async () => {
        try {
            const resp = await BASE_API_INSTANCE.post(`/profile/inventory/${singleProductData.data.id}/delete`)
            autoSuccessToaster(resp.data.message)
        } catch (error: any) {
            // autoErrorToaster(error)
        }
    }


    return (
        <StorePage>
            <StoreStatistics_STY>
                <div className="element">
                    <p className="element-title">1.3K RATINGS</p>
                    <p className="element-value">4.7</p>
                    <div className="element-subtitle"><StarCountShow count={4.5} /></div>
                </div>

                <div className="element">
                    <p className="element-title">LANGUAGE</p>
                    <p className="element-value"><FontAwesomeIcon icon={faPython} /></p>
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
                                    <Image width='32' height='32' src={mainLogo} />
                                </StoreTopAvatar>
                            </StoreTopImg>
                        </StoreTopImgCont>

                        <StoreTopCodeLines>
                            <p>{singleProductData.data.user.name}</p>
                            <p>{singleProductData.data.user.email}</p>
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
                            {JSON.parse(singleProductData.data.description).details_data.product_tags.map((item: any, index: any) =>
                                <ProductTag key={item.id}>{item.value}</ProductTag>
                            )}
                        </StoreTopTags>
                    </StoreTopContent>

                </Flexer>
                <div className='add-cave-cont'>
                    {console.log(data)}
                    {
                        data?.user_check?.cave ?
                            <button onClick={removeFromCave} className='add-cave-btn'>- Cave</button>
                            :
                            <button onClick={addcave} className='add-cave-btn'>+ Cave</button>
                    }
                </div>


            </StoreTop>

            <SinglePageTabs />

            {children}
        </StorePage>
    )
}

export default StoreMiddlePartLayout
