import styled from 'styled-components';

export const SingleProductMiddle = styled.main`
    width: 100%;
    display: flex;
    flex-direction:column;
    margin: auto;
    align-items: center;
    row-gap: 20px;
    padding-bottom: 50px;
    padding-top: 50px;
    box-sizing: initial;
`


export const SingleProductAside = styled.aside`
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



export const QuestionCont = styled.div`
    padding:  23px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid gray;
    column-gap: 22px;
    width: 808px;
    box-shadow: 0px 1px 1px rgba(99,105,108,0.61), inset 0px 0px 0px rgba(99,105,108,0.61);
    border-radius: 10px;
    background-color: #ffffff;
`

export const PersonCont = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 62px;
    height: 93px;
`
export const Avatar = styled.div`
    width: 62px;
    height:62px;
    border-radius:50%;
    object-fit: cover;
    background-color: pink;
`
export const Name = styled.span`
    font-size: 15px;
    color: gray;
    text-align: center;
`

export const ContentCont = styled.div`
    font-size: 15px;
    color: white;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 505px;
`

export const QuestionTitle = styled.h2`
    font-size: 18px;
    color: #00578b;
    font-family: s;
`

export const QuestionContent = styled.p`
    font-size: 15px;
    color: #000e0e;
    line-height: 22px;
    font-family:r;
    text-align: justify;
    
`

export const QuestionTagsAndDate = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`    
export const QuestionDate = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
    font-size: 12px;
`    

export const QuestionTags = styled.div`
    display: flex;
    column-gap: 10px;
    
`

export const QuestionTag = styled.div`
    height: 22px;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    color: #00578b;
    font-family: r;
    justify-content: center;
    border: 1px solid lightgray;
    align-items: center;
    box-shadow: 0px 0px 0px 0.5px rgba(158,161,163,0.38), inset 0px 0px 1px rgba(158,161,163,1);
    background-color: #e5f0f4;
    font-family: r;
    font-size: 12px;
    text-decoration: none solid rgb(0, 87, 139);
    text-align: center;
    
`

export const QuestionStatistics = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: space-between;
    margin-left: 22px;
    align-items: center;
`

export const VotePercentage = styled.div`
    display: flex;
    color: #00578b;
    margin-top: 3px;
    font-family: s;
`


export const QuestionStatisticElement = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3px;
    column-gap: 5px;
    align-items: center;
`
export const QuestionStatisticButton = styled.button<{changeDirection:boolean}>`
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

export const QuestionStatisticText = styled.span`
    width: 100%;
    text-align: center;
    color: white;
    font-size: 12px;
`


export const AddAnswer = styled.textarea`
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

export const AddAnswerCont = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    height: auto;
    width: 808px;
    box-shadow: 0px 1px 1px rgba(99,105,108,0.61), inset 0px 0px 0px rgba(99,105,108,0.61);
    border-radius: 10px;
    background-color: #ffffff;
    padding: 15px 23px;
    
`
export const AddAnswerSubmit = styled.button`
    width: 50px;
    margin: 0px;
    padding: 0px;
    height: 30px;
    background-color: green;
    color: white;
    border: 1px solid green;
    align-self:flex-end;
    border-radius:6px ;
    margin-top: 10px;
    
`


export const AnswersCont = styled.div`
    row-gap: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center ;
    box-sizing: border-box;
`

export const AnswersAndProductsCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 808px;
    box-shadow: 0px 1px 1px rgba(99,105,108,0.61), inset 0px 0px 0px rgba(99,105,108,0.61);
    border-radius: 10px;
    background-color: #ffffff;
    padding: 7px 12px;
`


export const ProductsCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    align-items: center ;
    justify-content: center;
    height: 1500px;
    background-color: gray;
    border-radius: 6px;
    color: white;
`

