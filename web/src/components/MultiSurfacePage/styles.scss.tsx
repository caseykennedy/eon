// MultiSurfacePage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box } from '../ui'
import Section from '../Section'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const MultiSurfacePage = styled(Box)`
  @media ${theme.mq.tablet} {
  }

  .hand {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    img {
      width: 50%;
    }
  }

  .features {
    ul {
    
    }
  }

  .split {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;

    @media ${theme.mq.desktop} {
      /* flex-direction: row; */
    }

    &__content {
    }

    &__map {
      margin-top: ${theme.space[6]};
      padding: 0 ${theme.space[4]} ${theme.space[4]};

      @media ${theme.mq.tablet} {
        margin-top: 0;
        padding: 0 ${theme.space[5]} ${theme.space[5]};
      }

      @media ${theme.mq.desktop} {
        padding: 0 ${theme.space[6]} ${theme.space[6]};
      }
    }
  }
`
