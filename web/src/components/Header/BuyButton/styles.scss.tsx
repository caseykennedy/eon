// BuyButton Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

// Theme
import theme from '../../../../config/theme'

// Elements
import { Flex, AnimatedFlex } from '../../ui'

// ___________________________________________________________________

export const BuyButton = styled.button`
  background-color: ${theme.colors.quinary};
  border: ${theme.border};
  border-radius: ${theme.space[6]};
  
  cursor: pointer;
  outline: none;
  padding: calc(${theme.space[1]} * 1.5) ${theme.space[4]};

  font-weight: 500;
  text-transform: capitalize;
  transition: background-color ${theme.transition.global};

  &:hover {
    background: ${darken(0, theme.colors.cta)};
    color: ${theme.colors.white};
    border-color: ${theme.colors.cta};
  }

  &:active {
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    border-color: ${theme.colors.black};
  }

  &.header--stuck {
    background: ${theme.colors.cta};
    border-color: ${theme.colors.cta};
    color: ${theme.colors.white};

    &:hover {
      background: ${darken(0.08, theme.colors.cta)};
      /* color: ${theme.colors.white}; */
    }

    &:active {
      background: ${theme.colors.black};
      color: ${theme.colors.white};
      border-color: ${theme.colors.black};
    }
  }
`
