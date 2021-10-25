import React, { ReactElement} from 'react'
import Image from 'next/image'
import { AnswerCount,  Avatar, BottomSide, Content,  FormQuestionCont, Name, PersonCont, QuestionTags, StatisticCont, Tags, TextCont, Title, Text, HelpfulCont, HelpfulCount, AnswerCont, ViewsCont,  } from '../styles/components/styled-elements/FormQuestion.style'
import { AddCave, Language, LanguageContForTextAndIcon, LanguageInfo, LanguageText, LinesofCode, LinesofCodeContForIconAndText, LinesofCodeText, ProductContent, ProductContentCont, ProductDetailCont,  ProductImageAndContent, ProductImageOverlay, ProductLanguageAndImage, ProductPerson, ProductPriceCont, ProductSoldCont, ProductStarCont, ProductTag, ProductTags, ProductTitle, StoreListingProductStyle } from '../styles/components/styled-elements/ListingStoreProduct.styled'
import NavLink from './NavLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'

interface Props {
    data:{
        avatar:string,
        programingLanguage:string
        lineCount:string
        name:string
        starCount:string 
        soldCount:string
        price:string
        tags:string[]

    }
}

function ListingStoreProduct({data}: Props): ReactElement {
    
    
    return (
        <StoreListingProductStyle>

            <ProductImageAndContent>
                <ProductLanguageAndImage>
                    <ProductPerson src={data.avatar}/>

                    <ProductImageOverlay></ProductImageOverlay>
                    <LanguageInfo>
                        <LanguageContForTextAndIcon>
                            <FontAwesomeIcon icon={faLaptopCode}/>
                            <LanguageText>{data.programingLanguage}</LanguageText>
                        </LanguageContForTextAndIcon>
                        
                        <LinesofCodeContForIconAndText>
                            <FontAwesomeIcon icon={faPython}/>
                            <LinesofCodeText>{data.lineCount}</LinesofCodeText>
                        </LinesofCodeContForIconAndText>
                    </LanguageInfo>
                </ProductLanguageAndImage>


                <ProductContentCont>
                    <ProductContent>
                        <NavLink href={"store/1/test"}><ProductTitle>{data.name}</ProductTitle></NavLink>
                        <ProductDetailCont>
                            <ProductStarCont>star {data.starCount}</ProductStarCont>
                            <ProductSoldCont>sold {data.soldCount}</ProductSoldCont>
                        </ProductDetailCont>
                        <ProductPriceCont>{data.price}$</ProductPriceCont>
                    </ProductContent>
                    <ProductTags>
                {data.tags.map((tag , index) => index < 3 && <ProductTag>{tag}</ProductTag>)}
            </ProductTags>
                    <AddCave>Add to Cave</AddCave>

                </ProductContentCont>
            </ProductImageAndContent>

           
        </StoreListingProductStyle> 
    )
}

export default ListingStoreProduct

