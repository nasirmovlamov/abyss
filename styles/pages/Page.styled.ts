import styled from 'styled-components';


export const MainPartOfPageStyle = styled.div`
    width: 810px;
    position: relative;
    /* padding-top: 74px;    */
    display: flex;
    justify-content: center;
    /* z-index: 2; */
    @media only screen and (max-width: 1536px) {
        flex: 0 0 52.73%;
        padding-right: 0%;
    }
    @media only screen and (max-width: 1236px) {
        width: 100%;
        flex: 0 0 80%;

    }
`




export const SidePartOfPageStyle = styled.aside<{side:string}>`
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
    flex: 0 0 ${ ({side}) => side === "left" ? "195px" : "307px"};
    @media only screen and (max-width: 1236px) {
        display: none;
    }
    
`

export const PageDefaultStyle = styled.main`
    display: flex;
    justify-content: center;
    align-content: center;
    justify-content: center;
    column-gap: 56px;
    width: 100%;
    padding-right: 7.2917%;
    box-sizing: border-box;
    /* margin: auto; */
    @media only screen and (max-width: 1236px) {
        padding-right: 0%;
        padding-left: 20px;
        padding-right: 20px;
    }
`
