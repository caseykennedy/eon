// CartNew:

// ___________________________________________________________________

import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { default as ReactModal } from 'react-responsive-modal'
import { transparentize } from 'polished'
import { useCookies } from 'react-cookie'

import theme from '../../gatsby-plugin-theme-ui'

// Context
import StoreContext from '../../context/StoreContext'

// ___________________________________________________________________

type ModalProps = {
  children: React.ReactNode
} & typeof defaultProps

const defaultProps = {
  active: false
}

const CartNew: React.FC<ModalProps> = ({ active, children }) => {
  const {
    isCartOpen,
    setCartOpen,
    store: { checkout, adding }
  } = useContext(StoreContext)
  const closeModal = () => setCartOpen(false)
  return (
    <ReactModal
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

export default CartNew

// ___________________________________________________________________

CartNew.defaultProps = defaultProps

const modalStyles = {
  overlay: {
    background: 'transparent'
  },
  modal: {
    boxShadow: 'none',
    display: 'flex',
    margin: '0 0 0 auto',
    padding: '0',
    height: '100%',
    width: '100%'
  }
}
