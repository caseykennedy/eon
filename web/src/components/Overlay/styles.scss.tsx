// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import { transparentize } from 'polished'

import { Box, Flex } from '../ui'

import theme from '../../../config/theme'

// Begin Styles
// ___________________________________________________________________

const overlayWidth = '100%'

export const Overlay = styled(Box)`
  justify-content: flex-start;
  flex-direction: column;

  width: ${overlayWidth};
  height: 100vh;
  overflow: auto;
  padding: ${theme.space[2]} ${theme.space[4]} ${theme.space[5]};

  position: fixed;
  top: ${theme.headerHeight};
  left: -${overlayWidth};
  bottom: 0;

  background: ${transparentize(0, theme.colors.quinary)};
  /* backdrop-filter: blur(9px); */
  border-right: ${theme.border};
  transition: left 0.333 ease-in-out;
  z-index: 99;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${theme.mq.tablet} {
    /* padding: ${theme.space[7]}; */
  }

  &.nav-bg--open {
    visibility: visible;
    opacity: 1;
    left: 0;
  }
`

export const Exit = styled(Box)`
  cursor: pointer;
  text-align: right;
  z-index: 9999;

  @media ${theme.mq.tablet} {
  }
`
