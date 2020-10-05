// Specs Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../Section'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../ui'
import { Grid, Cell } from 'styled-css-grid'

// ___________________________________________________________________

export const Specs = styled(Section)`
  h3 {
    span {
      svg {
        height: ${theme.space[3]};
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

export const HowTo = styled(Grid)`
  padding: 0 ${theme.space[4]};
  max-width: ${theme.maxWidth};
  margin: 0 auto;

  .figure {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      width: 100%;
      align-items: center;
      justify-content: center;

      font-size: calc(${theme.fontSizes[2]} * 1.5);
      font-weight: 500;

      background: ${theme.colors.white};
      border: 2px solid ${theme.colors.black};
      margin-top: ${theme.space[4]};
      padding: ${theme.space[1]} 0;

      svg {
        width: 100%;
      }
    }
  }
`
