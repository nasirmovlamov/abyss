import styled from 'styled-components';
import { ThemeType } from '../../global/styled-utils/styling-elements/Theme.style';



export const SingleTabsContainer  = styled.div`
    /* height:103px; */
    box-sizing: border-box;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap:10px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
    position: sticky;
    top: 60px;
    transition: 0.5s top;
    padding-bottom: 0px;
    z-index: 9;
    border-radius: 0px 0px 0px 0px;
    background-color: ${({theme }) =>theme.pageTabs.contBG };
    &:hover 
    {
    }
`



export const SingleTabText = styled.span`
    display: flex;
    padding: 12px 20px 0px 20px;
    transition: 0.2s;

`
export const SingleLine = styled.div`
    width: 100%;
    opacity:0;
    height: 2px;
    background-color: ${({theme }) =>theme.pageTabs.focusedColor };
    transition: 0.2s;
    align-self: center;

`


export const SingleTabTagsCont = styled.div`
    display: flex;
    align-self: flex-end;
`

export const SingleTabTags = styled.button`
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
    border:1px solid ${(props:{theme:ThemeType , tagFocus:boolean}) => props.tagFocus ? "white" : "transparent"};
`

export const SingleTabs = styled.div`
    display: flex;
    height: 40px;
    &:hover ${SingleLine}
    {
        transform: scale(0.8);
        background-color: ${({theme}) =>  theme.pageTabs.nonfocusedColor};
    }
    &:hover ${SingleTabText}
    {
        color: gray;
    }
`



export const SingleTabButton = styled.button<{tabActive:boolean}>`    
    display: flex;
    border: none;
    font-size: 18px;
    background-color: transparent;
    color: #8EA1A3;
    cursor: pointer;
    font-weight: 600;
    align-items:center;
    flex-direction: column;
    justify-content: space-between;
    padding:0px;
    box-sizing: border-box;
    text-decoration: none;
    div 
    {
        opacity: ${(props:{tabActive:boolean}) => props.tabActive && '1'};
        width: ${(props:{tabActive:boolean}) => props.tabActive && '100% '};
        transform: scale(1);
    }
    span {
        color: ${({theme, tabActive}) => tabActive ?  theme.pageTabs.focusedColor :  theme.pageTabs.nonfocusedColor};
    }
    &:hover
    {   
       
        ${SingleTabText}
        {
            color: ${({theme}) => theme.pageTabs.focusedColor};
            opacity: 1;
        }
        span{
            color: ${({theme}) => theme.pageTabs.focusedColor};
        }
        div{
            opacity:1  !important;
            width: 100% !important;
            transform: scale(1) !important;
            color:#63696c;
            background-color: ${({theme}) => theme.pageTabs.focusedColor} !important;
        }
    }
`