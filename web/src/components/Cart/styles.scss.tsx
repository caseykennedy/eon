// Cart Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'
import { Box, Flex } from '../ui'
import { motion } from 'framer-motion'
import theme from '../../../config/theme'

import Headroom from 'react-headroom'

// ___________________________________________________________________

const cartWidth = `700px`

export const Cart = styled(Box)`
  justify-content: flex-start;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
  overflow: auto;
  padding: ${theme.space[7]} ${theme.space[5]} ${theme.space[9]};

  position: fixed;
  top: calc(${theme.headerHeight});

  background: rgb(255, 255, 255, 0.9);
  backdrop-filter: blur(9px);
  opacity: 0;
  visibility: hidden;
  z-index: 991;

  @media ${theme.mq.tablet} {
    border-left: ${theme.border};
    visibility: hidden;
    opacity: 0;
    padding: ${theme.space[7]} ${theme.space[5]};
    right: 0;
    width: ${cartWidth};
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &.cart--open {
    visibility: visible;
    opacity: 1;
    right: 0;
  }

  .cart {
    &__utilities {
      display: flex;
      justify-content: space-between;
      margin-bottom: ${theme.space[6]};
      width: 100%;

      .close-cart {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        span {
          margin-left: ${theme.space[3]};

          svg {
            position: relative;
            right: 0;
            width: calc(${theme.space[4]} / 1.25);
          }
        }

        &:hover {
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

export const CartItems = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .cart-items {
    &__list {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
    }

    &__checkout {
      display: flex;
      flex-direction: column;
      align-items: center;

      border-top: ${theme.border};
      padding-top: ${theme.space[4]};

      .total {
        display: flex;
        justify-content: space-between;
        margin-bottom: ${theme.space[6]};
        width: 100%;

        font-size: ${theme.fontSizes[1]};
        text-transform: uppercase;
      }

      .subtotal {
        display: flex;
        justify-content: space-between;
        width: 100%;

        font-size: ${theme.fontSizes[1]};
        text-transform: uppercase;
      }
    }
  }
`
