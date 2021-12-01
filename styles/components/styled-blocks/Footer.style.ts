import styled from "styled-components";

export const FooterStyle = styled.footer`
    display:flex;
    width: 100%;
    height: 300px;
    background-color: rgb(3, 39, 40);
    justify-content:center;
    align-items:center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0px;
    flex-direction: column;
    row-gap: 20px;
    justify-content: space-around;
`

export const FooterRow = styled.div`
    display:flex;
    justify-content:center;
    padding-left: 25px;
    padding-right: 25px;
    flex-wrap: wrap;
    row-gap: 45px;
    column-gap: 55px;
    align-items:center; 
`
export const FooterColumn = styled.div`
    display:flex;
    flex-direction:column;
    row-gap: 25px;
`
export const FooterElement = styled.p`
    font-size: 18px;
    color: white;
`
