// Button Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Link } from 'gatsby'
import { darken } from 'polished'

import { Box, Flex, Heading } from '..'
import {Button} from 'theme-ui'
import theme from '../../../../config/theme'

// ___________________________________________________________________

export const Btn = styled(Button)<{ invert?: boolean }>`
  display: flex;
  justify-content: space-between;
  
  padding: calc(${theme.space[3]} / 1.15) ${theme.space[4]};
  max-width: 400px;

  color: ${p => (!p.invert ? theme.colors.white : theme.colors.text)};
  font-family: ${theme.fonts.heading};
  font-size: calc(${theme.fontSizes[2]} * 1.5);
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 0.5;
  text-transform: capitalize;

  background: ${p => (!p.invert ? theme.colors.cta : theme.colors.secondary)};
  border-radius: 6px;
  transition: ${theme.transition.all};

  @media ${theme.mq.desktop} {
    width: calc(${theme.space[7]} * 4);
    font-size: ${theme.fontSizes[3]};
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
