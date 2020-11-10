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
        flexDirection={['column', 'column', 'row']}
        // maxWidth={theme.maxWidth}
        margin={'0 auto'}
      >
        <Flex
          alignItems="flex-start"
          flexWrap="wrap"
          flexDirection={['row', 'row-reverse']}
        >
          <Box width={[1, 1 / 2]} style={{ position: 'relative', zIndex: 9 }}>
            <Box pl={[7, 9, 9]} mb={[5, 0, 0]}>
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

            <Box mt={5}>
              <AddToCart>Buy Now</AddToCart>
            </Box>

            <Flex mt={5} mb={0}>
              <Text as="p" mb={0}>
                Aluminum-Free
                <br />
                Dye-Free
                <br />
                Paraben-Free
              </Text>
              <Text as="p" color={theme.colors.primary} ml={5}>
                Keeps your
                <br />
                hands sanitized
                <br />
                on the go
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </S.ProductDetail>
  )
}

export default ProductDetail
