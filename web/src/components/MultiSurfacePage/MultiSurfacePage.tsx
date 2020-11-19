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
      <Section bg="babyblue">
        <Text as="p">
          Store locator coming soon!
          {/* Find eOn multi-surface disinfectant<br />in a store near you. */}
        </Text>
      </Section>
      <Retailers />
    </S.MultiSurfacePage>
  )
}

export default MultiSurfacePage
