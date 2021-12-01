import styled from "styled-components";

export const  ModalCont_STY  = styled.div`
    position: fixed;
    width:100vw; 
    height:100vh;  
    display: flex; 
    justifyContent: center;  
    position:fixed; 
    background-image: none;
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
    left:0;
    top:0; 
    zIndex:999;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    background-color: rgba(0,0,0,0.8);
` 


export const  ModalFORM_STY  = styled.form`
  z-index: 2;
  display: flex;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${({theme}) => theme.backgrounds.background1};
  box-shadow: ${({theme}) => theme.boxshadows.boxshadow4};
  padding: 25px;
  flex-direction: column;
` 


export const  ModalCont_BLUR_STY  = styled.div`
  width: 100%;
  height:100%;
  position: absolute;
  /* backdrop-filter: blur(2px); */
  z-index:1;
  pointer-events: none;
` 
