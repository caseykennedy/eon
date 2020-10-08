// Product Detail styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { transparentize } from 'polished'

import { Box, Flex, Heading } from '../../ui'
import theme from '../../../../config/theme'

import Section from '../../Section'

// ___________________________________________________________________

export const ProductDetail = styled(Section)`
  background: ${transparentize(0.05, theme.colors.lightgray)};
  border-top: ${theme.border};
  border-radius: 0 0 ${theme.space[9]} 0;

  overflow: hidden;
  position: relative;

  @media ${theme.mq.tablet} {
  }
`