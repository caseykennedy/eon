// StoreLocator Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { transparentize } from 'polished'

import { Box } from '../ui'
import Section from '../Section'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const frameHeight = '930px'

export const StoreLocator = styled(Box)`
  .locator__iframe {
    /* background: ${transparentize(0.15, theme.colors.lightgray)}; */
    border-radius: ${theme.borderRadius};
    height: 80vh;
    max-height: ${frameHeight};
    min-height: 444px;
    border: none;

    @media ${theme.mq.tablet} {
      /* border-left: ${theme.border}; */
      height: ${frameHeight};
    }

    @media ${theme.mq.desktop} {
      border: none;
    }
  }
`
