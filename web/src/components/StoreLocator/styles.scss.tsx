// StoreLocator Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { transparentize } from 'polished'

import { Box } from '../ui'
import Section from '../Section'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const frameHeight = '800px'

export const StoreLocator = styled(Box)`
  .locator__iframe {
    background: ${transparentize(0.15, theme.colors.lightgray)};
    height: 80vh;
    max-height: ${frameHeight};
    min-height: 444px;
    border: none;

    @media ${theme.mq.tablet} {
      border-left: ${theme.border};
      height: ${frameHeight};
    }
  }
`
