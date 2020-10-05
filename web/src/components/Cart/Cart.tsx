// Announcement:

// ___________________________________________________________________

import React, { useState, useContext, useRef } from 'react'

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

type Props = { mainRef: React.RefObject<HTMLDivElement> } & typeof defaultProps
const defaultProps = {}

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
    </>
  )
}

const Cart: React.FC<Props> = ({ mainRef }) => {
  // use shopify store context
  const {
    store: { checkout }
  } = useContext(StoreContext)

  // Toggle portal
  const [isPortalOpen, setPortalOpen] = useState(false)
  const togglePortal = () => setPortalOpen(!isPortalOpen)

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
          {isPortalOpen && (
            <>
              {!checkout.lineItems[0] ? (
                <p>Your cart is empty.</p>
              ) : (
                <CartItems checkout={checkout} />
              )}
            </>
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
