import styled from "styled-components";
import { HeaderHeight } from "../../global/styled-utils/styling-elements/Sizes";


export const TakeCommentsToSideMakeAbsolute = styled.div`
    position: fixed;
    width: 483px;
    height: calc(100% - ${HeaderHeight});
    background-color: ${({theme}) => theme.forumPage.elementBackground};
    box-shadow: ${({theme}) => theme.forumPage.boxShadow};
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    right: 0px;
    z-index: 980;
    overflow: hidden;
   ;
`

export const CommentsTabStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 96%;
`

export const CommentsTabMainNameStyle = styled.div`
    height: 48px;
    box-shadow: ${({theme}) => theme.forumPage.boxShadow};
    width: 100%;
    display: flex;
    justify-content: flex-end;
    border-radius: 20px 20px 0px 0px ;
`

export const CommentsCloseButton = styled.button`
    border: none;
    cursor: pointer;
    width: 48px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: white;
    font-size: 20px;
`

export const CommentsTabTitleStyle = styled.div`
    font-size: 15px;
    width: 100%;
    overflow: hidden;
    height: 30px;
`


export const AllCommentsCont = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 200px);
    width: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    /* width */
    &::-webkit-scrollbar {
    width: 5px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
    background: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
    background: black;
    border-radius:5px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
`
export const CommentStyle = styled.div`
    display: flex;
    margin-top: 5px;
    border-bottom: 1px solid lightgray;
    border-color: ${({theme}) => theme.forumPage.commentsBorder} !important;
    padding: 10px;
    margin: 5px;
    color:  ${({theme}) => theme.forumPage.textColor};
    column-gap: 5px;
    &:last-child {
        border:none;
    }
`
export const CommentAvatar = styled.div`
    flex: 0 0 20px;
    height: 20px;
    border-radius:50%;
    object-fit: cover;
    background-color: ${({theme}) => theme.forumPage.darkelementBacground};
`

export const CommentNameAndContentCont = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
`

export const CommentUserName = styled.div`
    font-size: 12px;
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
export const CommentContent = styled.div`
    font-size: 15px;
    color:  ${({theme}) => theme.forumPage.textColor};
    font-family: r;
    align-self: flex-start;
`


export const CommentsForm = styled.form`
    font-size: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const CommentChangeContent = styled.textarea`
    font-size: 15px;
    width: 100%;
    display: flex;
    resize: none;
    background-color: transparent;
    border:none;
    height:140px;
    padding: 10px;
    color: ${({theme}) => theme.forumPage.textColor};
    font-size: 18px;
    border-top: 1px solid gray;
    border-color: ${({theme}) => theme.forumPage.textColor};
    &:focus 
    {
        outline: none;
    }
`

export const PostComment = styled.button`
    font-size: 15px;
    width: 100%;
    overflow: hidden;
    height: 50px;
    background-color: ${({theme}) => theme.forumPage.darkelementBacground};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.forumPage.textColor};

`
