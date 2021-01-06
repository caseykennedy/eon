// Q1 Page Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box } from '../ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Q1Page = styled(Box)`
  @media ${theme.mq.tablet} {
  }

  .figure-stack {
    position: relative;

    .radial {
    }

    .cans {
      margin: 0 auto;
      position: absolute;
      max-width: 500px;
      width: 100%;
      top: 0;
      right: 0;
      left: 0;
    }

    .thumbs-up {
      margin: 0 auto;
      position: absolute;
      max-width: 125px;
      width: 100%;
      bottom: 0;
      right: 0;

      @media ${theme.mq.tablet} {
        bottom: calc(${theme.space[6]} * -1);
        max-width: 250px;
      }

      @media ${theme.mq.desktop} {
        bottom: calc(${theme.space[6]} * -2);
        max-width: 450px;
      }
    }

    .hand-left {
      margin: 0 auto;
      position: absolute;
      max-width: 125px;
      width: 100%;
      bottom: 0;
      left: 0;

      @media ${theme.mq.tablet} {
        bottom: calc(${theme.space[6]} * -1);
        max-width: 250px;
      }

      @media ${theme.mq.desktop} {
        bottom: calc(${theme.space[6]} * -2);
        max-width: 500px;
      }
    }
  }

  .comparison-table {
    border: ${theme.border};
    border-collapse: collapse;
    border-radius: ${theme.borderRadius};

    tr {
      border: ${theme.border};

      td,
      th {
        border: ${theme.border};
        font-size: ${theme.fontSizes[1]};
        padding: ${theme.space[2]};
        text-align: left;

        @media ${theme.mq.tablet} {
          font-size: ${theme.fontSizes[2]};
          padding: ${theme.space[3]};
        }
      }
    }

    .plus {
      svg {
        transform: rotate(45deg);
        fill: red;
      }
    }

    .check {
      svg {
        fill: ${theme.colors.moneygreen};
      }
    }

    span {
      svg {
        height: 18px;
      }
    }
  }
`
