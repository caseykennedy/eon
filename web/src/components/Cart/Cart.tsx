// Announcement:

// ___________________________________________________________________

import React, { useState, useContext, useRef } from 'react'
import reduce from 'lodash/reduce'
import { motion, AnimatePresence } from 'framer-motion'

// UI
import { Box, Flex, Text } from '../ui'
import Button from '../ui/Button'

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
  mainRef: React.RefObject<HTMLDivElement>
  isPortalOpen: boolean
  setPortalOpen: (arg0: boolean) => void
}

// ___________________________________________________________________

const CartItems: React.FC<{ checkout: any }> = ({ checkout }) => {
  const LineItems = () =>
    checkout.lineItems.map((item: any) => (
      <LineItem key={item.id.toString()} item={item} />
    ))
  // Trigger checkout
  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }
  return (
    <>
      <LineItems />
      <p>Subtotal $ {checkout.subtotalPrice && checkout.subtotalPrice}</p>
      <br />
      {/* <p>Taxes $ {checkout.totalTax && checkout.totalTax}</p>
      <br /> */}
      <Flex alignItems="center" justifyContent="space-between">
        <Text as="p" mb={0}>
          Total $ {checkout.totalPrice && checkout.totalPrice}
        </Text>
        <button
          onClick={handleCheckout}
          disabled={checkout.lineItems.length === 0}
        >
          Check out
        </button>
      </Flex>
    </>
  )
}

const Cart: React.FC<Props> = ({ mainRef, setPortalOpen, isPortalOpen }) => {
  const {
    store: { checkout, adding }
  } = useContext(StoreContext)
  // Toggle cart portal
  const togglePortal = () => setPortalOpen(!isPortalOpen)
  // Get current cart count
  const useQuantity = () => {
    const items = checkout ? checkout.lineItems : []
    const total = reduce(items, (acc, item) => acc + item.quantity, 0)
    return [total !== 0, total]
  }
  const [hasItems, quantity] = useQuantity()
  return (
    <>
      <Portal
        id="cart-root"
        root="root"
        isOpen={isPortalOpen}
        handleExit={() => setPortalOpen(false)}
        mainRef={mainRef}
      >
        <S.Cart
          className={`cart ${isPortalOpen ? 'cart--open' : 'cart--closed'}`}
        >
          <AnimatePresence>
            {isPortalOpen && (
              <motion.div
                initial={{ opacity: 0, transform: theme.transform.matrix.from }}
                animate={{ opacity: 1, transform: theme.transform.matrix.to }}
                exit={{ opacity: 0, transform: theme.transform.matrix.from }}
                transition={{ duration: 0.5 }}
              >
                {!checkout.lineItems[0] ? (
                  <p>{!adding ? 'Your cart is empty.' : 'Adding items...'}</p>
                ) : (
                  <CartItems checkout={checkout} />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </S.Cart>
      </Portal>
      <Box
        bg={`${isPortalOpen && theme.colors.quinary}`}
        className="header-cart"
        aria-label="toggle menu"
        onClick={togglePortal}
      >
        {hasItems && <Box>({quantity})</Box>}
        <Icon name="bag" color="black" />
      </Box>
    </>
  )
}

export default Cart
