// Modal styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { lighten, darken } from 'polished'
import { Box, Flex, Heading } from '../ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Modal = styled(Box)`
  max-width: 500px;
  width: 90vw;
  padding: ${theme.space[5]};

  @media ${theme.mq.tablet} {
  }

  form {
    input {
      border: ${theme.border};
      border-radius: ${theme.borderRadius};
      font-size: calc(${theme.fontSizes[2]} * 1.25);
      padding: ${theme.space[1]} ${theme.space[3]};

      @media ${theme.mq.desktop} {
        font-size: calc(${theme.fontSizes[2]} * 1.5);
      }
    }

    button {
      background: ${theme.colors.primary};
      border: none;
      border-radius: ${theme.borderRadius};

      color: ${theme.colors.white};
      font-size: calc(${theme.fontSizes[3]} / 1.5);
      font-weight: 500;

      margin-top: ${theme.space[2]};
      padding: ${theme.space[3]};
      width: 100%;

      cursor: pointer;

      &:hover {
        background: ${darken(0.05, theme.colors.cta)};
      }

      &:active {
        background: ${theme.colors.black};
        color: ${theme.colors.white};
        border-color: ${theme.colors.black};
      }

      @media ${theme.mq.desktop} {
        transition: ${theme.transition.all};
      }
    }
  }
`
