import React, { ReactElement, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeModalAction } from '../app/feature/User.slice'
import SearchBoxForHome from '../components/SearchBoxForHome'
import { accessToken } from '../helpers/token/TokenHandle'
import { getCookie } from '../logic/CookieFunctions'
import * as Home_STY from '../styles/components/styled-blocks/Index_STYLE/Home.style'
interface Props {

}

function Index({ }: Props): ReactElement {

    const dispatch = useDispatch()

    return (
        <Home_STY.Home_STYLE>
            <SearchBoxForHome />
            <p className="title">Discover limitless posibilities</p>
            <p className="subTitle">Enter the Abyss</p>
            <button onClick={() => dispatch(changeModalAction('register'))} className='registerButton'>Sign Up</button>
        </Home_STY.Home_STYLE>
    )
}

export default Index
