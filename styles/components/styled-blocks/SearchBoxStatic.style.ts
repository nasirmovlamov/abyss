import styled from "styled-components";



export const SearchBoxThunkAndCont_STY = styled.div<{scrollFromTop:number , boxFocused:boolean , thunkHovered:boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 810px;
    z-index: 8;
    height:75px;
    position:sticky;
    top: ${({theme  , scrollFromTop , boxFocused , thunkHovered}) => scrollFromTop > 0 ? (boxFocused ? '60px' : (thunkHovered ? '60px' : '0px')): '0px'};
    transition:${({theme  , scrollFromTop , boxFocused}) => boxFocused ? '0' : '0.2s'};
    /* background-color: ${({theme}) => theme.backgrounds.background3}; */
`

export const SearchBoxThunk_STY = styled.button<{isBackVisible:boolean, scrollFromTop:number , thunkHovered:boolean , boxFocused:boolean}>`
    width: 840px;
    display: flex;
    flex-direction: column;
    color: black;
    pointer-events: all;
    border: none;
    color: gray;
    text-align: center;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    opacity:${({scrollFromTop , thunkHovered , boxFocused}) => boxFocused ? '0': (scrollFromTop > 150 ? (thunkHovered ? '0' : '1') : "0")};
    background-color: ${({theme , isBackVisible}) => "transparent"};
    transition:${({theme , thunkHovered}) => thunkHovered ? "0" : ' 0' };
    transition-delay: ${({theme , thunkHovered}) => thunkHovered ? "0" : '0.1s' } ;
    display:${({scrollFromTop , thunkHovered , boxFocused}) => scrollFromTop > 200 ? "flex" : "none"};
    div {
        width: 88px;
        background-color: ${({theme}) => theme.backgrounds.background9};
        height: 1   0px;
        display: flex;
        height: 14px;
        align-items: center;
        justify-content: center;
        border-radius: 0px 0px 10px 10px;
        box-shadow:${({theme}) => theme.boxshadows.boxshadow10} ;
        color:black;
    }
`


export const SearchBox_STY = styled.div`
    display: flex;
    pointer-events: all;
    background-color: black;
    width: 100%;
    /* top: translateX(0px); */
    height: 60px;
    color: white;
    border-radius: 30px;
    transition: 0.5s;
    border: none;
    background-color: white;
    align-items: flex-start;
    justify-content: space-between;
    box-sizing: border-box;
    z-index: 9999;
    transform-origin: top;
    background-color: ${({theme}) => theme.backgrounds.background1};
    box-shadow: ${({theme}) => theme.boxshadows.boxshadow1};
    &:hover {
        box-shadow: ${({theme}) => theme.boxshadows.boxshadow8};
    }

`


export const SearchBoxPage_STY = styled.div`
    width:112px;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    background-color: white;
    color:${({theme}) => theme.colors.gray_1} ;
    font-family: r;
    border-radius: 30px 0px 0px 30px ;
    background-color: ${({theme}) => theme.backgrounds.background1};
    flex: 0 0 112px; /* flex-grow, flex-shrink, flex-basis */
`


export const SearchButtonLupa_STY = styled.button`
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
        color: ${({theme}) => theme.colors.gray_4};
        font-size: 16px;
    }
`

export const SearchInput_STY = styled.input<{path:string}>`
    border-radius: ${(props) => props.path === "/" ? "10px" : "inherit"}  ;
    height: 100%;
    padding-left: 40px;
    border: none;
    color:black;
    width: 100%;
    z-index: 3;
    background-color: ${({theme}) => theme.backgrounds.background1};
    color: ${({theme}) => theme.colors.white_1};
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: ${({theme}) => theme.colors.gray_4};
    }
`

export const SearchCont_STY = styled.div<{path:string}>`
    width:100%;
    justify-self: stretch;
    height: 100%;
    display:flex;
    align-items: center;
    border-left: 1px solid red;
    border-width: ${({theme , path}) => path =='/' ? ' 0px' : '1px'} ;
    border-color:  ${({theme}) => theme.colors.gray_4} !important;
    position: relative;
    border-radius: ${({theme , path}) => path =='/' ? '10px' : '0px'} !important ;
    padding: ${({theme , path}) => path =='/' ? ' 2px' : '0px'} !important;
    input 
    {
        
    }
`
export const SearchNav_STY = styled.div<{path:string}>`
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
export const SearchNavQuery_STY = styled.button`
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

export const AddQuesitionCont_STY = styled.button`
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
    background-color: ${({theme}) => theme.colors.orange_1};
    color: ${({theme}) => theme.colors.black_3};


`


