// HomePage:

// ___________________________________________________________________

import React from 'react'
import { Box, Flex, Text, Heading } from '../ui'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// Sections
import ProductMasonry from './ProductMasonry'
import Retailers from '../Retailers'

// Components
import Section from '../Section'
import Trademarks from '../Trademarks'
import StoreLocator from '../StoreLocator'

// ___________________________________________________________________

const HomePage = () => {
  return (
    <S.HomePage>
      <ProductMasonry />
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
