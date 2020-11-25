// NavigationMobile:
// Navigation links

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import { motion, AnimatePresence } from 'framer-motion'

// Components
import { Box, Flex, Text } from '../../ui'
import AddToCart from '../../AddToCart'
import Beaker from '../../Beaker'
import Factory from '../../Factory'

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
  scrollRef: React.RefObject<HTMLDivElement>
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

const Menu: React.FC<MenuProps> = ({ handleExit, isNavOpen, scrollRef }) => {
  return (
    <S.Menu>
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, transform: theme.transform.matrix.from }}
            animate={{ opacity: 1, transform: theme.transform.matrix.to }}
            exit={{ opacity: 0, transform: theme.transform.matrix.from }}
            transition={{ duration: 0.5 }}
            className="motion"
            ref={scrollRef}
          >
            <Box width={1}>
              <h3 className="text--xxxl">
                We're building an exciting new eOn sanitizing mist™ website
                experience — chockful of info, usage tips, support and more.
                Hang tight.
              </h3>

              <Box width={[1, 2 / 3, 1 / 2]}>
                <p>
                  <strong>eOn</strong> branded products are America’s premiere,
                  TSA friendly, continuous spray packaged goods for on-the-go
                  protection from common germs. Our products are available to
                  promote well-being throughout your life.
                </p>
              </Box>

              <Flex mt={[5, 7, 7]}>
                <AddToCart btnText="Buy eOn mist™" />
              </Flex>
            </Box>

            <Box mt={7} mb={[4, 0, 0]} width={1}>
              <Flex flexDirection={['column', 'column', 'row']}>
                <Box bg="white" p={4} mr={[0, 0, 4]} mb={[4, 4, 0]} flex={1}>
                  <Flex>
                    <Box className="icon">
                      <Beaker />
                    </Box>
                    <p>
                      <Text as="span" color="primary" fontWeight={600}>
                        Quality in manufacturing excellence:
                      </Text>{' '}
                      eOn is produced in a nearly 100 yr. state of the art
                      factory in compliance with all applicable safety, health
                      and environmental standards.
                    </p>
                  </Flex>
                </Box>
                <Box bg="white" p={4} flex={1}>
                  <Flex>
                    <Box className="icon">
                      <Factory />
                    </Box>
                    <p>
                      <Text as="span" color="primary" fontWeight={600}>
                        eOn's (80% Ethyl Alcohol) hand sanitizer ready to spray
                      </Text>
                      solution works by denaturing the proteins of germs,
                      inactivating and inhibiting microbial growth.
                    </p>
                  </Flex>
                </Box>
              </Flex>
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
