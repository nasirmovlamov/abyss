import styled from "styled-components";


export interface PercentageLineProps {
    percentage:number
}

export interface ProductIconProps {
    backgroundColor:string
    index:number
}

export const FormQuestionCont = styled.div`
    display: flex;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 8px;
    padding-left: 20px;
    padding-right: 44px;
    box-sizing: border-box;
    /* border-radius: 6px; */
    column-gap: 22px;
    border-radius: 20px;
    background-color: ${({theme}) => theme.forumPage.elementBackground};
    box-shadow: ${({theme}) => theme.forumPage.boxShadow};
    justify-content: space-between;
    height: 125px;
    align-items: center;
`

export const PersonCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 61px;
    height:93px;
`
export const Avatar = styled.img`
    width: 61px;
    height:61px;
    border-radius:50%;
    object-fit: cover;
    background-color: ${({theme}) => theme.forumPage.darkelementBacground};

`
export const Name = styled.span`
    font-size: 12px;
    margin-top: 6px;
    display: flex;
    opacity: 0.62;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color:  ${({theme}) => theme.forumPage.sideTextColor};
    `
export const TextCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 644px;
    height: 100%;
`

export const Title = styled.h2`
    font-size: 20px;
    color:  ${({theme}) => theme.forumPage.titleColor};
    cursor: pointer;
    text-transform: capitalize;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    
    font-family: s;
`
export const Content = styled.p`
    font-size: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color:  ${({theme}) => theme.forumPage.textColor};
    font-family: r;
    align-self: flex-start;
`

export const BottomSide = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 7px;
`

export const QuestionTags = styled.div`
    display: flex;
    column-gap: 10px;
`


export const Tags = styled.button`
    height: 22px;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    color:  ${({theme}) => theme.forumPage.textColor};
    font-family: r;
    justify-content: center;
    /* border: 1px solid lightgray; */
    align-items: center;
    background-color: #e5f0f4;
    font-family: r;
    background:  ${({theme}) => theme.forumPage.tagsBackground};
    cursor: pointer;
    font-size: 12px;
    text-align: center;
    transition: 0.2s;
    &:hover{
        box-shadow: ${({theme}) => theme.forumPage.boxShadow};
    }
`
export const ProductsIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProductIcon = styled.div<ProductIconProps>`
    width: 18px;
    height: 18px;
    box-shadow: 0px 1px 2px rgba(99,105,108,1), inset 0px 0px 0px rgba(99,105,108,0.61);
    border-radius: 50%;
    background-color: ${({backgroundColor}) =>  backgroundColor};
    color:  ${({theme}) => theme.forumPage.sideTextColor};
    position: absolute;
    margin-right: ${({index}) => (index * 15)}px;
`

export const CountOfProducts = styled.div`
    display: flex;
    column-gap: 10px;
    align-items: center;
`
export const ProductCount = styled.div`
    font-family: r;
    font-size: 12px;
    text-decoration: none solid rgb(71, 77, 81);
    color: ${({theme}) => theme.forumPage.titleColor};
    span 
    {
        color: ${({theme}) => theme.forumPage.titleColor};
        font-size: 16px;
        font-family: m;
        text-decoration: none solid ${({theme}) => theme.forumPage.titleColor};
    }
`



export const StatisticCont = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 95px;
    column-gap: 5px;
    row-gap:5px;
    box-sizing: border-box;

`

export const AnswerCont = styled.div`
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
    
`

export const AnswerCount = styled.div`
    width: 40px;
    height: 23px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 5px;
    color:${({theme}) => theme.forumPage.sideTextColor};
    font-size:20px;

`

export const Text = styled.span`
    font-size: 13px;
    color:${({theme}) => theme.forumPage.sideTextColor};

`
export const ThumbIcon = styled.span`
    font-size: 13px;
    color:${({theme}) => theme.forumPage.sideTextColor};
    font-size: 18px;
`




export const HelpfulCont = styled.div`
    width: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3px;
`

export const HelpfulCount = styled.div`
    width: 45px;
    height: 23px;
    color: ${({theme}) => theme.forumPage.sideTextColor};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
`


export const DefaultLine = styled.div`
    width: 76px;
    height: 3px;
    background-color: rgba(0,0,0);
`

export const PercentageLine = styled.div<PercentageLineProps>`
    width: ${({percentage}) => percentage}%;
    height: 100%;
    background-color:${({theme}) => theme.forumPage.darkSideTextColor};
`

export const ViewsCont = styled.div`
`

export const DateCount = styled.p`
    font-family: r;
    font-style: italic;
    font-size: 12px;
    color:#9ea1a3;    
`
