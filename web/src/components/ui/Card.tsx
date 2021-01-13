// Card Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'
import { Box, Flex } from '.'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Card = styled(Flex)<{ inline?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${p => (!p.inline ? `column` : `row-reverse`)};

  border-bottom: ${theme.border};

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    padding: ${theme.space[4]} 0;

    @media ${theme.mq.tablet} {
      padding-top: ${theme.space[4]};
      padding-bottom: ${theme.space[4]};
    }
  }

  h4 a {
    color: ${theme.colors.secondary};
    line-height: 1.5;
    flex: 1;
    width: 100%;

    &:hover {
      color: ${theme.colors.primary};
    }
  }

  .figure {
    background: ${theme.colors.secondary};
    bottom: 0;
    position: relative;
    width: 100%;
    transition: bottom 0.222s ease-in-out 0s;
  }

  &:hover {
    .figure {
      bottom: ${theme.space[2]};
    }
  }

  .title {
    padding-bottom: ${theme.space[4]};

    &--small {
      font-size: calc(${theme.fontSizes[2]});
      margin: 0 0 ${theme.space[4]};

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[3]} / 1.25);
      }
    }
  }
`

export default Card
