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
  height: 100%;
  width: 100%;
  padding: ${theme.space[4]};

  background: ${theme.colors.white};
  opacity: 0;
  visibility: hidden;

  position: relative;
  top: 0;
  right: 0;
  bottom: 0;

  z-index: 9999;
  transition: ${theme.transition.all};

  overflow: scroll;
  -webkit-overflow-scrolling: scroll;

  & > div {
    width: 100%;
  }

  @media ${theme.mq.tablet} {
    border-left: ${theme.border};
    opacity: 0;
    visibility: hidden;

    right: 0;
    bottom: 0;
    padding: ${theme.space[4]} ${theme.space[5]} ${theme.space[5]};
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
        justify-content: center;
        width: 100%;
      }
    }
  }

  .full-amount {
    font-size: ${theme.fontSizes[2]};
          font-weight: 600;
          text-transform: uppercase;
    color: ${theme.colors.tertiary};
    text-decoration: line-through;
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
