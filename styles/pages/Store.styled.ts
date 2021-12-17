import styled from 'styled-components';


export const StorePage = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    row-gap: 20px;
    padding-bottom: 50px;
    padding-top: 50px;
    box-sizing: border-box;
    
`

export const StoreStatistics_STY = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    .element {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 15px;
        /* width: 100px; */
        /* height: 100px; */
        .element-title{
            font-size: 15px;
            color:${({theme}) => theme.texts.text2};
        }
        .element-value{
            font-size: 35px;
            color:${({theme}) => theme.texts.text3};
        }
        .element-subtitle{
            font-size: 15px;
            color:${({theme}) => theme.texts.text2};
            svg {
                color: ${({theme}) => theme.texts.text3};
            }
        }
    }
`

export const StoreTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    row-gap: 11px;
    background-color: ${({theme}) => theme.backgrounds.background1};
    box-shadow: ${({theme}) => theme.boxshadows.boxshadow4};
    border-radius: 10px;
    padding: 20px;
    .add-cave-cont
    {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
    }
    .add-cave-btn
    {
        width: 90px;
        padding: 2px 15px;
        background-color: ${({ theme }) => theme.backgrounds.background8};
        box-shadow: ${({ theme }) => theme.boxshadows.boxshadow2};
        position: relative; 
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-radius: 20px;
        font-size: 18px;
    }
`

export const StoreTopImgCont = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
    padding: 3px;
    width: 238px;
    height: 137px;
    border-radius: 15px;
    overflow: hidden;
    background-color: ${({theme}) => theme.backgrounds.background3};
    background-repeat: no-repeat;
    background-size: cover;
`


export const StoreTopImg = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0px;
    left: 0px;
`
export const StoreTopAvatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    top:0px;
    left: 0px;
    margin: 10px;
    background-color: ${({theme}) => theme.backgrounds.background1};
`
export const StoreTopCodeLines = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    padding: 5px;
    p
    {
        color: white;
        font-size: 12px;
        font-family: s;
    }
`

export const StoreTopContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    row-gap: 10px;
`
export const StoreTopTitle = styled.h2`
    color: ${({theme}) => theme.texts.text4};
    font-size: 20px;
`
export const Flexer = styled.div`
    display: flex;
    column-gap: 18px;
`
export const StoreTopRatingCont = styled.div`
    display: flex;
    column-gap: 20px;
    svg{
        color: ${({theme}) => theme.colors.orange_2};
    }
    a {
        color: ${({theme}) => theme.texts.text9};
        text-decoration: none;
    }
`
export const StoreTopRatingStars = styled.div`
    display: flex;
    column-gap: 7px;
    color: ${({theme}) => theme.texts.text2};
`
export const StoreTopRatingBought = styled.div`
    display: flex;
`
export const StoreTopPrice = styled.div`
    display: flex;
    font-size: 25px;
`

export const StoreTopTags = styled.div`
    display: flex;
    column-gap: 9px;
`

export const ProductTag = styled.div`
    height: 22px;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    color: #00578b;
    font-family: r;
    justify-content: center;
    border: 1px solid lightgray;
    align-items: center;
    box-shadow: 0px 0px 0px 0.5px rgba(158,161,163,0.38), inset 0px 0px 1px rgba(158,161,163,1);
    background-color: #e5f0f4;
    font-family: r;
    font-size: 12px;
    text-decoration: none solid rgb(0, 87, 139);
    text-align: center;
    
`






export const LabelCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    margin-top: 10px;
`

export const LabelKey = styled.h3`
    font-size: 25px;
    color: ${({theme}) => theme.texts.text3};
`

export const LabelContent = styled.p`
    text-align: justify;
    font-size: 14px;
    line-height: 26px;
    color: ${({theme}) => theme.texts.text1};
    text-ident:12px;
`

export const ClipsCont = styled.p`
    display:flex;
    width: 100%;
    flex-direction: column;
    row-gap: 10px;
`
export const ClipTitle = styled.h3`
    font-size: 25px;
    color: ${({theme}) => theme.texts.text3};
`
export const ClipBody = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
    height: auto;
`
export const MainClip = styled.div`
    height: 100%;
    width: 632px;
    border:1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        object-fit: cover;
    }
`
export const SideClips = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 138px;
    row-gap: 10px;

`
export const SideClip = styled.button`
    background-color: transparent;
    border: 1px solid gray;
    width: 75px;
    padding: 10px;
    box-sizing: border-box;
    img {
        width: 100%;
        height: auto;
    }
`


export const StoreForumCont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

export const StoreForumTitle = styled.h3`
    font-size: 25px;
    color:  ${({theme}) => theme.texts.text3};
`

export const StoreForumBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`


export const StoreDiscussionCont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

export const StoreDiscussionTitle = styled.h3`
    font-size: 25px;
    color:  ${({theme}) => theme.texts.text3};
`

export const StoreDiscussionBody = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
`