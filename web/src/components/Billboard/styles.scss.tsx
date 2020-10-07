// Billboard styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { transparentize } from 'polished'

import { Box, Flex, Heading } from '../ui'
import theme from '../../../config/theme'

import Section from '../Section'

// ___________________________________________________________________

export const Billboard = styled(Section)`
  background: ${transparentize(0.05, theme.colors.lightgray)};
  border-radius: 0 0 ${theme.space[9]} 0;

  @media ${theme.mq.tablet} {
  }
`
