import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface ThemeContextInterface {
  isDark: boolean
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextInterface | null>(null)

export const useAppTheme = () => {
  return useContext(ThemeContext)
}

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const isDarkModeSaved = localStorage.getItem('darkMode')
      ? localStorage.getItem('darkMode') === 'true'
      : false
    setIsDarkMode(isDarkModeSaved)
  }, [])

  const toggle = () => {
    setIsDarkMode((prevVal) => {
      localStorage.setItem('darkMode', !prevVal ? 'true' : 'false')
      return !prevVal
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark: isDarkMode, toggle }}>{children}</ThemeContext.Provider>
  )
}
