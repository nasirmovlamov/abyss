import React, { ReactElement } from 'react'
import { GlobalStyle, Relativer, ThemeToggler, ToggleElement, TogglerButton } from '../styles/global/styled-utils/Global.style'

interface Props {
    theme: string,
    setTheme: (theme: string) => void
}

function ThemeSwitcher({ setTheme, theme }: Props): ReactElement {


    return (
        <ThemeToggler onClick={() => setTheme(theme)}>
            <Relativer>
                <TogglerButton  ></TogglerButton>
                <ToggleElement>🌜</ToggleElement>
                <ToggleElement>🌞 </ToggleElement>
            </Relativer>
        </ThemeToggler>
    )
}

export default ThemeSwitcher

