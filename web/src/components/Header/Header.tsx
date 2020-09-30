// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'

import HamburgerMenu from 'react-hamburger-menu'

// Hooks
import useScrollWatch from '../../hooks/useScrollWatch'

import Logo from '../Logo'
import Navigation from './Navigation'
import NavigationMobile from './NavigationMobile'
import Portal from '../Portal'
import Button from '../ui/Button'
import Icon from '../Icons'
import Overlay from '../Overlay'

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
  // Navigation toggle
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleModal = () => setNavOpen(!isNavOpen)

  // On scroll class change
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [shouldShowBackground, setShouldShowBackground] = useState(false)

  // scrollWatch settings
  const MINIMUM_SCROLL = 2
  const TIMEOUT_DELAY = 0

  // scrollWatch hook to watch for page scroll
  useScrollWatch((callbackData: CallbackTypes) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setShouldShowBackground(currentScrollTop > 53)

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  // Scroll state styles
  const headerBG = shouldShowBackground
    ? theme.colors.background
    : theme.colors.quinary

  return (
    <>
      <Portal
        id="nav-root"
        root="root"
        isOpen={isNavOpen}
        handleExit={() => setNavOpen(false)}
        mainRef={mainRef}
      >
        <Overlay className={`nav-bg ${isNavOpen ? 'nav-bg--open' : 'nav-bg--closed'}`}>
          <NavigationMobile
            handleExit={() => setNavOpen(false)}
            isNavOpen={isNavOpen}
          />
        </Overlay>
      </Portal>

      <S.Header bg={headerBG}>
        <div
          className="header-toggle"
          onClick={toggleModal}
          aria-label="toggle menu"
        >
          <HamburgerMenu
            isOpen={!isNavOpen ? false : true}
            menuClicked={toggleModal}
            width={36}
            height={16}
            strokeWidth={2}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.333}
          />
        </div>

        <div className="header-inner">
          <div className="header-logo">
            <Link to="/" aria-label="eOn Mist, back to home">
              <Logo />
            </Link>
          </div>

          <div className="header-cta">
            <button className={`${shouldShowBackground && 'header--stuck'}`}>
              buy now
            </button>
          </div>
        </div>

        <div className="header-cart">
          <Icon name="bag" color="black" />
        </div>
      </S.Header>
    </>
  )
}

export default Header
