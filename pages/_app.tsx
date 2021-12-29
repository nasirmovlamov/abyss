
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import '../styles/global/scss/global.css'
import { Provider } from 'react-redux'
import {store} from '../app/store/store'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Relativer, ThemeToggler, ToggleElement,  TogglerButton } from '../styles/global/styled-utils/Global.style'
import { darkTheme, lightTheme } from '../styles/global/styled-utils/settings/Theme.style'
import { useState } from 'react'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { useEffect } from 'react'
import {Toaster } from 'react-hot-toast'
import { useAppDispatch, useAppSelector } from '../app/store/hooks'
import { userCheck } from '../app/thunks/AuthThunk'
import { dispatch } from 'react-hot-toast/dist/core/store'



function MyApp({ Component, pageProps }: AppProps) {
  const [theme, settheme] = useState("dark")
  useEffect(() => {
    if(localStorage.getItem('theme') !== null )
    {
      let theme =  ""
      if(localStorage.getItem('theme') === "light")
      {
        theme =  "light"
      }
      else 
      {
        theme =   "dark"
      }
      settheme(theme)
    }
    else 
    {
      settheme("light")
    }
  }, [])


  
  const changeTheme = (theme:string) => {
    if(theme==="light")
    {
      settheme("dark")
      localStorage.setItem('theme' , "dark")
    }
    else 
    {
      settheme("light")
      localStorage.setItem('theme' , "light")
    }
  }
  

  return (
    <div style={{display:"flex"}}>

        <Provider store={store}> 
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme  || localStorage.getItem('theme') !== null ? lightTheme  :  darkTheme}>
            <>
              <Toaster/>
              <GlobalStyle/>
              <Layout>
                  {/* <ThemeSwitcher theme={theme} setTheme={changeTheme}/> */}
                  <Component {...pageProps} />
              </Layout>
            </>
          </ThemeProvider>
        </Provider>

    </div>
  )
}
export default MyApp












