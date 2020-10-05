// Cart Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box } from '../ui'
import { motion } from 'framer-motion'
import theme from '../../../config/theme'

import Headroom from 'react-headroom'

// ___________________________________________________________________

const cartWidth = `700px`

export const Cart = styled(Box)`
  justify-content: flex-start;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
  overflow: auto;
  padding: ${theme.space[7]} ${theme.space[5]};

  position: fixed;
  top: calc(${theme.headerHeight});

  background: rgb(255, 255, 255, 0.7);
  backdrop-filter: blur(9px);
  opacity: 0;
  visibility: hidden;
  z-index: 991;

  @media ${theme.mq.tablet} {
    border-left: ${theme.border};
    visibility: hidden;
    opacity: 0;
    padding: ${theme.space[7]} ${theme.space[5]};
    right: 0;
    width: ${cartWidth};
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &.cart--open {
    visibility: visible;
    opacity: 1;
    right: 0;
  }
`
