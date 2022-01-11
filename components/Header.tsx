import React, { ReactElement, useEffect,  useState } from 'react'
//#region import styles
import * as Header_STY from '../styles/components/styled-blocks/Navbar.style'
//#endregion import styles
import Image from 'next/image'
import mainLogo from '/public/main-logo-new.svg'
import mainLogoText from '/public/main-logo-side-text-new.svg'
import RegisterModal from './Modals/RegisterModal'
import LoginModal from './Modals/LoginModal'
import Modals from './Modals/Modals'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { changeModalAction, is_loading, is_Logged,  user_data, user_modals } from '../app/feature/User.slice'
import { userCheck, userLogin, userLogout } from '../app/thunks/AuthThunk'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavLink from './NavLink'
import { forumWordRegex } from '../logic/regex/NavbarRegex'
import chat_icon from '../public/chat_bubble.svg'
import { hoverHeader, search_data, unhoverHeader, unhoverSearchBox } from '../app/feature/SearchBox.slice'
import { unHoverHeaderAsync, unHoverSearchAsync } from '../app/thunks/SearchBoxThunks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
interface Props {
}

function Header({}: Props): ReactElement {
    const router = useRouter()
    const {pathname} = router
    const dispatch = useAppDispatch();
    const userModals = useAppSelector(user_modals);
    const userData = useAppSelector(user_data);
    const isLogged = useAppSelector(is_Logged);
    const isLoading = useAppSelector(is_loading);
    const [navView, setnavView] = useState<JSX.Element>()
    const [notificationToolTip, setnotificationToolTip] = useState(false)
    const [messageToolTip, setmessageToolTip] = useState(false)
    const [menuToolTip, setmenuToolTip] = useState(false)
    const searchData = useAppSelector(search_data)

    const goPage = (link:string) => {
        window.scrollTo(0, 0)
        if(router.pathname !== link){
            router.push(link)
        }
    }

    const unHoverHeader = () => {
        dispatch(unHoverHeaderAsync(null))
    }

    


    const notfTipHoverHandle = () => {
        setnotificationToolTip(true)
    } 
    const notfTipLeaveHandle = () => {
        setnotificationToolTip(false)
    }
    const msgTipHoverHandle = () => {
        setmessageToolTip(true)
    } 
    const msgTipLeaveHandle = () => {
        setmessageToolTip(false)
    }
    const menuTipHoverHandle = () => {
        setmenuToolTip(true)
    }
    const menuTipLeaveHandle = () => {
        setmenuToolTip(false)
    }


    useEffect(() => {
        loginChecker()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogged , userData])
    

    const pathChecker = (path:string) => {
        if(pathname === "/forum")
        {
            return true
        }
        else if (pathname === "/store")
        {
            return true
        }
        else if(pathname === "/pedi")
        {
            return true 
        }
        else 
        {
            return false
        }
    }

    const exit = async () => {
        router.push('/')
        await dispatch(userLogout())
    }

    const loginChecker = () => {
        if(!isLogged)
        {
            const view = 
            <Header_STY.Guest_STY>  
                <Header_STY.LoginButton_STY      onClick={() => dispatch(changeModalAction("login"))}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                        <g>
                            <rect fill="none" height="24" width="24"/>
                        </g>
                        <g>
                            <path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z"/>
                        </g>
                    </svg> 

                    <span>Sign in</span>
                </Header_STY.LoginButton_STY>
                {/* <Header_STY.RegisterButton_STY   onClick={() => dispatch(changeModalAction("register"))}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"/>
                    </svg>
                    <span>Register</span>
                </Header_STY.RegisterButton_STY> */}
            </Header_STY.Guest_STY>
            setnavView(view)
            return ""
        }
        else if(userData !== null)
        {
            const view = <>
                    <Header_STY.Logged_STY> 
                        

                        <Header_STY.HeaderIcon_STY onMouseEnter={notfTipHoverHandle} onMouseLeave={notfTipLeaveHandle}>
                            <svg version="1.2" baseProfile="tiny-ps" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1943 2024" width="1943" height="2024">
                                <path id="grey" d="M969.25 0.14C1322.25 0.02 1373.28 0.19 1389.75 1.53C1400.06 2.38 1413.67 3.74 1420 4.56C1426.32 5.38 1438.02 7.17 1446 8.55C1453.97 9.93 1467.47 12.61 1476 14.51C1484.52 16.41 1498.47 19.96 1507 22.42C1515.52 24.87 1529.7 29.35 1538.5 32.37C1547.3 35.4 1560.57 40.33 1568 43.33C1575.42 46.33 1588.02 51.79 1596 55.46C1603.97 59.12 1617.25 65.77 1625.5 70.23C1633.75 74.68 1647.47 82.57 1656 87.76C1664.52 92.94 1678.47 102.07 1687 108.05C1695.52 114.02 1707.45 122.84 1713.5 127.63C1719.55 132.42 1730.8 141.83 1738.5 148.54C1746.2 155.25 1761.28 169.69 1772.02 180.62C1782.76 191.55 1796.42 206.35 1802.39 213.5C1808.35 220.65 1817.63 232.35 1823 239.5C1828.37 246.65 1836.55 258.12 1841.17 265C1845.78 271.87 1853.21 283.57 1857.66 291C1862.12 298.42 1869.17 310.8 1873.32 318.5C1877.48 326.2 1883.88 339.02 1887.55 347C1891.21 354.97 1896.68 367.57 1899.7 375C1902.72 382.42 1908.49 398.4 1912.53 410.5C1916.57 422.6 1921.68 439.47 1923.89 448C1926.1 456.52 1929.25 470.02 1930.88 478C1932.52 485.97 1934.99 499.92 1936.38 509C1937.77 518.07 1939.72 532.92 1940.7 542C1942.37 557.34 1942.5 573.18 1942.5 767.5C1942.5 961.82 1942.37 977.66 1940.7 993C1939.72 1002.07 1937.77 1016.92 1936.38 1026C1934.99 1035.07 1932.52 1049.02 1930.88 1057C1929.25 1064.97 1926.09 1078.47 1923.87 1087C1921.64 1095.52 1917.12 1110.82 1913.81 1121C1910.5 1131.17 1904.84 1146.92 1901.24 1156C1897.64 1165.07 1891.47 1179.47 1887.53 1188C1883.59 1196.52 1877.08 1209.57 1873.06 1217C1869.05 1224.42 1862.11 1236.57 1857.66 1244C1853.2 1251.42 1845.78 1263.12 1841.17 1270C1836.55 1276.87 1828.37 1288.35 1823 1295.5C1817.63 1302.65 1808.35 1314.35 1802.39 1321.5C1796.42 1328.65 1782.76 1343.44 1772.02 1354.37C1761.28 1365.3 1747.21 1378.91 1740.75 1384.62C1734.29 1390.33 1723.71 1399.21 1717.25 1404.36C1710.79 1409.5 1698.52 1418.7 1690 1424.8C1681.47 1430.9 1667.75 1440.04 1659.5 1445.12C1651.25 1450.19 1637.52 1458.18 1629 1462.86C1620.47 1467.54 1606.07 1474.82 1597 1479.03C1587.92 1483.24 1573.97 1489.3 1566 1492.49C1558.02 1495.68 1542.27 1501.34 1531 1505.07C1519.72 1508.8 1503.52 1513.67 1495 1515.88C1486.47 1518.1 1472.97 1521.25 1465 1522.88C1457.02 1524.52 1443.07 1526.99 1434 1528.38C1424.92 1529.76 1410.75 1531.68 1402.5 1532.64C1389.27 1534.17 1372.03 1534.44 1125.17 1535.5L1020.34 1639.52C962.68 1696.73 894.12 1764.68 867.99 1790.52C841.86 1816.36 809.24 1848.3 795.48 1861.5C781.73 1874.7 759.69 1895.59 746.49 1907.92C733.3 1920.25 713.27 1938.67 702 1948.85C690.72 1959.03 674.07 1973.74 665 1981.54C655.92 1989.34 643.32 1999.86 637 2004.91C630.67 2009.97 622.24 2016.33 618.25 2019.05C612.37 2023.06 610.2 2024 602.5 2024.01L603.22 2013.26C603.61 2007.34 604.87 1993.5 606.01 1982.5C607.15 1971.5 609.86 1946.52 612.05 1927C614.23 1907.47 618.51 1870.57 621.56 1845C624.6 1819.42 634.29 1740.9 643.08 1670.5C651.88 1600.1 659.4 1540.85 660.5 1535.17L608 1534.71C568.11 1534.36 551.9 1533.84 540.5 1532.57C532.25 1531.65 518.07 1529.76 509 1528.38C499.92 1526.99 485.97 1524.52 478 1522.88C470.02 1521.25 456.52 1518.1 448 1515.89C439.47 1513.68 422.6 1508.57 410.5 1504.53C398.4 1500.49 382.42 1494.72 375 1491.71C367.57 1488.7 354.3 1482.88 345.5 1478.79C336.7 1474.7 322.52 1467.52 314 1462.85C305.47 1458.17 291.75 1450.19 283.5 1445.12C275.25 1440.04 261.52 1430.9 253 1424.8C244.47 1418.7 232.32 1409.59 226 1404.55C219.67 1399.51 208.87 1390.41 202 1384.33C195.12 1378.24 180.94 1364.55 170.48 1353.88C160.02 1343.22 146.59 1328.65 140.64 1321.5C134.68 1314.35 125.41 1302.65 120.02 1295.5C114.63 1288.35 106.45 1276.87 101.83 1270C97.22 1263.12 89.79 1251.42 85.34 1244C80.88 1236.57 73.83 1224.2 69.68 1216.5C65.52 1208.8 59.12 1195.97 55.45 1188C51.79 1180.02 46.33 1167.42 43.33 1160C40.33 1152.57 35.4 1139.3 32.37 1130.5C29.35 1121.7 24.87 1107.52 22.42 1099C19.96 1090.47 16.41 1076.52 14.51 1068C12.61 1059.47 9.93 1045.97 8.55 1038C7.17 1030.02 5.38 1018.32 4.56 1012C3.74 1005.67 2.38 992.06 1.53 981.75C0.22 965.75 0 934.34 0 767.5C0 600.66 0.22 569.25 1.53 553.25C2.38 542.94 3.74 529.32 4.56 523C5.38 516.67 7.17 504.97 8.55 497C9.93 489.02 12.61 475.52 14.51 467C16.41 458.47 19.96 444.52 22.42 436C24.87 427.47 29.35 413.3 32.37 404.5C35.4 395.7 40.33 382.42 43.33 375C46.33 367.57 51.79 354.97 55.45 347C59.12 339.02 65.52 326.2 69.68 318.5C73.83 310.8 80.88 298.42 85.34 291C89.79 283.57 97.22 271.87 101.83 265C106.45 258.12 114.63 246.65 120.02 239.5C125.41 232.35 134.68 220.65 140.64 213.5C146.59 206.35 160.24 191.55 170.98 180.62C181.72 169.69 196.8 155.25 204.5 148.55C212.2 141.84 223.22 132.6 229 128.02C234.77 123.45 245.35 115.55 252.5 110.49C259.65 105.42 268.87 99.12 273 96.47C277.12 93.83 285.45 88.67 291.5 85.02C297.55 81.36 308.8 74.94 316.5 70.76C324.2 66.58 337.47 59.93 346 55.97C354.52 52.01 367.57 46.32 375 43.32C382.42 40.33 395.7 35.4 404.5 32.37C413.3 29.35 427.47 24.87 436 22.42C444.52 19.96 458.7 16.35 467.5 14.39C476.3 12.43 491.15 9.55 500.5 7.98C509.85 6.41 524.02 4.41 532 3.53C539.97 2.65 551.22 1.56 557 1.1C562.77 0.65 748.29 0.22 969.25 0.14Z" />
                            </svg>
                            <div style={{position:'absolute', bottom:'-30px', color:'black', background:'gray', padding:'5px', borderRadius:'5px' ,display:notificationToolTip ? 'flex' : 'none'}}>messages</div>
                            <Header_STY.HeaderIconHOVER_BLOCK_MSG_STY  >MESSAGES</Header_STY.HeaderIconHOVER_BLOCK_MSG_STY>
                        </Header_STY.HeaderIcon_STY>
                        

                        <Header_STY.HeaderIcon_STY onMouseEnter={msgTipHoverHandle} onMouseLeave={msgTipLeaveHandle}>
                            <Header_STY.NotifyNumber_STY> 5</Header_STY.NotifyNumber_STY>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
                                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                            </svg>
                            {/* <div style={{position:'absolute', bottom:'-30px', color:'black', background:'gray', padding:'5px', borderRadius:'5px',display:messageToolTip  ? 'flex' : 'none'}}>notification</div> */}
                            <Header_STY.HeaderIconHOVER_BLOCK_NTF_STY >NOTIFICATION</Header_STY.HeaderIconHOVER_BLOCK_NTF_STY>

                        </Header_STY.HeaderIcon_STY>

                        <Header_STY.HeaderIcon_STY onMouseEnter={menuTipHoverHandle}  onMouseLeave={menuTipLeaveHandle}>
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 1H1V5L9 17H11.5L19 5V1Z" />
                            </svg>
                            <div style={{position:'absolute', bottom:'-30px', color:'black', background:'gray', padding:'5px', borderRadius:'5px' ,display:menuToolTip  ? 'flex' : 'none'}}>menu</div>
                            <Header_STY.HeaderIconHOVER_BLOCK_MENU_STY>MENU</Header_STY.HeaderIconHOVER_BLOCK_MENU_STY>

                        </Header_STY.HeaderIcon_STY>


                        <NavLink content="username" href="/cave">
                            <Header_STY.PersonName_STY>
                                <span > {userData.name} {!userData.isVerified && <span style={{fontSize:"13px",color:"orange"}}>* <sup>not verified</sup></span>}</span>
                            </Header_STY.PersonName_STY>
                        </NavLink>
                    </Header_STY.Logged_STY>
                    
                    <Header_STY.Logout_STY onClick={exit}>
                        <span>logout</span>
                    </Header_STY.Logout_STY>
                </>
            setnavView(view)
            return ""
        }
    }

   

    return (
        <>
        <Header_STY.Nav_STY onMouseEnter={() => dispatch(hoverHeader(null))} onMouseLeave={unHoverHeader}>
            <NavLink   href={"/"} content="Home">
                <Header_STY.Logo_STY> 
                    <div style={{marginTop:'6px'}}>
                    <Image  width="49px" src={mainLogo} height="49px"  alt={"Abyss logo"}/>  
                    </div>
                    <div  style={{marginTop:'12px'}}>
                    <Image width="99px" src={mainLogoText}  height='40px'  alt={"Abyss text"}/>  
                    </div>
                    <Header_STY.Light_STY/>
                    <Header_STY.LightShadow_STY/>
                    <Header_STY.LightShadow2_STY/> 
                </Header_STY.Logo_STY>
            </NavLink>
            
            <Header_STY.LinksStyleCenterer_STY>
                <Header_STY.LinksStyle_STY>
                    <Header_STY.LiStyle_STY onClick={() => goPage('/store')}  focus={pathname === "/store" ? true: false}>
                        <Header_STY.LinkStyle_STY>Store</Header_STY.LinkStyle_STY>
                        <Header_STY.Line_STY />
                    </Header_STY.LiStyle_STY>

                    <Header_STY.LiStyle_STY onClick={() => goPage('/forum')} focus={forumWordRegex.test(pathname) ? true: false}>
                        <Header_STY.LinkStyle_STY>Community</Header_STY.LinkStyle_STY>
                        <Header_STY.Line_STY/>
                    </Header_STY.LiStyle_STY>
                
                    <Header_STY.LiStyle_STY onClick={() => goPage('/pedia')} focus={pathname === "/pedi" ? true: false}>
                        <Header_STY.LinkStyle_STY>Pedia</Header_STY.LinkStyle_STY>
                        <Header_STY.Line_STY/>
                    </Header_STY.LiStyle_STY>
                </Header_STY.LinksStyle_STY>
            </Header_STY.LinksStyleCenterer_STY>
            <Header_STY.Enterance_STY>
                {navView}
            </Header_STY.Enterance_STY>
        </Header_STY.Nav_STY>
        <Header_STY.NavForShadow_STY>

        </Header_STY.NavForShadow_STY>
        </>
    )
}

export default Header

