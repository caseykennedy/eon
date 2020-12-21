// Faqs Page Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box } from '../ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const FaqsPage = styled(Box)`
  .faqs {
    margin: 0 auto;
    max-width: ${theme.maxWidth};
  }
`
