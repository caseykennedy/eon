// Cart

// ___________________________________________________________________

import React, { useContext, useRef } from 'react'
import reduce from 'lodash/reduce'
import { motion, AnimatePresence } from 'framer-motion'

import FocusLock from 'react-focus-lock'

// utils
import * as gtag from '../../utils/gtag'

// Context
import StoreContext from '../../context/StoreContext'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Text } from '../ui'
import Button from '../ui/Button'

// Components
import Icon from '../Icons'
import AddToCart from '../AddToCart'
import LineItem from './LineItem'
import Drawer from './Drawer'

// ___________________________________________________________________

type Props = {
  mainRef: React.RefObject<HTMLDivElement>
  // isPortalOpen: boolean
  // setPortalOpen: (arg0: boolean) => void
}

type CartItemsProps = {
  adding?: boolean
  checkout: any
  scrollRef?: React.RefObject<HTMLDivElement>
}

// ___________________________________________________________________

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
    gtag.event({
      category: 'Cart',
      action: 'Click',
      label: 'Checkout - cart'
    })
  }
  return (
    <S.CartItems>
      {!checkout.lineItems[0] ? (
        <Box width={1}>
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
        </Box>
      ) : (
        <>
          <div className="cart-items__list">
            <LineItems />
          </div>
          <Text as="span" mt={1} textAlign="center">
            $4.90 flat rate shipping
          </Text>
          <div className="cart-items__checkout">
            <Flex justifyContent="flex-end" width={1}>
              <Text as="p" className="full-amount">{checkout.discountApplications[0] && checkout.lineItemsSubtotalPrice.amount}</Text>
            </Flex>
            <div className="total">
              <p>Subtotal</p>
              <p>${checkout.subtotalPrice && checkout.subtotalPrice}</p>
            </div>
            <Button
              as="button"
              bg={theme.colors.black}
              onClick={handleCheckout}
              disabled={checkout.lineItems.length === 0}
              aria-label="Checkout"
              className="btn"
            >
              Checkout
            </Button>
          </div>
        </>
      )}
    </S.CartItems>
  )
}

const Cart: React.FC<Props> = ({ mainRef }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const exitRef = useRef<HTMLDivElement>(null)

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
  return (
    <Drawer>
      <S.GlobalStyles isOpen={isCartOpen} />
      <FocusLock persistentFocus={false}>
        <S.Cart
          className={`cart ${isCartOpen ? 'cart--open' : 'cart--closed'}`}
          id="cart"
          aria-label="cart drawer flyout"
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
                    <Text color="darkgray">your cart</Text>
                    <Text
                      // as="button"
                      onClick={togglePortal}
                      className="close-cart"
                      aria-label="close cart"
                      data-dismiss="modal"
                      ref={exitRef}
                    >
                      close <Icon name="arrow" />
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
    </Drawer>
  )
}

export default Cart
