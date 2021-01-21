// Drawer
// https://react-responsive-modal.leopradel.com/

// ___________________________________________________________________

import React, { useContext } from 'react'
import { default as ReactModal } from 'react-responsive-modal'

// Theme
import theme from '../../../gatsby-plugin-theme-ui'

// Context
import StoreContext from '../../../context/StoreContext'

// ___________________________________________________________________

type ModalProps = {
  children: React.ReactNode
} & typeof defaultProps

const defaultProps = {}

const Drawer: React.FC<ModalProps> = ({ children }) => {
  const {
    isCartOpen,
    setCartOpen,
    store: { checkout, adding }
  } = useContext(StoreContext)
  const closeModal = () => setCartOpen(false)
  return (
    <ReactModal
      modalId={`cart-modal`}
      open={isCartOpen}
      onClose={closeModal}
      center={false}
      showCloseIcon={false}
      styles={modalStyles}
    >
      {children}
    </ReactModal>
  )
}

export default Drawer

// ___________________________________________________________________

Drawer.defaultProps = defaultProps

const modalStyles = {
  overlay: {
    background: 'transparent'
  },
  modal: {
    boxShadow: 'none',
  }
}
