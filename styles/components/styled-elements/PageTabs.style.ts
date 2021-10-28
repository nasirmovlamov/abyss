import styled from 'styled-components';
import { ThemeType } from '../../global/styled-utils/styling-elements/Theme.style';


export const TabsContainer  = styled.div`
    box-sizing: border-box;
    width:100%;
    display: flex;
    flex-direction: column;
    row-gap:14px;
    border-radius: 6px;
    margin-top: 0px;
`



export const TabText = styled.p`
    /* display: flex; */
    padding: 18px 17.5px 0px 17.5px;
    height: 50.08px;
    width: 121px;

    /* align-items: center; */
    color: #63696c;
    transition:0.4s;
    font-size: 14px;    
    text-transform: uppercase;
    line-height: 18px;
    &:nth-child(2)
    {
        width:77px;
    }
`



export const Line = styled.div`
    width: 0px;
    opacity:1;
    height: 2px;
    background-color: ${({theme }) =>theme.pageTabs.focusedColor };
    transition:0.4s;
`

export const TabTagsAndResults = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 1526px) {
        justify-content: flex-end;
    }

`

export const TabResults = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    color:${({theme }) =>theme.pageTabs.nonfocusedColor };
    font-size: 20px;
    margin-left:30px;
    font-family: r;
    @media only screen and (max-width: 1526px) {
        display: none;
    }
`


export const TabTagsCont = styled.div`
    display: flex;
    align-self: flex-end;
    border-radius: 10px;
    column-gap: 10px;
    padding: 3px;
    padding-left: 7px;
    height: 35px;
    box-shadow: ${({theme}) => theme.forumPage.boxShadow};
    background-color: ${({theme}) => theme.forumPage.elementBackground};
`

export const TabTags = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 11px;
    border: 1px solid transparent;
    border-radius: 10px;
    cursor: pointer;
    background-color: transparent;
    transition: 0.4s;
    font-size: 14px;
    font-family: r;
    background-color:${(props:{theme:ThemeType , tagFocus:boolean}) => props.tagFocus ? props.theme.forumPage.darkelementBacground : "transparent"};

    color:${({theme}) => theme.forumPage.sideTextColor};
    &:hover 
    {
        background-color: ${({theme}) => theme.forumPage.darkelementBacground};
    }
`

export const Tabs = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.pageTabs.contBG};
    border-radius:10px;
    padding-left: 17px;
    box-shadow: ${({theme}) => theme.forumPage.boxShadow};
    height: 54px;
    align-items: flex-end;
    overflow: hidden;
    background-color: ${({theme}) => theme.forumPage.elementBackground};
`

export const TabButtonsCont = styled.div`
    display: flex;
    /* padding-left: 10px; */
    height: 100%;
    align-items: flex-end;
    overflow: hidden;
    &:hover{
       
       ${Line}
       {
           transform: translateY(1.3px);
           width: 80%;
       }
       ${TabText}
       {
           color: ${({theme}) => theme.forumPage.tabsTitle};
       }
    }
`

export const TabButton = styled.button`
    display: flex;
    justify-content: space-between;
    border: none;
    font-size: 14px;
    line-height: 18px;
    font-family: s;
    background-color: transparent;
    color: #63696c;
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
        height: ${(props : {tabFocus:boolean}) => props.tabFocus ? "2px" : "0px"};
        width: ${(props:{tabFocus:boolean}) => props.tabFocus && '100%'};
    }
    p {
        color: ${({theme , tabFocus}) => tabFocus ? theme.pageTabs.focusedColor : theme.pageTabs.nonfocusedColor};
    }
    
    &:hover{
       
            ${Line}
            {
                transform: translateY(1.3px);
                width: 80%;
            }
            ${TabText}
            {
                color: ${({theme}) =>  theme.pageTabs.focusedColor };
            }
    }
    
    &:hover
    {
        &:hover ${Line}{
            opacity:1 ;
            width: 100% ;
            height: 2px ;
            transform:translateY(0px);
        }
        &:hover ${TabText}
        {
            color: ${({theme}) =>  theme.pageTabs.focusedColor };
        }
    }
`