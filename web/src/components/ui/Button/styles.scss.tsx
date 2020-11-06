// Button Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Link } from 'gatsby'
import { darken } from 'polished'

import { Box, Flex, Heading } from '..'
import {Button} from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Btn = styled(Button)<{ invert?: boolean }>`
  display: flex;
  justify-content: space-between;
  
  padding: ${theme.space[3]} ${theme.space[4]};
  max-width: 400px;

  color: ${p => (!p.invert ? theme.colors.white : theme.colors.text)};
  font-family: ${theme.fonts.heading};
  font-size: calc(${theme.fontSizes[2]} * 1.5);
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 0.5;
  text-transform: capitalize;

  background: ${p => (!p.invert ? theme.colors.cta : theme.colors.secondary)};
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition.all};

  @media ${theme.mq.tablet} {
    padding: calc(${theme.space[2]} / 1.25) ${theme.space[3]};
  }

  @media ${theme.mq.desktop} {
    width: calc(${theme.space[7]} * 4);
    font-size: ${theme.fontSizes[3]};
    padding: calc(${theme.space[2]} / 1.25) ${theme.space[2]};
  }

  &:hover {
    background: ${darken(0.05, theme.colors.cta)};
    color: ${p => (!p.invert ? theme.colors.white : theme.colors.text)};

    span {
      margin-right: 0;

      svg {
        fill: ${p => (!p.invert ? theme.colors.white : theme.colors.text)};
      }
    }
  }

  &:active {
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    border-color: ${theme.colors.black};
  }

  span {
    margin-right: ${theme.space[3]};
    transition: ${theme.transition.all};

    svg {
      width: ${theme.iconWidth};
      fill: ${p => (p.invert ? theme.colors.white : theme.colors.secondary)};
    }
  }
`
