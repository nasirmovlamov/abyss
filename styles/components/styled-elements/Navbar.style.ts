import styled from "styled-components";
import { useSelector } from "react-redux";
import { is_Logged } from "../../../app/containers/AppSlice";
import { ThemeType } from "../../global/styled-utils/styling-elements/Theme.style";

// color = (isLogged) ? "red" : "gray"


export const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left: 25px;
    padding-right: 20px;
    padding-top: 7px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({theme}) => theme.navbar.navBorder};
    background-color: ${({theme}) => theme.navbar.navBackground};
    margin: 0px;
    position: sticky;
    top:0px;
`



export const Light = styled.div`
    width:7px;
    height:7px;
    position:absolute;
    background-color:#FFFFFF;
    border-radius:50%;
    z-index:2;
    left:44.4px;
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
    left:40.4px;
    top:5.5px;
`
export const LightShadow2 = styled.div`
    /* width:25px;
    height:25px;
    position:absolute;
    background-color:#76888A;
    border-radius:50%;
    transition: 0.2s;
    stroke-width: 0;
    opacity: 0; */
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
        width: 120px;
        z-index: 1;
        height: 58px;
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
    margin-top: 27px;
    div 
    {
        opacity: ${(props:{focus:boolean}) => props.focus ? '1' : '0'};
        width: ${(props:{focus:boolean}) =>  props.focus ? '120px' : '0px'};
    }
    a {
        color: ${(props:{theme:ThemeType , focus:boolean}) =>  props.focus ? props.theme.navbar.navLinksHovered : props.theme.navbar.navLinks};
    }

    &:hover 
    {
        
        div 
        {
            opacity: 1 !important;
            width: 120px;
            transform: scale(1) !important;

        }
        a {
            color: ${({theme}) => theme.navbar.navLinksHovered};
        }
    }

`

export const LinksStyle = styled.ul`
    display:flex;
    justify-content:center;
    align-items:center;
    height:57px;    
    &:hover ${Line}
    {
        opacity: 0.2; 
        transform: scale(0.8);
        ${({theme}) => theme.navbar.navLinks}   
    }
    &::hover
    {
        a 
        {
            color:${({theme}) => theme.navbar.navLinks}   
        }
    }
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
    font-size: 18px;
    color: ${({theme}) => theme.navbar.navLinks};

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