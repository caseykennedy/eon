// Retailers Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../Section'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Retailers = styled(Section)`
  @media ${theme.mq.tablet} {
  }

  .retailers-grid {
    align-items: center;
    justify-content: center;

    &__cell {
      justify-content: center;
      height: auto;
      width: 100%;
      /* height: 40px; */

      div {
        max-width: 130px;
        width: 100%;

        img {
          width: 100%;
        }
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
