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
  border-radius: 0 0 ${theme.space[7]} 0;
  /* backdrop-filter: blur(9px); */
  @media ${theme.mq.tablet} {
    border-radius: 0 0 ${theme.space[9]} 0;
  }
`

export const ParallaxBox = styled(Parallax)`
  @media ${theme.mq.tablet} {
  }
`
