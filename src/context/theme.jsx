import propTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../config/theme'

const Theme = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(theme.light)

  const changeTheme = () => {
    setDarkmode(!darkmode)
  }
  useEffect(() => {
    darkmode ? setCurrentTheme(theme.dark) : setCurrentTheme(theme.light)
  }, [darkmode])

  return (
    <ThemeProvider
      theme={{
        ...currentTheme,
        changeTheme,
        fonts: theme.fonts,
        darkmode
      }}>
      {children}
    </ThemeProvider>
  )
}

Theme.propTypes = {
  children: propTypes.node
}

export default Theme
