// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'

// Theme
import theme from '../../../../config/theme'
// Elements
import { Flex, AnimatedFlex } from '../../ui'

// Begin Styles
// ___________________________________________________________________

export const NavLinks = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  z-index: 999;
`

export const NavLink = styled(AnimatedFlex)`
  width: 100%;

  a {
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes[3]};
    text-transform: uppercase;
    padding: ${theme.space[3]};
    width: 100%;
  }
`
