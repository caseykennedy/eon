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
import Trademarks from './Trademarks'

import spray from './assets/multi-spray.svg'

// ___________________________________________________________________

const PageHero = () => {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <S.PageHero pt={[6, 7]} pb={4}>
        {/* <S.Decorator>
          <img src={spray} />
        </S.Decorator> */}

        <Flex px={theme.gutter.axis} className="hero__inner">
          <Flex width={[1, 1 / 2, 1 / 2]} className="hero__figure">
            <Box className="decorator">
              <img src={spray} />
            </Box>
            <Box className="figure">
              <ImgMatch
                src="can-multi-surface-eon-mist.png"
                altText="eOn Hand Sanitizer can"
              />
            </Box>
          </Flex>

          <Flex width={[1, 1 / 2, 1 / 2]} className="hero__message">
            <Box>
              <Text as="h4" mb={[3, 4]}>
                {data.title}
              </Text>
              <h1
                dangerouslySetInnerHTML={{ __html: data.headline }}
                className="text--xl"
              />
            </Box>

            <Flex className="hero__features">
              {/* <Flex className="cta"><AddToCart /></Flex> */}

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
          </Flex>
        </Flex>
      </S.PageHero>
      <Trademarks />
    </motion.div>
  )
}

export default PageHero

const data = {
  title: 'eOn multi-surface',
  headline:
    'Find eOn multi-surface disinfectant at your favorite local pharmacy, retail or grocery store today.',
  featureA: 'Eliminates<br /><mark>99.99%</mark> of bacteria<br />and viruses',
  featureB: 'personal size<br />multi-surface<br />disinfectant'
}
