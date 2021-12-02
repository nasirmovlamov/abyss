import React, { ReactElement} from 'react'
import Image from 'next/image'
import { AnswerCount,  Avatar, BottomSide, Content,  FormQuestionCont, Name, PersonCont, QuestionTags, StatisticCont, Tags, TextCont, Title, Text, HelpfulCont, HelpfulCount, AnswerCont, ViewsCont,  } from '../styles/components/styled-blocks/FormQuestion.style'
import { 
    AddCave,  
    AddCaveAndMentionsCont,  
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
    ProductTitle, ProductViewCont, Side_MentionsCont, Side_ProductSideDetailsCont, StoreListingProductStyle, StoreSideProductStyle } from '../styles/components/styled-blocks/ListingStoreProduct.styled'
import NavLink from './NavLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEye, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import StarCountShow from './StarCountShow'

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
    } | any
}

function SideProduct({data}: Props): ReactElement {
    
    
    return (
        <StoreSideProductStyle>

            <ProductImageAndContent>
                <ProductContentCont>
                        <ProductContent>
                            <NavLink href={"store/1/test"}><ProductTitle>{data.name}</ProductTitle></NavLink>
                            <ProductDetailCont>
                                <ProductStarCont><StarCountShow count={4.3}/> {data.starCount}</ProductStarCont>
                                <ProductSoldCont><FontAwesomeIcon icon={faDownload}/> {data.download_count}</ProductSoldCont>
                                <ProductViewCont><FontAwesomeIcon icon={faEye}/> {data.view_count}</ProductViewCont>
                            </ProductDetailCont>
                            <ProductTags>
                                {/* {data.tags.map((tag , index) => index < 3 && <ProductTag>{tag}</ProductTag>)} */}
                            </ProductTags>
                            {/* <ProductPriceCont>{data.price}$</ProductPriceCont> */}
                        </ProductContent>
                        
                        <ProductDescription>
                            <ProductDescriptionTitle>Description</ProductDescriptionTitle>
                            <ProductDescriptionContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi expedita minima velit nemo sint fuga voluptatem reprehenderit quas blanditiis repellendus dicta modi iste, laudantium nam cupiditate, tenetur, dolorem cumque.</ProductDescriptionContent>
                        </ProductDescription>
                </ProductContentCont>
            </ProductImageAndContent>


            <Side_ProductSideDetailsCont>
                    <AddCave>+ Cave</AddCave>
                    <Side_MentionsCont>
                        <MentionsCount>8</MentionsCount>
                        <MentionsText>Mentions</MentionsText>
                    </Side_MentionsCont>
                    <Iterations>Iterations</Iterations>
            </Side_ProductSideDetailsCont>
           
        </StoreSideProductStyle> 
    )
}

export default SideProduct

