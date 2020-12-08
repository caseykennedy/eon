// Product Masonry Component:

// ___________________________________________________________________

import React from 'react'
import { motion } from 'framer-motion'

// utils
import * as gtag from '../../../utils/gtag'

// Styles + Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex, Text } from '../../ui'

// Compoonents
import ImgMatch from '../../ImgMatch'
import Shine from '../../SVG/Shine'
import CanSpray from '../../SVG/CanSpray'
import AddToCart from '../../AddToCart'
import Trademarks from '../../Trademarks'

import PageTitle from '../../MultiSurfacePage/PageTitle'

// ___________________________________________________________________

const HandSanitizer = () => {
  return (
    <S.HandSanitizer>
      <S.Decorator>
        <Shine />
      </S.Decorator>

      <Flex className="hero__figure">
        {/* <Box position="relative">
          <Box className="figure">
            <ImgMatch src="hero-handcan.png" altText="eOn Hand Sanitizer can" />
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
        </Box> */}
      </Flex>

      <Flex px={[4, 5, 6]} className="hero__inner">
        <Box position="relative" style={{ zIndex: 9 }}>
          <Text className="text--base">{data.title}</Text>
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
            <Flex
              className="cta"
              onClick={e => {
                gtag.event({
                  category: 'Buy Now button',
                  action: 'Click',
                  label: 'Homepage hero'
                })
              }}
            >
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
    </S.HandSanitizer>
  )
}

const ProductMasonry = () => {
  return (
    <S.ProductMasonry>
      <Flex className="panel-group">
        <Box flex={2} className="hand-sanitizer">
          <HandSanitizer />
        </Box>

        <Box flex={1} className="multi-surface">
          <PageTitle />
        </Box>
      </Flex>
    </S.ProductMasonry>
  )
}

export default ProductMasonry

// ___________________________________________________________________

const data = {
  title: 'eOn hand sanitizer',
  headline: 'Pro-grade<br />hand sanitation<br />made simple.',
  featureA: 'Effective on<br /><mark>99.99%</mark> of<br />common germs',
  featureB: 'personal size<br />germ protection<br />on the go'
}
