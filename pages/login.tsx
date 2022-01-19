import React from 'react'
import * as LoginPage_STY from '../styles/components/styled-blocks/AuthStyle/Login.style'
import Image from 'next/image'

import mainLogo from '/public/main-logo-new.svg'
import githubLogo from '/public/githubLogo.png'
import googleLogo from '/public/googleLogo.png'
import mainLogoText from '/public/main-logo-side-text-new.svg'



interface Props {

}

const login = (props: Props) => {
    return (
        <LoginPage_STY.AuthPageContainer_STY>
            <LoginPage_STY.TopLogoContainer_STY>
                <Image width="49px" height="49px" src={mainLogo} alt={"Abyss logo"} />
                <Image width="99px" height='40px' src={mainLogoText} alt={"Abyss text"} />
            </LoginPage_STY.TopLogoContainer_STY>

            <LoginPage_STY.LoginContainer_STY>
                <div className="part1">
                    <div className="buttonCont">
                        <button className="githubButton">
                            <Image width="30px" height="30px" src={githubLogo} alt={"Abyss logo"} />
                            <span>Log in with Github</span>
                        </button>

                        <button className='gmailButton'>
                            <Image width="30px" height="30px" src={googleLogo} alt={"Abyss logo"} />
                            <span>Log in with Gmail</span>
                        </button>
                    </div>

                    <p className='agreeement'>By continuing, you agree to <br /> our <a href="#">User Agreement</a>, <a href="#">Privacy Policu</a> and <a href="#">CookiesPolicy</a> </p>
                </div>

                <div className="part2">
                    <p className='title'>Please Log in or <a href="#">Sign Up</a></p>

                    <form action="">
                        <div className="form-cont">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="" />
                            <p className='error'>error</p>
                        </div>

                        <div className="form-cont">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="" />
                            <p className='error'>error</p>
                        </div>

                        <div className="forgot-pass-cont">
                            <a href="">Forgot Password</a>
                        </div>

                        <button className="login-button">Log in</button>
                        <button className="signup-button">Sign Up</button>
                    </form>
                </div>
            </LoginPage_STY.LoginContainer_STY>


        </LoginPage_STY.AuthPageContainer_STY>
    )
}

export default login
