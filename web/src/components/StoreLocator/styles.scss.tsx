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
    border: ${theme.border};
    border-color: ${transparentize(0.15, theme.colors.lightgray)};
    border-radius: ${theme.borderRadius};
    height: 80vh;
    max-height: ${frameHeight};
    min-height: 444px;

    @media ${theme.mq.tablet} {
      height: ${frameHeight};
    }
  }
`
