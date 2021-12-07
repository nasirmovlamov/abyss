import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import * as CavePInfo from '../../../../styles/components/styled-blocks/Cave_Style/CaveProfile/CaveProfileInfo.style'
import Image from 'next/image'
import rank from '../../../../public/tridentRANK_01.png'
import abyss_logo from '../../../../public/main-logo.svg'
interface Props {
    
}

const Cave_Profile_Info = (props: Props) => {
    return (
        <CavePInfo.CaveProfileInfo_Cont>
            <CavePInfo.CaveProfile_User>
                <div className='profileImage'>
                    <Image  src={abyss_logo} width='120' height='120' alt='rank user'/>
                </div>
                <div className='userRateCont'>
                    <div className='user_icon'>
                        <Image  src={rank} width='30' height='30' alt='rank user'/>
                    </div>
                    <p className='percentage'>74.6</p>
                    <div className='percentageLineCont'>
                        <div className="line1"></div>
                        <div className="line2"></div>
                    </div>

                </div>

            </CavePInfo.CaveProfile_User>

            <CavePInfo.CaveProfile_User_Data>
                <p className="title">Abyss User</p>
                <p className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem maiores quas a nemo non laboriosam corporis inventore ab, comm <br/> <br/>odi consequuntur nisi dolore error rerum veniam dignissimos neque iure sapiente exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corrupti nihil suscipit quis voluptas dicta ex molestiae impedit, adipisci accusamus laborum harum. Possimus aperiam magnam excepturi officia voluptatibus tempore delectus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto earum est, id quas accusantium commodi? Magnam iste, repellendus ex exercitationem rem earum vel repellat ea provident sapiente odit dolore quasi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, incidunt. Eius doloremque, quo molestiae voluptas quos ea impedit cumque placeat saepe quidem! Beatae saepe, nisi dolor quia possimus dolores tempore.</p>
                <CavePInfo.CaveTags_STY>
                    <CavePInfo.CaveTag_STY>php</CavePInfo.CaveTag_STY>
                    <CavePInfo.CaveTag_STY>laravel</CavePInfo.CaveTag_STY>
                    <CavePInfo.CaveTag_STY>javascript</CavePInfo.CaveTag_STY>
                    <CavePInfo.CaveTag_STY>react</CavePInfo.CaveTag_STY>
                    <CavePInfo.CaveTag_STY>nextjs</CavePInfo.CaveTag_STY>
                    <CavePInfo.CaveTag_STY>php</CavePInfo.CaveTag_STY>
                    <CavePInfo.CaveTag_STY>laravel</CavePInfo.CaveTag_STY>
                    <CavePInfo.CaveTag_STY>javascript</CavePInfo.CaveTag_STY>
                    <CavePInfo.CaveTag_STY>react</CavePInfo.CaveTag_STY>
                    <CavePInfo.CaveTag_STY>nextjs</CavePInfo.CaveTag_STY>
                    <CavePInfo.CaveTag_STY>php</CavePInfo.CaveTag_STY>
                    <CavePInfo.CaveTag_STY>laravel</CavePInfo.CaveTag_STY>
                    <CavePInfo.CaveTag_STY>javascript</CavePInfo.CaveTag_STY>
                    <CavePInfo.CaveTag_STY>react</CavePInfo.CaveTag_STY>
                    <CavePInfo.CaveTag_STY>nextjs</CavePInfo.CaveTag_STY>
                </CavePInfo.CaveTags_STY>
            </CavePInfo.CaveProfile_User_Data>


        </CavePInfo.CaveProfileInfo_Cont>
    )
}

export default Cave_Profile_Info
