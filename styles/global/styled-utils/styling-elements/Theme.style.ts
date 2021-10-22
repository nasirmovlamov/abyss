import { ForumBoxShadowDark, SearchBoxShadowDark } from './BoxShadows';
import { pageLightGray, pageBlack, pageDarkBlack, linesSideTextColor, whiteTextColor, orangeBackground, pageDarkGray, blueTitle, blueForTags, darkLinesSideTextColor } from './Colors';
  export const lightTheme = {
      body: '#F2F2F3',
      text: '#363537',
      toggleBorder: '#FFF',
      toggleTheme:"0px",
      toggleThemeColor:"#00090E",
      themeTogglerCont: "#FFFFFF",
      themeTogglerContBorder: "black",
      backgroundMain:"#00090e",
      navbar: {
        background:pageBlack,
        navLogoText:"#f2f2f3",
        navBorder:"#ADB9B9",
        navLinks:"#949597",
        navLinksHovered:"#F2F2F3",
        navPersonName:"#032728",
        navLogin:"0",
        navRegister:"0",
        navLogout:"#000000"
      },
      pageTabs: {
        contBG:"#ffffff",
        border:"gray",
        nonfocusedColor:pageLightGray,
        focusedColor:whiteTextColor,
        hover:{
          border:"lightgray",
        }
      },

      searchBox:{
        background:pageBlack,
        leftSideColor:linesSideTextColor,
        borderAndPlaceHolderColor:pageDarkGray,
        inputColor:whiteTextColor,
        button:orangeBackground,
        buttonColor:pageDarkBlack,
        boxShadow: SearchBoxShadowDark
      },

      forumPage:{
        textColor: whiteTextColor, 
        sideTextColor: linesSideTextColor,
        iconColor:linesSideTextColor,
        titleColor: blueTitle,
        darkSideTextColor:darkLinesSideTextColor,
        tagsBackground: blueForTags,
        elementBackground: pageBlack,
        darkelementBacground:pageDarkBlack,
        boxShadow: ForumBoxShadowDark,
        tabsTitle:pageLightGray,
      }

  }
  export const darkTheme = {
    body: '#00090E',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    logoWord: "576769",
    toggleTheme:"31px",
    toggleThemeColor:"#00090E",
    themeTogglerCont:"#00090E",
    themeTogglerContBorder: "00090E",
    backgroundMain:"#00090e",
    navbar: {
      navBackground:"#00090E",
      navLogoText:"#4C5B5F",
      navBorder:"#49585C",
      navLinks:"#879B9D",
      navLinksHovered:"#D5FFFF",
      navPersonName:"#879B9D",
      navLogin:"1",
      navRegister:"1",
      navLogout:"#FFFFFF"
    },
    pageTabs: {
      contBG:"#11191e",
      border:"gray",
      hover:{
        border:"lightgray",
      }
    }
  }


  export type ThemeType = typeof lightTheme
