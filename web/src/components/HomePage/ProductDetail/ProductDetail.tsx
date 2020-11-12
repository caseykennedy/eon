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
import Recycle from '../../Recycle'

import triangleObtuse from './assets/TriangleObtuse.svg'

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
            <Box pl={[4, 6, 7]} mb={[5, 0, 0]}>
              <ImgMatch
                src="can-stack.png"
                altText="Hand holding eOn Hand Sanitizer can."
              />
              <Box width={1} mt={`-40%`}>
                <img src={triangleObtuse} alt="frame" />
              </Box>
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

            <Flex mt={[5, 7]}>
              <Flex
                alignItems="center"
                // bg="white"
                py={2}
                // style={{ border: theme.border, borderRadius: theme.borderRadius }}
              >
                <Box
                  width={[
                    theme.space[5],
                    theme.space[5],
                    `calc(${theme.space[5]} * 1.15)`
                  ]}
                  mr={3}
                >
                  <Recycle />
                </Box>
                <Text fontSize={[`calc(${theme.fontSizes[1]} / 1.25)`, 2, 2]}>
                  <strong>Recyclable</strong> aluminum despenser
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </S.ProductDetail>
  )
}

export default ProductDetail
