import styled from 'styled-components';

export const SideCont_STY = styled.div<{ top: number }>`
  width: 100%;
  height: 350px;
  overflow-y: auto;
  position: absolute;
  top: ${({ top }) => top + 'px'};
  /* background-color: ${({ theme }) => theme.backgrounds.background1}; */
  background: transparent;
  border-radius: 15px;
  row-gap: 10px;
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const SideProduct_STY = styled.div`
  width: 100%;
  overflow: hidden;
`
