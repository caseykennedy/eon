// HomePage:

// ___________________________________________________________________

import React from 'react'

import { Box } from '../ui'
import Button from '../ui/Button'

// Theme
import * as S from './styles.scss'
import theme from '../../../config/theme'

// Sections
import Hero from './Hero'
import How from './How'
import Specs from './Specs'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <Box py={7} />
      <Hero />
      <How />
      <Specs />
    </S.HomePage>
  )
}

export default HomePage
