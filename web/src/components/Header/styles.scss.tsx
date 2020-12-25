// Header Styles:

// ___________________________________________________________________

// Core
import { Link } from 'gatsby'
import styled from 'styled-components'
import { readableColor, darken } from 'polished'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

// Elements
import { Box, Flex, AnimatedFlex } from '../ui'

// ___________________________________________________________________

export const Header = styled(Flex)`
  align-items: center;
  justify-content: space-between;

  background: rgb(255, 255, 255, 0.7);
  backdrop-filter: blur(9px);
  border-top: ${theme.border};
  border-bottom: ${theme.border};
  
  height: ${theme.headerHeight};
  max-width: ${theme.siteWidth};
  width: ${theme.siteWidth};

  position: sticky;
  top: 0;
  z-index: 999;

  @media ${theme.mq.tablet} {
  }

  .header {
    &-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;

      padding: 0 ${theme.space[4]};

      @media ${theme.mq.tablet} {
        padding: 0 ${theme.space[5]};
      }

      @media ${theme.mq.desktop} {
        padding: 0 ${theme.space[6]};
      }
    }

    &-logo {
      position: relative;
      top: 1px;
      width: calc(${theme.logoWidth} / 1.15);

      @media ${theme.mq.tablet} {
        /* top: 3px; */
        width: calc(${theme.logoWidth} / 1);
      }

      svg {
        fill: ${theme.colors.black};
      }
    }

    &-tools {
      display: none;
      align-items: center;
      justify-content: space-between;
      margin: 0 ${theme.space[4]};
      width: 100%;

      @media ${theme.mq.tablet} {
        display: flex;
        margin: 0 ${theme.space[5]};
      }

      .btn {
        display: flex;
        align-items: center;
        justify-content: center;

        background: ${theme.colors.babyblue};
        border: ${theme.border};
        border-color: ${theme.colors.black};
        border-radius: ${theme.space[6]};
        
        cursor: pointer;
        outline: none;
        padding: calc(${theme.space[1]} * 1.5) ${theme.space[3]};

        color: ${theme.colors.text};
        font-size: calc(${theme.fontSizes[1]});
        font-weight: 500;
        text-transform: capitalize;
        transition: background-color ${theme.transition.global};

        @media ${theme.mq.tablet} {
          padding: calc(${theme.space[1]} * 1.5) ${theme.space[4]};
        }

        &:hover,
        &:active {
          background: ${theme.colors.black};
          color: ${theme.colors.white};
          border-color: ${theme.colors.black};
        }

        span {
          margin-left: ${theme.space[3]};

          svg {
            width: 14px;
          }
        }
      }
    }

    &-toggle {
      flex: 1;
      display: flex;
      align-items: center;
      
      color: ${theme.colors.text};
      cursor: pointer;
      height: 100%;

      @media ${theme.mq.tablet} {
        display: none;
        width: ${theme.space[7]};
      }

      &:hover {
      }

      /* &:active {
        background: ${theme.colors.black};
        color: ${theme.colors.white};
        border-color: ${theme.colors.black};
      } */

      span {
        svg {
          /* width: 36.18px; */
        }
      }
    }

    &-cart {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      /* border-left: ${theme.border}; */
      color: ${theme.colors.text};
      cursor: pointer;

      /* padding-right: ${theme.space[3]}; */
      position: relative;
      height: 100%;
      /* width: 70px; */
      transition: background-color ${theme.transition.global};

      @media ${theme.mq.tablet} {
        /* width: ${theme.space[7]}; */
      }

      span {
        svg {
          stroke: ${theme.colors.black};
          width: 24px;
        }
      }

      &:hover,
      &.is-open {
        /* background: ${darken(0.08, theme.colors.quinary)}; */
        svg {
          stroke: ${theme.colors.darkgray};
        }
      }

      .quantity {
        display: flex;
        align-items: center;
        justify-content: center;

        background: ${theme.colors.primary};
        border-radius: 999px;

        color: ${theme.colors.white};
        font-size: 0.8rem;
        font-weight: 600;

        position: absolute;
        top: ${theme.space[4]};
        right: calc(${theme.space[3]} * -0.5);

        height: calc(${theme.space[4]} * 1.15);
        width: calc(${theme.space[4]} * 1.15);
      }
    }
  }
`

