// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box } from '../ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const HomePage = styled(Box)`
  .cta {
    a {
      color: ${theme.colors.text};
      position: relative;

      &::before {
        content: '';
        background: ${theme.colors.secondary};
        width: 0;
        height: 1px;

        position: absolute;
        bottom: -4px;
        left: 0;
        right: 0;
        z-index: 0;

        transition: width ${theme.transition.global};
      }

      &:hover {
        &::before {
          width: 100%;
        }
      }

      svg {
        margin-left: ${theme.space[3]};
        width: ${theme.arrowWidth};
      }
    }
  }
`
