// News Page Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex } from '../ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const NewsPage = styled(Box)`
  overflow: hidden;

  @media ${theme.mq.tablet} {
  }
`

export const PageTitle = styled(Box)``

export const FilterNav = styled(Flex)`
  display: flex;
  align-items: center;

  margin-bottom: ${theme.space[6]};
  width: 100%;

  position: sticky;
  top: ${theme.headerHeight};
  z-index: 99999;
`
