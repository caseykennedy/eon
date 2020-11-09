// Product Detail styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { transparentize } from 'polished'

import { Box, Flex, Heading } from '../../ui'
import theme from '../../../gatsby-plugin-theme-ui'

import Section from '../../Section'

// ___________________________________________________________________

export const ProductDetail = styled(Section)`
  background: ${transparentize(0, theme.colors.mossgreen)};
  border-radius: 0 0 ${theme.space[7]} 0;

  overflow: hidden;
  position: relative;

  @media ${theme.mq.tablet} {
    border-radius: 0 0 ${theme.space[9]} 0;
  }
`
