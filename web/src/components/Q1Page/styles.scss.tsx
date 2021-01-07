// Q1 Page Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box } from '../ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Q1Page = styled(Box)`
  overflow: hidden;

  @media ${theme.mq.tablet} {
  }

  .figure-stack {
    .burst {
      z-index: 1;
      margin: 0 auto;
      position: absolute;
      max-width: 800px;
      width: 100%;

      top: 0;
      right: 0;
      left: 0;
    }

    .countertop {
      .img {
        transform: scale(1.7);
        margin: ${theme.space[7]} 0;

        @media (min-width: 400px) {
          transform: scale(1.25);
        }

        @media ${theme.mq.desktop} {
          transform: scale(1);
        }
      }
    }

    .cans {
      position: relative;
      margin: 0 auto;
      /* max-width: 400px; */
      width: 90%;
      z-index: 5;
    }

    .hand-left {
      margin: 0 auto;
      position: absolute;
      max-width: 600px;
      width: 100%;
      bottom: ${theme.space[8]};
      left: -60%;
      z-index: 3;

      /* display: none; */

      @media ${theme.mq.tablet} {
        display: initial;

        left: -50%;
        bottom: calc(${theme.space[6]} * 3);
        width: 80%;
        max-width: 800px;
      }

      @media ${theme.mq.desktop} {
        left: -10%;
        bottom: calc(${theme.space[6]} * 2);
        width: 80%;
        max-width: 800px;
      }
    }

    .wipes {
      margin: 0 auto;
      position: absolute;
      max-width: 333px;
      width: 100%;
      top: 0;
      right: 0;
      left: 0;
      z-index: 5;

      @media ${theme.mq.tablet} {
        max-width: 400px;
      }

      @media ${theme.mq.desktop} {
        max-width: 475px;
      }
    }

    .thumbs-up {
      margin: 0 auto;
      position: absolute;
      max-width: 165px;
      width: 100%;
      bottom: calc(${theme.space[8]} * -1);
      right: calc(${theme.space[4]} * -1);

      @media ${theme.mq.tablet} {
        bottom: calc(${theme.space[6]} * -1);
        max-width: 250px;
      }

      @media ${theme.mq.desktop} {
        bottom: calc(${theme.space[6]} * -2);
        max-width: 450px;
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
