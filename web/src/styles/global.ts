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

  html,
  body {
    height: 100%;
    width: 100%;

    @media (max-width: 400px) {
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  
  body {
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

  .ReactModalPortal {
    position: relative;
    z-index: 99999999;
  }

  #cart-modal {
    display: flex;
    margin: 0 0 0 auto;
    padding: 0;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;

    @media ${theme.mq.tablet} {
      height: calc(100% - ${theme.headerHeight});
      max-width: 500px;
    }

    /* div {
      width: 100%;
    } */
  }
`

export default GlobalStyles
