// Menu Overlay:
// Navigation links

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'

import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// ___________________________________________________________________

type MenuProps = {
  handleExit: () => void
  isNavOpen: boolean
}

// ___________________________________________________________________

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
              <Link to={link.link} onClick={handleExit} key={idx}>
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
    name: 'home',
    link: '/'
  },
  {
    name: 'hand sanitizer',
    link: '/products/eon-continuous-spray-hand-sanitizer-80'
  },
  {
    name: 'multi-surface disinfectant',
    link: '/products/eon-multi-surface-disinfectant'
  },
  {
    name: 'our mission',
    link: '/mission'
  },
  {
    name: 'FAQs',
    link: '/faqs'
  },
  {
    name: 'store locator',
    link: '/#store-locator'
  },
]
