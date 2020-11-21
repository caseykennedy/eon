// MultiSurfacePage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box } from '../ui'
import Section from '../Section'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const MultiSurfacePage = styled(Box)`
  @media ${theme.mq.tablet} {
  }
`

export const StoreLocator = styled(Section)`
  border-radius: 0 0 ${theme.space[6]} 0;

  @media ${theme.mq.tablet} {
    border-radius: 0 0 ${theme.space[7]} 0;
  }
`
