// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState, useRef, useContext } from 'react'
import { Link } from 'gatsby'
import reduce from 'lodash/reduce'
import HamburgerMenu from 'react-hamburger-menu'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box } from '../ui'

// Hooks + context
import useScrollWatch from '../../hooks/useScrollWatch'
import StoreContext from '../../context/StoreContext'

import Logo from '../SVG/Logo'
import Portal from '../Portal'
import Menu from './Menu'
import Overlay from './Menu/Overlay'
import Cart from '../Cart'
import BuyButton from './BuyButton'
import Icon from '../Icons'

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
  const toggleCart = () => {
    setCartOpen(!isCartOpen)
    trackCustomEvent({
      category: 'Header utilities',
      action: 'Click',
      label: 'Header cart toggle'
    })
  }

  // Get current cart count
  const useQuantity = () => {
    const items = checkout ? checkout.lineItems : []
    const total = reduce(items, (acc, item) => acc + item.quantity, 0)
    return [total !== 0, total]
  }
  const [hasItems, quantity] = useQuantity()

  // Navigation portal
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => {
    setNavOpen(!isNavOpen)
    trackCustomEvent({
      category: 'Header utilities',
      action: 'Click',
      label: 'Header hamburger toggle'
    })
  }

  // On scroll class change
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [highlightBG, setHighlightBG] = useState(false)

  // scrollWatch settings
  const MINIMUM_SCROLL = 3
  const TIMEOUT_DELAY = 3

  // scrollWatch hook to watch for page scroll
  useScrollWatch((callbackData: CallbackTypes) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setHighlightBG(isScrolledDown)

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  return (
    <>
      <Portal
        id="menu-root"
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
          <Menu
            handleExit={() => setNavOpen(false)}
            isNavOpen={isNavOpen}
            scrollRef={scrollRef}
          />
        </Overlay>
      </Portal>

      <S.Header as="header">
        <Box
          bg={`${isNavOpen && theme.colors.quinary}`}
          className="header-toggle"
          onClick={toggleMenu}
          aria-label="toggle menu"
        >
          <HamburgerMenu
            isOpen={!isNavOpen ? false : true}
            menuClicked={toggleMenu}
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
            <BuyButton setPortalOpen={!setCartOpen} highlightBG={highlightBG} />
          </div>
        </div>

        <S.CartToggle
          bg={`${isCartOpen && theme.colors.quinary}`}
          aria-label="toggle cart"
          onClick={toggleCart}
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
