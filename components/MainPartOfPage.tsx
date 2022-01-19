import React, { ReactElement } from 'react'
import { color_convert } from '../app/feature/User.slice'
import { useAppSelector } from '../app/store/hooks'
import { MainPartOfPageStyle } from '../styles/pages/Page.styled'

interface Props {
    children: any
}

function MainPartOfPage({ children }: Props): ReactElement {
    const colorConvert = useAppSelector(color_convert)
    return (
        <MainPartOfPageStyle colorConvert={colorConvert}>
            {children}
        </MainPartOfPageStyle>
    )
}

export default MainPartOfPage
