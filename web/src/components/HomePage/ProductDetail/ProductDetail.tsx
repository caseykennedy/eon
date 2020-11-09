// Product Detail:

// ___________________________________________________________________

import * as React from 'react'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// ui
import { Button, Text, Flex, Box } from '../../ui'

// Components
import ImgMatch from '../../ImgMatch'
import AddToCart from '../../AddToCart'

// ___________________________________________________________________

const ProductDetail: React.FC = () => {
  return (
    <S.ProductDetail>
      <Flex
        alignItems="flex-start"
        flexWrap="wrap"
        flexDirection={['row', 'row-reverse']}
      >
        <Box width={[1, 1 / 2]} style={{ position: 'relative', zIndex: 9 }}>
          <Box pl={[12, 9, 9]}>
            <ImgMatch
              src="cans.png"
              altText="Hand holding eOn Hand Sanitizer can."
            />
          </Box>
        </Box>
        <Box width={[1, 1 / 2]}>
          <Text as="h4" my={[3, 4]}>
            Spray and go.
          </Text>
          <h3 className="text--xl">
            The only 80% ethyl alcohol, continuous spray hand sanitizer.
            eOn—effective on 99.99% of common germs.
          </h3>
          <Flex mt={5} mb={0}>
            <Text as="p">
              Aluminum-Free
              <br />
              Dye-Free
              <br />
              Paraben-Free
            </Text>
            <Text as="p" color={theme.colors.primary} ml={4}>
              Keeps your
              <br />
              hands sanitized
              <br />
              on the go
            </Text>
          </Flex>
          <Box mt={6}>
            <AddToCart>Buy Now</AddToCart>
          </Box>
        </Box>
      </Flex>
    </S.ProductDetail>
  )
}

export default ProductDetail
