import styled from "styled-components";


export const AnswerStyle = styled.li`
    display: flex;
    width: 100%;
    column-gap: 10px;
    padding: 10px;
    box-sizing:border-box;
    padding-bottom: 20px;
    flex-direction: column;
    color: white;
    background-color: ${({theme}) => theme.forumPage.elementBackground};
    border-radius: 10px;

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
    row-gap: 10px;
    align-items: center;    
    width: 100px !important;
    box-sizing: border-box;
    /* z-index: 999; */
`
export const Avatar = styled.div`
    width: 62px;
    height:62px;
    background-color: ${({theme}) => theme.forumPage.darkelementBacground};
    box-shadow: ${({theme}) => theme.forumPage.boxShadowForElement};
    
    border-radius:50%;
    object-fit: cover;
    /* z-index: 999; */

`
export const Name = styled.span`
    font-size: 12px;
    margin-top: 6px;
    display: flex;
    color:  ${({theme}) => theme.forumPage.textColor};

    opacity: 0.62;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const AnswerContent = styled.p`
    font-size: 15px;
    width: 500px;
    overflow: hidden;
    margin-top: 10px;
    color:  ${({theme}) => theme.forumPage.textColor};


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