import styled from 'styled-components';






export const SingleProductMiddle_STY = styled.main`
    width: 100%;
    display: flex;
    flex-direction:column;
    /* margin: auto; */
    align-items: center;
    row-gap: 22px;
    padding-bottom: 50px;
    box-sizing: initial;
    
`


export const SingleProductAside_STY = styled.aside`
    display: flex;
    width: 350px;
    height:500px;
    flex-direction:column;
    align-items: center;
    row-gap: 20px;
    padding-bottom: 50px;
    padding-top: 50px;
    position: sticky;
    z-index: 999;
    top:78px;
`



export const QuestionCont_STY = styled.div`
    display: flex;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 8px;
    padding-left: 20px;
    padding-right: 44px;
    box-sizing: border-box;
    /* border-radius: 6px; */
    border-radius: 10px;
    background-color: ${({theme}) => theme.backgrounds.background1};
    box-shadow: ${({theme}) => theme.boxshadows.boxshadow4};
    justify-content: flex-start;
    margin-top:127px;
    /* align-items: center; */
    @media only screen and (max-width:1375px){
        flex-wrap: wrap;
        height: auto;
        justify-content: flex-start;
    }
`

export const PersonCont_STY = styled.div`
    display: flex;
    flex-direction: column;
    width: 63px;
    /* height:93px;\ */
    margin-top: 10px;
    @media only screen and (max-width:1375px){
        flex-direction: row;
        width: 120px;
        height: auto;
        align-items: center;
        column-gap: 10px;
    }
`
export const Avatar_STY = styled.div`
    width: 63px;
    height:63px;
    border-radius:50%;
    object-fit: cover;
    background-color: ${({theme}) => theme.backgrounds.background3};
    @media only screen and (max-width:1375px){
        width: 22px;
        height:22px;
    }
`
export const Name_STY = styled.span`
    font-size: 12px;
    margin-top: 18px;
    display: flex;
    opacity: 0.62;
    height: auto;
    width: 120%;
    display: -webkit-box;
    line-height: 18px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color:  ${({theme}) => theme.texts.text2};
    @media only screen and (max-width:1375px){
        margin: 0px;
    }
`

export const ContentCont_STY = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 535px;
    height: 100%;
    margin-left: 22px;
    @media only screen and (max-width:1375px){
        order:2;
        width: 100%;
    }
`

export const QuestionTitle_STY = styled.h2`
    font-size: 20px;
    color:  ${({theme}) => theme.texts.text1};
    cursor: pointer;
    text-transform: capitalize;
    display: -webkit-box;
    /* -webkit-line-clamp: 1;
    -webkit-box-orient: vertical; */
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    line-height: 30px;
    font-family: s;
    letter-spacing: 0.2px;
`

export const QuestionContent_STY = styled.p`
    font-size: 15px;
    width: 100%;
    /* display: -webkit-box; */
    color:  ${({theme}) => theme.texts.text1};
    font-family: r;
    align-self: flex-start;
    -webkit-line-clamp: 1;
    word-wrap: break-word;
    line-height: 22px;
    margin-top: 2px;
`

export const QuestionTagsAndDate_STY = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 14px;
    align-items: center;
`    
export const QuestionDate_STY = styled.p`
     font-family: r;
    font-style: italic;
    font-size: 12px;
    color: ${({theme}) => theme.texts.text3};
    line-height: 18px;
    margin-bottom: 3.5px;
`    

export const QuestionTags_STY = styled.div`
     display: flex;
    column-gap: 10px;
    
`

export const QuestionTag_STY = styled.div`
    height: 22px;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    font-family: r;
    justify-content: center;
    /* border: 1px solid lightgray; */
    align-items: center;
    background-color: #e5f0f4;
    font-family: r;
    background:  ${({theme}) => theme.backgrounds.background4};
    cursor: pointer;
    font-size: 12px;
    text-align: center;
    transition: 10s ease-out ;
    color:  ${({theme}) => theme.texts.text4};
    box-shadow: ${({theme}) => theme.boxshadows.boxshadow6};
    &:hover{
        box-shadow: ${({theme}) => theme.boxshadow_hover.hover3};
    }
    
`

export const QuestionStatistics_STY = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    row-gap: 8.5px;
    justify-content: space-between;
    /* margin-left: 22px; */
    align-items: center;
    /* width: 77px; */
    margin-left: 47px;

    @media only screen and (max-width:1375px){
        flex-direction: row;
        column-gap: 10px;
        width:auto;
        justify-content:flex-start;
        margin-left: 0px;
    }
`

export const VotePercentage_STY = styled.div`
    display: flex;
    color:${({theme}) => theme.texts.text2};

    margin-top: 3px;
    font-family: s;
`
export const StatisticContSingleQuestion_STY = styled.div`
     display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 95px;
    column-gap: 5px;
    row-gap:12px;
    box-sizing: border-box;
    @media only screen and (max-width:1375px){
        flex-direction: row;
        column-gap: 10px;
        width:180px;
        justify-content:flex-start;
    }

`

export const QuestionStatisticElement_STY = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3px;
    column-gap: 5px;
    align-items: center;
`
export const QuestionStatisticButton_STY = styled.button<{changeDirection:boolean}>`
    display: flex;
    font-size: 12px;
    justify-content: center;
    border-radius: 10px;
    align-items: center;
    border: none;
    background-color: transparent;
    transform: ${({changeDirection})=> changeDirection ? "rotateY(180deg)" : "rotate(0deg)"};
    svg 
    {
        color: ${({voted}:any)=> voted ? "rotateY(180deg)" : "rotate(0deg)"};
    }

`

export const QuestionStatisticText_STY = styled.span`
    width: 100%;
    text-align: center;
    color:${({theme}) => theme.texts.text2};

    font-size: 12px;
`


export const AddAnswer_STY = styled.textarea`
    width: 100%;
    height: 50px;
    border: none;
    padding: 0px;
    margin: 0px;
    padding-left: 10px;
    padding-top: 10px;
    border-radius:6px ;
    border: 1px solid lightgray;
    border-right: 0px;
    resize:none;
    &:focus{
        outline: none;
    }
`

export const AddAnswerCont_STY = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    height: auto;
    width: 808px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.backgrounds.background1};
    box-shadow: ${({theme}) => theme.boxshadows.boxshadow4};
    padding: 15px 23px;
    
`
export const AddAnswerSubmit_STY = styled.button`
    width: 50px;
    margin: 0px;
    padding: 0px;
    height: 30px;
    color:${({theme}) => theme.texts.text2};
    background-color: ${({theme}) => theme.backgrounds.background3};
    box-shadow: ${({theme}) => theme.boxshadows.boxshadow5};
    border: none;
    align-self:flex-end;
    border-radius:6px ;
    margin-top: 14px;
    cursor: pointer;
    transition: 0.5s;
    &:hover 
    {
        background:${({theme}) => theme.background_hover.hover4} ;
    }
`


export const AnswersCont_STY = styled.div`
    row-gap: 14px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center ;
    box-sizing: border-box;
`

export const AnswersAndProductsCont_STY = styled.div`
    display: flex;
    flex-direction: column;
    width: 808px;
`


export const ProductsCont_STY = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    align-items: center ;
    justify-content: center;
    border-radius: 6px;
    padding-top: 100px  ;
    color: white;
`

