// StoreLocator Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { transparentize } from 'polished'

import { Box } from '../ui'
import Section from '../Section'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const frameHeight = '875px'

export const StoreLocator = styled(Box)`
  .locator__iframe {
    background: ${theme.colors.lightgray};
    border-radius: ${theme.borderRadius};
    height: 80vh;
    max-height: ${frameHeight};
    min-height: 444px;
    border: ${theme.border};

    @media ${theme.mq.tablet} {
      /* border-left: ${theme.border}; */
      height: ${frameHeight};
    }

    @media ${theme.mq.desktop} {
      border: none;
    }
  }
`
