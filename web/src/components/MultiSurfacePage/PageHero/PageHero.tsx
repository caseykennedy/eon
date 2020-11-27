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
    <>
      <S.PageHero>
        {/* <S.Decorator>
          <img src={spray} />
        </S.Decorator> */}

        <Flex px={theme.gutter.axis} className="hero__inner">
          <Flex width={[1, 4 / 10, 1 / 2]} className="hero__figure">
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25, duration: 0.5 }}
              className="decorator"
            >
              <img src={spray} alt="eOn multi surface mist" />
            </motion.div>
            <Box className="figure">
              <ImgMatch
                src="can-multi-surface-eon-mist.png"
                altText="eOn Hand Sanitizer can"
              />
            </Box>
          </Flex>

          <Flex width={[1, 6 / 10, 1 / 2]} className="hero__message">
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
              <Flex className="feature-set">
                <Text
                  as="p"
                  mr={[0, 6, 10]}
                  mb={[5, 0, 0]}
                  dangerouslySetInnerHTML={{ __html: data.featureA }}
                />

                {/* <Text
                  as="p"
                  color="primary"
                  mr={5}
                  dangerouslySetInnerHTML={{ __html: data.featureB }}
                /> */}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </S.PageHero>
      <Trademarks />
    </>
  )
}

export default PageHero

const data = {
  title: 'eOn multi-surface HOCl.',
  headline: 'Clean, deoderize and disinfect your environment, on the go.',
  featureA:
    "Currently only available in stores. We're at work on our store locator to help you find eOn nearby.",
  featureB: '',
  featureC:
    'Derived from naturally occuring salt minerals and water. Effective on <mark>99.9%</mark> of bacteria and viruses.'
}
