import styled from 'styled-components';

export const LinearProgress_STY = styled.div<{
  progress: 'loading' | 'loaded' | 'error'
  percentage: number
}>`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.backgrounds.background4};
  border-radius: 2px;
  position: fixed;
  top: 60px;
  z-index: 10;
  overflow: hidden;
  display: ${({ percentage }) => (percentage > 0 ? 'block' : 'none')};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 2px;
    width: ${({ percentage }) => percentage}%;
    background-color: ${({ theme }) => theme.backgrounds.background6};
    transform-origin: left;
  }
`
