import Image from 'next/image';
import Loader from 'react-spinners/HashLoader';

import { resend_mail, user_data } from '../../../../../store/slices/User.slice';
import { useAppDispatch, useAppSelector } from '../../../../../store/states/store.hooks';
import { resendEmail } from '../../../../../store/thunks/User.thunk';
import * as CavePInfo from '../../../../../styles/ui/modules/Cave_Style/CaveProfile/CaveProfileInfo.style';


interface Props { }

const Cave_Profile_Info = (props: Props) => {
  const dispatch = useAppDispatch()
  const userData: any = useAppSelector(user_data)
  const resendMailData = useAppSelector(resend_mail)
  const resendEmailFunc = () => {
    dispatch(resendEmail(null))
  }
  return (
    <>
      {!userData.isVerified && (
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            height: 'auto',
            background: 'black',
            marginTop: '30px',
            color: 'yellow',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <p style={{ textAlign: 'center', margin: '0px' }}>
            {' '}
            Your email is not verified please enter your email and verify it.{' '}
            {resendMailData?.status === 'pending' && (
              <Loader color={'white'} size={2} loading={resendMailData?.status === 'pending'} />
            )}
          </p>
          <button onClick={resendEmailFunc}>Resend email</button>

          {resendMailData?.status === 'success' && (
            <p style={{ color: 'green' }}>Check your mail address for verification link.</p>
          )}
          {resendMailData?.errors &&
            Object.keys(resendMailData.errors).map((key) => {
              return (
                <p key={key} style={{ color: 'red' }}>
                  {resendMailData.errors[key]}
                </p>
              )
            })}
        </div>
      )}
      <CavePInfo.CaveProfileInfo_Cont>
        <CavePInfo.CaveProfile_User>
          <div className="seperator" style={{ height: '25px' }}></div>
          <div className="profileImage">
            <Image src="/main-logo.svg" width="120" height="120" alt="rank user" />
          </div>
          <div className="userRateCont">
            <div className="user_icon">
              <Image src="/tridentRANK_01.png" width="30" height="30" alt="rank user" />
            </div>
            <p className="percentage">74.6</p>
            <div className="percentageLineCont">
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
          </div>
        </CavePInfo.CaveProfile_User>

        <CavePInfo.CaveProfile_User_Data>
          <p className="title">Abyss User</p>
          <p className="content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem maiores quas a nemo non
            laboriosam corporis inventore ab, comm <br /> <br />
            odi consequuntur nisi dolore error rerum veniam dignissimos neque iure sapiente
            exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            corrupti nihil suscipit quis voluptas dicta ex molestiae impedit, adipisci accusamus
            laborum harum. Possimus aperiam magnam excepturi officia voluptatibus tempore delectus.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto earum est, id quas
            accusantium commodi? Magnam iste, repellendus ex exercitationem rem earum vel repellat
            ea provident sapiente odit dolore quasi. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Alias, incidunt. Eius doloremque, quo molestiae voluptas quos ea
            impedit cumque placeat saepe quidem! Beatae saepe, nisi dolor quia possimus dolores
            tempore.
          </p>
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
    </>
  )
}

export default Cave_Profile_Info
