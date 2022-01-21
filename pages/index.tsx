import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SearchBoxForHome from '../app/components/modules/SearchBoxForHome';
import { changeModalAction } from '../app/store/slices/User.slice';
import * as Home_STY from '../app/styles/styled-components/ui/modules/Index_STYLE/Home.style';

interface Props { }

function Index({ }: Props): ReactElement {
  const dispatch = useDispatch()

  return (
    <Home_STY.Home_STYLE>
      <SearchBoxForHome />
      <p className="title">Discover limitless posibilities</p>
      <p className="subTitle">Enter the Abyss</p>
      <button onClick={() => dispatch(changeModalAction('register'))} className="registerButton">
        Sign Up
      </button>
    </Home_STY.Home_STYLE>
  )
}

export default Index
