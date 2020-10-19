// Announcement:

// ___________________________________________________________________

import React, { useState, useContext, useRef } from 'react'
import reduce from 'lodash/reduce'
import { motion, AnimatePresence } from 'framer-motion'

import FocusLock from 'react-focus-lock'

// UI
import { Button, Text } from '../ui'

// Theme
import * as S from './styles.scss'
import theme from '../../../config/theme'

// Components
import Icon from '../Icons'
import Portal from '../Portal'

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'

// ___________________________________________________________________

type Props = {
  mainRef?: React.RefObject<HTMLDivElement>
  // isPortalOpen: boolean
  // setPortalOpen: (arg0: boolean) => void
}

// ___________________________________________________________________

type CartItemsProps = {
  adding?: boolean
  checkout: any
  scrollRef?: React.RefObject<HTMLDivElement>
}

const CartItems: React.FC<CartItemsProps> = ({
  adding,
  checkout,
  scrollRef
}) => {
  const LineItems = () =>
    checkout.lineItems.map((item: any) => (
      <LineItem key={item.id.toString()} item={item} />
    ))
  // Trigger checkout
  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }
  return (
    <S.CartItems>
      {!checkout.lineItems[0] ? (
        <p>{!adding ? 'Your cart is empty 😭' : 'Adding eOn...'}</p>
      ) : (
        <>
          <div className="cart-items__list">
            <LineItems />
          </div>
          <div className="cart-items__checkout">
            <div className="subtotal">
              <Text as="p" color="darkgray">
                Subtotal
              </Text>
              <Text as="p" color="darkgray">
                ${checkout.subtotalPrice && checkout.subtotalPrice}
              </Text>
            </div>
            <div className="total">
              <p>Total</p>
              <p>${checkout.totalPrice && checkout.totalPrice}</p>
            </div>
            <Button
              onClick={handleCheckout}
              disabled={checkout.lineItems.length === 0}
            >
              Check Out
            </Button>
          </div>
          {/* <p>Taxes $ {checkout.totalTax && checkout.totalTax}</p>
      <br /> */}
        </>
      )}
    </S.CartItems>
  )
}

const Cart: React.FC<Props> = ({ mainRef }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const exitRef = useRef<HTMLButtonElement>(null)

  const {
    isCartOpen,
    setCartOpen,
    store: { checkout, adding }
  } = useContext(StoreContext)
  // Toggle cart portal
  const togglePortal = () => setCartOpen(!isCartOpen)
  // Get current cart count
  const useQuantity = () => {
    const items = checkout ? checkout.lineItems : []
    const total = reduce(items, (acc, item) => acc + item.quantity, 0)
    return [total !== 0, total]
  }
  const [hasItems, quantity] = useQuantity()
  return (
    <>
      <FocusLock persistentFocus={false}>
        <S.Cart
          className={`cart ${isCartOpen ? 'cart--open' : 'cart--closed'}`}
          id="cart"
          role="dialog"
          aria-modal={true}
          aria-labeledby="cart-modal"
          tabIndex={-1}
        >
          <AnimatePresence>
            {isCartOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  transform: theme.transform.matrix.from
                }}
                animate={{ opacity: 1, transform: theme.transform.matrix.to }}
                exit={{ opacity: 0, transform: theme.transform.matrix.from }}
                transition={{ duration: 0.5 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
                ref={scrollRef}
              >
                <>
                  {/* <div className="cart__veil" /> */}
                  <div className="cart__utilities">
                    <Text color="darkgray">Your cart</Text>
                    <Text
                      as="button"
                      onClick={togglePortal}
                      className="close-cart"
                      aria-label="close cart"
                      data-dismiss="modal"
                      ref={exitRef}
                    >
                      {/* <Icon name="plus" color="black" /> */}
                      close
                    </Text>
                  </div>
                  <CartItems
                    adding={adding}
                    checkout={checkout}
                    scrollRef={scrollRef}
                  />
                </>
              </motion.div>
            )}
          </AnimatePresence>
        </S.Cart>
      </FocusLock>
    </>
  )
}

export default Cart
