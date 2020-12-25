// Retailers Section:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { Grid } from 'theme-ui'

// utils
import * as gtag from '../../../utils/gtag'

// Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex, Text } from '../../../components/ui'

import Icon from '../../../components/Icons'

// Hooks
import useRetailers from '../../../hooks/useRetailers'

// ___________________________________________________________________

const Retailers = () => {
  const retailers = useRetailers()
  return (
    <S.Retailers bg="white" border={true}>
      <Flex
        alignItems={['flex-start', 'center']}
        flexDirection={['column', 'row']}
        justifyContent="space-between"
        mb={[5, 7]}
      >
        <Text as="p" mb={0}>
          eOn mist&trade; sanitizing products
          <br />
          are available at these fine retailers:
        </Text>

        <div className="cta">
          <Link
            to={`/products/eon-multi-surface-disinfectant`}
            onClick={() => {
              gtag.event({
                category: 'homepage retailers',
                action: 'Click',
                label: 'store locator link'
              })
            }}
          >
            store locator <Icon name="arrow" />
          </Link>
        </div>
      </Flex>

      <Grid columns={[3, 5]} gap={[6, 7, 7]} className="retailers-grid">
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
