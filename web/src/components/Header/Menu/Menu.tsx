// NavigationMobile:
// Navigation links

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { useTransition } from 'react-spring'

import { motion, AnimatePresence } from 'framer-motion'

import { Box, Text } from '../../ui'
import BuyButton from '../../BuyButton'

import theme from '../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type LinkProps = {
  item: {
    link: string
    name: string
  }
  transition: any
  handleExitOnClick: () => void
}

type NavLinksProps = {
  handleExit: () => void
  isNavOpen: boolean
}

// ___________________________________________________________________

const NavLink = ({ item, transition, handleExitOnClick }: LinkProps) => {
  return (
    <S.MenuItems onClick={handleExitOnClick} style={transition}>
      <Link to={item.link} className="nav-mobile__link">
        {item.name}
      </Link>
    </S.MenuItems>
  )
}

const Menu: React.FC<NavLinksProps> = ({ handleExit, isNavOpen }) => {
  return (
    <S.Menu>
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, transform: theme.transform.matrix.from }}
            animate={{ opacity: 1, transform: theme.transform.matrix.to }}
            exit={{ opacity: 0, transform: theme.transform.matrix.from }}
            transition={{ duration: 0.5 }}
          >
            <Box width={8 / 10}>
              <h2>
                Please pardon our dust. We’re building an exciting new eOn
                sanitizing mist™ website experience, chockful of info, usage
                tips, support and more.
              </h2>
              <p>Coming soon.</p>
            </Box>
            <Box>
              <BuyButton />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </S.Menu>
  )
}

export default Menu

// ___________________________________________________________________

const navData = [
  {
    name: 'about',
    link: '/rethink'
  },
  {
    name: 'how it works',
    link: '/about'
  },
  {
    name: 'tips & faq',
    link: '/implants'
  }
]
