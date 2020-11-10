// MultiSurfacePage:

// ___________________________________________________________________

import React from 'react'

import { Box } from '../ui'
import Button from '../ui/Button'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// Sections
import Hero from './Hero'
import Retailers from './Retailers'

// ___________________________________________________________________

const MultiSurfacePage = () => {
  return (
    <S.MultiSurfacePage>
      <Hero />
      <Retailers />
    </S.MultiSurfacePage>
  )
}

export default MultiSurfacePage
