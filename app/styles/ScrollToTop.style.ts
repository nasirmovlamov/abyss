import styled from 'styled-components'

export const ScrollToTop_STY = styled.button<{ scrollY: number }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.backgrounds.background6};
  color: ${({ theme }) => theme.texts.text5};
  transition: 0.3s;
  opacity: ${({ scrollY }) => (scrollY > 0 ? 1 : 0)};
  &:focus {
    outline: none;
  }
`
