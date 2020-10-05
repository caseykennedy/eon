// NavigationMobile:
// Navigation links

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { useTransition } from 'react-spring'

import { motion, AnimatePresence } from 'framer-motion'

import { Box, Text } from '../../ui'

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
    <S.NavLink onClick={handleExitOnClick} style={transition}>
      <Link to={item.link} className="nav-mobile__link">
        {item.name}
      </Link>
    </S.NavLink>
  )
}

const NavigationMobile: React.FC<NavLinksProps> = ({
  handleExit,
  isNavOpen
}) => {
  return (
    <S.NavLinks>
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, transform: theme.transform.matrix.from }}
            animate={{ opacity: 1, transform: theme.transform.matrix.to }}
            exit={{ opacity: 0, transform: theme.transform.matrix.from }}
            transition={{ duration: 0.5 }}
          >
            <h2>
              eOn is professional-grade hand sanitation made easy. One quick
              spray is all it takes to know your hands are 100% clean.
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
    </S.NavLinks>
  )
}

export default NavigationMobile

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
