// Global styles

// ___________________________________________________________________

import React, { useContext } from 'react'

import { createGlobalStyle } from 'styled-components'

import StoreContext from '../context/StoreContext'
import theme from '../gatsby-plugin-theme-ui'

import RootVars from './root'
import Reset from './reset'
import Typography from './typography'

// ___________________________________________________________________

const GlobalStyles = createGlobalStyle`
  ${RootVars}
  ${Reset}
  ${Typography}

  /* html,
  body {
    height: 100vh;
    width: 100%;

    @media (max-width: 400px) {
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  } */
  
  body {
    background: ${theme.colors.secondary};
    
    border: 0;
    margin: 0;
    padding: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .img {
    width: 100%;
    height: 100%;
  }

  .ReactModalPortal {
    position: relative;
    z-index: 99999999;
  }
`

export default GlobalStyles
