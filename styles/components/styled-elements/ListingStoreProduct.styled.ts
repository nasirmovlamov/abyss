import styled from "styled-components";



export const StoreListingProductStyle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 14px 45px 21px  14px;
    box-sizing: border-box;
    border-radius: 10px;
    column-gap: 5px;
    row-gap: 15px;
    width: 100%;
    height: 182px;
    margin-bottom:20px ;
    background-color: ${({theme}) => theme.productPage.elementBackground};
    box-shadow: ${({theme}) => theme.productPage.boxShadow};

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
    flex:0 0 176px;
    @media only screen and (max-width:1375px){
        display: none;
    }
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
    row-gap: 3px;
    justify-content: space-between;
    align-items: flex-start;
    width: auto;

`
export const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3px;
    color:  ${({theme}) => theme.productPage.linesSideTextColor};
`

export const ProductTitle = styled.a`
    color:  ${({theme}) => theme.productPage.titleColor};
    cursor: pointer;
    text-transform: capitalize;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    text-decoration: none;
    font-size: 20px;
`


export const ProductDetailCont = styled.div`
    display: flex;
    column-gap: 35px;
    color: ${({theme}) => theme.productPage.sideTextColor};
`
export const ProductStarCont = styled.div`
    display: flex;
    column-gap: 5px;
    font-size: 12px;
    font-family:s;
    svg 
    {
        color: yellow;
    }
`
export const ProductSoldCont = styled.div`
    display: flex;
    column-gap: 5px;
    font-size: 12px;
    font-family:s;
`
export const ProductViewCont = styled.div`
    display: flex;
    column-gap: 5px;
    font-size: 12px;
`
export const ProductPriceCont = styled.div`
    display: flex;
    column-gap: 5px;
`

export const ProductTags = styled.div`
    display: flex;
    column-gap: 10px;
    margin-top: 6px;
`

export const ProductTag = styled.button`
    height: 22px;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    color:  ${({theme}) => theme.productPage.textColor};
    font-family: r;
    justify-content: center;
    /* border: 1px solid lightgray; */
    align-items: center;
    font-family: r;
    background:  ${({theme}) => theme.productPage.tagsBackground};
    cursor: pointer;
    font-size: 12px;
    text-align: center;
    transition: 0.2s;
    &:hover{
        box-shadow: ${({theme}) => theme.productPage.boxShadowForElement};

    }
`




export const ProductDescription = styled.div`
   display: flex;
   flex-direction: column;
`


export const ProductDescriptionTitle = styled.p`
    font-size: 18px;
    color:  ${({theme}) => theme.productPage.darkSideTextColor  };

`
export const ProductDescriptionContent = styled.p`
    font-size: 18px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;   
    text-overflow: ellipsis;
    color:  ${({theme}) => theme.productPage.textColor  };

`
export const ProductSideDetailsCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`


export const AddCave = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.productPage.button};
    color: ${({theme}) => theme.productPage.darkBlackColor};
    padding: 5px 10px;
    border: none;
    border-radius: 20px;
    font-family: s;
    cursor: pointer;    
    box-shadow: ${({theme}) => theme.productPage.boxShadowForElement};
    width: 83px;
    height: 22px;
`

export const AddCaveAndMentionsCont = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 22px;
`
export const MentionsCont = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4.5px;
`

export const MentionsCount = styled.p`
    color: ${({theme}) => theme.productPage.sideTextColor};
    text-align: center;
    font-size: 18px;
`

export const MentionsText = styled.p`
    color: ${({theme}) => theme.productPage.sideTextColor};
    text-align: center;
    font-size: 16px;
`


export const Iterations = styled.button`
    color: ${({theme}) => theme.productPage.titleColor};
    text-align: center;
    font-size: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`