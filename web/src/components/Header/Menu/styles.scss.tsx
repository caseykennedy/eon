// Menu Styles:

// ___________________________________________________________________

import styled from 'styled-components'

// Theme
import theme from '../../../../config/theme'

// Elements
import { Flex, AnimatedFlex } from '../../ui'

// Begin Styles
// ___________________________________________________________________

export const Menu = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  /* padding-top: ${theme.space[5]}; */
  width: 100%;
`

export const MenuItems = styled(AnimatedFlex)`
  
`

