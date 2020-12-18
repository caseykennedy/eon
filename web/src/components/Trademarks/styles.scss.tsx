// Trademarks styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { transparentize } from 'polished'
import { Flex } from '../ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Trademarks = styled(Flex)`
  justify-content: center;
  flex-wrap: wrap;

  background: ${transparentize(0, theme.colors.lightgray)};
  border-top: ${theme.border};
  border-bottom: ${theme.border};

  height: calc(${theme.trademarksHeight} * 2);
  position: relative;
  z-index: 9;

  @media ${theme.mq.tablet} {
    height: ${theme.trademarksHeight};
  }

  .mark {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-right: ${theme.border};
    padding: ${theme.space[3]} 0;
    white-space: nowrap;
    width: 50%;

    &:nth-child(even) {
      border-right: none;
    }

    &:nth-child(1) {
      /* border-bottom: ${theme.border}; */
    }

    &:nth-child(2) {
      /* border-bottom: ${theme.border}; */
    }

    @media ${theme.mq.tablet} {
      border-right: none;
      border-bottom: none !important;
      padding: ${theme.space[3]} 0;
      /* max-width: 333px; */
      width: 25%;

      &:nth-child(2) {
        /* border-right: ${theme.border}; */
      }
    }

    p {
      color: ${theme.colors.text};
      letter-spacing: 0.25px;
      font-size: calc(${theme.fontSizes[1]} / 1.15);
      margin-top: ${theme.space[2]};

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[1]});
      }
    }
  }

  img {
    height: calc(${theme.space[5]} / 1.15);

    @media ${theme.mq.tablet} {
      height: calc(${theme.space[4]} * 1.25);
    }
  }
`
