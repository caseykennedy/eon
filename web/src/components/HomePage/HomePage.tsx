// HomePage:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex, Text, Heading } from '../ui'
import Button from '../ui/Button'

// utils
import * as gtag from '../../utils/gtag'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// Sections
import ProductMasonry from './ProductMasonry'
import Retailers from '../Retailers'

// Components
import Icon from '../Icons'
import Section from '../Section'
import Trademarks from '../Trademarks'
import ImgMatch from '../ImgMatch'
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
      {/* <Section bg="lightgray" border={false}>
        <Box width={1}>
          <Box width={[1, 2 / 3, 1 / 2]}>
            <Heading as="h2" mb={0}>Everyday, professional-grade hygienics for a cleaner world.</Heading>
          </Box>
        </Box>

        <Flex
          justifyContent="flex-end"
          width={1}
          mt={[0, `calc(${theme.space[4]} * -3)`]}
        >
          <Box width={1} maxWidth="555px">
            <ImgMatch
              src="mission-collage.png"
              altText="eOn Mission: Refresh America"
            />
          </Box>
        </Flex>

        <Flex alignItems="center" flexWrap="wrap" width={1}>
          <Box width={[1, 2 / 3, 1 / 2]}>
            <p>
              <strong>eOn</strong> branded products are America’s premiere, TSA
              friendly, continuous spray packaged goods for on-the-go protection
              from common germs. Our products are available to promote
              well-being throughout your life.
            </p>
          </Box>

          <Box width={[1, 1 / 3, 1 / 2]} textAlign="right" className="cta">
            <Link
              to={`/mission`}
              onClick={() => {
                gtag.event({
                  category: 'homepage mission',
                  action: 'Click',
                  label: 'mission ->'
                })
              }}
            >
              Mission
              <Icon name="arrow" />
            </Link>
          </Box>
        </Flex>
      </Section> */}
      <Retailers />
    </S.HomePage>
  )
}

export default HomePage
