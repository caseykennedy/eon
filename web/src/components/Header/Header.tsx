// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState, useRef, useContext } from 'react'
import { Link } from 'gatsby'
import reduce from 'lodash/reduce'
import HamburgerMenu from 'react-hamburger-menu'

// Hooks
import useScrollWatch from '../../hooks/useScrollWatch'

import StoreContext from '../../context/StoreContext'

import Logo from '../Logo'
import Menu from './Menu'
import Portal from '../Portal'
import Overlay from '../Overlay'
import Cart from '../Cart'
import BuyButton from './BuyButton'
import Icon from '../Icons'

// Elements
import { Box } from '../ui'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type HeaderShape = { mainRef: React.RefObject<HTMLDivElement> }

interface CallbackTypes {
  callbackData: any
  previousScrollTop: number
  currentScrollTop: number
}

const Header: React.FC<HeaderShape> = ({ mainRef }) => {
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
  const [hasItems, quantity] = useQuantity()

  // Navigation portal
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleModal = () => setNavOpen(!isNavOpen)

  // On scroll class change
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [highlightBG, setHighlightBG] = useState(false)

  // scrollWatch settings
  const MINIMUM_SCROLL = 2
  const TIMEOUT_DELAY = 0

  // scrollWatch hook to watch for page scroll
  useScrollWatch((callbackData: CallbackTypes) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setHighlightBG(currentScrollTop > 53)

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  // Scroll state styles
  const headerBG = !setHighlightBG
    ? theme.colors.background
    : `rgb(255, 255, 255, 0.7)`

  return (
    <>
      <Portal
        id="nav-root"
        root="root"
        isOpen={isNavOpen}
        handleExit={() => setNavOpen(false)}
        mainRef={mainRef}
        scrollRef={scrollRef}
        exitRef={exitRef}
      >
        <Overlay
          className={`nav-bg ${isNavOpen ? 'nav-bg--open' : 'nav-bg--closed'}`}
        >
          <Menu handleExit={() => setNavOpen(false)} isNavOpen={isNavOpen} scrollRef={scrollRef} />
        </Overlay>
      </Portal>

      <S.Header as="header" bg={headerBG}>
        <Box
          bg={`${isNavOpen && theme.colors.quinary}`}
          className="header-toggle"
          onClick={toggleModal}
          aria-label="toggle menu"
        >
          <HamburgerMenu
            isOpen={!isNavOpen ? false : true}
            menuClicked={toggleModal}
            width={32}
            height={12}
            strokeWidth={1.5}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.333}
          />
        </Box>

        <div className="header-inner">
          <div className="header-logo">
            <Link to="/" aria-label="eOn Mist, back to home">
              <Logo />
            </Link>
          </div>

          <div className="header-cta">
            <BuyButton setPortalOpen={setCartOpen} highlightBG={highlightBG} />
          </div>
        </div>

        <S.CartToggle
          bg={`${isCartOpen && theme.colors.quinary}`}
          aria-label="toggle cart"
          onClick={togglePortal}
        >
          {hasItems && <div className="quantity">{quantity}</div>}
          <Icon name="bag" color="black" />
        </S.CartToggle>
      </S.Header>
      <Cart mainRef={mainRef} />
    </>
  )
}

export default Header
