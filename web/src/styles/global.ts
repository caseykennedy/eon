// Global styles

// ___________________________________________________________________

import { createGlobalStyle } from 'styled-components'

import theme from '../gatsby-plugin-theme-ui'

import RootVars from './root'
import Reset from './reset'
import Typography from './typography'

// ___________________________________________________________________

const GlobalStyles = createGlobalStyle`
  ${RootVars}
  ${Reset}
  ${Typography}

  html,
  body {
    height: 100%;
    width: 100%;

    @media (max-width: 767px) {
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  
  body {
    background: ${theme.colors.secondary};
    
    border: 0;
    margin: 0;
    padding: 0;

    /* &::-webkit-scrollbar {
      display: none;
    } */
  }

  .img {
    width: 100%;
    height: 100%;
  }
`

export default GlobalStyles
