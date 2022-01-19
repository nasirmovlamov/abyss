import { CaveTabInterface } from '../../../../app/store/state-Interfaces/Cave_Interfaces/CaveTabs.interface'
import styled from 'styled-components'

export const Cave_Tabs_Sty = styled.div`
  /* display: flex; */
  background-color: ${({ theme }) => theme.colors.black_3};
  position: sticky;
  top: 60px;
  padding-top: 65.5px;
  width: 104%;
  margin-left: -2px;
  z-index: 7;
  .tabFilters {
    position: absolute;
    top: 83px;
    right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 15px;
    font-size: 20px;
    color: ${({ theme }) => theme.texts.text2};
    background-color: transparent;
    cursor: pointer;
  }
`
export const Cave_Tabs_Cont_Sty = styled.div`
  display: flex;
  background-color: transparent;
  z-index: 5;
  width: auto;
  /* overflow: hidden; */
  padding-right: 5px;
  position: relative;
  align-items: center;
`

export const CaveLeftCorner = styled.div<{ tab: CaveTabInterface }>`
  width: auto;
  height: 15px;
  position: absolute;
  left: 0px;
  bottom: -0.9px;
  margin-left: -10px;
  z-index: 2;
  opacity: ${({ tab }) => (tab.hovered ? 0 : tab.active ? 1 : 0)};
`

export const CaveRightCorner = styled.div<{ tab: CaveTabInterface }>`
  width: auto;
  position: absolute;
  right: 0px;
  bottom: -4px;
  margin-right: -10px;
  transform: rotateY(180deg);
  z-index: ${({ tab }) => (tab.active ? 3 : tab.active ? 1 : 0)};
  opacity: ${({ tab }) => (tab.hovered ? 0 : tab.active ? 1 : 0)};
`

export const CaveLeftCornerForHover = styled.div<{ tab: CaveTabInterface }>`
  width: auto;
  height: 15px;
  position: absolute;
  left: 0px;
  bottom: -0.9px;
  margin-left: -10px;
  z-index: 2;
  opacity: ${({ tab }) => (tab.active ? 0 : tab.hovered ? 1 : 0)};
`
export const CaveRightCornerForHover = styled.div<{ tab: CaveTabInterface }>`
  width: auto;
  position: absolute;
  right: 0px;
  bottom: -4px;
  margin-right: -10px;
  transform: rotateY(180deg);
  z-index: 2;
  opacity: ${({ tab }) => (tab.active ? 0 : tab.hovered ? 1 : 0)};
`

export const Cave_Tab_Sty = styled.button<{ active: boolean; order: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 53px;
  position: relative;
  height: 54px;
  box-sizing: border-box;
  padding: 22px 48px;
  font-size: 14px;
  text-transform: uppercase;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.black_1 : theme.colors.black_3};
  color: ${({ active, theme }) => (active ? theme.colors.white_1 : theme.colors.gray_2)};
  border: none;
  /* margin-bottom: ${({ active }) => (active ? '0px' : '-6px')}; */
  cursor: pointer;
  border-radius: ${({ active, order }) =>
    active ? '15px 15px 0px 0px !important' : order > 0 ? '0px 0px 15px 15px' : '0px 0px 15px 0px'};
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${({ theme, active }) =>
      active ? theme.colors.black_1 : theme.colors.black_2};
    border-radius: 15px 15px 0px 0px !important;
    ${CaveLeftCorner} , ${CaveRightCorner} {
      opacity: 1;
    }
  }
`

export const Cave_Tab_Seperator_Sty = styled.div<{
  tabs: CaveTabInterface[]
  tab: CaveTabInterface
}>`
  width: 1px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.gray_5};
  margin-left: -1px;
  z-index: 3;
  transition: 0.1s;
  opacity: ${({ tab, tabs }) =>
    tab.id === tabs.length - 1
      ? 0
      : tab.active
      ? 0
      : tabs[tab.id + 1].active
      ? 0
      : tab.hovered
      ? 0
      : tabs[tab.id + 1].hovered
      ? 0
      : 1};
`
