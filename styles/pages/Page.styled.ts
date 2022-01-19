import styled from 'styled-components';

export const MainPartOfPageStyle = styled.div<{ colorConvert: boolean }>`
  width: 810px;
  position: relative;
  /* padding-top: 74px;    */
  display: flex;
  background-color: ${({ colorConvert }) => (colorConvert ? 'transparent' : 'transparent')};
  flex-direction: column;
  /* z-index: 2; */
  @media only screen and (max-width: 1526px) {
    flex: 0 0 52.73%;
    padding-right: 0%;
  }
  @media only screen and (max-width: 1236px) {
    width: 100%;
    flex: 0 0 80%;
  }
`

export const SidePartOfPageStyle = styled.aside<{
  side: string
  colorConvert: boolean
}>`
  box-sizing: border-box;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  flex: 0 0 ${({ side }) => (side === 'left' ? '195px' : '307px')};
  height: 100%;
  /* overflow: hidden; */
  /* top:0px; */
  /* background-color: ${({ colorConvert }) => (colorConvert ? 'transparent' : '#000')}; */
  /* background-color: gray; */
  @media only screen and (max-width: 1236px) {
    display: none;
  }
`
export const CaveSidePartOfPage_Sty = styled.aside<{
  side: string
  colorConvert: boolean
}>`
  box-sizing: border-box;
  /* padding-top: 25px; */
  display: flex;
  /* padding-top: 115px; */
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: sticky;
  top: 0px;
  overflow: hidden;
  flex: 0 0 ${({ side }) => (side === 'left' ? '251px' : '307px')};
  margin-left: ${({ side }) => (side === 'left' ? '0px' : '56px')};
  background-color: ${({ colorConvert }) => (colorConvert ? 'transparent' : 'transparent')};
  /* border: 1px solid gray; */
  /* padding-top: 200px; */

  /* background-color: gray; */
  @media only screen and (max-width: 1236px) {
    display: none;
  }
`

export const PageDefaultStyle = styled.main`
  display: flex;
  justify-content: center;
  align-content: center;
  justify-content: center;
  column-gap: 56px;
  width: 100%;
  /* padding-right: 7.2917%; */
  box-sizing: border-box;
  /* background-color: lightgray; */
  /* margin: auto; */
  @media only screen and (max-width: 1236px) {
    padding-right: 0%;
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const CavePageDefaultStyle = styled.main`
  display: flex;
  justify-content: center;
  align-content: center;
  justify-content: center;
  column-gap: 0px;
  width: 100%;
  /* padding-right: 7.2917%; */
  box-sizing: border-box;
  /* background-color: lightgray; */
  /* margin: auto; */
  @media only screen and (max-width: 1236px) {
    padding-right: 0%;
    padding-left: 20px;
    padding-right: 20px;
  }
`
