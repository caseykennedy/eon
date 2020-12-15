// Menu Styles:

// ___________________________________________________________________

import styled from 'styled-components'

// Theme
import theme from '../../../gatsby-plugin-theme-ui'

// Elements
import { Flex, AnimatedFlex } from '../../ui'

// Begin Styles
// ___________________________________________________________________

export const Menu = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  /* padding-top: ${theme.space[5]}; */
  width: 100%;

  .motion {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    a {
      font-size: ${theme.fontSizes[3]};
      padding: ${theme.space[3]} 0;
    }
  }

  .icon {
    margin-right: ${theme.space[4]};

    svg {
      width: ${theme.space[6]};
    }
  }
`

export const MenuItems = styled(AnimatedFlex)``
