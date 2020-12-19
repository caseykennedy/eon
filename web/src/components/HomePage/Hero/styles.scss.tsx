// Hero Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const Hero = styled.div`
  display: flex;
  flex-wrap: wrap;

  min-height: 825px;

  @media ${theme.mq.tablet} {
    height: calc(
      100vh - calc(${theme.headerHeight} * 2) - ${theme.trademarksHeight}
    );
    max-height: 1024px;
    min-height: 500px;
  }

  .card {
    color: ${theme.colors.text};
    position: relative;

    &.billboard {
      border-bottom: ${theme.border};
      min-height: 50vh;

      @media ${theme.mq.desktop} {
        border-bottom: none;
        border-right: ${theme.border};
        min-height: initial;
      }
    }

    &.sideboard {
    }

    &__inner {
      flex-direction: column;
      justify-content: space-between;
      overflow: visible;
      
      height: 100%;
      width: 100%;
    }

    &__tagline {
      position: relative;
      z-index: 9;
    }

    &__figure {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;

      .figure {
        width: 100%;
      }
    }

    &__message {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;

      width: 100%;
      position: relative;
      z-index: 9;

      @media ${theme.mq.tablet} {
        display: block;
      }
    }
  }

  .decorator {
    position: absolute;
    top: calc(${theme.space[4]} * 1);
    right: calc(${theme.space[4]} * 1);

    margin-left: auto;
    width: calc(${theme.space[7]} / 1.15);
    z-index: 999;

    @media ${theme.mq.tablet} {
      width: calc(${theme.space[7]} * 1.25);
    }

    &--multi {
      position: absolute;
      top: ${theme.space[4]};
      right: ${theme.space[4]};

      margin-left: auto;
      width: calc(${theme.space[6]} / 1.15);
      z-index: 999;
    }
  }

  .link {
    color: ${theme.colors.text};
    position: relative;
    width: 100%;

    padding: ${theme.space[4]};

    @media ${theme.mq.tablet} {
      padding: ${theme.space[5]};
    }

    @media ${theme.mq.desktop} {
      padding: ${theme.space[5]} ${theme.space[6]};
    }

    .btn {
      box-sizing: border-box;
      transition: ${theme.transition.all};

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: ${theme.space[2]} 0 ${theme.space[2]} 0;
      width: 100%;

      color: ${theme.colors.tertiary};
      font-size: calc(${theme.fontSizes[2]} * 1);

      background: transparent;
      border: none;
      /* border-bottom: ${theme.border};
      border-color: transparent; */
      cursor: pointer;
      outline: none;
      transition: ${theme.transition.all};
      white-space: nowrap;

      &::after {
        background: ${theme.colors.primary};
        content: '';
        position: absolute;
        height: 2px;
        width: 0;
        bottom: 0;
        left: 0;
        transition: width 0.222s ease-in-out 0s;
      }

      @media ${theme.mq.desktop} {
        font-size: calc(${theme.fontSizes[2]} * 1.25);
        padding: ${theme.space[3]} 0 ${theme.space[3]} 0;
      }

      span {
        margin-left: ${theme.space[4]};
        transition: ${theme.transition.all};

        position: relative;

        /* display: none; */

        @media ${theme.mq.tablet} {
          display: block;
          margin-left: ${theme.space[7]};
          right: ${theme.space[2]};
        }

        @media ${theme.mq.desktop} {
          margin-left: ${theme.space[6]};
        }

        svg {
          width: ${theme.space[4]};
          fill: ${theme.colors.tertiary};

          @media ${theme.mq.desktop} {
            width: ${theme.space[4]};
          }
        }
      }

      &:hover {
        border-color: ${theme.colors.primary};
        color: ${theme.colors.primary};

        span {
          right: 0;

          svg {
            fill: ${theme.colors.primary};
          }
        }
      }
    }

    &:hover {
      .btn {
        border-color: ${theme.colors.primary};
        color: ${theme.colors.primary};

        &::after {
          width: 100%;
        }

        span {
          right: 0;

          svg {
            fill: ${theme.colors.primary};
          }
        }
      }
    }
  }
`

export const Decorator = styled.div`
  @media ${theme.mq.tablet} {
  }
`
