import React, { ReactElement } from 'react';

import { Relativer, ThemeToggler, ToggleElement, TogglerButton } from '../../../styles/styled-components/global.style';

interface Props {
  theme: string
  setTheme: (theme: string) => void
}

function ThemeSwitcher({ setTheme, theme }: Props): ReactElement {
  return (
    <ThemeToggler onClick={() => setTheme(theme)}>
      <Relativer>
        <TogglerButton></TogglerButton>
        <ToggleElement>🌜</ToggleElement>
        <ToggleElement>🌞 </ToggleElement>
      </Relativer>
    </ThemeToggler>
  )
}

export default ThemeSwitcher
