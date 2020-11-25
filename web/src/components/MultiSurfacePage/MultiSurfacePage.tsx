// MultiSurfacePage:

// ___________________________________________________________________

import React from 'react'

import { Box, Text } from '../ui'
import Button from '../ui/Button'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// Sections
import PageHero from './PageHero'
import Retailers from './Retailers'

// ___________________________________________________________________

const MultiSurfacePage = () => {
  return (
    <S.MultiSurfacePage>
      <PageHero />
      <Retailers />
    </S.MultiSurfacePage>
  )
}

export default MultiSurfacePage
