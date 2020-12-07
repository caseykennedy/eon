// Modal:

// ___________________________________________________________________

import React, { useState } from 'react'
import { default as ReactModal } from 'react-responsive-modal'
import { transparentize } from 'polished'

// Hooks
import { useCookies } from 'react-cookie'

// utils
import * as gtag from '../../utils/gtag'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text } from '../ui'
import { Input } from 'theme-ui'

// Components
import Icon from '../Icons'

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
  const openModal = () => setModalOpen(true)
  const closeModal = () => {
    setModalOpen(false)
    setCookie('new_user_modal', 'true', { path: '/' })
  }
  const togglePortal = () => setModalOpen(!isModalOpen)
  return (
    <ReactModal
      open={isModalOpen}
      onClose={closeModal}
      center={true}
      styles={modalStyles}
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
    boxShadow: 'none',
    padding: '0'
  }
}
