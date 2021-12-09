import  styled from 'styled-components';

export const CaveProduct_STY = styled.div`
    display: flex;
    flex-direction: column;
    width:352px;
    height:116px;
    padding: 10px;
    row-gap: 6.5px;
    background-color: ${({theme}) => theme.backgrounds.background2};
    border-radius: 10px;
    box-shadow: ${({theme}) => theme.boxshadows.boxshadow1};
    &:hover {
        box-shadow: ${({theme}) => theme.boxshadows.boxshadow8};
    }

    .title {
        font-size: 16px;
        color:  ${({theme}) => theme.titles.title2};
        cursor: pointer;
        text-transform: capitalize;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        /* line-height: 30px; */
        font-family: s;
        letter-spacing: 0.2px;
    }

    .details{
        display: flex;
        align-items: center;
        column-gap: 11px;
        .logo {
            width: 22px;
            height: 22px;
            img {
                object-fit: cover;
            }
        }
        .flex {
            display: flex;
            align-items: center;
            column-gap: 6px;
            svg{
                color: ${({theme}) => theme.colors.orange_2};
                font-size: 14px;
            }
            .number , .text {
                font-size: 12px;
                color: ${({theme}) => theme.texts.text2};
            }
        }
    }

    .actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .tags {
            width: 200px;
            display: flex;
            align-items: center;
            column-gap: 8px;
            .tag {
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
                    box-shadow: ${({theme}) => theme.boxshadow_hover.hover1};
                }
            }
        }
        .free {
            color: ${({theme}) => theme.texts.text2};
            font-size: 14px;
            background-color: transparent;
        }
        .editCont {
            display: flex;
            column-gap: 13.5px;
            align-items: center;
            .buttonsCont {
                width: 50px;
                display: flex;
                align-items: center;
                background-color: ${({theme}) => theme.backgrounds.background4};
                border-radius: 5px;
                .button { 
                    width: 50%;
                    padding: 3px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    svg {
                        color: ${({theme}) => theme.texts.text5};
                    }
                }
            }
        }
    }
`