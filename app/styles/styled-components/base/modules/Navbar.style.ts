import styled from 'styled-components';

export const Nav_STY = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  height: 64px;
  z-index: 10;
  width: 100%;
  background-color: ${({ theme }) => theme.backgrounds.background1};
  box-shadow: inset 0 -2px 2px -2px #949597, 0px 0px 6px 0px #000000;
`

export const Light_STY = styled.div`
  width: 12px;
  height: 12px;
  position: absolute;
  background-color: #ffffff;
  border-radius: 50%;
  z-index: 2;
  left: 9px;
  top: 20px;
  opacity: 0.1;
  transition: 0.2s;
  filter: blur(1px);
`

export const LightShadow_STY = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  background-color: #ffffff;
  border-radius: 50%;
  transition: 0.2s;
  stroke-width: 0;
  opacity: 0;
  z-index: 2;
  fill: #ffffff;
  stroke: #8c8c8c;
  stroke-width: 0;
  filter: blur(5px);
  left: 10.4px;
  top: 13.5px;
`
export const Logo_STY = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  &:hover ${LightShadow_STY} {
    opacity: 0.38;
  }
  &:hover ${Light_STY} {
    opacity: 1;
  }
  img {
    margin-top: 6px;

    z-index: 1;
  }
`
export const LogoText_STY = styled.p`
  font-size: 45px;
  color: ${({ theme }) => theme.texts.text1};
`

export const Line_STY = styled.div`
  width: 10px;
  opacity: 0;
  height: 2px;
  border-radius: 100px;
  position: absolute;
  bottom: 0px;
  transition: 0.3s;
  background-color: ${({ theme }) => theme.colors.gray_2};
`
export const LinkStyle_STY = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  /* font-weight: 600; */
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray_3};
  transition: 0.3s;
  font-size: 18px;
  line-height: 24px;
`

export const LiStyle_STY = styled.button<{ focus: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  height: 100%;
  column-gap: 40px;
  font-size: 18px;
  width: 195px;
  letter-spacing: 1px;
  font-weight: 600;
  position: relative;
  div {
    opacity: ${(props: { focus: boolean }) => (props.focus ? '1' : '0')};
    width: ${(props: { focus: boolean }) => (props.focus ? '120px' : '0px')};
  }
  a {
    color: ${({ theme, focus }) => (focus ? theme.colors.white_2 : theme.colors.gray_2)};
  }

  &:hover {
    cursor: pointer;
    div {
      opacity: 1 !important;
      width: 120px;
      transform: scale(1) !important;
    }
    a {
      color: ${({ theme }) => theme.text_hover.hover2} !important;
    }
  }
`

export const LinksStyle_STY = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  margin: 0;
  padding: 0;

  &:hover ${Line_STY} {
    opacity: 0.2;
    transform: scale(0.8);
  }
  &:hover {
    a {
      color: ${({ theme }) => theme.text_hover.hover3};
    }
  }
  @media only screen and (max-width: 1236px) {
    display: none;
  }
`
export const LinksStyleCenterer_STY = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const ImageStyle1_STY = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
`
export const ImageStyle2_STY = styled.div`
  display: flex;
  /* justify-content:center; */
  /* align-items:center; */
  position: absolute;
  opacity: 0;
  transition: 0.15s;
  cursor: pointer;
`

export const PersonName_STY = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  color: ${({ theme }) => theme.colors.gray_2};
  cursor: pointer;
  margin-top: 1px;
  &:hover {
    color: ${({ theme }) => theme.colors.white_2};
  }
`

export const HeaderIconHOVER_BLOCK_MSG_STY = styled.button`
  position: absolute;
  bottom: -30px;
  color: black;
  background: gray;
  padding: 5px;
  border-radius: 5px;
  display: none;
`

export const HeaderIconHOVER_BLOCK_NTF_STY = styled.button`
  position: absolute;
  bottom: -30px;
  color: black;
  background: gray;
  padding: 5px;
  border-radius: 5px;
  display: none;
`

export const HeaderIconHOVER_BLOCK_MENU_STY = styled.button`
  position: absolute;
  bottom: -30px;
  color: black;
  background: gray;
  padding: 5px;
  border-radius: 5px;
  display: none;
`

export const HeaderIcon_STY = styled.button`
  width: 46px;
  height: 46px;
  background-color: transparent;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  &:nth-child(2) {
    svg {
      width: 28px;
    }
  }
  &:nth-child(1) {
    &:hover {
      ${HeaderIconHOVER_BLOCK_MSG_STY} {
        display: flex;
      }
    }
  }
  &:nth-child(2) {
    &:hover {
      ${HeaderIconHOVER_BLOCK_NTF_STY} {
        display: flex;
      }
    }
  }
  &:nth-child(3) {
    &:hover {
      ${HeaderIconHOVER_BLOCK_MENU_STY} {
        display: flex;
      }
    }
  }
  svg {
    width: 20px;
    height: auto;
    transition: 0.2s;
    fill: ${({ theme }) => theme.colors.gray_3};
  }
  &:hover {
    background-color: ${({ theme }) => theme.background_hover.hover1};
  }
`

export const NotifyNumber_STY = styled.div`
  display: flex;
  position: absolute;
  top: 7px;
  right: 7px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.orange_1};
  color: ${({ theme }) => theme.texts.text5};
  font-size: 12px;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  z-index: 1;
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.background_hover.hover1};
  }
`

export const LoginButton_STY = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: auto;
  background-color: transparent;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.gray_2};
  padding: 5px 10px;
  transition: 0.5s;
  white-space: nowrap;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    color: ${({ theme }) => theme.colors.white_2};
  }
`
export const RegisterButton_STY = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  border-radius: 10px;
  padding: 5px 10px;
  column-gap: 5px;
  background-color: ${({ theme }) => theme.backgrounds.background6};
  transition: 0.5s;
  width: 100%;
  svg {
    width: 24px;
    fill: ${({ theme }) => theme.backgrounds.background2};
    transition: 0.5s;
  }
  span {
    transition: 0.5s;
  }
  &:hover {
    background-color: ${({ theme }) => theme.background_hover.hover1};
    box-shadow: ${({ theme }) => theme.boxshadows.boxshadow1};
    svg {
      fill: ${({ theme }) => theme.backgrounds.background6};
      transition: 0.5s;
    }
    span {
      color: ${({ theme }) => theme.texts.text1};
      transition: 0.5s;
    }
  }
`
export const Enterance_STY = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const Logged_STY = styled.div`
  display: flex;
  /* justify-content:center; */
  align-items: center;
  position: relative;
  column-gap: 30px;
  &:hover ${ImageStyle2_STY}, &:hover ${PersonName_STY} {
    opacity: 1;
    /* color: ${({ theme }) => theme.text_hover.hover2};    */
  }
`
export const Logout_STY = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.2s;
  font-size: 16px;
  color: white;

  &:hover {
    color: ${({ theme }) => theme.text_hover.hover2};
  }
  &:focus {
    outline: none;
  }
`

export const Guest_STY = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 15px;
`
