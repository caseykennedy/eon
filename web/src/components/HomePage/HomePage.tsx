// HomePage:

// ___________________________________________________________________

import React from 'react'

import { Box } from '../ui'
import Button from '../ui/Button'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// Sections
import Hero from './Hero'
import Mist from './Mist'
import Specs from './Specs'
import Reviews from './Reviews'
import Retailers from './Retailers'

// Components
import ProductDetail from './ProductDetail'

// ___________________________________________________________________

const HomePage = () => {
  return (
    <S.HomePage>
      <Hero />
      <Mist />
      <Specs />
      <ProductDetail />
      <Reviews />
      <Retailers />
    </S.HomePage>
  )
}

export default HomePage
