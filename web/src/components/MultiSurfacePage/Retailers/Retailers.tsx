// Retailers Section:

// ___________________________________________________________________

import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import { Grid } from 'theme-ui'

// Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex, Text } from '../../ui'

// Hooks
import useRetailers from '../../../hooks/useRetailers'

// ___________________________________________________________________

const Retailers = () => {
  const retailers = useRetailers()
  return (
    <S.Retailers bg="white">
      <Text as="p" mb={[5, 7]}>
        eOn mist&trade; multi-surface disinfectent
        <br />
        is available at these fine retailers:
      </Text>

      <Grid columns={[3, 4, 5]} gap={[6, 7,  7]} className="retailers-grid">
        {retailers.map(({ node: retailer }, idx) => (
          <Flex key={idx} className="retailers-grid__cell">
            <Img
              fluid={retailer.logo.asset.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={retailer.logo.alt}
            />
          </Flex>
        ))}
      </Grid>
    </S.Retailers>
  )
}

export default Retailers
