// Hero Component:

// ___________________________________________________________________

import React from 'react'
import { motion } from 'framer-motion'

// Styles + Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex, Text } from '../../ui'

// Compoonents
import ImgMatch from '../../ImgMatch'
import Shine from '../../Shine'
import Trademarks from '../../Trademarks'

// ___________________________________________________________________

const Hero = () => {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <S.Hero py={[6, 7]}>
        <S.Decorator>{/* <Shine /> */}</S.Decorator>

        {/* <Flex className="hero__figure">
          <Box position="relative">
            <Box className="figure">
              <ImgMatch src="can.png" altText="eOn Hand Sanitizer can" />
            </Box>
          </Box>
        </Flex> */}

        <Flex px={theme.gutter.axis} className="hero__inner">
          <Box
            position="relative"
            width={[1, 1 / 2, 1 / 2]}
            style={{ zIndex: 9 }}
          >
            <Text as="h4" mb={[3, 4]}>
              {data.title}
            </Text>
            <h1
              dangerouslySetInnerHTML={{ __html: data.headline }}
              className="text--xl"
            />
          </Box>

          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <Flex className="hero__features">
              <Flex className="cta">{/* <AddToCart /> */}</Flex>

              <Flex className="feature-set">
                <Text
                  as="p"
                  mr={5}
                  mb={[5, 0, 0]}
                  dangerouslySetInnerHTML={{ __html: data.featureA }}
                />

                <Text
                  as="p"
                  color="primary"
                  mr={5}
                  dangerouslySetInnerHTML={{ __html: data.featureB }}
                />
              </Flex>
            </Flex>
          </motion.div>
        </Flex>
      </S.Hero>
      <Trademarks />
    </motion.div>
  )
}

export default Hero

const data = {
  title: 'eOn',
  headline:
    'Find eOn multi-surface disinfectant at your favorite local pharmacy, retail or grocery store today.',
  featureA: 'Eliminates<br /><mark>99.99%</mark> of bacteria<br />and viruses',
  featureB: 'personal size<br />multi-surface<br />disinfectant'
}
