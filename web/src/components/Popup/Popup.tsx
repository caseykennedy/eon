// Popup:

// ___________________________________________________________________

import React, { useState, useRef } from 'react'
import reduce from 'lodash/reduce'
import { motion, AnimatePresence } from 'framer-motion'

import FocusLock from 'react-focus-lock'

// UI
import { Box, Button, Text } from '../ui'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// Components
import Icon from '../Icons'
import Portal from '../Portal'

// ___________________________________________________________________

type Props = {
  mainRef: React.RefObject<HTMLDivElement>
  // isPortalOpen: boolean
  // setPortalOpen: (arg0: boolean) => void
}

const PopupInner: React.FC<{ togglePortal: () => void }> = ({
  togglePortal
}) => {
  return (
    <S.PopupInner>
      {/* <Box onClick={togglePortal}>exit</Box> */}
    </S.PopupInner>
  )
}

const Popup: React.FC<Props> = ({ mainRef }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const exitRef = useRef<HTMLDivElement>(null)

  const [isPopupOpen, setPopupOpen] = useState(true)

  // Toggle cart portal
  const togglePortal = () => setPopupOpen(!isPopupOpen)
  return (
    <Portal
      id="cart-root"
      root="main-root"
      isOpen={isPopupOpen}
      handleExit={() => setPopupOpen(false)}
      scrollRef={scrollRef}
      mainRef={mainRef}
      exitRef={exitRef}
    >
      <S.GlobalStyles isOpen={isPopupOpen} />
      <FocusLock persistentFocus={false}>
        <S.Popup
          className={`popup ${isPopupOpen ? 'popup--open' : 'popup--closed'}`}
          id="popup"
          aria-label="popup modal"
          ref={exitRef}
        >
          <AnimatePresence>
            {isPopupOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  transform: theme.transform.matrix.from
                }}
                animate={{ opacity: 1, transform: theme.transform.matrix.to }}
                exit={{ opacity: 0, transform: theme.transform.matrix.from }}
                transition={{ duration: 0.5 }}
              >
                <PopupInner togglePortal={togglePortal} />
              </motion.div>
            )}
          </AnimatePresence>
        </S.Popup>
      </FocusLock>
    </Portal>
  )
}

export default Popup
