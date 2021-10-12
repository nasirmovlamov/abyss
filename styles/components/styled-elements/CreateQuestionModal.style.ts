import styled from "styled-components";


export const QuestionCreateModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    left:0;
    top:0;
    z-index: 50;
    position: fixed;
    background-color: rgba(0,0,0,0.8);
`
export const QuestionCreateForm = styled.form`
    background-color: gray;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 20px;
    border-radius:10px;
`

export const LabelCont = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`