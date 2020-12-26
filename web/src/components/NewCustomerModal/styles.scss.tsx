// Modal styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { lighten, darken } from 'polished'
import { Box, Flex, Heading } from '../ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Modal = styled(Box)`
  padding: ${theme.space[4]};
  max-width: 500px;
  width: 90vw;

  @media ${theme.mq.tablet} {
  }

  .decorator {
    display: flex;
    justify-content: flex-end;
    margin-top: calc(${theme.space[6]} * -1);
    margin-bottom: ${theme.space[4]};

    @media ${theme.mq.tablet} {
      margin-top: calc(${theme.space[6]} * -1.5);
    }

    span {
      width: 96px;

      @media ${theme.mq.tablet} {
        width: 128px;
      }
    }
  }

  form {
    input {
      border: ${theme.border};
      border-radius: ${theme.borderRadius};
      font-size: calc(${theme.fontSizes[2]} * 1.15);

      @media ${theme.mq.desktop} {
        /* font-size: calc(${theme.fontSizes[2]} * 1.5); */
      }
    }

    button {
      background: ${theme.colors.black};
      border: none;
      border-radius: ${theme.borderRadius};

      color: ${theme.colors.white};
      font-size: calc(${theme.fontSizes[2]} * 1.15);
      font-weight: 500;

      margin-top: ${theme.space[2]};
      padding: ${theme.space[3]};
      width: 100%;

      cursor: pointer;

      &:hover {
        background: ${lighten(0.15, theme.colors.black)};
      }

      &:active {
        background: ${theme.colors.black};
        color: ${theme.colors.white};
        border-color: ${theme.colors.black};
      }

      span {
        margin-left: ${theme.space[3]};
        width: 16px;

        svg {
          
        }
      }

      @media ${theme.mq.desktop} {
        transition: ${theme.transition.all};
      }
    }
  }
`
