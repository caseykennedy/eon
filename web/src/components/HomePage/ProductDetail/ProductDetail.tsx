// Product Detail:

// ___________________________________________________________________

import * as React from 'react'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { motion } from 'framer-motion'

// ui
import { Button, Text, Flex, Box } from '../../ui'

// Components
import ImgMatch from '../../ImgMatch'
import AddToCart from '../../AddToCart'
import Recycle from '../../Recycle'

import badge from './assets/ContinuousSpray.svg'
import triangleObtuse from './assets/TriangleObtuse.svg'

// ___________________________________________________________________

const ProductDetail: React.FC = () => {
  return (
    <S.ProductDetail overflow="visible">
      <Flex
        flexDirection={['column', 'column', 'row']}
        // maxWidth={theme.maxWidth}
        margin={'0 auto'}
      >
        <Flex
          alignItems="flex-start"
          flexWrap="wrap"
          flexDirection={['column', 'row-reverse', 'row-reverse']}
        >
          <Box flex={1} width={1} style={{ position: 'relative', zIndex: 9 }}>
            <Box className="badge">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ ease: 'linear', duration: 75, loop: Infinity }}
              >
                <img src={badge} alt="frame" />
              </motion.div>
            </Box>
            <Box
              width={1}
              pl={[0, 6, 0]}
              pr={[5, 0, 7]}
              mb={[5, 0, 0]}
              position="relative"
              style={{ zIndex: 9 }}
            >
              <ImgMatch
                src="can-stack.png"
                altText="Hand holding eOn Hand Sanitizer can."
              />
              <Box width={`110%`} mt={`-33%`}>
                <img src={triangleObtuse} alt="frame" />
              </Box>
            </Box>
          </Box>
          <Box flex={[1]} mr={[0, 0, 7]}>
            <Text as="h4" mb={[3, 4]}>
              Spray and go.
            </Text>
            <h3 className="text--xl">
              Precise hand sanitation wherever you go.
            </h3>

            <p>
              Rapid, effective, advanced formula—gentle enough for kids, strong
              enough for industry. The simplest, fastest, easiest way to
              sanitize hands—anywhere.
            </p>

            {/* <p>
              Proudly made in the USA 🇺🇸 in an EPA &amp; FDA registered
              facility.
            </p> */}

            <Box mt={[6, 6, 7]}>
              <AddToCart>Buy Now</AddToCart>
            </Box>

            <Flex mt={4} mb={0}>
              <Text as="p" mb={0} className="t--small">
                Aluminum-Free
                <br />
                Dye-Free
                <br />
                Paraben-Free
              </Text>
              <Text as="p" color="primary" ml={5} className="t--small">
                100% Recyclable
                <br />
                FDA Registered
                <br />
                Continuous Spray
              </Text>
            </Flex>

            {/* <Flex mt={[4, 6]}>
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
                  Fully <strong>Recyclable</strong>
                </Text>
              </Flex>
            </Flex> */}
          </Box>
        </Flex>
      </Flex>
    </S.ProductDetail>
  )
}

export default ProductDetail
