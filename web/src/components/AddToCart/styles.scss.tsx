// AddToCart Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { Button, Box, Flex } from '../ui'

// ___________________________________________________________________

export const AddToCart = styled(Flex)`
  box-sizing: border-box;
  transition: ${theme.transition.all};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: calc(${theme.space[2]} / 1.15) ${theme.space[3]};
  /* max-width: 400px; */
  /* width: 100%; */

  color: ${theme.colors.white};
  font-family: ${theme.fonts.heading};
  font-size: calc(${theme.fontSizes[2]} * 1.5);
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 0.5;
  text-transform: capitalize;

  background: ${theme.colors.cta};
  border: ${theme.border};
  border-color: ${theme.colors.cta};
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  transition: ${theme.transition.all};

  @media ${theme.mq.desktop} {
    /* width: calc(${theme.space[7]} * 4); */
    font-size: ${theme.fontSizes[3]};
  }

  span {
    margin-left: ${theme.space[7]};
    transition: ${theme.transition.all};

    position: relative;
    right: ${theme.space[2]};

    svg {
      width: calc(${theme.space[5]});
      fill: ${theme.colors.white};

      @media ${theme.mq.desktop} {
        width: calc(${theme.space[6]} / 1.25);
      }
    }
  }

  &:hover {
    background: ${darken(0.05, theme.colors.cta)};
    color: ${theme.colors.white};

    span {
      right: 0;

      svg {
        fill: ${theme.colors.white};
      }
    }
  }

  &:disabled {
    background: ${theme.colors.white};
    border-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  }

  &:active {
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    border-color: ${theme.colors.black};
  }

  .inner {
  }
`

export const TextLink = styled(Box)`
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`
