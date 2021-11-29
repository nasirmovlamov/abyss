import React, { ReactElement, useEffect,  useState } from 'react'
import {Enterance, Guest, ImageStyle1, ImageStyle2,  Light, LightShadow, LightShadow2, Line,  LinksStyle, LinksStyleCenterer, LinkStyle, LiStyle, Logged, LoginButton, Logo, LogoText, Logout, Nav, NavForShadow, PersonName, RegisterButton} from '../styles/components/styled-elements/Navbar.style'
import Image from 'next/image'
import mainLogo from '/public/main-logo.svg'
import mainLogoText from '/public/abyss-logo-side-text.svg'
import RegisterModal from './Modals/RegisterModal'
import LoginModal from './Modals/LoginModal'
import Modals from './Modals/Modals'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { changeModalAction, is_loading, is_Logged,  user_data, user_modals } from '../app/feature/User.slice'
import { userCheck, userLogin, userLogout } from '../app/thunks/AuthThunk'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavLink from './NavLink'
import { forumWordRegex } from '../logic/regex/NavbarRegex'
interface Props {
}

function Header({}: Props): ReactElement {
    const router = useRouter()
    const {pathname} = router
    const dispatch = useAppDispatch();
    const userModals = useAppSelector(user_modals);
    const userData = useAppSelector(user_data);
    const isLogged = useAppSelector(is_Logged);
    const isLoading = useAppSelector(is_loading);
    const [navView, setnavView] = useState<JSX.Element>()
    
    useEffect(() => {
        loginChecker()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogged])
    

    const pathChecker = (path:string) => {
        if(pathname === "/forum")
        {
            return true
        }
        else if (pathname === "/store")
        {
            return true
        }
        else if(pathname === "/pedi")
        {
            return true 
        }
        else 
        {
            return false
        }
    }

    const exit = async () => {
        await dispatch(userLogout())
        // window.location.reload() 
    }

    const loginChecker = () => {
        if(!isLogged)
        {
            const view = 
            <Guest>  
                <LoginButton      onClick={() => dispatch(changeModalAction("login"))}>
                    <Image layout="fill" src={"/login.svg"} alt={"login"}/> 
                </LoginButton>
                <RegisterButton   onClick={() => dispatch(changeModalAction("register"))}>
                    <Image layout="fill" src={"/register-icon.svg"} alt={"register"}/> 
                </RegisterButton>
            </Guest>
            setnavView(view)
            return ""
        }
        else if(userData !== null)
        {
            const view = <>
                    <Logged> 
                        {/* <ImageStyle1>
                            <Image width="70px" height='40px' layout="fill" src={"/dark-person.png"} alt={"person icon"}/> 
                        </ImageStyle1> */}
                        {/* <ImageStyle2>
                            <Image width="70px" height='40px' src={darkPerson} /> 
                        </ImageStyle2> */}
                        <NavLink href="/cave">
                            <PersonName>
                                {userData.name}
                            </PersonName>
                        </NavLink>
                    </Logged>
                    
                    <Logout onClick={exit}>
                        exit 
                    </Logout>
                </>
            setnavView(view)
            return ""
        }
    }


    return (
        <>
        <Nav>
            <NavLink href={"/"} >
                <Logo> 
                    <Image width="48px" src={mainLogo} height="49px"  alt={"Abyss logo"}/>  
                    <Image width="99px" src={mainLogoText}  height='40px'  alt={"Abyss text"}/>  
                    <Light/>
                    <LightShadow/>
                    <LightShadow2/> 
                </Logo>
            </NavLink>
            
            <LinksStyleCenterer>
                <LinksStyle>
                    <NavLink href={"/store"}>
                        <LiStyle focus={pathname === "/store" ? true: false}>
                            <LinkStyle>Store</LinkStyle>
                            <Line />
                        </LiStyle>
                    </NavLink> 

                    <NavLink href={"/forum"}>
                        <LiStyle focus={forumWordRegex.test(pathname) ? true: false}>
                            <LinkStyle>Community</LinkStyle>
                            <Line/>
                        </LiStyle>
                    </NavLink>
                    
                    <NavLink href={"/pedi"}>
                        <LiStyle focus={pathname === "/pedi" ? true: false}>
                            <LinkStyle>Pedia</LinkStyle>
                            <Line/>
                        </LiStyle>
                    </NavLink> 
                </LinksStyle>
            </LinksStyleCenterer>
            <Enterance>
                {navView}
            </Enterance>
        </Nav>
        <NavForShadow>

        </NavForShadow>
        </>
    )
}

export default Header

