import styled from "styled-components";



export const MYOWNEDITORSTYLE = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid gray;
    padding: 15px;
    overflow-y:auto ;
    &:focus 
    {
        outline: none;
    }
`

export const StyledCode = styled.code`
    background: red;
    color: green;
`