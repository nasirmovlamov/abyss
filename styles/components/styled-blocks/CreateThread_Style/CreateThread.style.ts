import styled from 'styled-components'

export const CreateThreadFORM_STY = styled.form`
  z-index: 2;
  display: flex;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.backgrounds.background1};
  box-shadow: ${({ theme }) => theme.boxshadows.boxshadow4};
  /* padding: 25px; */
  border-radius: 15px;
  flex-direction: column;
  position: relative;
  width: 900px;
  height: 657px;
  margin-top: calc(100vh / 2 - 317.5px);
  align-items: center;
  /* margin-top: 60px; */
  /* margin-bottom: 32px; */
`
