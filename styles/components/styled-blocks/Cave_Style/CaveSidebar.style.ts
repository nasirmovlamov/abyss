import styled from "styled-components";

export const CaveSidebar_Sty = styled.aside`
    display: flex;
    flex-direction: column;
    /* width: 100%; */
    width: 251px;
    color: white;
    position: fixed;
    top: 280px;
`


export const CaveSide_section_Sty = styled.button<{selected:boolean}>`
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    padding: 10px;
    background-color: ${({selected}) => selected ? "orange" : "black" };
    border:1px solid gray;
    color: white;
    cursor: pointer;
`
