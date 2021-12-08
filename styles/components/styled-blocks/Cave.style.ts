import styled from "styled-components";


export const Cave_Sty = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 1500px;
    /* margin-top: 220.28px; */
    background-color: ${({theme}) => theme.colors.black_1};
    color: #fff;
    border-radius: 0px 10px 10px 10px;
    overflow: hidden;
    box-shadow: ${({theme}) => theme.boxshadows.boxshadow1};
    z-index: 4;
    /* margin-top: -2px; */
`