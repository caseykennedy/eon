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
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
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
      flex-direction: row;
    }

    &__content {
    }

    &__map {
      padding: 0 ${theme.space[4]} ${theme.space[4]};

      @media ${theme.mq.tablet} {
        padding: 0 ${theme.space[5]} ${theme.space[5]};
      }

      @media ${theme.mq.desktop} {
        padding: 0;
      }
    }
  }

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
`
