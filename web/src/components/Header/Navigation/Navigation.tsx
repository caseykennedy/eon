// Navigation

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import { Box } from '../../ui'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

import Icon from '../../Icons'

// ___________________________________________________________________

const Navigation = () => {
  return (
    <S.Nav as="nav">
      {data.map((item, idx) => (
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
            <Box className="sub-nav">
              {item.subPage.map((subItem, idx) => (
                <Link
                  to={subItem.link}
                  key={idx}
                  activeClassName="active"
                  partiallyActive={true}
                >
                  {subItem.name}
                </Link>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </S.Nav>
  )
}

export default Navigation

// ___________________________________________________________________

const data = [
  {
    name: 'shop',
    subPage: [
      {
        name: 'hand sanitizer',
        link: '/products/eon-continuous-spray-hand-sanitizer-80'
      },
      {
        name: 'multi-surface disinfectant',
        link: '/eon-multi-surface'
      }
    ]
  },
  {
    name: 'mission',
    link: '/mission'
  },
  {
    name: 'store locator',
    link: '/store-locator'
  }
]
