import styled from "styled-components";


export const AnswerStyle = styled.li`
    display: flex;
    width: 100%;
    column-gap: 10px;
    padding: 10px;
    box-sizing:border-box;
    border-bottom: 1px solid lightgray;
    padding-bottom: 20px;
    flex-direction: column;
    color: white;
`
export const LikeButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid lightgray;
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
`
export const Avatar = styled.div`
    width: 62px;
    height:62px;
    background-color: red;
    border-radius:50%;
    object-fit: cover;
`
export const Name = styled.span`
    font-size: 15px;
    text-align: center;
`

export const AnswerContent = styled.p`
    font-size: 15px;
    width: 500px;
    overflow: hidden;
    margin-top: 10px;
`
export const AnswerContentSkeleton = styled.div`
    font-size: 15px;
    width: 500px;
    overflow: hidden;
    margin-top: 10px;
`
export const ShowComments = styled.button`
    border: none;
    background-color: black;
    color: white;
    border-radius: 6px;
    padding: 5px 7px;
    cursor: pointer;
`