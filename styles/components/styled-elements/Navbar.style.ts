import styled from "styled-components";
import { useSelector } from "react-redux";
import { ThemeType } from "../../global/styled-utils/styling-elements/Theme.style";

// color = (isLogged) ? "red" : "gray"


export const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left: 72px;
    padding-right: 10px;
    padding-top: 7px;
    padding-bottom: 10px;
    /* border-bottom: 1px solid ${({theme}) => theme.navbar.navBorder}; */
    background-color: ${({theme}) => theme.navbar.background};
    box-shadow: inset  0 -2px 2px -2px #949597, 0px 0px 6px 0px #000000;
    margin: 0px;
    position: sticky;
    top:0px;
    height: 60px;
    z-index: 999;
    width: 100%;
`


export const NavForShadow = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color: ${({theme}) => theme.navbar.background};
    box-shadow: ${({theme}) => theme.navbar.boxShadow};
    position: fixed;
    top:0px;
    left:0px;
    height: 60px;
    z-index: 1;
    width: 100%;
`


export const Light = styled.div`
    width:7px;
    height:7px;
    position:absolute;
    background-color:#FFFFFF;
    border-radius:50%;
    z-index:2;
    left:24.4px;
    top:9.4px;
    opacity: 0.1;
    transition: 0.2s;
    filter: blur(1px);

`


export const LightShadow = styled.div`
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
    left:19.4px;
    top:5.5px;
`
export const LightShadow2 = styled.div`
   
`
export const Logo = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    
    &:hover ${LightShadow} {
        opacity: 0.38;

    }
    &:hover ${LightShadow2} {
        opacity: 0.169;
    }
    &:hover ${Light} {
        opacity: 1;
    }
    img 
    {
        width: 80px;
        z-index: 1;
        height: 48px;
    }
`
export const LogoText = styled.p`
    font-size: 45px;
    color: ${({theme}) => theme.navbar.navLogoText};
`

export const Line =  styled.div`
    width: 10px;
    opacity: 0;
    height: 2px;
    border-radius: 100px;
    position:absolute;
    bottom: 0px;
    transition: 0.3s;
    background-color: ${({theme}) => theme.navbar.navLinksHovered};
`
export const LinkStyle = styled.a`
    display:flex;
    justify-content:center;
    align-items:center;
    letter-spacing: 1px;
    font-weight: 600;
    cursor: pointer;
    color: ${({theme}) => theme.navbar.navLinks};
    transition: 0.3s;
    
`



export const LiStyle = styled.li`
    display:flex;
    justify-content:center;
    align-items:center;
    height:50px;    
    padding-bottom: 3px;
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
        color: ${(props:{theme:ThemeType , focus:boolean}) =>  props.focus ? props.theme.navbar.navLinksHovered : props.theme.navbar.navLinks};
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
            color: ${({theme}) => theme.navbar.navLinksHovered} !important;
        }
    }

`

export const LinksStyle = styled.ul`
    display:flex;
    /* justify-content:center; */
    justify-content: center;
    align-items:flex-end;
    height:60px;    
    margin-right: 7.2917%;
    /* width:680px; */
    width: 810px;
    &:hover ${Line}
    {
        opacity: 0.2; 
        transform: scale(0.8);
        ${({theme}) => theme.navbar.navLinks}   
    }
    &:hover
    {
        a 
        {
            color:${({theme}) => theme.navbar.navLinks}   
        }
    }
`
export const LinksStyleCenterer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    top:0px;
    left:0px;
    position: absolute;
`



export const ImageStyle1 = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    /* position: absolute; */
`
export const ImageStyle2 = styled.div`
    display:flex;
    /* justify-content:center; */
    /* align-items:center; */
    position: absolute;
    opacity: 0;
    transition: 0.15s;
    cursor: pointer;

`


export const PersonName = styled.label`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right: 15px;
    color: ${({theme}) => theme.navbar.navLinks};
    cursor: pointer;
    margin-top: 1px;
`


export const LoginButton = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    width: 100px;
    height: 60px;
    border: none;
    background-color: transparent;
    filter: ${({theme}) => `invert(${theme.navbar.navLogin})`};

    img 
    {
        width: 50px;
        height: 30px;
    }
    
`
export const RegisterButton = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    width: 100px;
    height: 60px;
    border: none;
    background-color: transparent;
    filter: ${({theme}) => `invert(${theme.navbar.navRegister})`};
    img 
    {
        width: 50px;
        height: 40px;
    }
    
`

export const Enterance = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
export const Logged = styled.div`
    display:flex;
    /* justify-content:center; */
    align-items:center;
    position: relative;
    &:hover ${ImageStyle2} , &:hover ${PersonName}
    {
        opacity: 1;
        color: ${({theme}) => theme.navbar.navLinksHovered};   
    }
`
export const Logout = styled.button`
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
        color: ${({theme}) => theme.navbar.navLinksHovered};
    }
    &:focus 
    {
        outline: none;
    }
`


export const Guest = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`