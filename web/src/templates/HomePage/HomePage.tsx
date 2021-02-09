// HomePage:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Text, Heading } from '../../components/ui'

// Sections
import Hero from './Hero'

// Components
import Section from '../../components/Section'
import Trademarks from '../../components/Trademarks'
import StoreLocator from '../../components/StoreLocator'
import Retailers from '../../components/Retailers'

// ___________________________________________________________________

const HomePage = () => {
  return (
    <S.HomePage>
      <Hero />
      <Box id="store-locator" />
      <Trademarks />
      <Section border={false}>
        <Text as="p">
          Find eOn at your local pharmacy,
          <br />
          retail or grocery store today.
        </Text>
        <Box>
          <StoreLocator />
        </Box>
      </Section>

      <Retailers />
    </S.HomePage>
  )
}

export default HomePage
