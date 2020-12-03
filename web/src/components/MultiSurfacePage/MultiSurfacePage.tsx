// MultiSurfacePage:

// ___________________________________________________________________

import React from 'react'
import Iframe from 'react-iframe'

// Theme
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text } from '../ui'
import Button from '../ui/Button'

// Sections
import PageTitle from './PageTitle'
import Trademarks from './Trademarks'

// Components
import Section from '../Section'
import Retailers from '../Retailers'
import StoreLocator from '../StoreLocator'

// ___________________________________________________________________

const MultiSurfacePage = () => {
  return (
    <S.MultiSurfacePage>
      <Flex width={1} className="split">
        <Box flex={1} className="split__content">
          <PageTitle />
        </Box>

        <Box flex={2} className="split__map">
          <StoreLocator />
        </Box>
      </Flex>
      <Trademarks />
      <Retailers />
    </S.MultiSurfacePage>
  )
}

export default MultiSurfacePage
