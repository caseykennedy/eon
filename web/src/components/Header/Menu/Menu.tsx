// Menu Overlay:
// Navigation links

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import { motion, AnimatePresence } from 'framer-motion'

// Components
import { Box, Flex, Heading, Text } from '../../ui'

import theme from '../../../gatsby-plugin-theme-ui'
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

type MenuProps = {
  handleExit: () => void
  isNavOpen: boolean
}

// ___________________________________________________________________

// const NavLink = ({ item, transition, handleExitOnClick }: LinkProps) => {
//   return (
//     <S.MenuItems onClick={handleExitOnClick} style={transition}>
//       <Link to={item.link} className="nav-mobile__link">
//         {item.name}
//       </Link>
//     </S.MenuItems>
//   )
// }

const Menu: React.FC<MenuProps> = ({ handleExit, isNavOpen }) => {
  return (
    <S.Menu>
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, transform: theme.transform.matrix.from }}
            animate={{ opacity: 1, transform: theme.transform.matrix.to }}
            exit={{ opacity: 0, transform: theme.transform.matrix.from }}
            className="motion"
          >
            {sitemap.map((link, idx) => (
              <Link to={link.link} key={idx}>
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </S.Menu>
  )
}

export default Menu

// ___________________________________________________________________

const sitemap = [
  {
    name: 'hand sanitizer',
    link: '/products/eon-continuous-spray-hand-sanitizer-80'
  },
  {
    name: 'multi-surface disinfectant',
    link: '/eon-multi-surface'
  },
  {
    name: 'our mission',
    link: '/mission'
  },
  {
    name: 'FAQs',
    link: '/faqs'
  }
]
