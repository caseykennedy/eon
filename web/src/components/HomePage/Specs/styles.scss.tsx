// Specs Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../Section'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const Specs = styled(Section)`
  h3 {
    span {
      svg {
        height: 44px;
      }
    }
  }

  @media ${theme.mq.tablet} {
  }
`

export const Features = styled(Box)`
  .feature {
    margin-bottom: ${theme.space[4]};
    width: 100%;
  }
`
