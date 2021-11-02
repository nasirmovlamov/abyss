import styled from 'styled-components';


export const FilterContStyle  = styled.div`
    display: flex;
    flex-direction: column;
    width: 195px;
    height: auto;
    box-sizing: border-box;
    z-index: 2;
    height: 200px;
    /* box-shadow: 190px 190px 190px 190px red; */
    /* position: sticky; */
    /* top: 90px; */
`


export const FilterCont  = styled.div<{isFocused:boolean , stayInFocus:boolean}>`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 11px 16px;
    border-radius: 20px;
    box-shadow: 0px 1px 1px rgba(99,105,108,0.61), inset 0px 0px 0px rgba(99,105,108,0.61);
    width: 100%;
    /* height: 100%; */
    row-gap: 10px;
    transform: ${({stayInFocus}) => stayInFocus ? "translateX(0px) !important" : "translateX(200px)"};
    transform: ${({isFocused}) => isFocused ? "translateX(0px)" : "translateX(200px)"};
    transition: 0.5s;
`

export const PinButton  = styled.button<{isFocused:boolean , stayInFocus:boolean}>`
    position: absolute;
    top: 0px;
    right: 0px;
    margin-right: 10px;
    margin-top: 10px;
    color: ${({isFocused}) => isFocused ? "black" :"gray" };
    color: ${({stayInFocus}) => stayInFocus ? "black !important" :"gray" };
    padding: 3px ;
    background-color: transparent;
    border:1px solid gray;
    border-radius: 5px;
`

export const SubjectCont  = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 5px;
    display: flex;
    flex-direction: column;
`
export const SubjectTitle  = styled.h5`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 10px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    color: #474D51;

`
export const SubjectContent  = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #474D51;

`
export const Subjects  = styled.div`
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


export const FilterTagCont  = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 10px;
    display: flex;
    flex-direction: column;
`
export const FilterTagTitle  = styled.h5`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 10px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    color: #474D51;

`
export const FilterTagContent  = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    color: #474D51;
`
export const FilterTags  = styled.button`
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




export const FilterLanguageCont  = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 10px;
    display: flex;
    flex-direction: column;
`
export const FilterLanguageTitle  = styled.h5`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 10px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    color: #474D51;

`
export const FilterLanguageContent  = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    color: #474D51;
`
export const FilterLanguages  = styled.button`
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


export const FilterSearchCont  = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: none;
`

export const FilterSearchInCont  = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: none;
`

export const FilterSearchInput  = styled.input`
    width: 100%;
   box-sizing: border-box;
   padding: 5px;
   height: 20px;
`


export const FilterSearchDropdown  = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* height: 200px; */
    border: 1px solid #E6E6E6;
    row-gap: 5px;
`

export const FilterSearchDropdownElement  = styled.p`
    width: 100%;
    height: 20px;
    color: gray;
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`