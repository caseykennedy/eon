// Navigation

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'

// Hooks
import useHover from '../../../hooks/useHover'

import { Box, Flex, Text } from '../../ui'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

import Icon from '../../Icons'
import CanMulti from '../../SVG/CanMulti'
import CanHand from '../../SVG/CanHand'

// ___________________________________________________________________

const Navigation = () => {
  const [hoverRef, isHovered] = useHover()
  return (
    <S.Nav as="nav">
      {sitemap.map((item, idx) => (
        <Box className="nav-link" key={idx}>
          {!item.link ? (
            <span className="nav-link__title">
              {item.name}
              {item.subPage && <Icon name="carat" />}
            </span>
          ) : (
            <Link
              to={item.link}
              className="nav-link__title"
              activeClassName="active"
              partiallyActive={true}
            >
              {item.name}
            </Link>
          )}

          {item.subPage && (
            <Flex className={`sub-nav  ${isHovered && 'is-hovered'}`}>
              {item.subPage.map((subItem, idx) => (
                <Link
                  to={subItem.link}
                  key={idx}
                  activeClassName="active"
                  partiallyActive={true}
                >
                  <Box mr={[4, 6, 6]}>
                    {subItem.icon}
                  </Box>

                  <Text as="p" textAlign="center">
                    {subItem.name}{' '}
                    <span>
                      <Icon name="arrow" />
                    </span>
                  </Text>
                </Link>
              ))}
            </Flex>
          )}
        </Box>
      ))}
    </S.Nav>
  )
}

export default Navigation

// ___________________________________________________________________

const sitemap = [
  {
    name: 'shop',
    subPage: [
      {
        name: 'hand sanitizer',
        link: '/products/eon-continuous-spray-hand-sanitizer-80',
        icon: <CanHand />
      },
      {
        name: 'multi-surface disinfectant',
        link: '/products/eon-multi-surface-disinfectant',
        icon: <CanMulti />
      }
    ]
  },
  {
    name: 'mission',
    link: '/mission'
  },
  {
    name: 'FAQs',
    link: '/faqs'
  }
]
