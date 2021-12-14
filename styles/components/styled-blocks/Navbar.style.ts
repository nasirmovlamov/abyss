import styled from "styled-components";
import { useSelector } from "react-redux";
import { ThemeType } from "../../global/styled-utils/settings/Theme.style";

// color = (isLogged) ? "red" : "gray"


export const Nav_STY = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left: 72px;
    @media only screen and (max-width: 1075px) {
        padding-left: 0px;
    }
    padding-right: 10px;
    padding-top: 7px;
    padding-bottom: 10px;
    /* border-bottom: 1px solid ${({theme}) => theme.sidecolors.sidecolor1}; */
    background-color: ${({theme}) => theme.backgrounds.background1};
    box-shadow: inset  0 -2px 2px -2px #949597, 0px 0px 6px 0px #000000;
    margin: 0px;
    position: sticky;
    top:0px;
    height: 60px;
    z-index: 999;
    width: 100%;
`


export const NavForShadow_STY = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color: ${({theme}) => theme.backgrounds.background1};
    box-shadow: ${({theme}) => theme.boxshadows.boxshadow9};
    position: fixed;
    top:0px;
    left:0px;
    height: 60px;
    z-index: 8;
    width: 100%;
`


export const Light_STY = styled.div`
    width:7px;
    height:7px;
    position:absolute;
    background-color:#FFFFFF;
    border-radius:50%;
    z-index:2;
    left:10.6px;
    top:13.5px;
    opacity: 0.1;
    transition: 0.2s;
    filter: blur(1px);
`


export const LightShadow_STY = styled.div`
    width:15px;
    height:15px;
    position:absolute;
    background-color:#FFFFFF;
    border-radius:50%;
    transition: 0.2s;
    stroke-width: 0;
    opacity: 0;
    z-index: 2;
    fill: #FFFFFF;stroke: #8c8c8c;stroke-width: 0;
    filter: blur(5px);
    left:10.4px;
    top:13.5px;
`
export const LightShadow2_STY = styled.div`
   
`
export const Logo_STY = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    column-gap: 13px;
    &:hover ${LightShadow_STY} {
        opacity: 0.38;
    }
    &:hover ${LightShadow2_STY} {
        opacity: 0.169;
    }
    &:hover ${Light_STY} {
        opacity: 1;
    }
    img 
    {
    margin-top: 6px;

        z-index: 1;
        
    }
`
export const LogoText_STY = styled.p`
    font-size: 45px;
    color: ${({theme}) => theme.texts.text1};
`

export const Line_STY =  styled.div`
    width: 10px;
    opacity: 0;
    height: 2px;
    border-radius: 100px;
    position:absolute;
    bottom: 0px;
    transition: 0.3s;
    background-color: ${({theme}) => theme.colors.gray_2};
`
export const LinkStyle_STY = styled.a`
    display:flex;
    justify-content:center;
    align-items:center;
    letter-spacing: 1px;
    font-weight: 600;
    cursor: pointer;
    color: ${({theme}) => theme.colors.gray_3};
    transition: 0.3s;
    /* margin-top: 5px; */
    font-family: s;
    font-size: 18px;
    line-height: 24px;
`



export const LiStyle_STY = styled.button<{focus:boolean}>`
    display:flex;
    justify-content:center;
    align-items:flex-start;
    background-color: transparent;
    height:100%;    
    padding-top: 22px;
    column-gap: 40px;
    font-size: 18px;
    width: 195px;
    letter-spacing: 1px;
    font-weight: 600;
    position: relative;
    div 
    {
        opacity: ${(props:{focus:boolean}) => props.focus ? '1' : '0'};
        width: ${(props:{focus:boolean}) =>  props.focus ? '120px' : '0px'};
    }
    a {
        font-family: s;
        color: ${({theme, focus}) =>  focus ? theme.colors.white_2 : theme.colors.gray_2};
    }

    &:hover 
    {
        cursor: pointer;
        div 
        {
            opacity: 1 !important;
            width: 120px;
            transform: scale(1) !important;
        }
        a {
            color: ${({theme}) => theme.text_hover.hover2} !important;
        }
    }

`

export const LinksStyle_STY = styled.ul`
    display:flex;
    /* justify-content:center; */
    justify-content: center;
    align-items:flex-end;
    height:60px;    
    /* width:680px; */
    /* width: 810px; */
    &:hover ${Line_STY}
    {
        opacity: 0.2; 
        transform: scale(0.8);
    }
    &:hover
    {
        a 
        {
            color:${({theme}) => theme.text_hover.hover3}   
        }
    }
    @media only screen and (max-width: 1236px) {
        display:none;
    }
`
export const LinksStyleCenterer_STY = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    top:0px;
    left:0px;
    position: absolute;
    padding-right:112px ;
`



export const ImageStyle1_STY = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    /* position: absolute; */
`
export const ImageStyle2_STY = styled.div`
    display:flex;
    /* justify-content:center; */
    /* align-items:center; */
    position: absolute;
    opacity: 0;
    transition: 0.15s;
    cursor: pointer;

`


export const PersonName_STY = styled.label`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right: 15px;
    color: ${({theme}) => theme.colors.gray_2};
    cursor: pointer;
    margin-top: 1px;
    &:hover {
        color: ${({theme}) => theme.colors.white_2};
    }
`
export const HeaderIcon_STY = styled.button`
    width: 46px;
    height: 46px;
    background-color: transparent;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    position: relative;
    &:nth-child(2) {
        svg {
            width: 28px;
        }
    }
    svg {
        width: 20px;
        height: auto;
        transition: 0.2s;
        fill: ${({theme}) => theme.colors.gray_3};
    }
    &:hover {
        background-color: ${({theme}) => theme.background_hover.hover1};
        
    }


    
`

export const NotifyNumber_STY = styled.div`
    display:flex;
    position: absolute;
    top: 7px;
    right: 7px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.orange_1};
    color: ${({theme}) => theme.texts.text5};
    font-size: 12px;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    z-index: 1;
    transition: 0.3s;
    &:hover {
        background-color: ${({theme}) => theme.background_hover.hover1};
    }
`


export const LoginButton_STY = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    border: none;
    background-color: transparent;
    width:auto;
    background-color: transparent;
    border-radius:10px;
    background-color:${({theme}) => theme.backgrounds.background6};
    padding:5px 10px;
    column-gap:5px;
    transition:0.5s;
    svg {
        transition:0.5s;

    }
    span{
    transition:0.5s;

    }
    &:hover {
        background-color: ${({theme}) => theme.background_hover.hover1};
        box-shadow:${({theme}) => theme.boxshadows.boxshadow1};
        svg {
            fill: ${({theme}) => theme.backgrounds.background6};
            transition:0.5s;
        }
        span {
            color:${({theme}) => theme.texts.text1};
            transition:0.5s;

        }
    }
`
export const RegisterButton_STY = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    border: none;
    background-color: transparent;
    border-radius:10px;
    padding:5px 10px;
    column-gap:5px;
    background-color:${({theme}) => theme.backgrounds.background6};
    transition:0.5s;
    width:100%;
    svg {
        width: 24px;
        fill: ${({theme}) => theme.backgrounds.background2};
        transition:0.5s;
    }
    span{
        transition:0.5s;
    }
    &:hover {
        background-color: ${({theme}) => theme.background_hover.hover1};
        box-shadow:${({theme}) => theme.boxshadows.boxshadow1};
        svg {
            fill: ${({theme}) => theme.backgrounds.background6};
            transition:0.5s;
        }
        span {
            color:${({theme}) => theme.texts.text1};
            transition:0.5s;
        }
    }
    
`
export const Enterance_STY = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    z-index: 2;
`
export const Logged_STY = styled.div`
    display:flex;
    /* justify-content:center; */
    align-items:center;
    position: relative;
    column-gap: 30px;
    &:hover ${ImageStyle2_STY} , &:hover ${PersonName_STY}
    {
        opacity: 1;
        /* color: ${({theme}) => theme.text_hover.hover2};    */
    }
`
export const Logout_STY = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    position: relative;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: 0.2s;
    font-size: 16px;
    color: white;

    &:hover 
    {
        color: ${({theme}) => theme.text_hover.hover2};
    }
    &:focus 
    {
        outline: none;
    }
`


export const Guest_STY = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    column-gap:15px;
`