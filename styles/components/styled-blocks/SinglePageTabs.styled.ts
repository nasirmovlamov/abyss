import styled from 'styled-components';
import { ThemeType } from '../../global/styled-utils/settings/Theme.style';



export const SingleTabsContainer  = styled.div<{isSearchBarVisible:string}>`
    /* height:103px; */
    display: flex;
    background-color: ${({theme}) => theme.colors.black_1};
    border-radius:10px;
    /* padding-left: 17px; */
    box-shadow: ${({theme}) => theme.boxshadows.boxshadow4};
    height: 54px;
    overflow: hidden;
    background-color: ${({theme}) => theme.backgrounds.background1};
    position: -webkit-sticky;
    position: sticky;
    top: ${({isSearchBarVisible}) => isSearchBarVisible === "visible" ? '-120px' : "74px"} ;
    z-index: 3;
    transition: 0.5s;
`



export const SingleTabText = styled.span`
    height: 100%;
    width: auto;
    font-weight:bold;
    padding: 3px 35px 0px 35px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    /* align-items: center; */
    transition:0.4s;
    font-size: 14px;    
    text-transform: uppercase;
    line-height: 18px;
    letter-spacing: 1.2px;

`
export const SingleLine = styled.div`
    width: 100%;
    opacity:0;
    height: 2px;
    background-color: ${({theme }) =>theme.backgrounds.background6 };
    transition: 0.2s;
    align-self: center;

`


export const SingleTabTagsCont = styled.div`
    display: flex;
    align-self: flex-end;
`

export const SingleTabTags = styled.button<{tagFocus:boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color:#8EA1A3;
    border: 1px solid transparent;
    border-radius: 20px;
    cursor: pointer;
    background-color: transparent;
    transition: 0.4s;
    border:1px solid ${({theme, tagFocus}) => tagFocus ? "white" : "transparent"};
`

export const SingleTabs = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    &:hover ${SingleLine}
    {
        transform: scale(0.8);
        background-color: ${({theme}) =>  theme.background_hover.hover2};
    }
    &:hover ${SingleTabText}
    {
        color: ${({theme}) =>  theme.background_hover.hover2};
    }
`

export const TabButtonSeperator_STY = styled.div`
    display: flex;
    width: 1px;
    height: 70%;
    background-color: #63696c;
`

export const SingleTabButton = styled.button<{tabActive:boolean}>`    
    display: flex;
    justify-content: space-between;
    border: none;
    font-size: 14px;
    line-height: 18px;
    font-family: s;
    background-color: transparent;
    cursor: pointer;
    font-weight: 600;
    align-items:center;
    flex-direction: column;
    padding:0px;
    height: 100%;
    box-sizing: border-box;
    
    &:focus {
        outline: none;
    }
    
    div 
    {
        opacity: ${(props:{tabActive:boolean}) => props.tabActive && '1'};
        width: ${(props:{tabActive:boolean}) => props.tabActive && '100% '};
        transform: scale(1);
    }
    span {
        color: ${({theme, tabActive}) => tabActive ?  theme.texts.text6 :  theme.texts.text7};
    }
    &:hover
    {   
       
        ${SingleTabText}
        {
            color: ${({theme}) => theme.text_hover.hover2};
            opacity: 1;
        }
        span{
            color: ${({theme}) => theme.text_hover.hover2};
        }
        div{
            opacity:1  !important;
            width: 100% !important;
            transform: scale(1) !important;
            color:${({theme}) => theme.background_hover.hover2};
            background-color: ${({theme}) => theme.background_hover.hover3} !important;
        }
    }
`