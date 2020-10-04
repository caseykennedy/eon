// How Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { transparentize } from 'polished'
import Section from '../../Section'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../ui'

import { Parallax } from 'react-scroll-parallax'

// ___________________________________________________________________

export const How = styled(Section)`
  background: ${transparentize(0.05, theme.colors.quinary)};
  /* backdrop-filter: blur(9px); */
  @media ${theme.mq.tablet} {
  }
`

export const ParallaxBox = styled(Parallax)`
  @media ${theme.mq.tablet} {
  }
`
