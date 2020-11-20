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
import PageHero from './PageHero'
import Retailers from './Retailers'

// ___________________________________________________________________

const MultiSurfacePage = () => {
  return (
    <S.MultiSurfacePage>
      <PageHero />
      <S.StoreLocator bg="babyblue">
        <Text as="h4" mb={0} textAlign="center" py={4}>
          store locator coming soon 🥳
          {/* Find eOn multi-surface disinfectant<br />in a store near you. */}
        </Text>
      </S.StoreLocator>
      <Retailers />
    </S.MultiSurfacePage>
  )
}

export default MultiSurfacePage
