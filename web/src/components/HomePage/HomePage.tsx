// HomePage:

// ___________________________________________________________________

import React from 'react'

import { Box, Flex, Text } from '../ui'
import Button from '../ui/Button'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// Sections
import ProductMasonry from './ProductMasonry'
import Mist from './Mist'
import Specs from './Specs'
import Reviews from './Reviews'
import Retailers from './Retailers'
import InstagramFeed from './InstagramFeed'

// Components
import Section from '../Section'
import ProductDetail from './ProductDetail'
import Trademarks from '../Trademarks'
import StoreLocator from '../StoreLocator'

// ___________________________________________________________________

const HomePage = () => {
  return (
    <S.HomePage>
      <ProductMasonry />

      <Section border={true}>
        <Text as="p">
          About us info
        </Text>
      </Section>

      {/* <Section border={true}>
        <StoreLocator />
      </Section> */}
      
      {/* <Mist /> */}
      {/* <Specs /> */}
      {/* <ProductDetail /> */}
      {/* <Reviews /> */}
      {/* <InstagramFeed /> */}
      <Retailers />
    </S.HomePage>
  )
}

export default HomePage
