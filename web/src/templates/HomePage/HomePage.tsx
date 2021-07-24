// HomePage:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Text } from '../../components/ui'

// Sections
import Hero from './Hero'

// Components
import Section from '../../components/Section'
import Trademarks from '../../components/Trademarks'
import StoreLocator from '../../components/StoreLocator'
import Retailers from '../../components/Retailers'
import InstaFeed from '../../components/InstaFeed'

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

      {/* <Section border={true} maxWidth={theme.maxWidth}>
        <Text as="p">
          <a href="//www.instagram.com/eonmist" rel="noopener" target="_blank">
            @eonmist
          </a>
        </Text>
        <InstaFeed />
      </Section> */}
    </S.HomePage>
  )
}

export default HomePage
