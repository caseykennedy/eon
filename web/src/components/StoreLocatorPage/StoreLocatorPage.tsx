// StoreLocatorPage:

// ___________________________________________________________________

import React from 'react'
import Iframe from 'react-iframe'

// Theme + UI
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Heading, Text } from '../ui'

// Components
import Section from '../Section'
import StoreLocator from '../StoreLocator'

// ___________________________________________________________________

const MultiSurfacePage = () => {
  return (
    <S.MultiSurfacePage>
      <Flex flexWrap="wrap" width={1}>
        <Box flex={1}>
          <Section>
            <Heading as="h4" mb={0}>
              Find eOn at your local pharmacy, retail or grocery store today.
            </Heading>
          </Section>
        </Box>
        <Box flex={2}>
          <StoreLocator />
        </Box>
      </Flex>

      {/* <Section bg="babyblue">
        <Flex justifyContent="center">
          <Box width={[1, 2 / 3]}>
            <Heading as="h2" mb={0} textAlign="center">
              Find eOn at your local pharmacy, retail or grocery store today.
            </Heading>
          </Box>
        </Flex>
      </Section>
      <Section>
        <StoreLocator />
      </Section> */}
    </S.MultiSurfacePage>
  )
}

export default MultiSurfacePage
