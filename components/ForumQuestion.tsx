import React, { ReactElement} from 'react'
import Image from 'next/image'
import { AnswerCount,  Avatar, BottomSide, Content, FormQuestionCont, Name, PersonCont, QuestionTags, StatisticCont, Tags, TextCont, Title, Text, HelpfulCont, HelpfulCount, AnswerCont, ViewsCont,  CountOfProducts, ProductCount, ProductsIcons, ProductIcon, ThumbIcon, DefaultLine, PercentageLine, DateCount, QuestionStatisticPercentage } from '../styles/components/styled-elements/FormQuestion.style'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import NavLink from './NavLink'
import { QuestionStatisticButton, QuestionStatistics, VotePercentage } from '../styles/pages/SingleQuestionPage.styled'
import thumbs_up from "/public/thumbs-up.svg"

interface Props {
    data:{
        id:string
        slug:string
        avatar:string
        name:string
        title:string
        content:string
        tags:string[]
        createdAt:string
        answerCount:string
        helpfulCount:string
        viewsCount:string
    }
}

function FormQuestion({data}: Props): ReactElement {
    
    
    return (
        <FormQuestionCont>
            <PersonCont>
                <Avatar src={data.avatar}></Avatar>
                <Name>{data.name}</Name>
            </PersonCont>

            <TextCont>
                <NavLink href={`/forum/${data.id}/${data.slug}`}>
                    <Title> 
                        {data.title}
                    </Title>
                </NavLink>
                <Content> 
                    {data.content}
                </Content>

                <BottomSide>
                    {/* <QuestionTags>
                        {data.tags.map( (tags, index ) =>  index < 3 && <Tags>{tags}</Tags>)}
                    </QuestionTags> */}

                    <CountOfProducts> 
                        <ProductsIcons>
                            <ProductIcon index={3} backgroundColor="#2E4951"></ProductIcon>
                            <ProductIcon index={2} backgroundColor="#0F1113"></ProductIcon>
                            <ProductIcon index={1} backgroundColor="#EFF2F4"></ProductIcon>
                        </ProductsIcons>
                        <ProductCount>{/*<span>11</span>*/} 11 Products</ProductCount>
                    </CountOfProducts>
                </BottomSide>
            </TextCont>

            <QuestionStatistics>
                    <StatisticCont>
                            <AnswerCont>
                                <AnswerCount>7</AnswerCount>
                                <Text>Answers</Text>
                            </AnswerCont>

                            <HelpfulCont>
                                <HelpfulCount>
                                    <QuestionStatisticButton  changeDirection={false}  ><ThumbIcon><Image src={thumbs_up} width="18px" height="18px"/> </ThumbIcon></QuestionStatisticButton> 
                                    <QuestionStatisticPercentage  >69%</QuestionStatisticPercentage> 
                                </HelpfulCount>
                                <DefaultLine><PercentageLine percentage={(69/100*100)}/></DefaultLine>
                                
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
            </QuestionStatistics>

        </FormQuestionCont>
    )
}

export default FormQuestion

