import styled from 'styled-components';


export const MainPartOfPageStyle = styled.div`
    width: 810px;
    padding-top: 74px;
    display: flex;
    justify-content: center;
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
    display: grid;
    grid-template-columns: 200px 810px 200px ;
    grid-template-rows: 1fr;
    align-content: center;
    justify-content: center;
    column-gap: 56px;
    width: 100%;
    padding-right: 7.2917%;
    box-sizing: border-box;
    /* margin: auto; */
`
