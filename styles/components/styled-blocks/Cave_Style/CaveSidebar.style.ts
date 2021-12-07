import styled from "styled-components";

export const CaveSidebar_Sty = styled.aside`
    display: flex;
    flex-direction: column;
    /* width: 100%; */
    width: 251px;
    color: white;
    position: fixed;
    top: 280px;
    background-color: ${({theme}) => theme.backgrounds.background1 };
    box-shadow: ${({theme}) => theme.boxshadows.boxshadow2 };
    padding-top: 15px;
    padding-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
`


export const CaveSide_section_Sty = styled.button<{selected:boolean}>`
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    background-color: ${({selected , theme}) => selected ? theme.backgrounds.background3 : "transparent" };
    border:1px solid none;
    padding-left: 32.6px;
    color: white;
    cursor: pointer;
    height: 41px;
    border-left: 2px solid ${({selected , theme}) => selected ? theme.sidecolors.sidecolor4 : "transparent" };
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-size: 18px;
    color: ${({theme , selected}) => selected ? theme.texts.text6 : theme.texts.text2 };
`
