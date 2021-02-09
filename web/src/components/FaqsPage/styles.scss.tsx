// Faqs Page Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { Box } from '../ui'

// ___________________________________________________________________

export const FaqsPage = styled(Box)`
  .faqs {
    margin: 0 auto;
    max-width: ${theme.maxWidth};
  }
`
