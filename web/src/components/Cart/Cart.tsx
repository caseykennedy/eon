// Announcement:

// ___________________________________________________________________

import React, { useState, useContext } from 'react'

// UI
import { Box } from '../ui'

// Theme
import * as S from './styles.scss'
import theme from '../../../config/theme'

// Components
import Icon from '../Icons'
import Portal from '../Portal'

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'

// ___________________________________________________________________

type Props = {} & typeof defaultProps
const defaultProps = {}

const Cart: React.FC<Props> = () => {
  const {
    store: { checkout, added }
  } = useContext(StoreContext)

  // Navigation toggle
  const [isPortalOpen, setPortalOpen] = useState(false)
  const togglePortal = () => setPortalOpen(!isPortalOpen)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <>
      <Portal
        id="cart-root"
        root="root"
        isOpen={isPortalOpen}
        handleExit={() => setPortalOpen(false)}
      >
        <S.Cart
          className={`cart ${isPortalOpen ? 'cart--open' : 'cart--closed'}`}
        >
          {isPortalOpen && (
            <div>
              {lineItems}
              <p>
                Subtotal $ {checkout.subtotalPrice && checkout.subtotalPrice}
              </p>
              <br />
              <p>Taxes $ {checkout.totalTax && checkout.totalTax}</p>
              <br />
              <p>Total $ {checkout.totalPrice && checkout.totalPrice}</p>
              <br />
              <button
                onClick={handleCheckout}
                disabled={checkout.lineItems.length === 0}
              >
                Check out
              </button>
            </div>
          )}
        </S.Cart>
      </Portal>
      <Box
        bg={`${isPortalOpen && theme.colors.quinary}`}
        className="header-cart"
        aria-label="toggle menu"
        onClick={togglePortal}
      >
        <Icon name="bag" color="black" />
      </Box>
    </>
  )
}

export default Cart

// ___________________________________________________________________

Cart.defaultProps = defaultProps
