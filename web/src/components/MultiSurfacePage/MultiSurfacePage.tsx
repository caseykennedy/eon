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
      <Retailers />
      <S.StoreLocator bg="lightgray" border={true}>
        <Text as="p" mb={0} textAlign="center" py={2}>
          Store locator coming soon.
          {/* Find eOn multi-surface disinfectant<br />in a store near you. */}
        </Text>
      </S.StoreLocator>
    </S.MultiSurfacePage>
  )
}

export default MultiSurfacePage
