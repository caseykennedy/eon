// CheckoutPage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex } from '../ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const CheckoutPage = styled(Box)`
  @media ${theme.mq.tablet} {
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
    }
  }

  .full-amount {
    color: ${theme.colors.tertiary};
    text-decoration: line-through;
  }
`
