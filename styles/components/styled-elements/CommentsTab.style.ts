import styled from "styled-components";


export const CommentsTabStyle = styled.div`
    display: flex;
    flex-direction: column;
    
`

export const CommentsTabMainNameStyle = styled.div`
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
