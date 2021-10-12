import styled from "styled-components";


export const ProductCreateModal = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    left:0;
    top:0;
    z-index: 999999;
    position: fixed;
    background-color: rgba(0,0,0,0.8);
`
export const ProductCreateForm = styled.div`
    display: flex;
    background-color: lightblue;
    padding: 20px;
    flex-direction: column;
    border-radius:10px;
    width: 1200px;
    overflow-y: auto;

`

export const ProductLabelCont = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    border: 1px dashed black;
    margin-top: 20px;
`