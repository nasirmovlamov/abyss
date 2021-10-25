import styled from "styled-components";



export const StoreListingProductStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 14px 21px;
    box-sizing: border-box;
    border-radius: 10px;
    column-gap: 5px;
    row-gap: 15px;
    width: 100%;
    height: 182px;
    margin-bottom:20px ;
    background-color: ${({theme}) => theme.forumPage.elementBackground};
    box-shadow: ${({theme}) => theme.forumPage.boxShadow};

`   

export const ProductImageAndContent = styled.div`
    column-gap: 20px;
    display: flex;
`
export const ProductImageOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 30%, rgba(0,212,255,0) 100%);
    transform: rotate(180deg);
`

export const ProductLanguageAndImage = styled.div`
    background-color: #2ab280;
    border-radius: 17px 1px 1px 1px;
    position: relative;
    width: 176px;
    height: 154px;
`

export const ProductPerson = styled.img`
    border-radius: 50%;
    object-fit: cover;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 0px;
    top: 0px;
    margin: 10px;
`

export const LanguageInfo = styled.div`
    position: absolute;
    left: 0px;
    bottom: 0px;
    margin: 10px;
    display: flex;
    z-index: 3;
    width: 100%;
`

export const LanguageContForTextAndIcon = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    svg 
    {
        color: white;
    }
`

export const LanguageText = styled.p`
   margin: 0px;
   color: white;
   font-size: 13px;
`
export const LinesofCodeContForIconAndText = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    svg 
    {
        color: white;
    }
`
export const LinesofCodeText = styled.p`
    font-size: 13px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
`



export const ProductContentCont = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: space-between;
    align-items: flex-start;
`
export const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    color: white;
`

export const ProductTitle = styled.a`
    /* width: 200px; */
    margin-top: 10px;
    font-size: 20px;
    color: #032728;
    cursor: pointer;
`


export const ProductDetailCont = styled.div`
    display: flex;
    column-gap: 15px;
`
export const ProductStarCont = styled.div`
    display: flex;
    column-gap: 5px;
    font-size: 13px;
`
export const ProductSoldCont = styled.div`
    display: flex;
    column-gap: 5px;
    font-size: 13px;

`
export const ProductPriceCont = styled.div`
    display: flex;
    column-gap: 5px;
    font-size: 24px;
`
export const AddCave = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffd500;
    color: #032728;
    padding: 5px 10px;
    border: none;
    border-radius: 20px;
    cursor: pointer;    
`
export const ProductTags = styled.div`
    display: flex;
    column-gap: 10px;
    margin-bottom: 10px; 
`

export const ProductTag = styled.button`
    height: 22px;
    font-size: 12px;
    color: white;
    background-color:rgba(105, 174, 191, 0.32);
    border: none;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`