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
import CanSpray from '../../CanSpray'
import AddToCart from '../../AddToCart'
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
      <S.Hero>
        <S.Decorator>
          <Shine />
        </S.Decorator>

        <Flex className="hero__figure">
          <Box position="relative">
            <Box className="figure">
              <ImgMatch
                src="hero-handcan.png"
                altText="eOn Hand Sanitizer can"
              />
            </Box>
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25, duration: 0.5 }}
            >
              <Box className="spray">
                <CanSpray />
              </Box>
            </motion.div>
          </Box>
        </Flex>

        <Flex px={theme.gutter.axis} className="hero__inner">
          <Box position="relative" style={{ zIndex: 9 }}>
            <Text my={[3, 4]} className="text--md">
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
              <Flex className="cta">
                <AddToCart />
              </Flex>

              <Flex className="feature-set">
                <Text
                  as="p"
                  mr={[4, 5, 5]}
                  mb={0}
                  dangerouslySetInnerHTML={{ __html: data.featureA }}
                />

                <Text
                  as="p"
                  color="primary"
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
  title: 'eOn makes it simple.',
  headline: 'Pro-grade<br />hand sanitation<br />for everyone.',
  featureA: 'Effective on<br /><mark>99.99%</mark> of<br />common germs',
  featureB: 'personal size<br />germ protection<br />on the go'
}
