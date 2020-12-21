// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState, useRef, useContext } from 'react'
import { Link } from 'gatsby'
import reduce from 'lodash/reduce'
import HamburgerMenu from 'react-hamburger-menu'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box } from '../ui'

// Hooks + context
import useScrollWatch from '../../hooks/useScrollWatch'
import StoreContext from '../../context/StoreContext'

// utils
import * as gtag from '../../utils/gtag'

import Logo from '../SVG/Logo'
import Portal from '../Portal'
import Menu from './Menu'
import Overlay from './Menu/Overlay'
import Cart from '../Cart'
import BuyButton from './BuyButton'
import Icon from '../Icons'

import Navigation from './Navigation'

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
    gtag.event({
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
    // gtag.event({
    //   category: 'Header utilities',
    //   action: 'Click',
    //   label: 'Header hamburger toggle'
    // })
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
        <div className="header-inner">
          <div
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
          </div>

          <div className="header-logo">
            <Link to="/" aria-label="eOn Mist, back to home">
              <Logo />
            </Link>
          </div>

          <div className="header-tools">
            <Navigation />
            <Link to={`/#store-locator`} className="btn">
              store locator
              {/* <Icon name="pin" /> */}
            </Link>
          </div>

          <S.CartToggle
            aria-label="toggle cart"
            onClick={toggleCart}
            className={`${isCartOpen && 'is-open'}`}
          >
            {hasItems && <div className="quantity">{quantity}</div>}
            <Icon name="bag" />
          </S.CartToggle>
        </div>
      </S.Header>
      <Cart mainRef={mainRef} />
    </>
  )
}

export default Header
