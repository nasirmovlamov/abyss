import styled from 'styled-components';


export const MainPartOfPageStyle = styled.div`
    width: 810px;
    padding-top: 74px;
    display: flex;
    justify-content: center;
    margin-right: 7.2917%;
    /* z-index: 2; */
`


export const SidePartOfPageStyle = styled.aside<{side:string}>`
    width: ${ ({side}) => side === "left" ? "200px" : "200px"};   
    box-sizing: border-box;
    padding-top: 25px;
    display: flex;
    padding-top: 115px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: sticky;
    top:0px;
    overflow: hidden;
    
`

export const PageDefaultStyle = styled.main`
    display: flex;
    column-gap: 56px;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    padding-left: 56px;
    padding-right: 56px;
    margin: auto;
`
