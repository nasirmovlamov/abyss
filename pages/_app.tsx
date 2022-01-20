import '../app/styles/global/scss/style.css';

import { useEffect } from 'react';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Layout from '../app/components/layouts/App.layout';
import { store } from '../app/store';
import { darkTheme, lightTheme } from '../app/styles/global/styled-components/abstracts/Theme.style';
import { GlobalStyle } from '../app/styles/global/styled-components/Global.style';

import type { AppProps } from 'next/app'
function MyApp({ Component, pageProps }: AppProps) {
  const [theme, settheme] = useState('dark')
  useEffect(() => {
    if (localStorage.getItem('theme') !== null) {
      let theme = ''
      if (localStorage.getItem('theme') === 'light') {
        theme = 'light'
      } else {
        theme = 'dark'
      }
      settheme(theme)
    } else {
      settheme('light')
    }
  }, [])

  const changeTheme = (theme: string) => {
    if (theme === 'light') {
      settheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      settheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      <Provider store={store}>
        <ThemeProvider
          theme={
            theme === 'light'
              ? lightTheme
              : darkTheme || localStorage.getItem('theme') !== null
                ? lightTheme
                : darkTheme
          }
        >
          <>
            <Toaster />
            <GlobalStyle />
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
