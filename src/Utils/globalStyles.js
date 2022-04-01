import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
 * {
   box-sizing: border-box;
   font-family: ${(props) =>
     `${props.theme.fonts[0]}, ${props.theme.fonts[1]}`};
   font-weight: 500;
 }
 body {
   background-color: ${(props) => props.theme.background};
 }
 #root {
   min-height: 100vh;
 }
`
export default GlobalStyles
