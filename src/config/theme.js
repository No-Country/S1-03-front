export const breakpoints = {
  mobile: 576,
  tablet: 768,
  desktop: 1200,
  desktop_lg: 1400
}

export const palette = {
  black: '#1C1C1C',
  dark: '#323232',
  darkGray: '#47484A',
  gray: '#AEACAC',
  lightGray: '#A0A0A0',
  lighterGray: '#E8E4E4',
  greenBlueGradient:
    'linear-gradient(118.09deg, #5EA251 -14.47%, #3D81B3 115.8%)',
  blue: '#549BCB',
  green: '#76B26B',
  lightBluedWhite: '#ECF0F1',
  bluedDark: '#192022',
  white: '#FCFCFC',
  red: '#FF7354'
}

export const theme = {
  dark: {
    background: palette.bluedDark,
    modalBg: palette.white,
    primary: palette.blue,
    secondary: palette.green
  },
  light: {
    background: palette.lightBluedWhite,
    modalBg: palette.white,
    primary: palette.green,
    secondary: palette.blue,
    inputBg: palette.lighterGray,
    inputPlaceholder: palette.lightGray
  }
}
