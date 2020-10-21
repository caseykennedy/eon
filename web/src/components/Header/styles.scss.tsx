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
  max-height: calc(${theme.headerHeight} * 2);
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

      padding: 0 ${theme.space[3]};

      @media ${theme.mq.tablet} {
        padding: 0 ${theme.space[4]};
      }
    }

    &-logo {
      position: relative;
      top: 1px;
      width: calc(${theme.logoWidth} / 1.15);

      @media ${theme.mq.tablet} {
        top: 3px;
        width: calc(${theme.logoWidth} / 1);
      }

      svg {
        fill: ${theme.colors.black};
      }
    }

    &-cta {
    }

    &-toggle {
      display: flex;
      align-items: center;
      border-right: ${theme.border};
      color: ${theme.colors.text};
      cursor: pointer;

      height: 100%;
      width: 70px;
      padding-left: ${theme.space[3]};
      
      transition: background-color ${theme.transition.global};

      @media ${theme.mq.tablet} {
        width: ${theme.space[7]};
      }

      &:hover {
        background: ${darken(0.05, theme.colors.quinary)};
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
      display: flex;
      align-items: center;
      justify-content: flex-end;

      border-left: ${theme.border};
      color: ${theme.colors.text};
      cursor: pointer;

      padding-right: ${theme.space[3]};
      height: 100%;
      width: 70px;
      transition: background-color ${theme.transition.global};

      @media ${theme.mq.tablet} {
        width: ${theme.space[7]};
      }

      &:hover {
        background: ${darken(0.08, theme.colors.quinary)};
      }

      span {
        svg {
          width: 24px;
        }
      }
    }
  }
`

export const CartToggle = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  border-left: ${theme.border};
  color: ${theme.colors.text};
  cursor: pointer;

  padding-right: ${theme.space[3]};
  position: relative;
  height: 100%;
  width: 70px;
  transition: background-color ${theme.transition.global};

  @media ${theme.mq.tablet} {
    width: ${theme.space[7]};
  }

  &:hover {
    background: ${darken(0.08, theme.colors.quinary)};
  }

  span {
    svg {
      width: 24px;
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
    bottom: ${theme.space[2]};
    right: ${theme.space[2]};

    height: calc(${theme.space[4]} * 1.15);
    width: calc(${theme.space[4]} * 1.15);
  }
`