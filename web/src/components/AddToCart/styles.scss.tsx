// AddToCart Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

// Elements
import { Button, Box, Flex } from '../ui'

// ___________________________________________________________________

export const AddToCart = styled(Flex)`
  box-sizing: border-box;
  transition: ${theme.transition.all};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: calc(${theme.space[3]} / 1.25) ${theme.space[3]};
  width: 100%;

  color: ${theme.colors.white};
  font-family: ${theme.fonts.heading};
  font-size: calc(${theme.fontSizes[2]} * 1.25);
  font-weight: 500;
  letter-spacing: 0.5px;
  /* line-height: 1; */
  /* text-transform: capitalize; */

  background: ${theme.colors.cta};
  border: ${theme.border};
  border-color: ${theme.colors.cta};
  border-radius: ${theme.borderRadius};
  cursor: pointer;
  outline: none;
  transition: ${theme.transition.all};
  white-space: nowrap;

  @media (min-width: 400px) {
    width: initial;
  }

  @media ${theme.mq.desktop} {
    font-size: calc(${theme.fontSizes[2]} * 1.5);
  }

  span {
    margin-left: ${theme.space[4]};
    transition: ${theme.transition.all};

    position: relative;

    /* display: none; */

    @media ${theme.mq.tablet} {
      display: block;
      margin-left: ${theme.space[7]};
      right: ${theme.space[2]};
    }

    @media ${theme.mq.desktop} {
      margin-left: ${theme.space[9]};
    }

    svg {
      width: calc(${theme.space[4]} * 1.25);
      fill: ${theme.colors.white};

      @media ${theme.mq.desktop} {
        width: calc(${theme.space[5]} / 1);
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

  .smiley {
    display: block;
    margin-left: ${theme.space[3]};
    /* width: calc(${theme.space[5]}); */
  }
`

export const TextLink = styled(Box)`
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`
