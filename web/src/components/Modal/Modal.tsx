// Modal:

// ___________________________________________________________________

import React, { useState } from 'react'
import { default as ReactModal } from 'react-responsive-modal'
import { transparentize } from 'polished'
import { useCookies } from 'react-cookie'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type ModalProps = {
  children: React.ReactNode
} & typeof defaultProps

const defaultProps = {
  active: false
}

const Modal: React.FC<ModalProps> = ({ active, children }) => {
  const [isModalOpen, setModalOpen] = useState(active)
  const [cookie, setCookie, removeCookie] = useCookies(['new_user_modal'])
  const closeModal = () => {
    setModalOpen(false)
    setCookie('new_user_modal', 'true', { path: '/' })
  }
  const openModal = () => setModalOpen(true)
  const togglePortal = () => setModalOpen(!isModalOpen)
  return (
    <ReactModal
      open={isModalOpen}
      onClose={closeModal}
      center={true}
      styles={modalStyles}
      focusTrapped={false}
    >
      {children}
    </ReactModal>
  )
}

export default Modal

// ___________________________________________________________________

Modal.defaultProps = defaultProps

const modalStyles = {
  overlay: {
    background: transparentize(0.1, theme.colors.babyblue)
  },
  modal: {
    borderRadius: theme.borderRadius,
    boxShadow: 'none',
    padding: '0'
  }
}
