import styled from 'styled-components';

import { ThemeType } from '../../global/styled-utils/settings/Theme.style';

export const TabsContainer_STY = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  border-radius: 6px;
`

export const TabText_STY = styled.p`
  /* display: flex; */
  /* padding: 18px 17.5px 0px 17.5px; */
  height: 100%;
  width: auto;
  font-weight: bold;
  padding: 3px 35px 0px 35px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  /* align-items: center; */
  color: #63696c;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 18px;
  letter-spacing: 1.2px;
  /* &:nth-child(2)
    {
        width:77px;
    } */
`

export const Line_STY = styled.div`
  width: 0px;
  opacity: 1;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.white_1};
`

export const TabTagsAndResults_STY = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1526px) {
    justify-content: flex-end;
  }
`

export const TabResults_STY = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray_2};
  font-size: 20px;
  margin-left: 30px;
  font-family: r;
  @media only screen and (max-width: 1526px) {
    display: none;
  }
`

export const TabTagsCont_STY = styled.div`
  display: flex;
  align-self: flex-end;
  border-radius: 10px;
  column-gap: 10px;
  padding: 3px;
  padding-left: 7px;
  height: 35px;
  box-shadow: ${({ theme }) => theme.boxshadows.boxshadow4};
  background-color: ${({ theme }) => theme.backgrounds.background1};
`

export const TabTags_STY = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 11px;
  border: 1px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  background-color: transparent;
  font-size: 14px;
  font-family: r;
  background-color: ${(props: { theme: ThemeType; tagFocus: boolean }) =>
    props.tagFocus ? props.theme.backgrounds.background3 : 'transparent'};

  color: ${({ theme }) => theme.texts.text2};
  &:hover {
    background-color: ${({ theme }) => theme.background_hover.hover1};
  }
`

export const Tabs_STY = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.black_1};
  border-radius: 10px;
  /* padding-left: 17px; */
  box-shadow: ${({ theme }) => theme.boxshadows.boxshadow4};
  height: 54px;
  align-items: flex-end;
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgrounds.background1};
`

export const TabButtonsCont_STY = styled.div`
  display: flex;
  /* padding-left: 10px; */
  height: 100%;
  align-items: center;
  overflow: hidden;
  &:hover {
    ${Line_STY} {
      transform: translateY(1.3px);
      width: 80%;
    }
    /* ${TabText_STY}
       {
           color: ${({ theme }) => theme.title_hover.hover1};
       } */
  }
`

export const TabButtonSeperator_STY = styled.div`
  display: flex;
  width: 1px;
  height: 70%;
  background-color: #63696c;
`

export const TabButton_STY = styled.button<{ tabFocus: boolean }>`
  display: flex;
  justify-content: space-between;
  border: none;
  font-size: 14px;
  line-height: 18px;
  font-family: s;
  background-color: transparent;
  cursor: pointer;
  font-weight: 600;
  align-items: center;
  flex-direction: column;
  padding: 0px;
  height: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
  div {
    height: ${({ tabFocus }) => (tabFocus ? '2px' : '0px')};
    width: ${({ tabFocus }) => tabFocus && '100%'};
  }
  p {
    color: ${({ theme, tabFocus }) => (tabFocus ? theme.colors.orange_1 : theme.colors.gray_2)};
  }
  /* ${TabText_STY}
    {
        color: ${({ theme, tabFocus }) => (tabFocus ? theme.text_hover.hover1 : theme.texts.text2)};
    } */
  &:hover {
    /* ${Line_STY}
            {
                transform: translateY(1.3px);
                width: 80%;
            } */
    ${TabText_STY} {
      color: ${({ theme, tabFocus }) => (tabFocus ? theme.colors.orange_1 : theme.texts.text1)};
    }
  }

  &:hover {
    /* &:hover ${Line_STY}{
            opacity:1 ;
            width: 100% ;
            height: 2px ;
            transform:translateY(0px);
        } */
    /* &:hover ${TabText_STY}
        {
            color: ${({ theme }) => theme.text_hover.hover1};
        } */
  }
`
