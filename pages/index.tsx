import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import SearchBoxForHome from '../app/components/modules/SearchBoxHome';
import { changeModalAction } from '../app/store/slices/User.slice';
import * as Home_STY from '../app/styles/styled-components/base/pages/home.style';

interface Props {}

function Index({}: Props): ReactElement {
  const dispatch = useDispatch()

  return (
    <div className="container-fluid container-main">
      <div className="row justify-content-center">
        <Home_STY.Home_STYLE className="col-lg-8">
          <SearchBoxForHome />
          <img src="/img/home-about.png" alt="home" className="w-100" />
          <button
            onClick={() => dispatch(changeModalAction('register'))}
            className="registerButton animate hover-darken active-darken"
          >
            Sign Up
          </button>
        </Home_STY.Home_STYLE>
      </div>
    </div>
  )
}

export default Index
