// PrivacyPage:

// ___________________________________________________________________

import React, { useContext } from 'react'

import { Box, Flex, Text } from '../ui'

import Section from '../Section'

// Hooks
import useLegal from '../../hooks/useLegal'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// Components
import BlockContent from '../BlockContent'
import AddToCart from '../AddToCart'

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'

// ___________________________________________________________________

type CartItemsProps = {
  adding?: boolean
  checkout: any
}

const CartItems: React.FC<CartItemsProps> = ({ adding, checkout }) => {
  const LineItems = () =>
    checkout.lineItems.map((item: any) => (
      <LineItem key={item.id.toString()} item={item} />
    ))
  // Trigger checkout
  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  console.log(checkout)
  return (
    <S.CartItems>
      {!checkout.lineItems[0] ? (
        <>
          {!adding ? (
            <Text as="p" mt={7} textAlign="center">
              Your cart is empty 😭
              <br />
              <br />
              <AddToCart linkText="Add some eOn!" />
            </Text>
          ) : (
            <Text as="p" mt={7} textAlign="center">
              Adding eOn...
            </Text>
          )}
        </>
      ) : (
        <>
          <div className="cart-items__list">
            <LineItems />
          </div>
          <div className="cart-items__checkout">
            {/* <div className="total">
              <Text>shipping</Text>
              <p>$4.90</p>
            </div> */}
            <Flex justifyContent="flex-end" width={1}>
              <Text as="p" className="full-amount">{checkout.discountApplications[0] && checkout.lineItemsSubtotalPrice.amount}</Text>
            </Flex>
            <div className="total">
              <p>
                SUBTOTAL
              </p>
              <p>${checkout.subtotalPrice && checkout.subtotalPrice}</p>
            </div>
          </div>
          {/* <p>Taxes $ {checkout.totalTax && checkout.totalTax}</p> */}
          <br />
          <button
            onClick={handleCheckout}
            disabled={checkout.lineItems.length === 0}
            aria-label="Checkout"
          >
            Checkout
          </button>
        </>
      )}
    </S.CartItems>
  )
}

const CheckoutPage = () => {
  const {
    store: { checkout, adding }
  } = useContext(StoreContext)
  return (
    <S.CheckoutPage>
      <Section>
        <CartItems adding={adding} checkout={checkout} />
      </Section>
    </S.CheckoutPage>
  )
}

export default CheckoutPage
