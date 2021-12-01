import styled from 'styled-components';



export const ToastsListTop  = styled.div`
    width:100%;
    height: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;    
    position: fixed;
    top:0px;
    z-index: 999;
    pointer-events: none;
    row-gap: 10px;
    margin-top: 10px;
    transition: all 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s;
`

export const ToastItem  = styled.li`
    width:auto;
    background-color: lightgreen;
    color:white;
    display: flex;
    border-radius: 6px;
    padding:5px 10px;
    padding-bottom:10px;
    align-items: flex-start;    
    column-gap: 10px;
    pointer-events: all;
    opacity: 1;
    transition: 1s;
    transform: translate(0px);
`



export const ToastIcon  = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: red;
    margin-top: 10px;

`




export const ToastDeleteButton  = styled.button`
    border: none;
    background-color: transparent;
    color: gray;
    cursor: pointer;
`

export const ToastContent  = styled.p`
    font-size: 18px;
    margin-top: 10px;
    color: gray;

`