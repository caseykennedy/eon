// Product Detail:

// ___________________________________________________________________

import * as React from 'react'
import theme from '../../../../config/theme'
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
      <Flex alignItems="flex-start" flexWrap="wrap">
        <Box width={[1, 1 / 2]}>
          <h3 className="text--xxl">
            Effective
            <br />
            on 99.99%
            <br />
            of germs
          </h3>
          <Text as="h4">
            Continuous spray,
            <br /> antimicrobial sanitation.
            <br /> Smarter, better, faster.
          </Text>
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
        <Box width={1 / 2} style={{ position: 'relative', zIndex: 9 }}>
          <Box>
            <ImgMatch
              src="cans.png"
              altText="Hand holding eOn Hand Sanitizer can."
            />
          </Box>
        </Box>
      </Flex>
    </S.ProductDetail>
  )
}

export default ProductDetail
