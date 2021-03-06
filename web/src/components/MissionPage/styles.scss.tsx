// Mission Page Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box } from '../ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const MissionPage = styled(Box)`
  @media ${theme.mq.tablet} {
  }

  .icon {
    margin-right: ${theme.space[6]};

    svg {
      width: ${theme.space[7]};
    }
  }

  .decorators {
    position: relative;

    .image-clip {
      margin-top: ${theme.space[9]};
      position: absolute;
      top: 0;
      left: ${theme.space[7]};
      z-index: 0;
      width: 100%;

      img {
        clip-path: circle(100px at center);
        position: absolute;
      }
    }
  }
`
