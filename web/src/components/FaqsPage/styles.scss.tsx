// Faqs Page Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box } from '../ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const FaqsPage = styled(Box)`
  @media ${theme.mq.tablet} {
  }

  .icon {
    margin-right: ${theme.space[6]};

    svg {
      width: ${theme.space[7]};
    }
  }
`
