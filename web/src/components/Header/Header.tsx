// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'

import { Parallax } from 'react-scroll-parallax'

import Logo from '../Logo'
import Navigation from './Navigation'
import NavLinks from './NavLinks'
import Overlay from '../Overlay'
import Button from '../../elements/Button'
import Icon from '../Icons'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type HeaderShape = { mainRef: React.RefObject<HTMLDivElement> }

const Header: React.FC<HeaderShape> = ({ mainRef }) => {
  // Navigation toggle
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleModal = () => setNavOpen(!isNavOpen)

  return (
    <>
      {/* <Overlay
        id="nav-root"
        root="root"
        isOpen={isNavOpen}
        handleExit={() => setNavOpen(false)}
        mainRef={mainRef}
        className={`nav-bg ${isNavOpen ? 'nav-bg--open' : 'nav-bg--closed'}`}
      >
        <NavLinks handleExit={() => setNavOpen(false)} isNavOpen={isNavOpen} />
      </Overlay> */}

      <S.Header as="header" p={5}>
        <S.Logo className="logo--dark">
          <Link to="/" aria-label="eOn Mist, back to home">
            {/* <Logo /> */}
            eOn Mist
          </Link>
        </S.Logo>

        <S.Tools>
          <S.Toggle onClick={toggleModal} aria-label="toggle menu">
            <Icon name="hamburger" color="black" />
          </S.Toggle>

          {/* <S.Nav>
            <Navigation />
          </S.Nav> */}
        </S.Tools>
      </S.Header>
    </>
  )
}

export default Header
