import MainLayout from 'app/components/layouts/Main.layout';
import React from 'react';
import { useDispatch } from 'react-redux';

import SearchBoxForHome from '../app/components/modules/SearchBoxHome';
import { changeModalAction } from '../app/store/slices/User.slice';
import * as Home_STY from '../app/styles/styled-components/base/pages/home.style';

const Index = () => {
  const dispatch = useDispatch()

  return (
    <MainLayout>
      <Home_STY.Home_STYLE>
        <SearchBoxForHome />
        <img src="/img/home-about.png" alt="home" className="w-100" />
        <button
          onClick={() => dispatch(changeModalAction('register'))}
          className="registerButton animate hover-darken active-darken"
        >
          Sign Up
        </button>
      </Home_STY.Home_STYLE>
    </MainLayout>
  )
}

export default Index
