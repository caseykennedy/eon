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
  color: ${theme.colors.text};

  height: 100%;

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

    .excerpt {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
  }

  a {
    color: ${theme.colors.text};
    flex: 1;
    width: 100%;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  .figure {
    background: ${theme.colors.secondary};
    position: relative;
    width: 100%;

    transform: scale(1);
    transition: all 0.222s ease-in-out 0s;
  }

  &:hover {
    h4 {
      text-decoration: underline;
    }

    .figure {
      transform: scale(1.1);
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
