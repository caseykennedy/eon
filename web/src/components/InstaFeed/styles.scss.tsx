// InstaFeed styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { transparentize } from 'polished'
import { Box } from '../ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const InstaFeed = styled.div`
  .post {
    position: relative;
    z-index: 0;

    .caption {
      background: ${transparentize(0.25, theme.colors.primary)};
      color: ${theme.colors.white};
      
      visibility: none;
      opacity: 0;

      padding: ${theme.space[4]};
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 1;

      transition: ${theme.transition.all};
    }

    &:hover {
      .caption {
        visibility: visible;
        opacity: 1;
      }
    }
  }
`
