// Cart Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken, transparentize } from 'polished'
import { Box, Flex } from '../ui'
import { motion } from 'framer-motion'
import theme from '../../../config/theme'

import Headroom from 'react-headroom'

// ___________________________________________________________________

const cartWidth = `700px`

export const Cart = styled(Box)`
  height: 100%;
  width: ${theme.siteWidth};
  padding: ${theme.space[5]} ${theme.space[4]};

  background: rgb(255, 255, 255, 0.9);
  backdrop-filter: blur(9px);
  opacity: 0;
  visibility: hidden;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  z-index: 9999;
  transition: ${theme.transition.all};

  overflow: scroll;
  -webkit-overflow-scrolling: touch;

  @media ${theme.mq.tablet} {
    border-left: ${theme.border};
    opacity: 0;
    visibility: hidden;

    position: fixed;
    top: ${theme.headerHeight};
    right: 0;
    bottom: 0;
    padding: ${theme.space[5]};
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
      margin-bottom: ${theme.space[4]};
      width: 100%;

      .close-cart {
        align-items: center;
        cursor: pointer;
        margin-left: auto;
        height: 100%;
        padding: 0;
        z-index: 999;

        @media ${theme.mq.tablet} {
        }

        svg {
          width: ${theme.space[4]};
          transform: rotate(45deg);
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
    }

    &__checkout {
      display: flex;
      flex-direction: column;
      align-items: center;

      border-top: ${theme.border};
      border-top-color: ${theme.colors.gray};
      padding-top: ${theme.space[4]};

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
