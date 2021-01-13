// Post Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../../components/Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'

// ___________________________________________________________________

export const PageTitle = styled(Section)`
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: ${theme.headerHeight};
    width: 100%;
  }
`

export const Sources = styled(Flex)`
  border-top: ${theme.border};
  margin-top: ${theme.space[5]};
  padding-top: ${theme.space[5]};
`
