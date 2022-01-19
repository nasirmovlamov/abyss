import styled from 'styled-components'

export const FilterContStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 195px;
  height: auto;
  box-sizing: border-box;
  z-index: 2;
  height: auto;
  overflow: hidden;
  height: 500px;
  /* box-shadow: 190px 190px 190px 190px red; */
  /* position: sticky; */
  /* top: 90px; */
  position: sticky;
  top: 286px;
`

export const FilterCont = styled.div<{
  isFocused: boolean
  stayInFocus: boolean
}>`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 11px 16px;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxshadows.boxshadow1};
  background-color: ${({ theme }) => theme.backgrounds.background1};

  width: 100%;
  /* height: 100%; */
  row-gap: 10px;
  transform: ${({ stayInFocus }) =>
    stayInFocus ? 'translateX(0px) !important' : 'translateX(200px)'};
  transform: ${({ isFocused }) => (isFocused ? 'translateX(0px)' : 'translateX(200px)')};
  transition: 0.5s;
`

export const PinButton = styled.button<{
  isFocused: boolean
  stayInFocus: boolean
}>`
  position: absolute;
  top: 0px;
  right: 0px;
  margin-right: 10px;
  margin-top: 10px;
  /* color: ${({ isFocused, theme }) => (isFocused ? theme.backgrounds.background1 : 'gray')}; */
  color: ${({ stayInFocus, theme }) =>
    stayInFocus ? theme.backgrounds.background2 : theme.backgrounds.background4};
  padding: 3px;
  background-color: ${({ theme }) => theme.backgrounds.background7};
  border: 1px solid gray;
  border-radius: 5px;
`

export const SubjectCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 5px;
  display: flex;
  flex-direction: column;
`
export const SubjectTitle = styled.h5`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 10px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  color: #474d51;
`
export const SubjectContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #474d51;
`
export const Subjects = styled.div`
  display: flex;
  height: 21px;
  border: none;
  background-color: transparent;
  /* flex-direction: column; */
  width: 100%;
  row-gap: 5px;
  font-size: 15px;
  column-gap: 10px;
`

export const FilterTagCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 10px;
  display: flex;
  flex-direction: column;
`

export const FilterTagTitle = styled.h5`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 10px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  color: #474d51;
`
export const FilterTagContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  color: #474d51;
`
export const FilterTags = styled.button`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 5px;
  font-size: 15px;
  display: flex;
  height: 22px;
  border: none;
  background-color: transparent;
  flex-direction: column;
`

export const FilterLanguageCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 10px;
  display: flex;
  flex-direction: column;
  height: 250px;
  overflow-y: auto;
`
export const FilterLanguageTitle = styled.h5`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 10px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.texts.text2};
`
export const FilterLanguageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  color: #474d51;
  .title {
    color: ${({ theme }) => theme.texts.text2};
    margin: 5px 0px;
  }
`
export const FilterLanguages = styled.button`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 22px;
  border: none;
  background-color: transparent;
  font-size: 15px;
  display: flex;
  flex-direction: column;
`

export const FilterSearchCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: none;
`

export const FilterSearchInCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: none;
`

export const FilterSearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  height: 25px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.backgrounds.background1};
  box-shadow: ${({ theme }) => theme.boxshadows.boxshadow1};
`

export const FilterSearchDropdown = styled.div<{ filtersLength: number }>`
  display: flex;
  flex-direction: column;
  width: 150px;
  max-height: 100px;
  margin-left: 7px;
  /* height: 200px; */
  position: absolute;
  row-gap: 5px;
  margin-top: 25px;
  overflow-y: auto;
  border-radius: 0px 0px 10px 10px;
  background-color: ${({ theme }) => theme.backgrounds.background1};
  padding-bottom: 10px;
  padding-top: 5px;
  display: ${({ filtersLength }) => (filtersLength > 0 ? 'flex' : 'none')};
  ::-webkit-scrollbar {
    width: 4px;
  }
`

export const FilterSearchDropdownElement = styled.p`
  width: 100%;
  height: 20px;
  color: gray;
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FilterSearchAddElement = styled.button`
  height: 100%;
  width: 30px;
  background-color: transparent;
  color: ${({ theme }) => theme.texts.text2};
`

export const FilterTagsCont = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
  padding: 2px;
`

export const FilterTag = styled.button<{
  selected: any
  tagType: 'exclude' | 'include'
}>`
  height: 100%;
  background-color: transparent;
  color: ${({ theme, tagType }) =>
    tagType === 'include' ? theme.texts.text6 : theme.texts.text10};
  padding-left: 10px;
`

export const FilterTagElementCont = styled.div<{
  selected: any
  tagType: 'exclude' | 'include'
}>`
  height: 22px;
  color: white;
  border: none;
  border-radius: 5px;
  display: flex;
  font-family: r;
  align-items: center;
  background-color: #e5f0f4;
  font-family: r;
  cursor: pointer;
  font-size: 12px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.boxshadows.boxshadow6};
  &:hover {
    box-shadow: ${({ theme }) => theme.boxshadow_hover.hover1};
  }
  position: relative;
  /* padding-left: 10px; */
  column-gap: 10px;
  background: ${({ theme, selected, tagType }) =>
    selected
      ? theme.backgrounds.background1
      : tagType === 'include'
      ? theme.backgrounds.background4
      : theme.backgrounds.background3};
`

export const FilterDel = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.texts.text2};
  width: 20px;
  height: 100%;
  font-size: 7px;
  padding-bottom: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  right: 0px;
  border-radius: 0px 5px 5px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.backgrounds.background10};
  }
`
