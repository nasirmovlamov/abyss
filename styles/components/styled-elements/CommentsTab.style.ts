import styled from "styled-components";
import { HeaderHeight } from "../../global/styled-utils/styling-elements/Sizes";


export const TakeCommentsToSideMakeAbsolute = styled.div`
    position: fixed;
    width: 383px;
    height: calc(100% - ${HeaderHeight});
    background-color: ${({theme}) => theme.forumPage.elementBackground};
    box-shadow: ${({theme}) => theme.forumPage.boxShadow};
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    right: 0px;
    z-index: 980;
`

export const CommentsTabStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 96%;
`

export const CommentsTabMainNameStyle = styled.div`
    font-size: 20px;
    height: 30px;

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
    height: 350px;
    width: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
`
export const CommentStyle = styled.div`
    display: flex;
    background-color: green;
    margin-top: 5px;
`


export const CommentsForm = styled.form`
    font-size: 15px;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
`
export const CommentChangeContent = styled.textarea`
    font-size: 15px;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    resize: none;
`

export const PostComment = styled.button`
    font-size: 15px;
    width: 100%;
    overflow: hidden;
    height: 30px;
    display: flex;
    flex-direction: column;
`
