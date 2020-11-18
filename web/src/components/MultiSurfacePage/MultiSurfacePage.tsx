// MultiSurfacePage:

// ___________________________________________________________________

import React from 'react'

import { Box, Text } from '../ui'
import Button from '../ui/Button'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// Components
import Section from '../Section'

// Sections
import Hero from './Hero'
import Retailers from './Retailers'

// ___________________________________________________________________

const MultiSurfacePage = () => {
  return (
    <S.MultiSurfacePage>
      <Hero />
      <Section bg="babyblue">
        <Text as="p">
          Find eOn multi-surface disinfectant<br />in a store near you.
        </Text>
        <Box bg="white" mt={7} py={12} />
      </Section>
      <Retailers />
    </S.MultiSurfacePage>
  )
}

export default MultiSurfacePage
