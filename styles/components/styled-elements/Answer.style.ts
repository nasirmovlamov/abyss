import styled from "styled-components";


export const AnswerStyle = styled.li`
    display: flex;
    width: 100%;
    height: auto;
    padding-top: 5px;
    padding-bottom: 8px;
    padding-left: 20px;
    padding-right: 44px;
    box-sizing: border-box;
    /* border-radius: 6px; */
    border-radius: 10px;
    background-color: ${({theme}) => theme.forumPage.elementBackground};
    box-shadow: ${({theme}) => theme.forumPage.boxShadow};
    justify-content: flex-start;
    align-items: center;
    

`
export const LikeButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: transparent;
`


export const PersonCont = styled.div`
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
export const Avatar = styled.div`
    width: 63px;
    height:63px;
    border-radius:50%;
    object-fit: cover;
    background-color: ${({theme}) => theme.forumPage.darkelementBacground};
    @media only screen and (max-width:1375px){
        width: 22px;
        height:22px;
    }
`
export const Name = styled.span`
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
    color:  ${({theme}) => theme.forumPage.sideTextColor};
    @media only screen and (max-width:1375px){
        margin: 0px;
    }
`

export const AnswerContent = styled.p`
    /* display: flex; */
    /* display: -webkit-box; */
    width: 535px;
    height: 100%;
    margin-left: 22px;
    font-size: 15px;
    color:  ${({theme}) => theme.forumPage.textColor};
    font-family: r;
    align-self: flex-start;
    line-height: 22px;
    margin-top: 2px;
`



export const AnswerContentSkeleton = styled.div`
    font-size: 15px;
    width: 500px;
    overflow: hidden;
    margin-top: 10px;
    color: black;

`
export const ShowComments = styled.button`
    border: none;
    padding: 0px;
    background-color: transparent;
    color: ${({theme}) => theme.forumPage.titleColor};

    border-radius: 6px;
    padding: 5px 7px;
    cursor: pointer;
    column-gap: 5px;
    span , svg
    {
        color: ${({theme}) => theme.forumPage.titleColor};
        font-size: 15px;
    }
    svg 
    {
        font-size: 20px;
        margin-bottom: -2px;
        margin-right: 4px;
    }
    
`