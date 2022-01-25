import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';

import mainlogo from '../../../../public/icons/main-logo.svg';
import thumbs_up from '../../../../public/icons/thumbs-up.svg';
import { set_side_product_data } from '../../../store/slices/SideProducts.slice';
import { useAppDispatch } from '../../../store/states/store.hooks';
import { getSideProducts } from '../../../store/thunks/SideProducts.thunk';
import {
  AnswerCont,
  AnswerCount,
  Avatar,
  BottomSide,
  Content,
  CountOfProducts,
  DateCount,
  DefaultLine,
  FormQuestionCont,
  HelpfulCont,
  HelpfulCount,
  Name,
  PercentageLine,
  PersonCont,
  ProductCount,
  ProductIcon,
  ProductsIcons,
  QuestionStatisticPercentage,
  QuestionTags,
  StatisticCont,
  Tags,
  Text,
  TextCont,
  ThumbIcon,
  Title,
} from '../../../styles/styled-components/base/modules/FormQuestion.style';
import {
  QuestionStatisticButton_STY,
  QuestionStatistics_STY,
} from '../../../styles/styled-components/base/pages/SingleQuestionPage.styled';

interface Props {
  data: any
}

function FormQuestion({ data }: Props): ReactElement {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [isToolTip, setshowToolTip] = useState(false)

  const setSideProductData = async (e: any) => {
    // document.getElementById(`forumQuestion${data.id}`)!.getBoundingClientRect().top
    const distanceFromTopOfBrowser = document.getElementById(`forumQuestion${data.id}`)!.offsetTop
    const questionID = data.id
    await dispatch(
      set_side_product_data({ id: questionID, distanceFromTop: distanceFromTopOfBrowser }),
    )
    await dispatch(getSideProducts({ id: questionID, page: 1 }))
  }

  const showToolTip = () => {
    setshowToolTip(true)
  }

  const hideToolTip = () => {
    setshowToolTip(true)
  }

  return (
    <FormQuestionCont
      onClick={() => router.push(`/forum/${data.id}/${data.slug}`)}
      key={data.id}
      onMouseEnter={showToolTip}
      onMouseLeave={hideToolTip}
      id={`forumQuestion${data.id}`}
    >
      {/* <div style={{position:'absolute', top:-20 , right:-20 , display:isToolTip ? 'flex' : 'none'}}>Show ToolTip</div> */}
      <PersonCont>
        <Avatar src={mainlogo.src} />
        <Name>{data.name}</Name>
      </PersonCont>

      <TextCont>
        <Title>{data.title}</Title>
        <Content>{data.description}</Content>

        <BottomSide>
          <QuestionTags>
            {data.tags.map((tag: any, index: any) => index < 3 && <Tags key={index}>{tag}</Tags>)}
          </QuestionTags>

          <CountOfProducts>
            <ProductsIcons>
              <ProductIcon index={3} backgroundColor="#2E4951"></ProductIcon>
              <ProductIcon index={2} backgroundColor="#0F1113"></ProductIcon>
              <ProductIcon index={1} backgroundColor="#EFF2F4"></ProductIcon>
            </ProductsIcons>
            <ProductCount onClick={setSideProductData}> {data.product_count} Products</ProductCount>
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
              <QuestionStatisticButton_STY changeDirection={false}>
                <ThumbIcon>
                  <Image src={thumbs_up} width="18px" height="18px" alt="like button" />
                </ThumbIcon>
              </QuestionStatisticButton_STY>
              <QuestionStatisticPercentage>
                {data.downvote + data.upvote > 0
                  ? (data.upvote / (data.downvote + data.upvote)) * 100
                  : 0}
                %
              </QuestionStatisticPercentage>
            </HelpfulCount>
            <DefaultLine>
              <PercentageLine
                percentage={
                  data.downvote + data.upvote > 0
                    ? (data.upvote / (data.downvote + data.upvote)) * 100
                    : 0
                }
              />
            </DefaultLine>
          </HelpfulCont>
        </StatisticCont>
        <DateCount>{data.created_at.slice(0, 10)}</DateCount>
        {/* <QuestionStatisticElement>
                            <QuestionStatisticButton onClick={voting} color={singleQuestionData.user_votes === null ? "red" : "green"}>like</QuestionStatisticButton>
                            <QuestionStatisticText>Give Vote</QuestionStatisticText>
                            <QuestionDate> {singleQuestionData.created_at} </QuestionDate>
                        </QuestionStatisticElement> */}
      </QuestionStatistics_STY>
    </FormQuestionCont>
  )
}

export default FormQuestion
