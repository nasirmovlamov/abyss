import React, { ReactElement, useEffect, useState } from 'react'
import Image from 'next/image'
import { AnswerCount, Avatar, BottomSide, Content, FormQuestionCont, Name, PersonCont, QuestionTags, StatisticCont, Tags, TextCont, Title, Text, HelpfulCont, HelpfulCount, AnswerCont, ViewsCont, DateCount, } from '../styles/components/styled-blocks/FormQuestion.style'
import {
    AddCave,
    AddCaveAndMentionsCont,
    CompanyLogoImageOverlay,
    Iterations,
    LanguageContForTextAndIcon,
    LanguageInfo,
    LanguageText,
    LinesofCodeContForIconAndText,
    LinesofCodeText,
    MentionsCont,
    MentionsCount,
    MentionsText,
    ProductContent,
    ProductContentCont,
    ProductDescription,
    ProductDescriptionContent,
    ProductDescriptionTitle,
    ProductDetailCont,
    ProductImageAndContent,
    ProductImageOverlay,
    ProductLanguageAndImage,
    ProductPerson,
    ProductPriceCont,
    ProductSideDetailsCont,
    ProductSoldCont,
    ProductStarCont,
    ProductTag,
    ProductTags,
    ProductTitle, ProductViewCont, StoreListingProductStyle
} from '../styles/components/styled-blocks/ListingStoreProduct.styled'
import NavLink from './NavLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faDownload, faEye, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import StarCountShow from './StarCountShow'
import HTMLReactParser from 'html-react-parser'
import { useRouter } from 'next/router'
import { goProductPage, single_product_data } from '../app/feature/SingleProduct.slice'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { getSingleProduct } from '../app/thunks/SingleProductThunk'
import { changeProductTabActiveWithoutScroll } from '../app/feature/PageTabs.slice'
import abyssLogo from '../public/main-logo.svg'
interface Props {
    data: {
        avatar: string,
        programingLanguage: string
        lineCount: string
        name: string
        starCount: string
        soldCount: string
        price: string
        tags: string[]
    } | any
}

function ListingStoreProduct({ data }: Props): ReactElement {
    const singleProductData = useAppSelector(single_product_data)
    const router = useRouter()
    const [description, setdescription] = useState<any>()
    const dispatch = useAppDispatch()

    const [touchDown, settouchDown] = useState(false)

    const getDescription = () => {
        try {
            if (JSON.parse(data.description).hasOwnProperty('details_data')) {
                setdescription(HTMLReactParser(JSON.parse(data.description).details_data['sections_product'][0].label_value))
            }
        } catch (error) {
            setdescription(HTMLReactParser(data.description))
        }
    }

    useEffect(() => {
        getDescription()
    }, [])

    const goProduct = () => {
        dispatch(changeProductTabActiveWithoutScroll({ id: 2 }))
        if (singleProductData.selectedID !== data.id) {
            dispatch(getSingleProduct({ id: data.id, slug: data.slug }))
        }
        dispatch(goProductPage({ id: data.id }))
        setTimeout(() => {
            router.push(`store/${data.id}/${data.slug}`)
        }, 250)
    }

    const mouseDownHandler = () => {
        settouchDown(true)
    }

    const mouseUpHandler = () => {
        settouchDown(false)
    }

    return (
        <StoreListingProductStyle touchDown={touchDown} id={`listingProduct${data.id}`} key={data.id} onClick={goProduct} onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler}>
            <ProductImageAndContent >
                <ProductLanguageAndImage>

                    <ProductImageOverlay>
                        <CompanyLogoImageOverlay src={abyssLogo.src} />
                    </ProductImageOverlay>

                    <LanguageInfo>
                        <LanguageContForTextAndIcon>
                            <p className='shopName'>Shops name</p>
                            <p className='creatorName'>Creators username</p>
                        </LanguageContForTextAndIcon>

                        {/* <LinesofCodeContForIconAndText>
                            <FontAwesomeIcon icon={faPython}/>
                            <LinesofCodeText>Python {data.lineCount}</LinesofCodeText> 
                        </LinesofCodeContForIconAndText> */}
                    </LanguageInfo>
                </ProductLanguageAndImage>


                <ProductContentCont >
                    <ProductContent>
                        <ProductTitle>{data.name}</ProductTitle>
                        <ProductDetailCont>
                            <ProductStarCont><StarCountShow count={2.3} /> {data.starCount} 2.3</ProductStarCont>
                            <ProductViewCont> <span>{data.view_count}17K</span> <span>views</span> </ProductViewCont>
                            <ProductViewCont> <span>{data.view_count}4</span> <span>iterations</span> </ProductViewCont>
                        </ProductDetailCont>
                        <ProductTags>
                            {!data.tags.some((tag: any) => tag === '') && data.tags.map((tag: any, index: any) => index < 3 && <ProductTag key={tag}>{tag}</ProductTag>)}
                        </ProductTags>
                    </ProductContent>
                    <ProductDescription>
                        <ProductDescriptionContent>
                            {
                                description
                            }
                        </ProductDescriptionContent>
                    </ProductDescription>
                </ProductContentCont>
            </ProductImageAndContent>


            <ProductSideDetailsCont>
                <AddCaveAndMentionsCont>
                    <AddCave type="button">+ Cave</AddCave>
                </AddCaveAndMentionsCont>

                <div className="flex">
                    <Iterations>8 Mentions</Iterations>
                    <DateCount>{data.created_at.slice(0, 10)}</DateCount>
                </div>

            </ProductSideDetailsCont>

        </StoreListingProductStyle>
    )
}

export default ListingStoreProduct

