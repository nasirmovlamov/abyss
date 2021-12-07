import styled from "styled-components";


export const CaveProfileInfo_Cont = styled.div`
    display: flex;
    margin-top: 50px;
    padding-right: 60px ;
`

export const CaveProfile_User = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 226px;
    align-items: center;
    row-gap: 15px;
    .profileImage{
        width: 130px;
        height: 130px;
        border-radius: 50%;
        box-shadow: ${({theme}) => theme.boxshadows.boxshadow1};
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .userRateCont {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        justify-content: center;
        width: 138px;
        row-gap: 8px;
        .percentage {
            color: ${({theme}) => theme.texts.text2};
            width:100%;
            text-align: center;
            font-size: 13px;
        }
        .percentageLineCont {
            width: 100%;
            position: relative;
            .line1{
                width:80%;
                position: absolute;
                height: 3px;
                z-index: 2;
                background-color: ${({theme}) => theme.backgrounds.background5};
            }
            .line2{
                width: 100%;
                height: 3px;
                position: absolute; 
                background-color: ${({theme}) => theme.backgrounds.background2};
            }
        }
        .user_icon {
            position: absolute;
            z-index: 2;
            left: 0px;
            height: 20px;
            width: 20px;
            top: 0px;
        }
    }
`

export const CaveProfile_User_Data = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 15px;
    .title {
        color: ${({theme}) => theme.texts.text1};
        font-size: 20px;
    }
    .content {
        color: ${({theme}) => theme.texts.text2};
        font-size: 15px;
    }
    .tagsCont {
        .tag {

        }
    }
`


export const CaveTags_STY = styled.div`
    display: flex;
    column-gap: 10px;
    flex-wrap: wrap;
    row-gap: 10px;
    
`

export const CaveTag_STY = styled.div`
    height: 22px;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    font-family: r;
    justify-content: center;
    /* border: 1px solid lightgray; */
    align-items: center;
    background-color: #e5f0f4;
    font-family: r;
    background:  ${({theme}) => theme.backgrounds.background4};
    cursor: pointer;
    font-size: 12px;
    text-align: center;
    transition: 10s ease-out ;
    color:  ${({theme}) => theme.texts.text4};
    box-shadow: ${({theme}) => theme.boxshadows.boxshadow6};
    &:hover{
        box-shadow: ${({theme}) => theme.boxshadow_hover.hover3};
    }
    
`