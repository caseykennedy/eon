// Billboard styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex, Heading } from '../ui'
import theme from '../../../config/theme'
import Section from '../Section'

// ___________________________________________________________________

export const Billboard = styled(Section)`
  background: ${theme.colors.lightgray};

  @media ${theme.mq.tablet} {
  }

`
