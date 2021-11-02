import styled from "styled-components";



export const SearchBoxContainer = styled.div<{path:string , scrollTopValue:number}>`
    display: flex;
    width: 100%;
    padding-top: ${(props) => props.path === "/" ? "20vh" : "0vh"};
    height: ${(props) => props.path === "/" ? "70vh" : "auto"};
    justify-content: center;
    padding-right:112px;
    position: fixed;
    z-index: 555;
    /* top: 61px; */
    transform: ${({scrollTopValue})=> `translateY(${scrollTopValue}px)`};
    @media only screen and (max-width: 1526px) {
        box-sizing:border-box;
    }
    @media only screen and (max-width: 1236px) {
        padding-right: 0%;
    }
`

export const SearchBoxThunkAndCont = styled.div<{direction:string}>`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
    /* transform: ${({direction}) => direction === "visible" ? "translateY(0px)" : "translateY(-51px)"}; */
    width: 810px;
    /* position: sticky; */
    z-index: 100;
    @media only screen and (max-width: 1526px) {
        width: 52.73%;
        box-sizing:border-box;
    }
    @media only screen and (max-width: 1236px) {
        padding-right: 0%;
        width: 77%;
    }
`

export const SearchBoxThunk = styled.button<{direction:string,scrollY:number}>`
    display: flex;
    flex-direction: column;
    color: black;
    pointer-events: all;
    border: none;
    background-color: #00090e;
    color: gray;
    width: 200px;
    text-align: center;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    height: 16px;
    /* opacity: 0; */
    border-radius: 0px 0px 5px 5px;
    display: ${({scrollY}) => scrollY > 199 ? "block" : "none"};
    opacity: ${({scrollY}) => scrollY > 200 ? "1" : "0"};
    transform: ${({direction})=>direction === "not-visible" ? "translateY(0px)" : "translateY(-20px)"};
    pointer-events: ${({direction})=>direction === "not-visible" ? "all" : "none"};
`

export const SearchBoxStyle = styled.div<{direction:string, path:string}>`
    display: flex;
    pointer-events: all;
    background-color: black;
    width: 100%;
    transform: translateX(0px);
    height: ${(props) => props.path === "/" ? "65px" : "48px"};
    color: white;
    border-radius: 5px;
    border-radius: 30px 30px 30px 30px ;
    border: none;
    background-color: white;
    align-items: flex-start;
    justify-content: space-between;
    box-sizing: border-box;
    z-index: 9999;
    transform-origin: top;
    background-color: ${({theme}) => theme.searchBox.background};
    box-shadow: ${({theme}) => theme.searchBox.boxShadow};
`


export const SearchBoxPage = styled.div`
    width:112px;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    background-color: white;
    color:${({theme}) => theme.searchBox.leftSideColor} ;
    font-family: r;
    border-radius: 30px 0px 0px 30px ;
    background-color: ${({theme}) => theme.searchBox.background};
    flex: 0 0 112px; /* flex-grow, flex-shrink, flex-basis */
`


export const SearchButtonLupa = styled.button`
    width: auto;
    height: auto;
    margin:0px;
    padding:0px;
    border: none;
    background-color: transparent;
    z-index: 4;
    color: white;
    position: absolute;
    margin-left: 10px;
    cursor: pointer;
    &:focus 
    {
        outline: none;
    }
    svg 
    {
        color: ${({theme}) => theme.searchBox.borderAndPlaceHolderColor};
        font-size: 16px;
    }
`

export const SearchInput = styled.input<{path:string}>`
    border-radius: ${(props) => props.path === "/" ? "0px 30px 30px 0px" : "inherit"}  ;
    height: 100%;
    padding-left: 40px;
    border: none;
    color:black;
    width: 100%;
    z-index: 3;
    background-color: ${({theme}) => theme.searchBox.background};
    color: ${({theme}) => theme.searchBox.inputColor};
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: ${({theme}) => theme.searchBox.borderAndPlaceHolderColor};
    }
`

export const SearchCont = styled.div`
    width:100%;
    justify-self: stretch;
    height: 100%;
    display:flex;
    align-items: center;
    border-left: 1px solid red;
    border-color:  ${({theme}) => theme.searchBox.borderAndPlaceHolderColor} !important;
    position: relative;
    
    input 
    {
        
    }
`
export const SearchNav = styled.div<{path:string}>`
    position: absolute;
    display:flex;
    flex-direction: column;
    border-left: 1px solid #E5E6E6;
    border-right: 1px solid #E5E6E6;
    background-color: white;
    z-index: 1;
    /* opacity: 0; */
    /* top:50px; */
    border: 1px solid gray;
    border-top: 1px solid lightgray ;
    width: ${(props) => props.path === "/" ? "95%" : "100%"}  ;
    align-self: flex-end;
    margin: 0px;
    padding: 0px;
    border: 0px;

`
export const SearchNavQuery = styled.button`
    display: flex;
    padding: 4px 10px;
    align-items: center;
    background-color: white;
    border: none;

    svg 
    {
        z-index: 4;
        color: white;
        position: absolute;
        margin-left: 0px;
        color: #d9dadb;
    }
    span 
    {
        height: 100%;
        padding-left: 30px;
        border: none;
        color: lightgray;
    }
`

export const AddQuesitionCont = styled.button`
    flex: 0 0 112px; /* flex-grow, flex-shrink, flex-basis */
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00578b;
    color: white;
    border: none;
    font-size: 15px;
    font-family: s;
    border-radius: 0px 30px 30px 0px ;
    background-color: ${({theme}) => theme.searchBox.button};
    color: ${({theme}) => theme.searchBox.buttonColor};


`


