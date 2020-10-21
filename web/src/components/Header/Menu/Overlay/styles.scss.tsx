// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { transparentize } from 'polished'
import { Box, Flex } from '../../../ui'
import theme from '../../../../gatsby-plugin-theme-ui'

// Begin Styles
// ___________________________________________________________________

const overlayWidth = '100%'

export const Overlay = styled(Flex)`
  width: ${overlayWidth};
  height: calc(100% - ${theme.headerHeight});
  overflow: auto;
  padding: ${theme.space[4]};

  position: fixed;
  top: ${theme.headerHeight};
  left: 0;
  bottom: 0;

  visibility: hidden;
  opacity: 0;

  background: ${transparentize(0, theme.colors.quinary)};
  transition: left 0.333 ease-in-out;
  z-index: 99;

  transition: ${theme.transition.all};

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${theme.mq.tablet} {
    /* padding: ${theme.space[7]}; */
  }

  &.nav-bg--open {
    visibility: visible;
    opacity: 1;
  }
`

export const Exit = styled(Box)`
  cursor: pointer;
  text-align: right;
  z-index: 9999;

  @media ${theme.mq.tablet} {
  }
`
