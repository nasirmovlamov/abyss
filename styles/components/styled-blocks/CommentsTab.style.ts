import styled from "styled-components";
import { HeaderHeight } from "../../global/styled-utils/settings/Sizes";


export const TakeCommentsToSideMakeAbsolute = styled.div`
    position: fixed;
    width: 358px;
    height: calc(100% - ${HeaderHeight});
    background-color: ${({theme}) => theme.backgrounds.background1};
    box-shadow: ${({theme}) => theme.boxshadows.boxshadow4};
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
    box-shadow: ${({theme}) => theme.boxshadows.boxshadow4};
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
    overflow-x: hidden;
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
    border-color: ${({theme}) => theme.sidecolors.sidecolor3} !important;
    padding: 10px;
    margin: 5px;
    color:  ${({theme}) => theme.texts.text1};
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
    background-color: ${({theme}) => theme.backgrounds.background3};
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
    width: calc (100% -20px);
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color:  ${({theme}) => theme.texts.text2};
`
export const CommentContent = styled.div`
    font-size: 15px;
    color:  ${({theme}) => theme.texts.text1};
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
    color: ${({theme}) => theme.texts.text1};
    font-size: 18px;
    border-top: 1px solid gray;
    border-color: ${({theme}) => theme.texts.text1};
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
    background-color: ${({theme}) => theme.backgrounds.background3};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.texts.text1};

`
