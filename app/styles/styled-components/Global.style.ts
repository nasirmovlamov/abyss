import styled, { createGlobalStyle } from 'styled-components';

import { ThemeType } from './abstracts/theme.style';

type Props = {
  theme: ThemeType
}

export const GlobalStyle = createGlobalStyle<Props>`
  body {
    background-color: ${({ theme }) => theme.body};
      
    &::-webkit-scrollbar {
      width: 10px;
      }

      /* Track  */
      &::-webkit-scrollbar-track {
          background: #0f1113;
          opacity: 0.4;
          border-radius: 5px;
      }

      /* Handle  */
      &::-webkit-scrollbar-thumb {
      background: #949597;
      border-radius: 5px;

      }

        /* Handle on hover  */
      &::-webkit-scrollbar-thumb:hover {
      background: #6c6d6f;
    }
  } 

  * {
      box-sizing: border-box;
      &::-webkit-scrollbar {
      width: 10px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
          background: #0f1113;
          border-radius: 5px;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
      background: #949597;
      border-radius: 5px;

      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
          background: #6c6d6f;
      }
  }
  
`

export const ThemeToggler = styled.button`
  position: fixed;
  width: 70px;
  height: 35px;
  border: 1px solid white;
  padding: 0px;
  margin: 0px;
  border-radius: 20px;
  background-color: black;
  background-color: ${({ theme }) => theme.themeTogglerCont};
  border: 1px solid ${({ theme }) => theme.themeTogglerContBorder};
  transition: 0.5s;
  right: 10px;
  top: 90px;
  cursor: pointer;
  z-index: 77;
`
export const Relativer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`
export const ToggleElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
`

export const TogglerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  margin-top: -1px;
  height: 33px;
  background-color: black;
  border: 1px solid gray;
  border-radius: 50%;
  position: absolute;
  transform: ${({ theme }) => `translateX(${theme.toggleTheme})`};
  background-color: ${({ theme }) => theme.toggleThemeColor};
  cursor: pointer;
  transition: 0.3s;
`

export const SkeletonBox = styled.div<{
  width: string
  height: string
  borderRadius: string
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => `${borderRadius}`};
`
