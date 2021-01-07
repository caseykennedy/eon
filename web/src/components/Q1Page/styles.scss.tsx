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
    .img {
      transform: scale(1.5);
      margin: ${theme.space[7]} 0;

      @media ${theme.mq.tablet} {
        transform: scale(1);
      }
    }

    .radial {
      z-index: 1;
    }

    .cans {
      margin: 0 auto;
      position: absolute;
      max-width: 150px;
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

    .hand-left {
      margin: 0 auto;
      position: absolute;
      max-width: 600px;
      width: 100%;
      bottom: ${theme.space[5]};
      left: -60%;
      z-index: 3;

      /* display: none; */

      @media ${theme.mq.tablet} {
        display: initial;

        left: -50%;
        bottom: calc(${theme.space[6]} * 3);
        max-width: 900px;
      }

      @media ${theme.mq.desktop} {
        left: -20%;
        bottom: calc(${theme.space[6]} * 2);
        max-width: 1024px;
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
      max-width: 125px;
      width: 100%;
      bottom: 0;
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
