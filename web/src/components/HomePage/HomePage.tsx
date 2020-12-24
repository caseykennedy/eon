// HomePage:

// ___________________________________________________________________

import React from 'react'
import { Box, Flex, Text, Heading } from '../ui'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// Sections
import Hero from './Hero'

// Components
import Section from '../Section'
import Trademarks from '../Trademarks'
import StoreLocator from '../StoreLocator'
import Retailers from '../Retailers'
import HandSan from '../../templates/HandSanitizer/ProductDetail'

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
        <Box
        >
          <StoreLocator />
        </Box>
      </Section>
      
      <Retailers />
    </S.HomePage>
  )
}

export default HomePage
