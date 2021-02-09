// Product Detail:

// ___________________________________________________________________

import * as React from 'react'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { motion } from 'framer-motion'

// ui
import { Button, Text, Flex, Box } from '../../../components/ui'

// Components
import ImgMatch from '../../../components/ImgMatch'
import AddToCart from '../../../components/AddToCart'

import badge from './assets/ContinuousSpray.svg'
import triangleObtuse from './assets/TriangleObtuse.svg'

// ___________________________________________________________________

const ProductDetail: React.FC = () => {
  return (
    <S.ProductDetail overflow="visible">
      <Flex
        flexDirection={['column', 'column', 'row']}
        maxWidth={theme.maxWidth}
        margin={'0 auto'}
      >
        <Flex
          alignItems="flex-start"
          flexWrap="wrap"
          flexDirection={['column', 'row-reverse', 'row-reverse']}
          width={1}
        >
          <Box flex={1} width={1} style={{ position: 'relative', zIndex: 9 }}>
            <Box className="badge">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ ease: 'linear', duration: 75, loop: Infinity }}
              >
                <img src={badge} width="100%" alt="eOn mist, continous spray" />
              </motion.div>
            </Box>
            <Box
              width={1}
              pl={[0, 3, 6]}
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
                <img src={triangleObtuse} width="100%" alt="frame" />
              </Box>
            </Box>
          </Box>
          <Box flex={[1]} mr={[0, 0, 7]} mt={[4, 6]}>
            <Text as="h4" mb={[3, 4]}>
              Better, faster, smarter.
            </Text>
            <h2>Precise hand sanitation wherever you go.</h2>

            <Text as="p">
              Rapid, effective, advanced delivery. Gentle on hands, strong on
              germs. The simplest, easiest way to sanitize hands—anywhere.
            </Text>

            <Box mt={[6, 6, 7]}>
              <AddToCart trackEventLabel="Product detail section">
                Buy Now
              </AddToCart>
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
                Fully Recyclable
                <br />
                FDA Registered
                <br />
                FCC Approved
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </S.ProductDetail>
  )
}

export default ProductDetail
