import * as LoginPage_STY from 'app/styles/styled-components/base/modules/AuthStyle/Login.style';
import Image from 'next/image';
import React from 'react';

const Register = () => {
  return (
    <LoginPage_STY.AuthPageContainer_STY>
      <LoginPage_STY.TopLogoContainer_STY>
        <Image width="49px" height="49px" src="/icons/main-logo-new.svg" alt={'Abyss logo'} />
        <Image
          width="99px"
          height="40px"
          src="/icons/main-logo-side-text-new.svg"
          alt={'Abyss text'}
        />
      </LoginPage_STY.TopLogoContainer_STY>

      <LoginPage_STY.LoginContainer_STY>
        <div className="part1">
          <div className="buttonCont">
            <button className="githubButton">
              <Image width="30px" height="30px" src="/img/githubLogo.png" alt={'Abyss logo'} />
              <span>Log in with Github</span>
            </button>

            <button className="gmailButton">
              <Image width="30px" height="30px" src="/img/googleLogo.png" alt={'Abyss logo'} />
              <span>Log in with Gmail</span>
            </button>
          </div>

          <p className="agreeement">
            By continuing, you agree to <br /> our <a href="#">User Agreement</a>,{' '}
            <a href="#">Privacy Policu</a> and <a href="#">CookiesPolicy</a>{' '}
          </p>
        </div>

        <div className="part2">
          <p className="title">
            Please Log in or <a href="#">Sign Up</a>
          </p>

          <form action="">
            <div className="form-cont">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email" />
              <p className="error">error</p>
            </div>

            <div className="form-cont">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="password" />
              <p className="error">error</p>
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

export default Register
