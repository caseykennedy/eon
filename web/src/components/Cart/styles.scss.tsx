// Cart Styles:

// ___________________________________________________________________

import styled, { createGlobalStyle } from 'styled-components'
import { darken, transparentize } from 'polished'
import { Box, Flex } from '../ui'
import { motion } from 'framer-motion'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const cartWidth = `500px`

export const Cart = styled(Box)`
  width: ${theme.siteWidth};
  padding: ${theme.space[4]};

  background: ${theme.colors.white};
  opacity: 0;
  visibility: hidden;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;

  z-index: 9999;
  transition: ${theme.transition.all};

  overflow: scroll;
  -webkit-overflow-scrolling: scroll;

  @media ${theme.mq.tablet} {
    border-left: ${theme.border};
    opacity: 0;
    visibility: hidden;

    position: fixed;
    top: ${theme.headerHeight};
    right: 0;
    bottom: 0;
    padding: ${theme.space[4]} ${theme.space[5]} ${theme.space[5]};
    height: calc(100% - ${theme.headerHeight});
    width: ${cartWidth};
    z-index: 991;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &.cart--open {
    visibility: visible;
    opacity: 1;
  }

  .cart {
    &__utilities {
      display: flex;
      justify-content: space-between;
      margin-bottom: ${theme.space[3]};
      width: 100%;

      .close-cart {
        display: flex;
        align-items: center;
        justify-content: space-between;

        cursor: pointer;
        margin-left: auto;
        height: 100%;
        padding: 0;
        z-index: 999;

        @media ${theme.mq.tablet} {
        }

        svg {
          margin-left: ${theme.space[2]};
          fill: ${theme.colors.black};
          width: calc(${theme.space[3]} * 1.15);
        }
      }
    }

    &__veil {
      background: ${transparentize(0.25, theme.colors.lightgray)};
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

export const CartItems = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  overflow: auto;
  -webkit-overflow-scrolling: touch;

  .cart-items {
    &__list {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      /* overflow: auto;
      -webkit-overflow-scrolling: touch; */
    }

    &__checkout {
      display: flex;
      flex-direction: column;
      align-items: center;

      border-top: ${theme.border};
      /* border-top-color: ${theme.colors.gray}; */
      padding-top: ${theme.space[2]};

      button {
        justify-content: center;
        width: 100%;
      }

      .total {
        display: flex;
        justify-content: space-between;
        margin-bottom: ${theme.space[3]};
        width: 100%;

        p {
          font-size: ${theme.fontSizes[2]};
          font-weight: 600;
          text-transform: uppercase;
        }
      }

      .subtotal {
        display: flex;
        justify-content: space-between;
        width: 100%;

        font-size: ${theme.fontSizes[1]};
        /* text-transform: uppercase; */
      }

      .btn {
        box-sizing: border-box;
        transition: ${theme.transition.all};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: calc(${theme.space[2]} * 1) ${theme.space[3]};

        /* max-width: 400px; */
        /* width: 100%; */

        color: ${theme.colors.white};
        font-family: ${theme.fonts.heading};
        font-size: calc(${theme.fontSizes[2]} * 1.15);
        font-weight: 500;
        letter-spacing: 0.5px;

        /* line-height: 1; */
        /* text-transform: capitalize; */

        background: ${theme.colors.cta};
        border: ${theme.border};
        border-color: ${theme.colors.cta};
        border-radius: ${theme.borderRadius};
        cursor: pointer;
        outline: none;
        transition: ${theme.transition.all};
        white-space: nowrap;

        @media ${theme.mq.tablet} {
        }

        @media ${theme.mq.desktop} {
          font-size: calc(${theme.fontSizes[2]} * 1.5);
        }
        
        &:hover {
          background: ${darken(0.05, theme.colors.cta)};
          color: ${theme.colors.white};

          span {
            right: 0;

            svg {
              fill: ${theme.colors.white};
            }
          }
        }

        &:disabled {
          background: ${theme.colors.white};
          border-color: ${theme.colors.white};
          color: ${theme.colors.primary};
        }

        &:active {
          background: ${theme.colors.black};
          color: ${theme.colors.white};
          border-color: ${theme.colors.black};
        }
      }
    }
  }
`

export const Exit = styled(Flex)`
  align-items: center;
  cursor: pointer;
  margin-left: auto;
  height: 100%;
  padding: 0 ${theme.space[3]};
  z-index: 999;

  @media ${theme.mq.tablet} {
  }

  svg {
    width: ${theme.space[4]};
    transform: rotate(45deg);
  }
`

export const GlobalStyles = createGlobalStyle<{ isOpen?: boolean }>`
  html,
  body {
    height: 100%;

    @media (max-width: 400px) {
      overflow: ${p => (p.isOpen ? 'auto' : 'initial')};
      -webkit-overflow-scrolling: touch;
    }
  }
`
