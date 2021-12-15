import React, { ReactElement, useState} from 'react'
import Image from 'next/image'
import { AnswerCount,  Avatar, BottomSide, Content, FormQuestionCont, Name, PersonCont, QuestionTags, StatisticCont, Tags, TextCont, Title, Text, HelpfulCont, HelpfulCount, AnswerCont, ViewsCont,  CountOfProducts, ProductCount, ProductsIcons, ProductIcon, ThumbIcon, DefaultLine, PercentageLine, DateCount, QuestionStatisticPercentage } from '../styles/components/styled-blocks/FormQuestion.style'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import NavLink from './NavLink'
import { QuestionStatisticButton_STY, QuestionStatistics_STY, VotePercentage_STY } from '../styles/pages/SingleQuestionPage.styled'
import thumbs_up from "/public/thumbs-up.svg"
import { parseHtml, parseHtmlWithMention, parseHtmlWithMentionremoveImgAndCodeBlock } from '../logic/htmlParser'
import { useAppDispatch } from '../app/store/hooks'
import {  set_side_product_data } from '../app/feature/SideProducts.slice'
import { getSideProducts } from '../app/thunks/SideProducts.thunk'
import mainlogo from '../public/main-logo.svg'
interface Props {
    data:any
}

function FormQuestion({data}: Props): ReactElement {

    const dispatch = useAppDispatch()
    const [isToolTip, setshowToolTip] = useState(false)

    const setSideProductData = async (e:any) => {
        // document.getElementById(`forumQuestion${data.id}`)!.getBoundingClientRect().top
        const distanceFromTopOfBrowser = document.getElementById(`forumQuestion${data.id}`)!.offsetTop
        const questionID = data.id
        await dispatch(set_side_product_data({id:questionID, distanceFromTop:distanceFromTopOfBrowser}))
        await dispatch(getSideProducts({id:questionID, page:1}))
    }

    const showToolTip = () => {
        setshowToolTip(true)
    }

    const hideToolTip = () => {
        setshowToolTip(true)
    }

    return (
        // <NavLink key={data.id} content="forum question" href={`/forum/${data.id}/${data.slug}`}>
            <FormQuestionCont key={data.id} onMouseEnter={showToolTip} onMouseLeave={hideToolTip}  id={`forumQuestion${data.id}`}>
                {/* <div style={{position:'absolute', top:-20 , right:-20 , display:isToolTip ? 'flex' : 'none'}}>Show ToolTip</div> */}
                <PersonCont>
                    <Avatar src={mainlogo.src} />
                    <Name>{data.name}</Name>
                </PersonCont>

                <TextCont>
                    <Title> 
                        {data.title}
                    </Title>
                    <Content> 
                        {data.description}
                    </Content>

                    <BottomSide>
                        <QuestionTags>
                            {data.tags.map( (tag:any, index:any ) =>  index < 3 && <Tags key={index}>{tag}</Tags>)}
                        </QuestionTags>

                        <CountOfProducts> 
                            <ProductsIcons>
                                <ProductIcon index={3} backgroundColor="#2E4951"></ProductIcon>
                                <ProductIcon index={2} backgroundColor="#0F1113"></ProductIcon>
                                <ProductIcon index={1} backgroundColor="#EFF2F4"></ProductIcon>
                            </ProductsIcons>
                            <ProductCount onClick={setSideProductData}> 11 Products</ProductCount>
                        </CountOfProducts>
                    </BottomSide>
                </TextCont>

                <QuestionStatistics_STY>
                        <StatisticCont>
                                <AnswerCont>
                                    <AnswerCount>{data.answer_count}</AnswerCount>
                                    <Text>Answers</Text>
                                </AnswerCont>

                                <HelpfulCont>
                                    <HelpfulCount>
                                        <QuestionStatisticButton_STY  changeDirection={false}  ><ThumbIcon><Image src={thumbs_up} width="18px" height="18px" alt="like button"/> </ThumbIcon></QuestionStatisticButton_STY> 
                                        <QuestionStatisticPercentage  >{data.downvote + data.upvote > 0 ?  (data.upvote / (data.downvote + data.upvote )) : 0}%</QuestionStatisticPercentage> 
                                    </HelpfulCount>
                                    <DefaultLine><PercentageLine percentage={data.downvote + data.upvote > 0 ? (data.upvote / (data.downvote + data.upvote )) : 0}/></DefaultLine>
                                    
                                </HelpfulCont>
                        </StatisticCont>
                        <DateCount>
                            2d 7h ago
                        </DateCount>
                        {/* <QuestionStatisticElement>
                            <QuestionStatisticButton onClick={voting} color={singleQuestionData.user_votes === null ? "red" : "green"}>like</QuestionStatisticButton>
                            <QuestionStatisticText>Give Vote</QuestionStatisticText>
                            <QuestionDate> {singleQuestionData.created_at} </QuestionDate>
                        </QuestionStatisticElement> */}
                </QuestionStatistics_STY>

            </FormQuestionCont>
        // </NavLink>
    )
}

export default FormQuestion

