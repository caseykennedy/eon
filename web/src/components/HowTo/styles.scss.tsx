// Specs Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../Section'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../ui'

// ___________________________________________________________________

export const HowTo = styled(Flex)`
  justify-content: center;
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  flex-wrap: wrap;
  box-sizing: content-box;
  width: 100%;

  @media ${theme.mq.tablet} {
    flex-wrap: nowrap;
  }

  .figure {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 0 ${theme.space[5]} ${theme.space[5]} 0;

    flex: 1;

    &:last-child {
      margin-right: 0;
    }

    svg {
      height: 150px;
      width: 100%;

      @media ${theme.mq.tablet} {
        height: 140px;
      }

      @media ${theme.mq.desktop} {
        height: 200px;
      }
    }

    &__spec {
      width: 100%;
      align-items: center;
      justify-content: center;

      font-size: calc(${theme.fontSizes[2]} * 1.15);
      font-weight: 500;
      line-height: 1.75;

      background: ${theme.colors.white};
      border-radius: ${theme.borderRadius};
      margin-top: ${theme.space[4]};
      padding: ${theme.space[1]} 0;

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[2]} * 1.15);
      }

      @media ${theme.mq.desktop} {
        font-size: calc(${theme.fontSizes[2]} * 1.5);
      }

      &__block {
        width: 100%;
      }
    }

    &__caption {
      margin: ${theme.space[3]} 0 0 0;
      text-align: center;
    }
  }
`
