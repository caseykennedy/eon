// MultiSurfacePage Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import { Box } from '../../components/ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const MultiSurfacePage = styled(Box)`
  @media ${theme.mq.tablet} {
  }

  .shield {
    margin-left: auto;
    max-width: 500px;
  }
`
